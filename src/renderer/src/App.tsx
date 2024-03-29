import { HashRouter } from 'react-router-dom'
import AllRoutes from './components/AllRoutes'
import './styles/styles.scss'

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <AllRoutes />
    </HashRouter>
  )
}

export default App
