import { Link } from "react-router-dom"

function EmployeeList() {
  return (
      <div>
        <h2>
          Page Liste d'employés
        </h2>
        <Link to="/" >
          Page Home
        </Link>
      </div>
  )
}

export default EmployeeList