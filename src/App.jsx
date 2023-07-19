import { useContext } from 'react'
import { useGlobalContext } from './Components/Context'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Sidebar from './Components/Sidebar'
import Submenu from './Components/Submenu'

const App = () => {
  const items = useGlobalContext()
  
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  )
}
export default App
