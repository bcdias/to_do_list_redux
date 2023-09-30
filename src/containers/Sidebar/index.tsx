import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { Button, Input } from '../../styles'
import { RootReducer } from '../../store'
import { termChange } from '../../store/reducers/filter'
import * as enums from '../../util/enums/Tasks'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Input
              type="text"
              placeholder="Buscar"
              value={term}
              onChange={(event) => dispatch(termChange(event.target.value))}
            />
            <S.Filter>
              <FilterCard
                value={enums.Status.PENDING}
                criteria="status"
                label="pendentes"
              />
              <FilterCard
                value={enums.Status.COMPLETED}
                criteria="status"
                label="concluídas"
              />
              <FilterCard
                value={enums.Priorities.URGENT}
                criteria="prioridade"
                label="urgentes"
              />
              <FilterCard
                value={enums.Priorities.IMPORTANt}
                criteria="prioridade"
                label="importantes"
              />
              <FilterCard
                value={enums.Priorities.NORMAL}
                criteria="prioridade"
                label="normal"
              />
              <FilterCard criteria="todas" label="todas" />
            </S.Filter>
          </>
        ) : (
          <Button type="button" onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
