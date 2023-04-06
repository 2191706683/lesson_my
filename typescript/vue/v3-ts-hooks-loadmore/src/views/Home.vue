<script setup lang="ts">
// vuex action?  dispatch / commit
import { computed } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../types'
import { onMounted } from 'vue'
import useLoadMore from '../hooks/useLoadMore'
import ColumnList from '../components/ColumnList.vue'

const store = useStore<GlobalDataProps>()
const list = computed(() => store.getters.getColumns)
const total = computed(() => store.state.columns.total)
const currentPage = computed(() => store.state.columns.currentPage)

onMounted(()=>{
  store.dispatch('fetchColumns', { pageSize: 3 })
})

const { isLastPage, loadMorePage } = useLoadMore(
  'fetchColumns',
  total,
  {
    pageSize: 3,
    currentPage: currentPage.value ? currentPage.value + 1 : 2
  }
)

</script>

<template>
    <div class="home-page container-md">
        <h4 class="font-weight-bold text-center">发现精彩</h4>
        <column-list :list="list"></column-list>
        <button v-if="!isLastPage" @click="loadMorePage" 
        class="btn btn-outline-primary load-more">加载更多</button>
    </div>
</template>

<style>

</style>
