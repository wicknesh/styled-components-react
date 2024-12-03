import styled from 'styled-components'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'

const Container = styled.div`
  height: 100vh;
`

function App() {

  return (
    <div className='container'>
      <Container>
        <NavBar />
        <Home />
        <Footer />
      </Container>
    </div>
  )
}

export default App
