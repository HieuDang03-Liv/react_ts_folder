import { COMMON_MSG, HTTP_STATUS_CODE, TOKEN_TYPE } from '@/utilities/constants'
import { getToken, removeTokens, saveToken } from '@/utilities/helpers/handleJwtToken'
import axios, { type AxiosError, type AxiosRequestConfig } from 'axios'

const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: import.meta.env.API_DOMAIN || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
}

const initialization = axios.create(axiosRequestConfiguration)

initialization.interceptors.request.use((req) => {
  const accessToken = getToken(TOKEN_TYPE.ACCESS_TOKEN)
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`
  }

  return req
})

initialization.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    // Common error
    if (err.response?.status !== HTTP_STATUS_CODE.UNAUTHORIZED) {
      console.error(err.response?.data ?? COMMON_MSG.COMMON_ERROR)

      return Promise.reject(err)
    }

    // Expired JWT token error
    return axios
      .post('/api/auth/refresh_token', { refreshToken: getToken(TOKEN_TYPE.REFRESH_TOKEN) })
      .then((retryRes) => {
        const newAccessToken: string = retryRes.data.accessToken
        saveToken(newAccessToken, TOKEN_TYPE.ACCESS_TOKEN)

        // Retry the initial API call
        if (err.response) {
          err.response.config.headers['Authorization'] = `Bearer ${newAccessToken}`

          return axios(err.response.config)
        }
      })
      .catch((retryErr) => {
        removeTokens()
        console.error(COMMON_MSG.INVALID_TOKEN)

        return Promise.reject(retryErr)
      })
  }
)

export default initialization
