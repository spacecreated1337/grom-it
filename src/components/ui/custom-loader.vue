<script lang="ts" setup>
defineProps<{
  isShow: boolean
}>()
</script>
<template>
  <Teleport to="body">
    <div v-if="isShow" class="loader-wrapper">
      <span class="loader" />
    </div>
  </Teleport>
</template>
<style lang="scss">
.loader-wrapper {
  position: absolute;
  top: 0;
  background: gray;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  width: 108px;
  height: 108px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;

  &::before,
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #fff;
    animation: prixClipFix 2s linear infinite;
  }

  &::after {
    border-color: #ff3d00;
    animation:
      prixClipFix 2s linear infinite,
      rotate 0.5s linear infinite reverse;
    inset: 6px;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}
</style>
