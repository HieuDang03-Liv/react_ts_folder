import { TOKEN_TYPE } from '../constants'

export const getToken = (type: TOKEN_TYPE) => {
  if (type === TOKEN_TYPE.ACCESS_TOKEN) {
    return window.localStorage.getItem('accessToken')
  }
  return window.localStorage.getItem('refreshToken')
}

export const saveToken = (token: string, type: TOKEN_TYPE) => {
  if (type === TOKEN_TYPE.ACCESS_TOKEN) {
    window.localStorage.setItem('accessToken', token)
  } else {
    window.localStorage.setItem('refreshToken', token)
  }
}

export const removeTokens = () => {
  window.localStorage.removeItem('accessToken')
  window.localStorage.removeItem('refreshToken')
}
