import image from '../assets/ninja_bunshin.png';
const url = chrome.runtime.getURL(image)

const config = { childList: true, subtree: true }

const replace = () => {
  const nodeList = document.querySelectorAll<HTMLImageElement>('yt-image > img')
  nodeList.forEach(node => node.src = url)
}

const observer = new MutationObserver(replace)

observer.observe(document.body, config)