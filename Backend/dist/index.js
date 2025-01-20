"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const serversData_1 = require("./serversData");
async function main() {
    const result = await (0, util_1.findServer)(serversData_1.servers);
    console.log("result", result);
}
main().catch(console.error);
//# sourceMappingURL=index.js.map