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
      <th v-for="header in headers" :key="header" @click="clickHandler(header)">
        <div :class="{ 'header-sort': headersToSort.includes(header) }">
          {{ headersTranslate[header as keyof Headers] }}
          <img
            v-if="sortBy === header && sortState"
            src="/img/arrow-up.svg"
            :class="{
              [sortState ? sortState : '']: sortBy === header
            }"
          />
        </div>
      </th>
    </tr>
  </thead>
</template>
<style lang="scss">
.header-sort {
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;

  & .asc {
    position: relative;
    transform: scale(0.8);
  }

  & .desc {
    transform: rotate(180deg) scale(0.8);
  }
}
</style>
