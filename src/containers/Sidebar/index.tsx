import FilterCard from '../../components/FilterCard'

import * as S from './styles'

const SideBar = () => {
  return (
    <S.Aside>
      <div>
        <S.Input type="text" placeholder="Buscar" />
        <S.Filter>
          <FilterCard label="pendentes" counter={3} />
          <FilterCard label="concluídas" counter={4} />
          <FilterCard label="urgentes" counter={2} />
          <FilterCard label="importantes" counter={2} />
          <FilterCard label="normal" counter={3} />
          <FilterCard active label="todas" counter={7} />
        </S.Filter>
      </div>
    </S.Aside>
  )
}

export default SideBar
