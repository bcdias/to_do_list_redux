import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remove } from '../../store/reducers/tasks'
import { ITask } from '../../types'

type Props = ITask

const Task = ({ description, priority, status, title, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.RemoveCancelButton onClick={() => setIsEditing(false)}>
              Cancelar
            </S.RemoveCancelButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.RemoveCancelButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.RemoveCancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
