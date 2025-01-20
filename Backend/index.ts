import { findServer } from './util';
import { servers } from './serversData';

async function main() {
    const result = await findServer(servers);
    console.log("result", result);
}

main().catch(console.error);