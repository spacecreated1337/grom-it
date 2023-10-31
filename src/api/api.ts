import instance from "./axios"

export const getCharacters = async (): Promise<PromiseFulfilledResult<object>> => {
  try {
    const { data } = await instance.get("/character")
    return data
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message)
    }
  }
  return
}
