import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Hero,Navbar,Tech,Works,StarsCanvas,Feedbacks,Experience} from './components'

const App = () => {
  return (
    <BrowserRouter>
        <div className=' relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar/>
              <Hero/>
            </div>
            <div>
            <About/>
              <Tech/>
              <Experience/>
              <Works/>
              {/* <Feedbacks/> */}
              <div className=' relative z-0'>
                <Contact/>
                <StarsCanvas/>
              </div>
            </div>
        </div>
    </BrowserRouter>
  )
}

export default App