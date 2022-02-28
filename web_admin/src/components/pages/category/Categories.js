import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';

const Categories = () => {
	return(
		<>
		    <div className="container-scroller">		        
		        <Header/>		        
		        <div className="container-fluid page-body-wrapper">
		          <Sidebar/>
		          <div className="main-panel">
		            <div className="content-wrapper">
		              <div className="row">
		                <div className="col-lg-12 grid-margin stretch-card">
		                  <div className="card">
		                    <div className="card-body">
		                      <h4 className="card-title">Categories</h4>
		                      <p className="card-description">
		                      </p>
		                      <div className="table-responsive">
		                        <table className="table table-hover">
		                          <thead>
		                            <tr>
		                              <th>User</th>
		                              <th>Product</th>
		                              <th>Sale</th>
		                              <th>Status</th>
		                            </tr>
		                          </thead>
		                          <tbody>
		                            <tr>
		                              <td>Jacob</td>
		                              <td>Photoshop</td>
		                              <td className="text-danger"> 28.76% <i className="ti-arrow-down" /></td>
		                              <td><label className="badge badge-danger">Pending</label></td>
		                            </tr>
		                            <tr>
		                              <td>Messsy</td>
		                              <td>Flash</td>
		                              <td className="text-danger"> 21.06% <i className="ti-arrow-down" /></td>
		                              <td><label className="badge badge-warning">In progress</label></td>
		                            </tr>
		                            <tr>
		                              <td>John</td>
		                              <td>Premier</td>
		                              <td className="text-danger"> 35.00% <i className="ti-arrow-down" /></td>
		                              <td><label className="badge badge-info">Fixed</label></td>
		                            </tr>
		                            <tr>
		                              <td>Peter</td>
		                              <td>After effects</td>
		                              <td className="text-success"> 82.00% <i className="ti-arrow-up" /></td>
		                              <td><label className="badge badge-success">Completed</label></td>
		                            </tr>
		                            <tr>
		                              <td>Dave</td>
		                              <td>53275535</td>
		                              <td className="text-success"> 98.05% <i className="ti-arrow-up" /></td>
		                              <td><label className="badge badge-warning">In progress</label></td>
		                            </tr>
		                          </tbody>
		                        </table>
		                      </div>
		                    </div>
		                  </div>
		                </div>		                
		              </div>
		            </div>
		            <Footer/>
		          </div>
		        </div>		        
		      </div>
		</>
		)
}

export default Categories;