import './App.css'
import NavigationBar from './NavigationBar/NavigationBar'
import Hero from './Hero/Hero'
import FooterComp from './FooterComponent/FooterComp'

function App() {

  return (
    <>
      <NavigationBar></NavigationBar>
      <div className='main'>
        <Hero></Hero>
      </div>
      <footer>
        <FooterComp />
      </footer>
    </>
  )
}

export default App
