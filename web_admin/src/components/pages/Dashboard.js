import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const Dashboard = () => {
	return(
		<div className="container-scroller">
        
        <Header/>
        
        <div className="container-fluid page-body-wrapper">
          {/* partial:partials/_settings-panel.html */}
          <div id="right-sidebar" className="settings-panel">
            <i className="settings-close ti-close" />
            <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="todo-tab" data-bs-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="chats-tab" data-bs-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
              </li>
            </ul>
            <div className="tab-content" id="setting-content">
              <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
                <div className="add-items d-flex px-3 mb-0">
                  <form className="form w-100">
                    <div className="form-group d-flex">
                      <input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
                      <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                    </div>
                  </form>
                </div>
                <div className="list-wrapper px-3">
                  <ul className="d-flex flex-column-reverse todo-list">
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Team review meeting at 3.00 PM
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Prepare for presentation
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Resolve all the low priority tickets due today
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" defaultChecked />
                          Schedule meeting for next week
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" defaultChecked />
                          Project review
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                  </ul>
                </div>
                <h4 className="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
                <div className="events pt-4 px-3">
                  <div className="wrapper d-flex mb-2">
                    <i className="ti-control-record text-primary me-2" />
                    <span>Feb 11 2018</span>
                  </div>
                  <p className="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
                  <p className="text-gray mb-0">The total number of sessions</p>
                </div>
                <div className="events pt-4 px-3">
                  <div className="wrapper d-flex mb-2">
                    <i className="ti-control-record text-primary me-2" />
                    <span>Feb 7 2018</span>
                  </div>
                  <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                  <p className="text-gray mb-0 ">Call Sarah Graves</p>
                </div>
              </div>
              {/* To do section tab ends */}
              <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
                <div className="d-flex align-items-center justify-content-between border-bottom">
                  <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                  <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">See All</small>
                </div>
                <ul className="chat-list">
                  <li className="list active">
                    <div className="profile"><img src="assets/images/faces/face1.jpg" alt="image" /><span className="online" /></div>
                    <div className="info">
                      <p>Thomas Douglas</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">19 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="assets/images/faces/face2.jpg" alt="image" /><span className="offline" /></div>
                    <div className="info">
                      <div className="wrapper d-flex">
                        <p>Catherine</p>
                      </div>
                      <p>Away</p>
                    </div>
                    <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                    <small className="text-muted my-auto">23 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="assets/images/faces/face3.jpg" alt="image" /><span className="online" /></div>
                    <div className="info">
                      <p>Daniel Russell</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">14 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="assets/images/faces/face4.jpg" alt="image" /><span className="offline" /></div>
                    <div className="info">
                      <p>James Richardson</p>
                      <p>Away</p>
                    </div>
                    <small className="text-muted my-auto">2 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="assets/images/faces/face5.jpg" alt="image" /><span className="online" /></div>
                    <div className="info">
                      <p>Madeline Kennedy</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">5 min</small>
                  </li>
                  <li className="list">
                    <div className="profile"><img src="assets/images/faces/face6.jpg" alt="image" /><span className="online" /></div>
                    <div className="info">
                      <p>Sarah Graves</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">47 min</small>
                  </li>
                </ul>
              </div>
              {/* chat tab ends */}
            </div>
          </div>
          {/* partial */}
          {/* partial:partials/_sidebar.html */}
          <Sidebar/>
          {/* partial */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-sm-12">
                  <div className="home-tab">
                    <div className="d-sm-flex align-items-center justify-content-between border-bottom">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active ps-0" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#audiences" role="tab" aria-selected="false">Audiences</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#demographics" role="tab" aria-selected="false">Demographics</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link border-0" id="more-tab" data-bs-toggle="tab" href="#more" role="tab" aria-selected="false">More</a>
                        </li>
                      </ul>
                      <div>
                        <div className="btn-wrapper">
                          <a href="#" className="btn btn-otline-dark align-items-center"><i className="icon-share" /> Share</a>
                          <a href="#" className="btn btn-otline-dark"><i className="icon-printer" /> Print</a>
                          <a href="#" className="btn btn-primary text-white me-0"><i className="icon-download" /> Export</a>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content tab-content-basic">
                      <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview"> 
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="statistics-details d-flex align-items-center justify-content-between">
                              <div>
                                <p className="statistics-title">Bounce Rate</p>
                                <h3 className="rate-percentage">32.53%</h3>
                                <p className="text-danger d-flex"><i className="mdi mdi-menu-down" /><span>-0.5%</span></p>
                              </div>
                              <div>
                                <p className="statistics-title">Page Views</p>
                                <h3 className="rate-percentage">7,682</h3>
                                <p className="text-success d-flex"><i className="mdi mdi-menu-up" /><span>+0.1%</span></p>
                              </div>
                              <div>
                                <p className="statistics-title">New Sessions</p>
                                <h3 className="rate-percentage">68.8</h3>
                                <p className="text-danger d-flex"><i className="mdi mdi-menu-down" /><span>68.8</span></p>
                              </div>
                              <div className="d-none d-md-block">
                                <p className="statistics-title">Avg. Time on Site</p>
                                <h3 className="rate-percentage">2m:35s</h3>
                                <p className="text-success d-flex"><i className="mdi mdi-menu-down" /><span>+0.8%</span></p>
                              </div>
                              <div className="d-none d-md-block">
                                <p className="statistics-title">New Sessions</p>
                                <h3 className="rate-percentage">68.8</h3>
                                <p className="text-danger d-flex"><i className="mdi mdi-menu-down" /><span>68.8</span></p>
                              </div>
                              <div className="d-none d-md-block">
                                <p className="statistics-title">Avg. Time on Site</p>
                                <h3 className="rate-percentage">2m:35s</h3>
                                <p className="text-success d-flex"><i className="mdi mdi-menu-down" /><span>+0.8%</span></p>
                              </div>
                            </div>
                          </div>
                        </div> 
                        <div className="row">
                          <div className="col-lg-8 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="d-sm-flex justify-content-between align-items-start">
                                      <div>
                                        <h4 className="card-title card-title-dash">Performance Line Chart</h4>
                                        <h5 className="card-subtitle card-subtitle-dash">Lorem Ipsum is simply dummy text of the printing</h5>
                                      </div>
                                      <div id="performance-line-legend" />
                                    </div>
                                    <div className="chartjs-wrapper mt-5">
                                      <canvas id="performaneLine" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                                <div className="card bg-primary card-rounded">
                                  <div className="card-body pb-0">
                                    <h4 className="card-title card-title-dash text-white mb-4">Status Summary</h4>
                                    <div className="row">
                                      <div className="col-sm-4">
                                        <p className="status-summary-ight-white mb-1">Closed Value</p>
                                        <h2 className="text-info">357</h2>
                                      </div>
                                      <div className="col-sm-8">
                                        <div className="status-summary-chart-wrapper pb-4">
                                          <canvas id="status-summary" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-sm-6">
                                        <div className="d-flex justify-content-between align-items-center mb-2 mb-sm-0">
                                          <div className="circle-progress-width">
                                            <div id="totalVisitors" className="progressbar-js-circle pr-2" />
                                          </div>
                                          <div>
                                            <p className="text-small mb-2">Total Visitors</p>
                                            <h4 className="mb-0 fw-bold">26.80%</h4>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="d-flex justify-content-between align-items-center">
                                          <div className="circle-progress-width">
                                            <div id="visitperday" className="progressbar-js-circle pr-2" />
                                          </div>
                                          <div>
                                            <p className="text-small mb-2">Visits per day</p>
                                            <h4 className="mb-0 fw-bold">9065</h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-8 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="d-sm-flex justify-content-between align-items-start">
                                      <div>
                                        <h4 className="card-title card-title-dash">Market Overview</h4>
                                        <p className="card-subtitle card-subtitle-dash">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                      </div>
                                      <div>
                                        <div className="dropdown">
                                          <button className="btn btn-secondary dropdown-toggle toggle-dark btn-lg mb-0 me-0" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> This month </button>
                                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                            <h6 className="dropdown-header">Settings</h6>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#">Separated link</a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="d-sm-flex align-items-center mt-1 justify-content-between">
                                      <div className="d-sm-flex align-items-center mt-4 justify-content-between"><h2 className="me-2 fw-bold">$36,2531.00</h2><h4 className="me-2">USD</h4><h4 className="text-success">(+1.37%)</h4></div>
                                      <div className="me-3"><div id="marketing-overview-legend" /></div>
                                    </div>
                                    <div className="chartjs-bar-wrapper mt-3">
                                      <canvas id="marketingOverview" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row flex-grow">
                              <div className="col-12 grid-margin stretch-card">
                                <div className="card card-rounded table-darkBGImg">
                                  <div className="card-body">
                                    <div className="col-sm-8">
                                      <h3 className="text-white upgrade-info mb-0">
                                        Enhance your <span className="fw-bold">Campaign</span> for better outreach
                                      </h3>
                                      <a href="#" className="btn btn-info upgrade-btn">Upgrade Account!</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row flex-grow">
                              <div className="col-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="d-sm-flex justify-content-between align-items-start">
                                      <div>
                                        <h4 className="card-title card-title-dash">Pending Requests</h4>
                                        <p className="card-subtitle card-subtitle-dash">You have 50+ new requests</p>
                                      </div>
                                      <div>
                                        <button className="btn btn-primary btn-lg text-white mb-0 me-0" type="button"><i className="mdi mdi-account-plus" />Add new member</button>
                                      </div>
                                    </div>
                                    <div className="table-responsive  mt-1">
                                      <table className="table select-table">
                                        <thead>
                                          <tr>
                                            <th>
                                              <div className="form-check form-check-flat mt-0">
                                                <label className="form-check-label">
                                                  <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper" /></label>
                                              </div>
                                            </th>
                                            <th>Customer</th>
                                            <th>Company</th>
                                            <th>Progress</th>
                                            <th>Status</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <div className="form-check form-check-flat mt-0">
                                                <label className="form-check-label">
                                                  <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper" /></label>
                                              </div>
                                            </td>
                                            <td>
                                              <div className="d-flex ">
                                                <img src="assets/images/faces/face1.jpg" alt="" />
                                                <div>
                                                  <h6>Brandon Washington</h6>
                                                  <p>Head admin</p>
                                                </div>
                                              </div>
                                            </td>
                                            <td>
                                              <h6>Company name 1</h6>
                                              <p>company type</p>
                                            </td>
                                            <td>
                                              <div>
                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                  <p className="text-success">79%</p>
                                                  <p>85/162</p>
                                                </div>
                                                <div className="progress progress-md">
                                                  <div className="progress-bar bg-success" role="progressbar" style={{width: '85%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                              </div>
                                            </td>
                                            <td><div className="badge badge-opacity-warning">In progress</div></td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="form-check form-check-flat mt-0">
                                                <label className="form-check-label">
                                                  <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper" /></label>
                                              </div>
                                            </td>
                                            <td>
                                              <div className="d-flex">
                                                <img src="assets/images/faces/face2.jpg" alt="" />
                                                <div>
                                                  <h6>Laura Brooks</h6>
                                                  <p>Head admin</p>
                                                </div>
                                              </div>
                                            </td>
                                            <td>
                                              <h6>Company name 1</h6>
                                              <p>company type</p>
                                            </td>
                                            <td>
                                              <div>
                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                  <p className="text-success">65%</p>
                                                  <p>85/162</p>
                                                </div>
                                                <div className="progress progress-md">
                                                  <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                              </div>
                                            </td>
                                            <td><div className="badge badge-opacity-warning">In progress</div></td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="form-check form-check-flat mt-0">
                                                <label className="form-check-label">
                                                  <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper" /></label>
                                              </div>
                                            </td>
                                            <td>
                                              <div className="d-flex">
                                                <img src="assets/images/faces/face3.jpg" alt="" />
                                                <div>
                                                  <h6>Wayne Murphy</h6>
                                                  <p>Head admin</p>
                                                </div>
                                              </div>
                                            </td>
                                            <td>
                                              <h6>Company name 1</h6>
                                              <p>company type</p>
                                            </td>
                                            <td>
                                              <div>
                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                  <p className="text-success">65%</p>
                                                  <p>85/162</p>
                                                </div>
                                                <div className="progress progress-md">
                                                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '38%'}} aria-valuenow={38} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                              </div>
                                            </td>
                                            <td><div className="badge badge-opacity-warning">In progress</div></td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="form-check form-check-flat mt-0">
                                                <label className="form-check-label">
                                                  <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper" /></label>
                                              </div>
                                            </td>
                                            <td>
                                              <div className="d-flex">
                                                <img src="assets/images/faces/face4.jpg" alt="" />
                                                <div>
                                                  <h6>Matthew Bailey</h6>
                                                  <p>Head admin</p>
                                                </div>
                                              </div>
                                            </td>
                                            <td>
                                              <h6>Company name 1</h6>
                                              <p>company type</p>
                                            </td>
                                            <td>
                                              <div>
                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                  <p className="text-success">65%</p>
                                                  <p>85/162</p>
                                                </div>
                                                <div className="progress progress-md">
                                                  <div className="progress-bar bg-danger" role="progressbar" style={{width: '15%'}} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                              </div>
                                            </td>
                                            <td><div className="badge badge-opacity-danger">Pending</div></td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="form-check form-check-flat mt-0">
                                                <label className="form-check-label">
                                                  <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper" /></label>
                                              </div>
                                            </td>
                                            <td>
                                              <div className="d-flex">
                                                <img src="assets/images/faces/face5.jpg" alt="" />
                                                <div>
                                                  <h6>Katherine Butler</h6>
                                                  <p>Head admin</p>
                                                </div>
                                              </div>
                                            </td>
                                            <td>
                                              <h6>Company name 1</h6>
                                              <p>company type</p>
                                            </td>
                                            <td>
                                              <div>
                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                  <p className="text-success">65%</p>
                                                  <p>85/162</p>
                                                </div>
                                                <div className="progress progress-md">
                                                  <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                              </div>
                                            </td>
                                            <td><div className="badge badge-opacity-success">Completed</div></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row flex-grow">
                              <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body card-rounded">
                                    <h4 className="card-title  card-title-dash">Recent Events</h4>
                                    <div className="list align-items-center border-bottom py-2">
                                      <div className="wrapper w-100">
                                        <p className="mb-2 font-weight-medium">
                                          Change in Directors
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                          <div className="d-flex align-items-center">
                                            <i className="mdi mdi-calendar text-muted me-1" />
                                            <p className="mb-0 text-small text-muted">Mar 14, 2019</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="list align-items-center border-bottom py-2">
                                      <div className="wrapper w-100">
                                        <p className="mb-2 font-weight-medium">
                                          Other Events
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                          <div className="d-flex align-items-center">
                                            <i className="mdi mdi-calendar text-muted me-1" />
                                            <p className="mb-0 text-small text-muted">Mar 14, 2019</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="list align-items-center border-bottom py-2">
                                      <div className="wrapper w-100">
                                        <p className="mb-2 font-weight-medium">
                                          Quarterly Report
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                          <div className="d-flex align-items-center">
                                            <i className="mdi mdi-calendar text-muted me-1" />
                                            <p className="mb-0 text-small text-muted">Mar 14, 2019</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="list align-items-center border-bottom py-2">
                                      <div className="wrapper w-100">
                                        <p className="mb-2 font-weight-medium">
                                          Change in Directors
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                          <div className="d-flex align-items-center">
                                            <i className="mdi mdi-calendar text-muted me-1" />
                                            <p className="mb-0 text-small text-muted">Mar 14, 2019</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="list align-items-center pt-3">
                                      <div className="wrapper w-100">
                                        <p className="mb-0">
                                          <a href="#" className="fw-bold text-primary">Show all <i className="mdi mdi-arrow-right ms-2" /></a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                      <h4 className="card-title card-title-dash">Activities</h4>
                                      <p className="mb-0">20 finished, 5 remaining</p>
                                    </div>
                                    <ul className="bullet-line-list">
                                      <li>
                                        <div className="d-flex justify-content-between">
                                          <div><span className="text-light-green">Ben Tossell</span> assign you a task</div>
                                          <p>Just now</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="d-flex justify-content-between">
                                          <div><span className="text-light-green">Oliver Noah</span> assign you a task</div>
                                          <p>1h</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="d-flex justify-content-between">
                                          <div><span className="text-light-green">Jack William</span> assign you a task</div>
                                          <p>1h</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="d-flex justify-content-between">
                                          <div><span className="text-light-green">Leo Lucas</span> assign you a task</div>
                                          <p>1h</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="d-flex justify-content-between">
                                          <div><span className="text-light-green">Thomas Henry</span> assign you a task</div>
                                          <p>1h</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="d-flex justify-content-between">
                                          <div><span className="text-light-green">Ben Tossell</span> assign you a task</div>
                                          <p>1h</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="d-flex justify-content-between">
                                          <div><span className="text-light-green">Ben Tossell</span> assign you a task</div>
                                          <p>1h</p>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="list align-items-center pt-3">
                                      <div className="wrapper w-100">
                                        <p className="mb-0">
                                          <a href="#" className="fw-bold text-primary">Show all <i className="mdi mdi-arrow-right ms-2" /></a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-lg-12">
                                        <div className="d-flex justify-content-between align-items-center">
                                          <h4 className="card-title card-title-dash">Todo list</h4>
                                          <div className="add-items d-flex mb-0">
                                            {/* <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?"> */}
                                            <button className="add btn btn-icons btn-rounded btn-primary todo-list-add-btn text-white me-0 pl-12p"><i className="mdi mdi-plus" /></button>
                                          </div>
                                        </div>
                                        <div className="list-wrapper">
                                          <ul className="todo-list todo-list-rounded">
                                            <li className="d-block">
                                              <div className="form-check w-100">
                                                <label className="form-check-label">
                                                  <input className="checkbox" type="checkbox" /> Lorem Ipsum is simply dummy text of the printing <i className="input-helper rounded" />
                                                </label>
                                                <div className="d-flex mt-2">
                                                  <div className="ps-4 text-small me-3">24 June 2020</div>
                                                  <div className="badge badge-opacity-warning me-3">Due tomorrow</div>
                                                  <i className="mdi mdi-flag ms-2 flag-color" />
                                                </div>
                                              </div>
                                            </li>
                                            <li className="d-block">
                                              <div className="form-check w-100">
                                                <label className="form-check-label">
                                                  <input className="checkbox" type="checkbox" /> Lorem Ipsum is simply dummy text of the printing <i className="input-helper rounded" />
                                                </label>
                                                <div className="d-flex mt-2">
                                                  <div className="ps-4 text-small me-3">23 June 2020</div>
                                                  <div className="badge badge-opacity-success me-3">Done</div>
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="form-check w-100">
                                                <label className="form-check-label">
                                                  <input className="checkbox" type="checkbox" /> Lorem Ipsum is simply dummy text of the printing <i className="input-helper rounded" />
                                                </label>
                                                <div className="d-flex mt-2">
                                                  <div className="ps-4 text-small me-3">24 June 2020</div>
                                                  <div className="badge badge-opacity-success me-3">Done</div>
                                                </div>
                                              </div>
                                            </li>
                                            <li className="border-bottom-0">
                                              <div className="form-check w-100">
                                                <label className="form-check-label">
                                                  <input className="checkbox" type="checkbox" /> Lorem Ipsum is simply dummy text of the printing <i className="input-helper rounded" />
                                                </label>
                                                <div className="d-flex mt-2">
                                                  <div className="ps-4 text-small me-3">24 June 2020</div>
                                                  <div className="badge badge-opacity-danger me-3">Expired</div>
                                                </div>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row flex-grow">
                              <div className="col-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-lg-12">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                          <h4 className="card-title card-title-dash">Type By Amount</h4>
                                        </div>
                                        <canvas className="my-auto" id="doughnutChart" height={200} />
                                        <div id="doughnut-chart-legend" className="mt-5 text-center" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row flex-grow">
                              <div className="col-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-lg-12">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                          <div>
                                            <h4 className="card-title card-title-dash">Leave Report</h4>
                                          </div>
                                          <div>
                                            <div className="dropdown">
                                              <button className="btn btn-secondary dropdown-toggle toggle-dark btn-lg mb-0 me-0" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Month Wise </button>
                                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                                <h6 className="dropdown-header">week Wise</h6>
                                                <a className="dropdown-item" href="#">Year Wise</a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="mt-3">
                                          <canvas id="leaveReport" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row flex-grow">
                              <div className="col-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-lg-12">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                          <div>
                                            <h4 className="card-title card-title-dash">Top Performer</h4>
                                          </div>
                                        </div>
                                        <div className="mt-3">
                                          <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                            <div className="d-flex">
                                              <img className="img-sm rounded-10" src="assets/images/faces/face1.jpg" alt="profile" />
                                              <div className="wrapper ms-3">
                                                <p className="ms-1 mb-1 fw-bold">Brandon Washington</p>
                                                <small className="text-muted mb-0">162543</small>
                                              </div>
                                            </div>
                                            <div className="text-muted text-small">
                                              1h ago
                                            </div>
                                          </div>
                                          <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                            <div className="d-flex">
                                              <img className="img-sm rounded-10" src="assets/images/faces/face2.jpg" alt="profile" />
                                              <div className="wrapper ms-3">
                                                <p className="ms-1 mb-1 fw-bold">Wayne Murphy</p>
                                                <small className="text-muted mb-0">162543</small>
                                              </div>
                                            </div>
                                            <div className="text-muted text-small">
                                              1h ago
                                            </div>
                                          </div>
                                          <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                            <div className="d-flex">
                                              <img className="img-sm rounded-10" src="assets/images/faces/face3.jpg" alt="profile" />
                                              <div className="wrapper ms-3">
                                                <p className="ms-1 mb-1 fw-bold">Katherine Butler</p>
                                                <small className="text-muted mb-0">162543</small>
                                              </div>
                                            </div>
                                            <div className="text-muted text-small">
                                              1h ago
                                            </div>
                                          </div>
                                          <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                            <div className="d-flex">
                                              <img className="img-sm rounded-10" src="assets/images/faces/face4.jpg" alt="profile" />
                                              <div className="wrapper ms-3">
                                                <p className="ms-1 mb-1 fw-bold">Matthew Bailey</p>
                                                <small className="text-muted mb-0">162543</small>
                                              </div>
                                            </div>
                                            <div className="text-muted text-small">
                                              1h ago
                                            </div>
                                          </div>
                                          <div className="wrapper d-flex align-items-center justify-content-between pt-2">
                                            <div className="d-flex">
                                              <img className="img-sm rounded-10" src="assets/images/faces/face5.jpg" alt="profile" />
                                              <div className="wrapper ms-3">
                                                <p className="ms-1 mb-1 fw-bold">Rafell John</p>
                                                <small className="text-muted mb-0">Alaska, USA</small>
                                              </div>
                                            </div>
                                            <div className="text-muted text-small">
                                              1h ago
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
            {/* partial:partials/_footer.html */}
            <Footer/>
            {/* partial */}
          </div>
          {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>)
}


export default Dashboard;