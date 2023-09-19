import {onMounted} from 'vue'
type Options = {
  el:  string
}
// hook的本质就是抛出一个函数。里面可以用vue的各个composition
// 不同于mixin mixin中的内容会被页面中的内容覆盖
export default function (options: Options): Promise<{baseUrl: string}> {
  // 这里很巧妙的用了Promise将onMounted中base64(img)的处理结果反了出去
  return new Promise((resolve) => {
    onMounted(() => {
      let img:HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
      img.onload = () => {
        resolve({
          baseUrl: base64(img)
        })
      }
    })
    const base64 = (el: HTMLImageElement) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = el.width
      canvas.height = el.height
      ctx?.drawImage(el, 0, 0, canvas.width, canvas.height)
      return canvas.toDataURL('image/png')
    }
  })
}