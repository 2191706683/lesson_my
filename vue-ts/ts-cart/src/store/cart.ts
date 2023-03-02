import { reactive } from "vue";
import { defineStore } from "pinia";
import { IProduct } from "../service/shop";
import { useProductsStore } from "./products";

export interface ICartProducts {
    id: number,
    title: string,
    price: number,
    quantity: number
}

export const useCartStore = defineStore('cart', () => {
    let state = reactive({
        cartProducts: [] as ICartProducts[],
        checkoutState: null
    })
    // 没有定义的变量 删掉
    const addProductToCart = (product: IProduct) => {
        if (product.inventory < 1) {
            return
        }
        const cartItem = state.cartProducts.find(item =>item.id === product.id)
        if (cartItem) {
            cartItem.quantity++
        } else {
            state.cartProducts.push({
                id: product.id,
                quantity: 1,
                title: product.title,
                price: product.price
            })
        }
        const productStore = useProductsStore()
        productStore.decrementProduct(product)
    }

    return {
        state,
        addProductToCart
    }
})