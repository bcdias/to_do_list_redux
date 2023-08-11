import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITask } from '../types'

const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], void>({
      query: () => 'tasks'
    })
  })
})

export const { useGetTasksQuery } = tasksApi

export default tasksApi
