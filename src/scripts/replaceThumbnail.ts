import thumbnail from '../assets/ninja_bunshin.png';
import profile from '../assets/ninja_kabe.png';
const thumbnailUrl = chrome.runtime.getURL(thumbnail)
const profileUrl = chrome.runtime.getURL(profile)

const config = { childList: true, subtree: true }

const replace = () => {
  const thumbnailImgNodeList = document.querySelectorAll<HTMLImageElement>('yt-image > img')
  thumbnailImgNodeList.forEach(node => node.src = thumbnailUrl)

  const profileImgNodeList = document.querySelectorAll<HTMLImageElement>('yt-img-shadow > img')
  profileImgNodeList.forEach(node => node.src = profileUrl)

  const profileNodeList = document.querySelectorAll<HTMLImageElement>('yt-img-shadow')
  profileNodeList.forEach(node => node.classList.remove('empty'))
}

const observer = new MutationObserver(replace)

observer.observe(document.body, config)