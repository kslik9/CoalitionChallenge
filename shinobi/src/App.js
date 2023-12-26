import './App.css';
import Home from './pages/home';
import SingIn from './pages/singIn';
import SingUp from './pages/singUp';
import Dashboard from './pages/dashboard';
import Comming from './pages/comming';
import PageNotFound from './pages/pageNotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/singin' element={<SingIn />}/>
          <Route exact path='/singup' element={<SingUp />}/>
          <Route exact path='/dashboard/profile' element={<Dashboard name='profile' />}/>
          <Route exact path='/dashboard/myid' element={<Dashboard name='myid' />}/>
          <Route exact path='/dashboard/setting' element={<Dashboard name='setting' />}/>
          <Route exact path='/comming' element={<Comming />}/>
          <Route exact path='/*' element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
library.add(fab, fas, far)
