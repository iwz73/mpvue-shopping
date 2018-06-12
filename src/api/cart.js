import { ajax } from '@/utils/index'
// 获取购物车列表
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

/** 删除购物车商品
 *  ids (Array[integer], optional): 需要删除购物车的订单ID集合 ,
 *  token (string, optional): token认证
**/
export function delShoppingCarts (data) {
  return new Promise((resolve, reject) => {
    ajax.post('store/api/delShoppingCarts', data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
