import {Link,useHistory} from 'react-router-dom';
import { logout } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/logo.svg";
import minilogo from "../images/logo-mini.svg";
import profilePic from "../images/faces/face8.jpg";


const Header = () => {
  const dispatch = useDispatch();  

  const logoutHandler = () => {
    dispatch(logout());    
  };

  const {userLogin: { userInfo :{data} }} = useSelector((state) => state);  

  let today = new Date();
  let curHr = today.getHours();
  let userMessage = '';
  
  if (curHr < 12) {
    userMessage = 'Good Morning';
  } else if (curHr < 18) {
    userMessage = 'Good Afternoon';
  } else {
    userMessage = 'Good Evening';
  }
  
	return(
		<nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
            <div className="me-3">
              <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
                <span className="icon-menu" />
              </button>
            </div>
            <div>
              <Link className="navbar-brand brand-logo" to="/dashboard">
                <img src={logo} alt="logo" />
              </Link>
              <Link className="navbar-brand brand-logo-mini" to="/dashboard">
                <img src={minilogo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-top"> 
            <ul className="navbar-nav">
              <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
                <h1 className="welcome-text">{userMessage}, <span className="text-black fw-bold">{data && data[0].name}</span></h1>
                <h3 className="welcome-sub-text">Your performance summary this week </h3>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown d-none d-lg-block">
                <a className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false"> Select Category </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                  <a className="dropdown-item py-3">
                    <p className="mb-0 font-weight-medium float-left">Select category</p>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Bootstrap Bundle </p>
                      <p className="fw-light small-text mb-0">This is a Bundle featuring 16 unique dashboards</p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Angular Bundle</p>
                      <p className="fw-light small-text mb-0">Everything you’ll ever need for your Angular projects</p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">VUE Bundle</p>
                      <p className="fw-light small-text mb-0">Bundle of 6 Premium Vue Admin Dashboard</p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">React Bundle</p>
                      <p className="fw-light small-text mb-0">Bundle of 8 Premium React Admin Dashboard</p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item d-none d-lg-block">
                <div id="datepicker-popup" className="input-group date datepicker navbar-date-picker">
                  <span className="input-group-addon input-group-prepend border-right">
                    <span className="icon-calendar input-group-text calendar-icon" />
                  </span>
                  <input type="text" className="form-control" />
                </div>
              </li>
              <li className="nav-item">
                <form className="search-form" action="#">
                  <i className="icon-search" />
                  <input type="search" className="form-control" placeholder="Search Here" title="Search here" />
                </form>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link count-indicator" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                  <i className="icon-mail icon-lg" />
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                  <a className="dropdown-item py-3 border-bottom">
                    <p className="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                    <span className="badge badge-pill badge-primary float-right">View all</span>
                  </a>
                  <a className="dropdown-item preview-item py-3">
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-alert m-auto text-primary" />
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject fw-normal text-dark mb-1">Application Error</h6>
                      <p className="fw-light small-text mb-0"> Just now </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item py-3">
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-settings m-auto text-primary" />
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject fw-normal text-dark mb-1">Settings</h6>
                      <p className="fw-light small-text mb-0"> Private message </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item py-3">
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-airballoon m-auto text-primary" />
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject fw-normal text-dark mb-1">New user registration</h6>
                      <p className="fw-light small-text mb-0"> 2 days ago </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown"> 
                <a className="nav-link count-indicator" id="countDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="icon-bell" />
                  <span className="count" />
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="countDropdown">
                  <a className="dropdown-item py-3">
                    <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                    <span className="badge badge-pill badge-primary float-right">View all</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="assets/images/faces/face10.jpg" alt="image" className="img-sm profile-pic" />
                    </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                      <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="assets/images/faces/face12.jpg" alt="image" className="img-sm profile-pic" />
                    </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                      <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="assets/images/faces/face1.jpg" alt="image" className="img-sm profile-pic" />
                    </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                      <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown d-none d-lg-block user-dropdown">
                <a className="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="img-xs rounded-circle" src={profilePic} alt="Profile image" /> </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                  <div className="dropdown-header text-center">
                    <img className="img-md rounded-circle" src={profilePic} alt="Profile image" />
                    <p className="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                    <p className="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
                  </div>
                  <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2" /> My Profile <span className="badge badge-pill badge-danger">1</span></a>
                  <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2" /> Messages</a>
                  <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2" /> Activity</a>
                  <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2" /> FAQ</a>
                  <Link className="dropdown-item" to="#" onClick={logoutHandler}><i className="dropdown-item-icon mdi mdi-power text-primary me-2"/>Log Out</Link>
                </div>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-bs-toggle="offcanvas">
              <span className="mdi mdi-menu" />
            </button>
          </div>
        </nav>
		)

}

export default Header;