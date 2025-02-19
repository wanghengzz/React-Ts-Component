export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '{}')
}

export const removeLocalStorage = (key: string|Array<string>) => {
  if(key === 'all'){
    localStorage.clear()
  }
  if (Array.isArray(key)) {
    key.forEach((k) => {
      localStorage.removeItem(k)
    })
  } else {
    localStorage.removeItem(key)
  }
}

