import {defineComponent} from 'vue'
// 定义一个组件A
// const A = (_, {slots}) => (<>
//   <div>{slots.default ? slots.default() : '默认值'}</div>
//   <div>{slots.foo?.()}</div>
// </>)
// 或者引入一个也可以
import A from './slotA'
export default defineComponent({
  setup () {
    const slot = {
      default: () => (<div>这是一个slot-default</div>),
      foo: () => (<div>这是一个slot-foo</div>)
    }
    return () => (<>
    {/* 注意这里是v-slots不是v-slot！ */}
     <A v-slots={slot}></A>
    </>)
  }
})