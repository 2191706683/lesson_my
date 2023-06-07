<template>
  <div ref="list" class="infinite-list-container" @scroll="scrollEvent($event)">
    <div class="infinite-list-phantom" :style="{height: listHeight + 'px'}">
    
    </div>
    <div class="infinite-list" :style="{transform: getTransform}">
      <div
        ref="items"
        class="infinite-list-item"
        v-for="item in visibleData"
        :key="item.id"
        :style="{height: itemSize + 'px', lineHeight: itemSize + 'px'}"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenHeight: 0,
      startOffset: 0,
      start: 0,
      end: 0,
    };
  },
  props: {
    listData: {
      type: Array,
      default: () => [],
    },
    itemSize: {
      type: Number,
      default: 200,
    },
  },
  computed: {
    visibleData() {
      // 基于 start end  计算关系 slice
      return this.listData.slice(this.start, Math.min(this.end, this.listData.length));
    },
    listHeight() {
      return this.listData.length * this.itemSize;
    },
    visibleCount() {
      return Math.ceil(this.screenHeight / this.itemSize);
    },
    getTransform() {
        return `translate3d(0, ${this.startOffset}px, 0)`;
    }
  },
  mounted() {
    // 调教 数据
    this.screenHeight = this.$el.clientHeight;
    this.start = 0;
    this.end = this.start + this.visibleCount;
  },
  methods: {
    scrollEvent() {
        let scrollTop = this.$refs.list.scrollTop;
        // console.log(scrollTop);
        this.start = Math.floor(scrollTop / this.itemSize);
        this.end = this.start + this.visibleCount;
        this.startOffset = scrollTop - (scrollTop % this.itemSize);
    },
  },
};
</script>

<style>
.infinite-list-container {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}

.infinite-list-item {
  padding: 10px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>
