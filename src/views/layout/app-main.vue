<template>
  <div class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {
      cachedViews: []
    }
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>