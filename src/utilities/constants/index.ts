export const HTTP_STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERVAL_SERVER_ERROR: 500,
}

export enum TOKEN_TYPE {
  ACCESS_TOKEN = 'access token',
  REFRESH_TOKEN = 'refresh token',
}

export const COMMON_MSG = {
  COMMON_ERROR: 'Errors occured. Please try again!',
  INVALID_TOKEN: 'Errors occured when authorize with token.',
}
