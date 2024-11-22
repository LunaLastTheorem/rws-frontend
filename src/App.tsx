import './App.css'
import NavigationBar from './NavigationBar/NavigationBar'
import Hero from './Hero/Hero'
import FooterComp from './FooterComponent/FooterComp'

function App() {

  return (
    <>
      <NavigationBar></NavigationBar>
      <div className='main'>
        <Hero>

        </Hero>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel libero suscipit quae natus ad, nostrum soluta cumque eligendi! Facilis, mollitia perferendis. Nostrum dicta consectetur repudiandae quae necessitatibus enim architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel eius incidunt veritatis unde nisi earum commodi corporis facere sunt, dolorem voluptatum nobis vero, cumque dignissimos quasi pariatur qui iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae suscipit cumque iure expedita excepturi ratione ipsum, quaerat adipisci, delectus recusandae at vitae quibusdam itaque atque iusto! Ab necessitatibus aliquid dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum accusamus nemo iure vitae autem non iste culpa totam, repellat dolorum distinctio ipsum in dolorem, est reiciendis aliquam ab natus commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi ab necessitatibus praesentium suscipit ratione veritatis magni neque consectetur architecto delectus assumenda sit, et rem nisi omnis sint tempore nobis.</p>
        <footer>
          <FooterComp />
        </footer>
      </div>
    </>
  )
}

export default App
