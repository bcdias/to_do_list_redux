import styled from 'styled-components'
import variables from '../../styles/variables'

import * as enums from '../../util/enums/Tasks'
import { Button } from '../../styles'

type TagProps = {
  priority?: enums.Priorities
  status?: enums.Status
  parameter: 'status' | 'priority'
}

function returnBackgrondColor(props: TagProps): string {
  if (props.parameter === 'priority') {
    if (props.priority === enums.Priorities.IMPORTANt)
      return variables.orangeYellow
    if (props.priority === enums.Priorities.URGENT) return variables.red
  } else {
    if (props.status === enums.Status.PENDING) return variables.yellow
    if (props.status === enums.Status.COMPLETED) return variables.green
  }
  return variables.gray
}

export const Card = styled.div`
  background-color: ${variables.white2};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 32px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  color: ${variables.white};
  font-weight: bold;
  background-color: ${(props) => returnBackgrondColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Description = styled.textarea`
  color: ${variables.darkGrey};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const RemoveCancelButton = styled(Button)`
  background-color: ${variables.red};
`
