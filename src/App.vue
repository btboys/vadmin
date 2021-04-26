<template>
  <div id="hr">
    <layout-header/>
    <div class="layout-page" :class="{'layout-page-full':leftNav.length===0}">
      <layout-menu/>
      <div class="layout-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layout/LayoutHeader";
import LayoutMenu from "@/components/layout/LayoutMenu";
import {mapState} from "vuex";

export default {
  name: 'HR',
  components: {LayoutMenu, LayoutHeader},
  computed: {
    ...mapState(['leftNav'])
  }
}
</script>
