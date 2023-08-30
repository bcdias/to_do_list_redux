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
  const { filter: filterData } = useSelector((state: RootReducer) => state)
  const { data: tasks } = useGetTasksQuery()

  const isAtctive = () => {
    const sameCriteria = filterData.criteria === criteria
    const sameValue = filterData.value === value

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

  const filter = () => {
    dispatch(
      filterChange({
        criteria,
        value
      })
    )
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
