import styled from 'styled-components'
import variables from '../../styles/variables'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variables.darkGrey2};

  textarea {
    resize: none;
    margin: 16px 0;
  }
`
export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
    margin-left: 2px;
  }
`
export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`
