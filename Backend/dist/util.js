"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findServer = void 0;
const https_1 = __importDefault(require("https"));
const http_1 = __importDefault(require("http"));
const url_1 = require("url");
async function findServer(servers) {
    if (!(servers === null || servers === void 0 ? void 0 : servers.length)) {
        throw new Error('Server list cannot be empty.');
    }
    const checkServer = async (server) => {
        const url = new url_1.URL(server.url);
        const requestModule = url.protocol === 'https:' ? https_1.default : http_1.default;
        return new Promise((resolve) => {
            const req = requestModule.get(url, {
                timeout: 5000,
            }, (res) => {
                if (res.statusCode && res.statusCode >= 200 && res.statusCode <= 299) {
                    resolve(server);
                }
                else {
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
    const onlineServers = results.filter((server) => server !== null);
    if (!onlineServers.length) {
        throw new Error('No servers are online.');
    }
    return onlineServers.reduce((lowest, current) => current.priority < lowest.priority ? current : lowest);
}
exports.findServer = findServer;
//# sourceMappingURL=util.js.map