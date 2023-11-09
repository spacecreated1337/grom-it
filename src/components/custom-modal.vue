<script setup lang="ts">
const slots = defineSlots()

defineProps<{
  isOpen: boolean
}>()

const emits = defineEmits<{
  (e: "close-modal"): void
}>()

const closeModal = () => {
  emits("close-modal")
}
</script>
<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="modal">
        <div class="modal__overlay" @click="closeModal" />
        <div class="modal__content">
          <div v-if="slots.header" class="modal__content-header">
            <slot name="header" />
          </div>
          <div class="modal__content-close-icon" @click="emits('close-modal')">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </div>
          <div v-if="slots.body" class="modal__content-body">
            <slot name="body" />
          </div>
          <div v-if="slots.footer" class="modal__content-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal {
  padding: 24px;
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;

  &__overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.3;
  }

  &__content {
    position: relative;
    background: rgb(60, 62, 68);
    z-index: 2;
    min-width: 640px;
    border-radius: 8px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    &-close-icon {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
    }

    &-header {
      font-size: 30px;
      text-align: center;
    }

    &-body {
      display: flex;
      gap: 12px;
    }
  }
}
</style>
