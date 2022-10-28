"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactive = void 0;
/*
 * @Author: guoqin 1178562936@qq.com
 * @Date: 2022-10-28 11:32:29
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-10-28 15:51:09
 * @FilePath: \mvvm3\reactive.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const effect_js_1 = require("./effect.js");
const reactive = (target) => {
    return new Proxy(target, {
        get(target, key, receiver) {
            (0, effect_js_1.track)(target, key);
            return Reflect.get(target, key, receiver);
        },
        set(target, key, value, receiver) {
            let res = Reflect.set(target, key, value, receiver);
            (0, effect_js_1.trigger)(target, key);
            return res;
        }
    });
};
exports.reactive = reactive;
