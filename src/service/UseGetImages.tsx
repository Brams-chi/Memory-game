import { Images, type ImagesResponse } from "../types/generals"
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getAllImages } from "./getAllImages"

const compareRandom = () => Math.random() - 0.5

const getElements = (array: any[]): any[] => {
  const copyArray = [...array]
  const arrayElements: any[] = []

  while (arrayElements.length < 9 && copyArray.length > 0) {
    const index = Math.floor(Math.random() * copyArray.length)
    const elementSelect = copyArray.splice(index, 1)[0]
    arrayElements.push(elementSelect)
  }
  const arrayAllElements = [...arrayElements, ...arrayElements].sort(compareRandom)
  return arrayAllElements
}

export const useGetImages = () => {
  const {
    data,
    isError,
    isFetching,
  } = useQuery<ImagesResponse>({
    queryKey: ['images'],
    queryFn: async () => await getAllImages(),
    refetchOnWindowFocus: false
  })

  const [images, setImages] = useState<Images[]>([])

  useEffect(() => {
    if (data !== undefined) {
      setImages(getElements(data.entries))
    }
  }, [data])

  return {
    isError,
    isFetching,
    data: images
  }
}
