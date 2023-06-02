import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'

export const useNewStore = defineStore('newStore', () => {
    // pinia 终极方案 this 
    const topNewsList = ref<Array<number>>([]) // ts 怎么加 
    const bestNewsList = ref<Array<number>>([]);
    const isNewsListFetching = ref<boolean>(false);
    const getTopNewsList = async () => {
        const { data } = await useFetch(
            'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
        );
        console.log(data, '----')
        topNewsList.value = JSON.parse(data.value as string) as Array<number>;
    }

    const getBestNewsList = async () => {
        const { data } = await useFetch(
            'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty'
        )
    }

    const fetchAllNews = async () => {
        try {
            isNewsListFetching.value = true
            await Promise.all([getTopNewsList(), getBestNewsList()])
        } catch (err) {
            console.log(err)
        }
    }
    return {
        topNewsList,
        fetchAllNews
    }
})

