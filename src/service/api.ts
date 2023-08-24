import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITask } from '../types'

const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: ['Delete'],
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], void>({
      query: () => 'tasks',
      providesTags: ['Delete']
    }),

    deleteTask: builder.mutation({
      query: (id: number) => ({
        url: `tasks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Delete']
    })
  })
})

export const { useGetTasksQuery, useDeleteTaskMutation } = tasksApi

export default tasksApi
