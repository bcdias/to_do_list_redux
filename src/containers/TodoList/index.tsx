import Task from '../../components/Task'
import { Container } from './styles'
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

  if (isLoading) return <h2>carregando...</h2>

  return (
    <Container>
      <p>
        2 tarefas marcado como: &quot;Categoria&ldquo; e &quot;{term}&ldquo;
        <ul>
          <li>{term}</li>
          <li>{criteria}</li>
          <li>{value}</li>
        </ul>
      </p>
      <ul>
        {tasksFilter()?.map((task: ITask) => {
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
    </Container>
  )
}

export default TodoList
