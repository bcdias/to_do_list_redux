import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import * as enums from '../../util/enums/Tasks'
import { filterChange } from '../../store/reducers/filter'
import { RootReducer } from '../../store'
import { useGetTasksQuery } from '../../service/api'

export type Props = {
  label: string
  criteria: 'prioridade' | 'status' | 'todas'
  value?: enums.Priorities | enums.Status
}

const FilterCard = ({ label, criteria, value }: Props) => {
  const dispatch = useDispatch()
  const { value: filterValue, criteria: filterCriteria } = useSelector(
    (state: RootReducer) => state.filter
  )
  const { data: tasks } = useGetTasksQuery()

  const filter = () => {
    dispatch(
      filterChange({
        criteria,
        value
      })
    )
  }

  const isAtctive = () => {
    const sameCriteria = filterCriteria === criteria
    const sameValue = filterValue === value

    return sameCriteria && sameValue
  }

  const counterTasks = () => {
    if (criteria === 'todas') return tasks?.length
    if (criteria === 'prioridade') {
      return tasks?.filter((task) => task.priority === value).length
    }
    if (criteria === 'status') {
      return tasks?.filter((task) => task.status === value).length
    }
  }

  const active = isAtctive()
  const counter = counterTasks()

  return (
    <S.Card active={active} onClick={filter}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default FilterCard
