<script lang="ts">
import { getCharacters } from "@/api"
import THead from "@/components/table/components/t-head.vue"
import { defineComponent, ref } from "vue"
import type { Ref } from "vue"

export default defineComponent({
  components: { THead }
})

const tableCaptionTitle: string = "Таблица со всеми персонажами из мультсериала Рик и Морти"

const characters = await getCharacters()
console.log(characters)
type TableHeaders = Array<string> | null
let tableHeaders: Ref<TableHeaders> = ref(null)

tableHeaders.value = Object.keys(characters[0])
console.log(tableHeaders.value)
</script>
<template>
  <table width="100%" border="1" cellpadding="4" cellspacing="0">
    <caption>
      {{
        tableCaptionTitle
      }}
    </caption>
    <t-head :headers="tableHeaders.value" />
    <tbody>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr>
    </tbody>
  </table>
</template>
