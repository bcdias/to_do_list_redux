import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import GlobalStyle, { Container } from './styles'
import store from './store'
import routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
