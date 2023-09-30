import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITask } from '../types'

type FieldsToUpdate = Partial<ITask>

const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: ['Delete', 'Update', 'Add', 'Finish'],
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], void>({
      query: () => 'tasks',
      providesTags: ['Delete', 'Update', 'Add', 'Finish']
    }),

    deleteTask: builder.mutation({
      query: (id: number) => ({
        url: `tasks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Delete']
    }),

    updateTask: builder.mutation<FieldsToUpdate, FieldsToUpdate>({
      query: (data) => {
        const { id, description } = data

        return {
          url: `tasks/${id}`,
          method: 'PATCH',
          body: {
            description
          }
        }
      },
      invalidatesTags: ['Update']
    }),

    addTask: builder.mutation<FieldsToUpdate, FieldsToUpdate>({
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
    }),

    finishTask: builder.mutation<FieldsToUpdate, FieldsToUpdate>({
      query: (data) => {
        const { id, status } = data

        return {
          url: `tasks/${id}`,
          method: 'PATCH',
          body: {
            status
          }
        }
      },
      invalidatesTags: ['Finish']
    })
  })
})

export const {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useAddTaskMutation,
  useFinishTaskMutation
} = tasksApi

export default tasksApi
