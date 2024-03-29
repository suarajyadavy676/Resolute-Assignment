import {Routes,Route} from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'
import Form from '../components/Form'

function AllRoutes() {
  return (
    <Routes>
      <Route path="/create-account" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
      <Route path='/form' element={<Form/>} />
    </Routes>
  )
}

export default AllRoutes
