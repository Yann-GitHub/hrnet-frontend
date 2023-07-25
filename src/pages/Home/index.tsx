import { Link } from "react-router-dom"
import ImgLogo from "../../assets/logo-wh.jpg"

function Home() {
  return (
      <div>
        <img src={ImgLogo} alt="logo" />
        <h2>
          Page Home
        </h2>
        <Link to="/employee-list" >
          Page liste d'employés
        </Link>
      </div>
  )
}

export default Home