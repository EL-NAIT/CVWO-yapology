
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import RegisterLogin from './pages/register_login.tsx'
import MainLayout from './layouts/main_layout.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RegisterLogin register={false}/>} />
      <Route path='/register' element={<RegisterLogin register={true}/>} />
      <Route path='username_placeholder' element={<MainLayout />}>
      </Route>
    </>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
