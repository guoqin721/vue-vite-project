import {defineComponent} from 'vue'
export default defineComponent({
  setup(_, {slots}) {
    return () => (<>
      <div>{slots.default ? slots.default() : '默认值'}</div>
      <div>{slots.foo?.()}</div>
      <div>天天</div>
    </>)
  }
})
// 或者下面的方法
// const A = (_, {slots}) => (<>
//   <div>{slots.default ? slots.default() : '默认值'}</div>
//   <div>{slots.foo?.()}</div>
// </>)
// export default A