
import {defineComponent, ref} from 'vue'
export default defineComponent({
  setup () {
    const flag = ref<boolean>(false)
    const str = ref<string>('input')
    const changeFlag = () => {
      flag.value = !flag.value
    }
    const data = [
      {
        name: 'test1'
      },
      {
        name: 'test2'
      },
      {
        name: 'test3'
      }
    ]
    return () => (<>
      <button onClick={() => changeFlag()}>flag切换</button>
      <div v-show={flag.value}>我是v-show</div>
      {/* v-if没有，用三目替换 */}
      <div v-if={flag.value}>v-if没有，这里控制不管用</div>
      <div>{flag.value ? '我是true' : null}</div>
      {
        // v-for的替换方式
        data.map(e => <span>{e.name} </span>)
      }
      <div name={data[0].name}>v-bind的替换方式</div>
      <hr />
      <input type="text" v-model={str.value} />
      input中的输入值:{str.value}
    </>)
  }
})




