export interface UserStore {
  username: string
  setUsername: (newUsername: string) => void
  correctCards: Array<string>
  setCorrectCards: (arrayCards: Array<string>) => void
  inCorrectCards: Array<string>
  setInCorrectCards: (arrayCards: Array<string>) => void
  flippedCards: Array<string>
  setFlippedCards: (arrayIds: Array<string>) => void
}

interface ImageDetail {
  url: string
  tags: []
  uuid: string
  title: string
}

export interface Fields {
  image: ImageDetail
}

export interface Images {
  fields: Fields
  meta: ImageDetail
}

export interface ImagesResponse {
  entries: Images[]
  totalEntries: number
  perPage: number
}