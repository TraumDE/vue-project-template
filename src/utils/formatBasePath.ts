const BASE_URL = import.meta.env.BASE_URL

const formanBasePath = (path: string) => {
  return BASE_URL + path.slice(1)
}

export default formanBasePath
