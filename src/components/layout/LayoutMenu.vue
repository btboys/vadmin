<template>
  <div class="layout-menu">
    <ul class="layout-menu-nav-list">
      <router-link active-class="selected" tag="li" :to="nav.to" v-for="nav in leftNav" :key="nav.key"><i :class="nav.icon"></i> <span>{{ nav.title }}</span></router-link>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "LayoutMenu",
  computed: {
    ...mapState(['leftNav'])
  }
}
</script>
