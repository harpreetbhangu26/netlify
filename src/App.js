
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Screens/Home';
import LoginPage from './Screens/LoginPage';


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/home' element={<Home/>}/>
        
      </Routes>
    </Router>
  )
}

export default App;
