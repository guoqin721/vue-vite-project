// 方法一(1)：返回一个函数,其中props，context不用可以不写，props是父组件传入的属性，context是{attrs, slots, emit}
// export default function (props, context) {
//   console.log(props, context)
//   return (<>
//     <div>第一种方法</div>  
//   </>)
// }
// 方法一(2)
// const fn = (props, context) => {
//   console.log(props, context)
//   return (<>
//     <div>第一种方法</div>  
//   </>)
// }
// export default fn

// 方法二：利用defineComponent和render使用
// import {defineComponent} from 'vue'
// export default defineComponent({
//   data () {
//     return {
//       age: 23
//     }
//   },
//   render () {
//     return (<>
//       <div>{this.age}</div>
//     </>)
//   }
// })
// 方法三：利用defineComponent和setup。方式一和方式三用的多
import {defineComponent, ref} from 'vue'
export default defineComponent({
  setup () {
    const str = ref<string>('变量')
    return () => (<>
      我是一个{str.value}
    </>)
  }
})




