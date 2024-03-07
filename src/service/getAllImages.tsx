import { ImagesResponse } from "../types/generals"
import { customFetch } from "./api"

export async function getAllImages () {
  const result = await customFetch<ImagesResponse>('content/spaces/animals/types/game/entries?per_page=20')
  return result
}
