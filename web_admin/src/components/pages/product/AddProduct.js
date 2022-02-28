import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';

const AddProduct = () => {
	return(
		<>
		    <div className="container-scroller">
				<Header/>
				<div className="container-fluid page-body-wrapper">
				   <Sidebar/>
				   <div className="main-panel">
				        <div className="content-wrapper">
					        <div className="row">
				               <div className="col-12 grid-margin">
				                  <div className="card">
				                     <div className="card-body">
				                        <h4 className="card-title">Horizontal Two column</h4>
				                        <form className="form-sample">
				                           <p className="card-description">
				                              Personal info
				                           </p>
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">First Name</label>
				                                    <div className="col-sm-9">
				                                       <input type="text" className="form-control" />
				                                    </div>
				                                 </div>
				                              </div>
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Last Name</label>
				                                    <div className="col-sm-9">
				                                       <input type="text" className="form-control" />
				                                    </div>
				                                 </div>
				                              </div>
				                           </div>
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Gender</label>
				                                    <div className="col-sm-9">
				                                       <select className="form-control">
				                                          <option>Male</option>
				                                          <option>Female</option>
				                                       </select>
				                                    </div>
				                                 </div>
				                              </div>
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Date of Birth</label>
				                                    <div className="col-sm-9">
				                                       <input className="form-control" placeholder="dd/mm/yyyy" />
				                                    </div>
				                                 </div>
				                              </div>
				                           </div>
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Category</label>
				                                    <div className="col-sm-9">
				                                       <select className="form-control">
				                                          <option>Category1</option>
				                                          <option>Category2</option>
				                                          <option>Category3</option>
				                                          <option>Category4</option>
				                                       </select>
				                                    </div>
				                                 </div>
				                              </div>
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Membership</label>
				                                    <div className="col-sm-4">
				                                       <div className="form-check">
				                                          <label className="form-check-label">
				                                          <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios1" defaultValue defaultChecked />
				                                          Free
				                                          </label>
				                                       </div>
				                                    </div>
				                                    <div className="col-sm-5">
				                                       <div className="form-check">
				                                          <label className="form-check-label">
				                                          <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios2" defaultValue="option2" />
				                                          Professional
				                                          </label>
				                                       </div>
				                                    </div>
				                                 </div>
				                              </div>
				                           </div>
				                           <p className="card-description">
				                              Address
				                           </p>
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Address 1</label>
				                                    <div className="col-sm-9">
				                                       <input type="text" className="form-control" />
				                                    </div>
				                                 </div>
				                              </div>
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">State</label>
				                                    <div className="col-sm-9">
				                                       <input type="text" className="form-control" />
				                                    </div>
				                                 </div>
				                              </div>
				                           </div>
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Address 2</label>
				                                    <div className="col-sm-9">
				                                       <input type="text" className="form-control" />
				                                    </div>
				                                 </div>
				                              </div>
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Postcode</label>
				                                    <div className="col-sm-9">
				                                       <input type="text" className="form-control" />
				                                    </div>
				                                 </div>
				                              </div>
				                           </div>
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">City</label>
				                                    <div className="col-sm-9">
				                                       <input type="text" className="form-control" />
				                                    </div>
				                                 </div>
				                              </div>
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Country</label>
				                                    <div className="col-sm-9">
				                                       <select className="form-control">
				                                          <option>America</option>
				                                          <option>Italy</option>
				                                          <option>Russia</option>
				                                          <option>Britain</option>
				                                       </select>
				                                    </div>
				                                 </div>
				                              </div>
				                            </div>
				                            <div className="text-center">
				                            	<button type="submit" class="btn btn-primary me-2">Submit</button>
                    							<button class="btn btn-light">Cancel</button>
                    						</div>
				                        </form>
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

export default AddProduct;