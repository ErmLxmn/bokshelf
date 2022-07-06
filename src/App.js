import Header from './Header'
import './App.css'
import Footer from './Footer'
import Home from './Home'
import RightBar from './RigthBar'

function App() {
  return (
    <div className='App'>
      <div>
        <Header />
      </div>
      <div style={{ display: 'flex' }}>
        <Home></Home>
        <RightBar />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
