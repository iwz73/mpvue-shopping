import { ajax } from '@/utils/index'

export function getShoppingList (data) {
  return new Promise((resolve, reject) => {
    ajax.post('store/api/getShoppingList', data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
