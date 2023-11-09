<script setup lang="ts">
import Character from "@/types/table/Character.ts"
import { Headers } from "@/types/table/Headers.ts"

defineProps<{
  headers: Headers
  characters: Character[] | null
}>()

const emits = defineEmits<{
  (e: "open-modal", id: number): void
}>()
const getValue = (character: Character, header: string): string | number | object => {
  switch (header) {
    case "origin": {
      return character.origin.name
    }
    default:
      return character[header as keyof Character] || "Отсутствует"
  }
}

const clickHandler = (id: number) => {
  emits("open-modal", id)
}
</script>
<template>
  <tbody class="tbody">
    <tr v-for="character in characters" :key="character.id">
      <td v-for="header in headers" :key="header" @click="clickHandler(character.id)">
        <img
          v-if="header === 'image'"
          class="tbody__image"
          :src="getValue(character, header)"
          alt=""
        />
        <template v-else>
          {{ getValue(character, header) }}
        </template>
      </td>
    </tr>
  </tbody>
</template>
<style lang="scss">
.tbody {
  &__image {
    max-width: 64px;
  }
}
</style>
