import axios from "axios"

import Character from "../types/table/Character.ts"

axios.defaults.baseURL = "https://rickandmortyapi.com/api"
const allCharacters: Character[] = []

export async function getCharacters(page: number = 1): Promise<Character[]> {
  try {
    const result = await axios(`/character?page=${page}`)

    allCharacters.push(...result.data.results)

    if (!result.data.info.next) {
      return allCharacters
    }

    await getCharacters(++page)

    return allCharacters
  } catch (error) {
    if (error instanceof Error) {
      console.log("error message: ", error.message)
    }

    return []
  }
}
