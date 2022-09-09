import request from '@/utils/request'

export type GetInfoResponse = {
  uid?: string
  username?: string
  password?: string
  nickname?: string
  avatar?: string
}

export function getInfo() {
  return request<GetInfoResponse>({
    url: '/user/info',
    method: 'get'
  })
}
