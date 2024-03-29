import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './components/AllRoutes'
import './styles/styles.scss'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  )
}

export default App
