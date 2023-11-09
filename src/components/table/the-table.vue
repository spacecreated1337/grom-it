<script setup lang="ts">
import { getCharacters } from "@/api"
import THead from "@/components/table/components/t-head.vue"
import { computed, onMounted, ref } from "vue"
import type { Ref } from "vue"
import type { Headers } from "@/types/table/Headers.ts"
import Character from "@/types/table/Character.ts"
import TBody from "@/components/table/components/t-body.vue"
import SortMap from "@/types/table/SortMap.ts"
import deepClone from "lodash.clonedeep"
import TableModal from "@/components/table/components/table-modal.vue"

const tableCaptionTitle: string = "Таблица со всеми персонажами из мультсериала Рик и Морти"

let tableHeaders: Ref<Headers> = ref(null)
let characters: Ref<Character[] | null> = ref(null)
let sortState: Ref<number> = ref(0)
let sortBy: Ref<string | null> = ref(null)
const sortMap: SortMap = {
  0: null,
  1: "asc",
  2: "desc"
}

let isShowModal: Ref<boolean> = ref(false)
let character: Ref<Character | null> = ref(null)

const openModal = (id: number) => {
  isShowModal.value = true
  character.value = characters.value?.find((char) => char.id === id) || null
}

const closeModal = () => {
  isShowModal.value = false
  character.value = null
}

onMounted(async () => {
  characters.value = await getCharacters()
  tableHeaders.value = Object.keys(characters.value[0]).filter((key) => key !== "episode")
})

const changeSort = (header: string) => {
  if (!characters.value) return

  sortBy.value = header
  sortState.value++

  if (sortState.value === 3) {
    sortState.value = 0
  }
}

const filteredCharacters = computed(() => {
  if (!characters.value) return

  const clone = deepClone(characters.value)

  let aValue
  let bValue

  switch (sortMap[sortState.value]) {
    case "asc":
      return clone.sort((a: Character, b: Character) => {
        if (sortBy.value === "origin") {
          aValue = a[sortBy.value].name
          bValue = b[sortBy.value].name
        } else {
          aValue = a[sortBy.value as keyof Character] as string
          bValue = b[sortBy.value as keyof Character] as string
        }

        return aValue.localeCompare(bValue)
      })
    case "desc":
      return clone?.sort((a: Character, b: Character) => {
        if (sortBy.value === "origin") {
          aValue = a[sortBy.value].name
          bValue = b[sortBy.value].name
        } else {
          aValue = a[sortBy.value as keyof Character] as string
          bValue = b[sortBy.value as keyof Character] as string
        }

        return bValue.localeCompare(aValue)
      })
  }

  return clone
})
</script>
<template>
  <table>
    <caption>
      {{
        tableCaptionTitle
      }}
    </caption>
    <t-head :headers="tableHeaders" @sort="changeSort" />
    <t-body
      v-if="characters"
      :headers="tableHeaders"
      :characters="filteredCharacters"
      @open-modal="openModal"
    />
  </table>
  <table-modal :is-open="isShowModal" :character="character" @close-modal="closeModal" />
</template>
<style lang="scss">
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

  & caption {
    margin-bottom: 8px;
  }

  & td,
  th {
    text-align: center;
    padding: 8px;
    font-size: 12px;
    white-space: nowrap;
  }

  & tr {
    cursor: pointer;
  }

  & tr:nth-child(even) {
    background-color: #dddddd;
    border: 1px solid black;
  }

  & tr:nth-child(odd) {
    border: 1px solid black;
  }
}
</style>
