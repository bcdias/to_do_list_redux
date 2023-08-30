import { useState, useEffect } from 'react'

import * as S from './styles'
import { ITask } from '../../types'
import { useDeleteTaskMutation, useUpdateTaskMutation } from '../../service/api'

type Props = ITask

const Task = ({ description, priority, status, title, id }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [deleteTask, response] = useDeleteTaskMutation()
  const [editingDescription, setEditingDescription] = useState('')
  const [updateTask] = useUpdateTaskMutation()

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
      description: editingDescription,
      priority,
      status,
      title
    })
    setIsEditing(false)
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
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
            <S.SaveButton onClick={handleSave}>Salvar</S.SaveButton>
            <S.RemoveCancelButton onClick={handleCancelEdit}>
              Cancelar
            </S.RemoveCancelButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
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
