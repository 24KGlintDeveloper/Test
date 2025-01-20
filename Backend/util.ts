import https from 'https';
import http from 'http';
import { URL } from 'url';

export interface Server {
    url: string;
    priority: number;
}

export async function findServer(servers: Server[]): Promise<Server> {
    if (!servers?.length) {
        throw new Error('Server list cannot be empty.');
    }

    const checkServer = async (server: Server): Promise<Server | null> => {
        const url = new URL(server.url);
        const requestModule = url.protocol === 'https:' ? https : http;

        return new Promise((resolve) => {
            const req = requestModule.get(url, {
                timeout: 5000,
            }, (res) => {
                if (res.statusCode && res.statusCode >= 200 && res.statusCode <= 299) {
                    resolve(server);
                } else {
                    resolve(null);
                }
            });

            req.on('error', () => resolve(null));
            req.on('timeout', () => {
                req.destroy();
                resolve(null);
            });
        });
    };

    const results = await Promise.all(servers.map(checkServer));
    const onlineServers = results.filter((server): server is Server => server !== null);

    if (!onlineServers.length) {
        throw new Error('No servers are online.');
    }

    return onlineServers.reduce((lowest, current) => 
        current.priority < lowest.priority ? current : lowest
    );
}