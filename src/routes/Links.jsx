import {Routes, Route} from 'react-router-dom'

// import pages/components
import Home from '../components/pages/Home'
import AboutMe from '../components/pages/AboutMe'


const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/aboutMe' element={<AboutMe/>}></Route>
    </Routes>
  )
}

export default Links

