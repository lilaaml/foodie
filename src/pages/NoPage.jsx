import Navbar from '../components/Navbar'
import './Pages.css'

const NoPage = () => {
  return (
    <div className="container">
      <Navbar />
      <h2 className="display-6">Error 404: Page Not Found</h2>
    </div>
  )
}

export default NoPage
