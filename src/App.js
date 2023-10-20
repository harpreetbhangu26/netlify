
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Screens/Home';
import LoginPage from './Screens/LoginPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
