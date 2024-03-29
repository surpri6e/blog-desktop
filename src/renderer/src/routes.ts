import MainPage from './pages/MainPage/MainPage'
import { IRoute } from './types/IRoute'

export const publicRoutes: IRoute[] = [{ page: MainPage, path: '/a/:nickname' }]
