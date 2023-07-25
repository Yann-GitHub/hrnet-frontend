import { Link } from "react-router-dom"
import ImgLogo from "../../assets/logo-wh.jpg"

function Home() {
  return (
      <div>
        <img src={ImgLogo} alt="logo" />
        <h1>HRNet</h1>
        <h2>Create Employee</h2>
        <Link to="/employee-list" >
        View Current Employees
        </Link>
      </div>
  )
}

export default Home