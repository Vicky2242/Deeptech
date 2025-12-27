import React from "react";
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <Link to="">About</Link>
          <Link to="profile">Profile</Link>
          <Link to="courses">Courses</Link>
        </nav>
      </aside>

      {/* Content area */}
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;