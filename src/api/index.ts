import axios from "axios"

axios.defaults.baseURL = "https://rickandmortyapi.com/api"
import { pinia } from "@/store/piniaInstance.ts"
import { useMainStore } from "@/store/mainStore"

const store = useMainStore(pinia)

export async function getCharacters(page: number = 1): Promise<void> {
  try {
    const { data } = await axios(`/character?page=${page}`)

    if (!data.info.next) {
      store.setCharacters(data.results)
      return
    }

    store.setCharacters(data.results)
    await getCharacters(++page)
  } catch (error) {
    if (error instanceof Error) {
      console.log("error message: ", error.message)
    }
  }
}
