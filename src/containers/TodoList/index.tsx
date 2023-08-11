import Task from '../../components/Task'
import { Container } from './styles'
// import { RootReducer } from '../../store'
import { ITask } from '../../types'
import { useGetTasksQuery } from '../../service/api'

const TodoList = () => {
  const { data: tasks, isLoading } = useGetTasksQuery()

  if (isLoading) return <h2>carregando...</h2>

  return (
    <Container>
      <p>2 tarefas marcado como: &quot;Categoria&ldquo; e &quot;Termo&ldquo;</p>
      <ul>
        {tasks?.map((task: ITask) => {
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
