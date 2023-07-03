import {onMounted} from 'vue'
type Options = {
  el:  string
}

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