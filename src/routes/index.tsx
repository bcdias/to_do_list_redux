import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Register />
  }
])

export default routes
