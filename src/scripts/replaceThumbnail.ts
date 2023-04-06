import image from '../images/ninja_bunshin.png';
const url = chrome.runtime.getURL(image)

const nodeList = document.querySelectorAll<HTMLImageElement>('yt-image > img')
nodeList.forEach(node => {
  node.src = url
})