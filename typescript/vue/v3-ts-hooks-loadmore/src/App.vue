<script setup lang="ts">
// vuex action?  dispatch / commit
import { useStore } from 'vuex'
import { GlobalDataProps } from './types';
import { onMounted, computed } from 'vue';
import useLoadMore from './hooks/useLoadMore';

const store = useStore<GlobalDataProps>()
const list = computed(() => store.getters.getColumns)
const total = computed(() => store.state.columns.total)
const currentPage = computed(() => store.state.columns.currentPage)

onMounted(() => {
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
  <ul>
    <li v-for="item in list" :key="item._id">
      {{ item.title }}
    </li>
  </ul>
  <button v-if="!isLastPage" @click="loadMorePage" class="btn btn-outline-primary load-more">加载更多</button>
</template>

<style scoped>

</style>
