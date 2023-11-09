<script setup lang="ts">
import type { Headers } from "@/types/table/Headers.ts"

defineProps<{
  headers: Headers
}>()

const emits = defineEmits<{
  (e: "sort", header: string): void
}>()

const headersTranslate = {
  id: "Айди",
  name: "Имя",
  status: "Статус",
  species: "Разновидность",
  type: "Тип",
  gender: "Пол",
  origin: "Источник",
  location: "Локация",
  image: "Картинка",
  url: "Ссылка",
  created: "Дата создания"
}

const clickHandler = (header: string) => {
  const headersToSort = ["gender", "name", "origin"]

  if (headersToSort.includes(header)) {
    emits("sort", header)
  }
}
</script>
<template>
  <thead>
    <tr>
      <th v-for="header in headers" :key="header" @click="clickHandler(header)">
        {{ headersTranslate[header as keyof Headers] }}
      </th>
    </tr>
  </thead>
</template>
