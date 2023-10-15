import React from 'react'

function Sidebar() {
  return (
    <div>
        <aside className="left-sidebar">
    <div>
      <div className="brand-logo d-flex align-items-center justify-content-between">
        <a href="/" className="text-nowrap logo-img">
          <img src="../backend/assets/images/gayatrilogo.png" width="180" alt="" />
        </a>
        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
          <i className="ti ti-x fs-8"></i>
        </div>
      </div>
      <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
        <ul id="sidebarnav">
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span className="hide-menu">Home</span>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="/" aria-expanded="false">
              <span>
                <i className="ti ti-layout-dashboard"></i>
              </span>
              <span className="hide-menu">Dashboard</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link" href="/questions" aria-expanded="false">
              <span>
                <i className="ti ti-layout-dashboard"></i>
              </span>
              <span className="hide-menu">Questions</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
    </div>
  )
}

export default Sidebar