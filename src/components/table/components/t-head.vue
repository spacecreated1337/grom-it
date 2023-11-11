<script setup lang="ts">
import type { Headers } from "@/types/table/Headers.ts"

defineProps<{
  headers: Headers
  sortState: string | null
  sortBy: string | null
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

const headersToSort = ["gender", "name", "origin"]
const clickHandler = (header: string) => {
  if (headersToSort.includes(header)) {
    emits("sort", header)
  }
}
</script>
<template>
  <thead>
    <tr>
      <th
        v-for="header in headers"
        :key="header"
        :class="{
          'header-sort': headersToSort.includes(header),
          [sortState ? sortState : '']: sortBy === header
        }"
        @click="clickHandler(header)"
      >
        {{ headersTranslate[header as keyof Headers] }}
      </th>
    </tr>
  </thead>
</template>
<style lang="scss">
.header-sort {
  text-decoration: underline;
  cursor: pointer;

  &.asc {
    position: relative;

    &::after {
      content: url("/img/arrow-up.svg");
      position: absolute;
      top: 60%;
      right: 37%;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }

  &.desc {
    position: relative;

    &::after {
      content: url("/img/arrow-down.svg");
      position: absolute;
      top: 60%;
      right: 37%;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
}
</style>
