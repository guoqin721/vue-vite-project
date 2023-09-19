type BusClass = {
  emit: (name: string) => void
  on: (name: string, callback: Function) => void
}
type paramsKey = string | number | symbol
type List = {
  [key: paramsKey]: Array<Function>
}
class Bus implements BusClass {
  list: List
  constructor () {
    this.list = {}
  }
  emit (name: string, ...args: Array<any>) {
    let eventName: Array<Function> = this.list[name] || []
    eventName.forEach(e => {
      e.apply(this, args)
    })
  }
  on (name: string, callback: Function) {
    let eventList:Array<Function> = this.list[name] || []
    eventList.push(callback)
    this.list[name] = eventList
  }
}

export default new Bus()