import { ajax } from '@/utils/index'

export function index (data) {
  return new Promise((resolve, reject) => {
    ajax.post('store/api/index', data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
