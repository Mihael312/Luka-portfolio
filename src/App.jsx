import  About  from './components/About' 
import Navbar from './components/Navbar'
import Skills from './components/skills'

const App = () => (
<div>
<Navbar/>
    <div className='px-12 mx-5 mt-5'>
      <About/>
      <Skills/>
    </div>   
</div>
  )


export default App