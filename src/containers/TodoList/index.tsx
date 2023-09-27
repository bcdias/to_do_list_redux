import Task from '../../components/Task'
import { MainContainer, Title } from '../../styles'
import { ITask } from '../../types'
import { useGetTasksQuery } from '../../service/api'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { data: tasks, isLoading } = useGetTasksQuery()
  const { term, criteria, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const tasksFilter = () => {
    let filteredTasks = tasks

    if (term != undefined) {
      filteredTasks = filteredTasks?.filter(
        (task) => task.title.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (criteria === 'prioridade') {
        filteredTasks = filteredTasks?.filter((task) => task.priority === value)
      }

      if (criteria === 'status') {
        filteredTasks = filteredTasks?.filter((task) => task.status === value)
      }

      return filteredTasks
    } else {
      return tasks
    }
  }

  const showFilterResult = (amount: number | undefined) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''

    if (criteria === 'todas') {
      message = `${amount} tarefa(s) encnotrada(s) como todas: ${complement}`
    } else {
      message = `${amount} tarefa(s) encnotrada(s) como : ${`${criteria}=${value}`} ${complement}`
    }

    return message
  }

  if (isLoading) return <h2>carregando...</h2>

  const tasksList = tasksFilter()
  const message = showFilterResult(tasksList?.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        {tasksList?.map((task: ITask) => {
          return (
            <li key={task.id}>
              <Task
                title={task.title}
                description={task.description}
                priority={task.priority}
                status={task.status}
                id={task.id}
              />
            </li>
          )
        })}
      </ul>
    </MainContainer>
  )
}

export default TodoList
