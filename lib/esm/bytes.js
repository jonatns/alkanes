export function unpack(v) {
    return Array.from(v).reduce((r, v, i) => {
        if (i % 15 === 0) {
            r.push([]);
        }
        r[r.length - 1].push(v);
        return r;
    }, []).map((v) => BigInt('0x' + Buffer.from(v.reverse()).toString('hex')));
}
function leftPad15(v) {
    if (v.length > 30)
        throw Error('varint in encoding cannot exceed 15 bytes');
    return '0'.repeat(30 - v.length) + v;
}
function leftPadByte(v) {
    if (v.length % 2) {
        return '0' + v;
    }
    return v;
}
export function pack(v) {
    return Buffer.concat(v.map((segment) => {
        return Buffer.from(leftPad15(Buffer.from(Array.from(Buffer.from(leftPadByte(segment.toString(16)), 'hex')).reverse()).toString('hex')), 'hex');
    }));
}
//# sourceMappingURL=bytes.js.map