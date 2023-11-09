interface Character {
  [key: string]: string | number | object

  created: string
  id: number
  gender: string
  image: string
  location: {
    name: string
    url: string
  }
  name: string
  origin: {
    name: string
    url: string
  }
  species: string
  status: string
  type: string
  url: string
  episode: Array<string>
}

export default Character
