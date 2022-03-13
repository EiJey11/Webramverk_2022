import './App.css';
import './pages/Home.css'
import './pages/About.css'
import {Routes, Route, Link} from 'react-router-dom'

import {Home} from './pages/Home'
import {About} from './pages/About'
import {Services} from './pages/Services'
import {Contacts} from './pages/Contacts'
import {Notfound} from './pages/Notfound'

import {Layout} from './components/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element= {<Home />}/>
          <Route path='about' element= {<About />}/>
          <Route path='services' element= {<Services />}/>
          <Route path='contacts' element= {<Contacts />}/>
          <Route path='*' element= {<Notfound />}/>
        </Route>
      </Routes>
      </>
  );
}

export default App;
