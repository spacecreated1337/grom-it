<script setup lang="ts">
import theTable from "@/components/table/the-table.vue"
import CustomLoader from "@/components/ui/custom-loader.vue"
import { Ref, ref } from "vue"

const isShowLoader: Ref<boolean> = ref(true)
</script>
<template>
  <the-table @remove-loader="isShowLoader = false" />
  <custom-loader :is-show="isShowLoader" />
</template>
<style lang="scss">
#app {
  position: relative;
  height: 100vh;
  overflow: auto;
  width: 100%;
  padding: 20px;
}
</style>
