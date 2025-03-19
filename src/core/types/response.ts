export type BaseResponse<TEntity> = {
  count: number
  next: string | null
  previous: string | null
  results: TEntity[]
}

export type BaseResponseModel = {
  name: string
  url: string
}

export type ManyResponse = BaseResponse<BaseResponseModel>
