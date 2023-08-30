import * as enums from '../util/enums/Tasks'

export interface ITask {
  id: number
  title: string
  priority: enums.Priorities
  status: enums.Status
  description: string
}

export interface IFilter {
  term?: string
  criteria: 'prioridade' | 'status' | 'todas'
  value?: enums.Priorities | enums.Status
}
