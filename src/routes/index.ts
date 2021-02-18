import Home from '../components/Home/Home';

interface RouteInterface {
  path: string
  exact?: boolean
  component: any
  name: string
  category?: string 
}

const routes: Array<RouteInterface> = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Home',
    category: '',
  }
]

export default routes;