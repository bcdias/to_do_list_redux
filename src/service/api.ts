import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITask } from '../types'

const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: ['Delete', 'Update'],
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], void>({
      query: () => 'tasks',
      providesTags: ['Delete', 'Update']
    }),

    deleteTask: builder.mutation({
      query: (id: number) => ({
        url: `tasks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Delete']
    }),

    updateTask: builder.mutation<ITask, ITask>({
      query: (data) => {
        const { id, description, priority, status, title } = data

        return {
          url: `tasks/${id}`,
          method: 'PATCH',
          body: {
            description,
            priority,
            status,
            title
          }
        }
      },
      invalidatesTags: ['Update']
    })
  })
})

export const {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation
} = tasksApi

export default tasksApi
