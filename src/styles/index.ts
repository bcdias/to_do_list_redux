import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'
import { Button } from '../components/Task/styles'

const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 244px auto;
`

export const MainContainer = styled.main`
  padding: 0px 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Title = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`
export const Input = styled.input`
  padding: 8px;
  background-color: ${variables.white};
  border-radius: 8px;
  font-weight: bold;
  color: ${variables.darkGrey2};
  border-color: ${variables.darkGrey2};
  width: 100%;
`
export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`

export default GlobalStyle
