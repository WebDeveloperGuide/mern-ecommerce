import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import {createProduct} from '../../../redux/actions/ProductActions'; 

const AddProduct = () => {

  const [submitted, setSubmitted] = useState(false);  
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, register_status } = userRegister;


  const [formState,setFormState] = useState({
        values:{}       
    });

  const handleChange = (event) => {
        setFormState(formState =>({
          ...formState,
          values:{
            ...formState.values,
            [event.target.name]:
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value
          }
          
        }));
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); 
        const { title, description, image } = formState.values;
        if (title && description && image) {
            dispatch(createProduct(formState.values));
            setFormState({values:{}});
            setSubmitted(false);
        }
    }

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
				                        <h4 className="card-title">Add Product</h4>
				                        <form className="form-sample" onSubmit={handleSubmit}>
				                           <p className="card-description">				                              
				                           </p>
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Title</label>
				                                    <div className="col-sm-9">
									                        <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.title ? ' is-invalid' : '')} 
					                                        name="title"                                
					                                        onChange={handleChange}
					                                        value={formState.values.title || ''}
					                                        />
					                                        {submitted && !formState.values.title &&
					                                            <div className="inline-errormsg">Title is required</div>
					                                        }
				                                    </div>
				                                 </div>
				                              </div>				                              
				                           </div>
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Description</label>
				                                    <div className="col-sm-9">
				                                       <textarea rows={5} cols={5} className={'form-control form-control-lg' + (submitted && !formState.values.title ? ' is-invalid' : '')} 
					                                        name="description"                          
					                                        onChange={handleChange}
					                                        value={formState.values.description || ''}
					                                        />
					                                        {submitted && !formState.values.description &&
					                                            <div className="inline-errormsg">Description is required</div>
					                                        }
				                                    </div>
				                                 </div>
				                              </div>				                              
				                           </div>
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Image URL</label>
				                                    <div className="col-sm-9">
				                                       <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.image ? ' is-invalid' : '')} 
					                                        name="image" 
					                                        onChange={handleChange}
					                                        value={formState.values.image || ''}
					                                        />
					                                        {submitted && !formState.values.image &&
					                                            <div className="inline-errormsg">Image is required</div>
					                                        }
				                                    </div>
				                                 </div>
				                              </div>				                              
				                           </div>
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Size</label>
				                                    <div className="col-sm-9">
				                                       <input type="text" className="form-control form-control-lg"
					                                        name="size" 
					                                        onChange={handleChange}
					                                        value={formState.values.size || ''}
					                                        />					                                        
				                                    </div>
				                                 </div>
				                              </div>				                              
				                           </div>
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Color</label>
				                                    <div className="col-sm-9">
				                                       <input type="text" className="form-control form-control-lg"
					                                        name="color" 
					                                        onChange={handleChange}
					                                        value={formState.values.color || ''}
					                                        />			
				                                    </div>
				                                 </div>
				                              </div>				                              
				                           </div>
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Price</label>
				                                    <div className="col-sm-9">
				                                       <input type="number" className="form-control form-control-lg"
					                                        name="price" 
					                                        onChange={handleChange}
					                                        value={formState.values.price || ''}
					                                        />	
				                                    </div>
				                                 </div>
				                              </div>				                              
				                           </div>
				                           
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Category</label>
				                                    <div className="col-sm-9">
				                                       <select className="form-control" name="category" multiple>
				                                          <option value="man">Man</option>
				                                          <option value="woman">Woman</option>
				                                       </select>
				                                    </div>
				                                 </div>
				                              </div>				                              
				                           </div>
				                           <div className="row">
				                              <div className="col-md-6">
				                                 <div className="form-group row">
				                                    <label className="col-sm-3 col-form-label">Stock</label>
				                                    <div className="col-sm-9">
				                                       <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.stock ? ' is-invalid' : '')} 
					                                        name="stock" 
					                                        onChange={handleChange}
					                                        value={formState.values.stock || ''}
					                                        />	
					                                        {submitted && !formState.values.stock &&
					                                            <div className="inline-errormsg">Stock is required</div>
					                                        }		
				                                    </div>
				                                 </div>
				                              </div>				                              
				                           </div>
				                            <div className="text-center">
				                            	<button type="submit" className="btn btn-primary me-2">Submit</button>
                    							<button className="btn btn-light">Cancel</button>
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