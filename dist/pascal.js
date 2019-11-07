"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const titlecase = input => input[0].toLocaleUpperCase() + input.slice(1);
exports.v2 = value => {
    if (value === null || value === void 0) {
        return '';
    }
    if (typeof value.toString !== 'function') {
        return '';
    }
    let input = value.toString().trim();
    if (input === '') {
        return '';
    }
    if (input.length === 1) {
        return input.toLocaleUpperCase();
    }
    let match = input.match(/[a-zA-Z0-9]+/g);
    if (match) {
        return match.map(m => titlecase(m)).join('');
    }
    return input;
};
exports.default = (name) => {
    return name.substr(0, 1).toUpperCase() + name.substring(1);
};
