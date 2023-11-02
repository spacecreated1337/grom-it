import axios from "axios"

import Character from "./interface/character.inferface.ts"

axios.defaults.baseURL = "https://rickandmortyapi.com/api"

export async function getCharacters(): Promise<Character[]> {
  try {
    const { data } = await axios("/character")

    return data.results
  } catch (error) {
    if (error instanceof Error) {
      console.log("error message: ", error.message)
    }

    return []
  }
}
