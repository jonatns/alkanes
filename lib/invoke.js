"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeSimulateRequest = encodeSimulateRequest;
exports.decodeSimulateRequest = decodeSimulateRequest;
const bytes_1 = require("./bytes");
const alkanes_1 = require("./proto/alkanes");
function encodeSimulateRequest({ alkanes, transaction, height, block, tx, inputs, txindex, vout, pointer, refundPointer, }) {
    let input = alkanes_1.MessageContextParcel.create();
    input = {
        alkanes,
        transaction: Uint8Array.from(Buffer.from(transaction, "hex")),
        block,
        height,
        calldata: (0, bytes_1.encipher)([block, tx, ...inputs]),
        txindex,
        vout,
        pointer,
        refundPointer,
    };
    return ("0x" + Buffer.from(alkanes_1.MessageContextParcel.toBinary(input)).toString("hex"));
}
function decodeSimulateRequest(request) {
    const res = alkanes_1.SimulateResponse.fromBinary(Buffer.from(request, "hex"));
    return res;
}
//# sourceMappingURL=invoke.js.map