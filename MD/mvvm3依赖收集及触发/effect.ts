/*
 * @Author: guoqin 1178562936@qq.com
 * @Date: 2022-10-28 11:33:00
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-10-28 16:33:32
 * @FilePath: \mvvm3\effect.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let activeEffect;
const effect = (fn:Function) => {
  let _effect = function () {
    activeEffect = _effect
    fn()
  }

  _effect()
}
export default effect
// 依赖收集
let targetMap = new WeakMap()
export const track = (target, key) => {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    target.set(target, depsMap)
  } 
  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
    depsMap.set(key, deps)
  }
  deps.add(activeEffect)
}

// 触发依赖
export const trigger = (target, key) => {
  let depsMap = targetMap.get(target)
  let deps = depsMap.get(key)
  deps.forEach(effect => effect())
}
