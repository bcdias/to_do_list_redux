import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  active: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid
    ${({ active }) => (active ? variables.blue : variables.gray2)};
  background-color: ${({ active }) =>
    active ? variables.white : variables.white2};
  color: ${({ active }) => (active ? variables.blue : variables.darkGrey3)};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${variables.white};
  }
`

export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
