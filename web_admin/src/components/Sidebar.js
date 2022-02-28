import {Link} from 'react-router-dom';

const Sidebar = () => {
	return(
			<>
			<nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  <i className="fa fa-home menu-icon" aria-hidden="true"></i>
                  <span className="menu-title">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  <i className="fa fa-cube menu-icon" />
                  <span className="menu-title">Products</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  <i className="fa fa-list menu-icon" />
                  <span className="menu-title">Categories</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">
                  <i className="fa fa-shopping-cart menu-icon" />
                  <span className="menu-title">Orders</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  <i className="fa fa-user menu-icon" />
                  <span className="menu-title">Users</span>
                </Link>
              </li>
            </ul>
          </nav>
			</>
		)
}


export default Sidebar;