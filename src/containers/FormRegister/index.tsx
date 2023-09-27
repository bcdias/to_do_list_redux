import { FormEvent, useState } from 'react'
import { useAddTaskMutation } from '../../service/api'
import { MainContainer, SaveButton, Title } from '../../styles'
import { Input } from '../../styles'
import { Form, Options, Option } from './styles'
import * as enums from '../../util/enums/Tasks'
import { useNavigate } from 'react-router-dom'

const FormRegister = () => {
  const [addTask] = useAddTaskMutation()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priorities.NORMAL)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    addTask({
      title,
      description,
      priority,
      status: enums.Status.PENDING
    })

    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova tarefa</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Título"
        />
        <Input
          as="textarea"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priorities).map((priority) => {
            return (
              <Option key={priority}>
                <input
                  value={priority}
                  name="priority"
                  type="radio"
                  id={priority}
                  defaultChecked={priority === enums.Priorities.NORMAL}
                  onChange={({ target }) =>
                    setPriority(target.value as enums.Priorities)
                  }
                />
                <label htmlFor={priority}>{priority}</label>
              </Option>
            )
          })}
        </Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </Form>
    </MainContainer>
  )
}

export default FormRegister
