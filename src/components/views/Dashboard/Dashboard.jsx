import { Link, Outlet, useNavigate } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import "./dashboard.styles.css"
import logo from "../../svgs/logo.svg"
import LogoutIcon from "@mui/icons-material/Logout"
import Swal from "sweetalert2"

export const Dashboard = () => {
  const navigate = useNavigate()

  if (localStorage.getItem("user") !== "admin") {
    navigate("/", { replace: true })
    Swal.fire({
      icon: "error",
      title: "You have to be a superuser to enter here",
      timer: 2000,
    })
  }
  return (
    <div className="dashboard">
      <div className="dashboard-nav-container">
        <div className="dashboard-nav">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="nav-links">
            <p>
              Logged in as: <br /> <b>admin@email.com</b>
            </p>
            <Link to="/login" className="nav-logout">
              <LogoutIcon style={{ color: "#b18a75dc" }} fontSize="small" />
              <b>Logout</b>
            </Link>
          </div>
        </div>
      </div>
      <div className="dashboard-main">
        <Sidebar />
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
