import {defineComponent} from 'vue'
interface Props {
  name?: string
}
export default defineComponent({
  props: {
    name: String
  },
  emits: ['on-click'],
  setup (props: Props, {emit}) {
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
    const fn = (e: any) => {
      console.log(e)
      emit('on-click', e)
    }
    return () => (<>
      <div>父组件传入的值：{props?.name}</div>
      {data.map(e => <span  onClick={() => fn(e)}> {e.name} </span>)}
    </>)
  }
})