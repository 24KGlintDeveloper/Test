import { expect } from 'chai';
import sinon from 'sinon';
import https from 'https';
import { findServer, Server } from '../util';
import { IncomingMessage } from 'http';

describe('findServer', () => {
    let httpsStub: sinon.SinonStub;

    beforeEach(() => {
        httpsStub = sinon.stub(https, 'get');
    });

    afterEach(() => {
        httpsStub.restore();
    });

    it('should find the online server with lowest priority', async () => {
        const servers: Server[] = [
            { url: 'https://discord.com', priority: 2 },
            { url: 'https://does-not-work.perfume.new', priority: 3 }
        ];

        httpsStub.callsFake((url, options, callback) => {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }

            const mockReq = {
                on: function(event: string, handler: Function) {
                    return this;
                },
                destroy: () => {}
            };

            const res = new IncomingMessage(null as any);
            const urlObj = new URL(url);

            res.statusCode = urlObj.hostname == 'discord.com' ? 200 : 500;
            
            setTimeout(() => callback(res), 0);
            return mockReq;
        });

        const result = await findServer(servers);
        expect(result).to.deep.equal({ url: 'https://discord.com', priority: 2 });
    });

    it('should throw error when no servers are online', async () => {
        const servers: Server[] = [
            { url: 'https://offline.scentronix.com', priority: 1 },
            { url: 'https://does-not-work.perfume.new', priority: 2 }
        ];

        httpsStub.callsFake((url, options, callback) => {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }

            const mockReq = {
                on: function(event: string, handler: Function) {
                    return this;
                },
                destroy: () => {}
            };

            const res = new IncomingMessage(null as any);
            res.statusCode = 500;
            
            setTimeout(() => callback(res), 0);
            return mockReq;
        });

        try {
            await findServer(servers);
            throw new Error('Should have thrown error');
        } catch (error: any) {
            expect(error.message).to.equal('No servers are online.');
        }
    });

    it('should handle timeouts correctly', async () => {
        const servers: Server[] = [
            { url: 'https://does-not-work.perfume.new', priority: 1 }
        ];

        httpsStub.callsFake((url, options, callback) => {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }

            const mockReq = {
                on: function(event: string, handler: Function) {
                    if (event === 'timeout') {
                        setTimeout(handler, 0);
                    }
                    return this;
                },
                destroy: () => {}
            };

            return mockReq;
        });

        try {
            await findServer(servers);
            throw new Error('Should have thrown error');
        } catch (error: any) {
            expect(error.message).to.equal('No servers are online.');
        }
    });

    it('should handle network errors correctly', async () => {
        const servers: Server[] = [
            { url: 'https://does-not-work.perfume.new', priority: 1 }
        ];

        httpsStub.callsFake((url, options, callback) => {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }

            const mockReq = {
                on: function(event: string, handler: Function) {
                    if (event === 'error') {
                        setTimeout(() => handler(new Error('Network error')), 0);
                    }
                    return this;
                },
                destroy: () => {}
            };

            return mockReq;
        });

        try {
            await findServer(servers);
            throw new Error('Should have thrown error');
        } catch (error: any) {
            expect(error.message).to.equal('No servers are online.');
        }
    });

    it('should throw error for empty server list', async () => {
        try {
            await findServer([]);
            throw new Error('Should have thrown error');
        } catch (error: any) {
            expect(error.message).to.equal('Server list cannot be empty.');
        }
    });
});