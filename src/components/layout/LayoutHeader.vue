<template>
  <div class="layout-header">
    <div class="layout-header-logo">
      <span>VA</span>
    </div>
    <ul class="layout-header-nav-list">
      <router-link :exact="nav.key==='Home'" active-class="selected" tag="li" :to="nav.to" v-for="nav in topNav" :key="nav.key"><i :class="nav.icon"></i> <span>{{ nav.title }}</span></router-link>
    </ul>
    <ul class="layout-header-action">
      <li><i class="h-icon-github"></i> <span>夏 悸</span></li>
      <li><i class="h-icon-lock"></i> <span>退 出</span></li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "LayoutHeader",
  computed: {
    ...mapState(['topNav'])
  }
}
</script>
