"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
exports.render = (path, data) => {
    let tmpl = fs.readFileSync(path).toString();
    const keys = Object.keys(data);
    keys.forEach(key => {
        while (tmpl.includes(`{{{${key}}}}`)) {
            tmpl = tmpl.replace(`{{{${key}}}}`, data[key]);
        }
    });
    return tmpl;
};
