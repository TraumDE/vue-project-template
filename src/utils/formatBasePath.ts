export default (path: string) => {
  return import.meta.env.BASE_URL + path.slice(1)
}
