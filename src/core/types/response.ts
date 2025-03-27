import type { Url } from '@/core/types/url'

export type BaseResponse<TEntity> = {
  count: number
  next: Url | null
  previous: string | null
  results: TEntity[]
}

export type BaseResponseModel = {
  name: string
  url: string
}

export type ManyResponse = BaseResponse<BaseResponseModel>
