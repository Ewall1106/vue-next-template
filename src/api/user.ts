import request from '@/utils/request'

export type GetInfoResponse = {
  name?: string
}

export function getUserInfo() {
  return request<GetInfoResponse>({
    url: '/user/info',
    method: 'get'
  })
}
