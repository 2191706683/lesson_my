<template>
    <div class="post-list">
    <article v-for="post in props.list" :key="post._id" class="card mb-3 shadow-sm">
      <div class="card-body">
        <h4>
          <router-link :to="`/posts/${post._id}`">{{ post.title }}</router-link>
        </h4>
        <div class="row my-3 align-items-center">
          <div v-if="post.image" class="col-4">
            <!-- <img src="https://img-blog.csdnimg.cn/20201014180756923.png?x-oss-process=image/resize,m_fixed,h_64,w_64" :alt="post.title" class="rounded-lg w-100"> -->
          </div>
          <p :class="{'col-8': post.image}" class="text-muted">{{ post.excerpt }}</p>
        </div>
        <span class="text-muted">{{ post.createdAt }}</span>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { PostProps } from '../types'
interface Props {
    list: PostProps[]
}
const props = withDefaults(defineProps<Props>(), {
    list: () => []
})
</script>

<style scoped>
.card-body img {
    width: 50px;
    height: 50px;
}
</style>