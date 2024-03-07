const urlImages = 'https://fed-team.modyo.cloud/api/'

export interface CustomError extends Error {
  status: number
  type?: string
}

const throwErrorWithStatus = (msg: string, status: number, type: string) => {
  const error = new Error(msg) as CustomError
  error.status = status
  error.type = type
  throw error
}

export async function customFetch<T> (
  path: string
): Promise<T> {
  try {
    const response = await fetch(`${urlImages}${path}`)
    if (response.status === 404) {
      throwErrorWithStatus('Ha ocurrido un error, por favor intenta más tarde', 404, '')
    }

    if (response.status === 500) {
      throwErrorWithStatus('Ha ocurrido un error, por favor intenta más tarde', 500, '')
    }

    const data = response.json()

    return await data
  } catch (error: any) {
    return throwErrorWithStatus(error.message, error.status, error.type)
  }
}
