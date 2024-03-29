import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../main'
import SearchPage from '../pages/SearchPage/SearchPage'

const AllRoutes = (): JSX.Element => {
  const [user, loading] = useAuthState(auth)

  // If user logging shows private routes
  // If user not logging shows public  routes
  return (
    <Routes>
      {loading || !user
        ? publicRoutes.map((route) => (
            <Route element={<route.page />} path={route.path} key={route.path} />
          ))
        : privateRoutes.map((route) => (
            <Route element={<route.page />} path={route.path} key={route.path} />
          ))}
      {loading ? <Route element={<></>} path="*" /> : <Route element={<SearchPage />} path="*" />}
    </Routes>
  )
}

export default AllRoutes
