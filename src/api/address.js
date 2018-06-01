import { ajax } from '@/utils/index'

export function addressList (data) {
  return new Promise((resolve, reject) => {
    ajax.post('store/api/addressList', data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export function addAddress (data) {
  return new Promise((resolve, reject) => {
    ajax.post('store/api/addAddress', data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
