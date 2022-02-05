import { Navbar } from './components/Navbar.component'
import { Welcome } from './components/Welcome.component'
import { Services } from './components/Services.component'
import { Transactions } from './components/Transactions.component'
import { Footer } from './components/Footer.component'

const App = () => {


  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
