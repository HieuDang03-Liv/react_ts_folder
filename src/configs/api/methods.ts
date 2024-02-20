import axiosInitialization from './initialization'

const getRequest = <ResponseData, Query = {}>(url: string, queryParams?: Query) => {
  return axiosInitialization.get<ResponseData>(url, { params: queryParams })
}

const postRequest = <ResponseData, Body, Query = {}>(url: string, body: Body, queryParams?: Query) => {
  return axiosInitialization.post<ResponseData>(url, body, { params: queryParams })
}

const putRequest = <ResponseData, Body, Query = {}>(url: string, body: Body, queryParams?: Query) => {
  return axiosInitialization.put<ResponseData>(url, body, { params: queryParams })
}

const patchRequest = <ResponseData, Body, Query = {}>(url: string, body: Body, queryParams?: Query) => {
  return axiosInitialization.patch<ResponseData>(url, body, { params: queryParams })
}

const deleteRequest = <ResponseData>(url: string, id: number | string) => {
  return axiosInitialization.delete<ResponseData>(`${url}/${id}`)
}

export default { get: getRequest, post: postRequest, put: putRequest, patch: patchRequest, delete: deleteRequest }
