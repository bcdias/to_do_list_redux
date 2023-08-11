import * as enums from '../util/enums/Tasks'

export interface ITask {
  id: number
  title: string
  priority: enums.Priorities
  status: enums.Status
  description: string
}
