import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import "./dashboard.styles.css"

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-nav-container">
        <div className="dashboard-nav"></div>
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
