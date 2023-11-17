import { defineStore } from "pinia"
import Character from "@/types/table/Character.ts"

type State = {
  characters: Character[] | []
}
export const useMainStore = defineStore("main", {
  state: (): State => {
    return {
      characters: []
    }
  },
  actions: {
    setCharacters(value: Character[]) {
      this.characters = [...this.characters, ...value]
    }
  }
})
