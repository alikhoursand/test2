<template>
  <div class="h-100">
    <div class="main-c">
      <router-view v-slot="{ Component }">
        <transition mode="out-in" name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <BottomNavigation />
  </div>
</template>

<script>

import BottomNavigation from './components/BottomNavigation.vue';

export default {

  components: {
    BottomNavigation
  },
  mounted() {

  }
}
</script>

<style scoped>
.main-c {
  height: calc(100% - 70px);
  overflow: auto
}
</style>