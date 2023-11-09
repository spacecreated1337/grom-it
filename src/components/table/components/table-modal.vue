<script setup lang="ts">
import Character from "@/types/table/Character.ts"
import customModal from "@/components/ui/custom-modal.vue"
import { CharacterStatus } from "@/types/table/CharacterStatus.ts"

const characterStatus: CharacterStatus = {
  dead: "red",
  alive: "green",
  unknown: "gray"
}

defineProps<{
  isOpen: boolean
  character: Character | null
}>()

const emits = defineEmits<{
  (e: "close-modal"): void
}>()

const closeModal = () => {
  emits("close-modal")
}
</script>
<template>
  <div class="table-modal">
    <custom-modal :is-open="isOpen" @close-modal="closeModal">
      <template #header>
        <div>Информация о персонаже</div>
      </template>
      <template v-if="character" #body>
        <div>
          <img :src="character.image" alt="" />
        </div>
        <div>
          <div class="table-modal__name">Name: {{ character.name }}</div>
          <div class="table-modal__status">
            <span
              class="table-modal__status-circle"
              :style="{ background: characterStatus[character.status.toLowerCase()] }"
            />
            {{ character.status }} - {{ character.species }}
          </div>
          <div>Last known location: {{ character.location.name }}</div>
          <div>Gender: {{ character.gender }}</div>
        </div>
      </template>
    </custom-modal>
  </div>
</template>
<style lang="scss">
.table-modal {
  &__status {
    display: flex;
    align-items: center;
    gap: 8px;

    &-circle {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 50%;
    }
  }

  &__name {
    font-size: 24px;
  }
}
</style>
