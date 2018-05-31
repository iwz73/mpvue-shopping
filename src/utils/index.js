const baseURL = 'http://39.108.135.25:8880/Server_Api/'

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
export const showToast = (text) => {
  wx.showToast({
    title: text,
    icon: 'none',
    duration: 2000
  })
}
export const ajax = {
  git (url, params) {
  },
  post (url, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${baseURL}${url}`,
        data: params,
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        success (res) {
          resolve(res)
        },
        fail (res) {
          reject(res)
        }
      })
    })
  }
}
export default {
  formatNumber,
  formatTime,
  showToast,
  ajax
}
