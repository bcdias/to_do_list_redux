import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITask } from '../types'

type NewTask = Omit<ITask, 'id'>

const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: ['Delete', 'Update', 'Add'],
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], void>({
      query: () => 'tasks',
      providesTags: ['Delete', 'Update', 'Add']
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
    }),

    addTask: builder.mutation<NewTask, NewTask>({
      query: (data) => {
        const { title, description, priority, status } = data

        return {
          url: `tasks`,
          method: 'POST',
          body: {
            title,
            description,
            priority,
            status
          }
        }
      },
      invalidatesTags: ['Add']
    })
  })
})

export const {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useAddTaskMutation
} = tasksApi

export default tasksApi
