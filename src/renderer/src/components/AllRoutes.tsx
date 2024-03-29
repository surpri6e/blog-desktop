import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../routes'
import SearchPage from '../pages/SearchPage/SearchPage'

const AllRoutes = (): JSX.Element => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={<route.page />} path={route.path} key={route.path} />
      ))}

      <Route element={<SearchPage />} path="*" />
    </Routes>
  )
}

export default AllRoutes
