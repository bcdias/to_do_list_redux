import { Provider } from 'react-redux'
import SideBar from './containers/Sidebar'
import TodoList from './containers/TodoList'
import GlobalStyle, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TodoList />
      </Container>
    </Provider>
  )
}

export default App
