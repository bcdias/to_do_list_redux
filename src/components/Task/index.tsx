import { useState, useEffect } from 'react'

import * as S from './styles'
import { ITask } from '../../types'
import { Button, SaveButton } from '../../styles'
import * as enums from '../../util/enums/Tasks'
import {
  useDeleteTaskMutation,
  useFinishTaskMutation,
  useUpdateTaskMutation
} from '../../service/api'

type Props = ITask

const Task = ({ description, priority, status, title, id }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [deleteTask] = useDeleteTaskMutation()
  const [editingDescription, setEditingDescription] = useState('')
  const [updateTask] = useUpdateTaskMutation()
  const [finishTask] = useFinishTaskMutation()

  useEffect(() => {
    if (description.length > 0) {
      setEditingDescription(description)
    }
  }, [description])

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditingDescription(description)
  }

  const handleSave = () => {
    updateTask({
      id,
      description: editingDescription
    })
    setIsEditing(false)
  }

  const handleStatus = () => {
    const isFinished =
      status === enums.Status.PENDING
        ? enums.Status.COMPLETED
        : enums.Status.PENDING

    finishTask({
      id,
      status: isFinished
    })
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.COMPLETED}
          onChange={handleStatus}
        />
        <S.Title>
          {isEditing && <em>Está editando: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={editingDescription}
        onChange={(event) => setEditingDescription(event.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton onClick={handleSave}>Salvar</SaveButton>
            <S.RemoveCancelButton onClick={handleCancelEdit}>
              Cancelar
            </S.RemoveCancelButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.RemoveCancelButton onClick={() => deleteTask(id)}>
              Remover
            </S.RemoveCancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
