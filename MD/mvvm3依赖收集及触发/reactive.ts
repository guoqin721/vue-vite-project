/*
 * @Author: guoqin 1178562936@qq.com
 * @Date: 2022-10-28 11:32:29
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-10-28 17:07:09
 * @FilePath: \mvvm3\reactive.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {track, trigger} from './effect.js'
const isObject = (target) => target !== null && typeof target === 'object'
export const reactive = <T extends Object>(target:T) => {
  return new Proxy(target, {
    get (target, key,receiver) {
      track(target, key)
      let res = Reflect.get(target, key, receiver)
      if (isObject(res)) {
        return reactive(res)
      }
      return res
    },
    set (target, key,value, receiver) {
      let res = Reflect.set(target, key, value, receiver)
      trigger(target, key)
      return res
    }
  })
}