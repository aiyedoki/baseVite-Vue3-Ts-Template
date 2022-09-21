import request from '@/utils/request'

export const getTest = () => {
  return request('/FAutoWmw', 'get')
}