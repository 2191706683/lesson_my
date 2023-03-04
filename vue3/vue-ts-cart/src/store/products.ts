import { defineStore } from "pinia"
import { ref, Ref } from 'vue'

export type Product = {
    id: number
    title: string
    price: number
    description: string
    iamge: string
    rating: {
        rate: number
        count: number
    }
}
const apiUrl: string = 'https://fakestoreapi.com'


export const useProductStore = defineStore('products', () => {
    const all: Ref<Product[]> = ref([])

    const ids: Ref<number[]> = ref([])

    const loaded = (): boolean => all.value.length > 0

    const fetchAll = async () => {
        if (loaded()) { // 如果有，不重复加载
            return
        }
        const res = await fetch(`${apiUrl}/products`)
        const data: Product[] = await res.json() // 统一的JSON[] 返回 Any[]
        console.log(data, '--------');
        all.value = data
        ids.value = data.map(product => product.id)
    }
    
    return {
        all,
        ids,
        loaded,
        fetchAll
    }
})