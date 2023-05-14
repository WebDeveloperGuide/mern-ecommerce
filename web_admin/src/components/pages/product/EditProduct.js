import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import { editProduct } from '../../../redux/actions/ProductActions';
import { updateProduct } from '../../../redux/actions/ProductActions';
import { PRODUCT_UPDATE_RESET } from "../../../redux/constants/ProductConstants";
import { toast } from "react-toastify";
import { ToastObjects } from '../../../redux/actions/toastObject';
import axios from 'axios';
import jwt_decode from 'jwt-decode'

<<<<<<< Updated upstream
const EditProduct = ({match}) => {	
  const productId = match.params.id;
  const [submitted, setSubmitted] = useState(false);  
  const dispatch = useDispatch();

  const productEdit = useSelector((state) => state.productEdit);
  const { loading, error, product } = productEdit;
=======
const EditProduct = ({ match }) => {
	const productId = match.params.id;

	const [submitted, setSubmitted] = useState(false);
	const dispatch = useDispatch();
>>>>>>> Stashed changes

	const productEdit = useSelector((state) => state.productEdit);
	const { loading, error, product } = productEdit;
	console.log('productEdit', productEdit)


	const productUpdate = useSelector((state) => state.productUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = productUpdate;

<<<<<<< Updated upstream
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); 
        const { title, description, image } = formState.values;
        if (title && description && image) {
            dispatch(updateProduct(formState.values));         
            setSubmitted(false);
        }
    }
=======
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
>>>>>>> Stashed changes

	const [formState, setFormState] = useState({
		values: {}
	});
	const [user, setUser] = useState(userInfo);

	useEffect(() => {	
		setFormState({ values: {} })
		if (successUpdate) {
			dispatch({ type: PRODUCT_UPDATE_RESET });
			toast.success("Product updated successfully", ToastObjects);
		} else {
			if (!product.title || product._id !== productId) {
				dispatch(editProduct(productId));
			} else {
				setFormState({ values: product })
			}
		}

	}, [product, dispatch, productId, successUpdate]);


	const handleChange = (event) => {
		setFormState(formState => ({
			...formState,
			values: {
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
		const { title, desc, img } = formState.values;
		if (title && desc && img) {
			dispatch(updateProduct(formState.values, userInfo));
			setFormState({ values: {} });
			setSubmitted(false);

		}
	}
	const refreshToken = async () => {
		try {
			const res = await axios.post("auth/refreshToken", { token: userInfo.refreshToken });
			setUser({
				...user,
				token: res.data.token,
				refreshToken: res.data.refreshToken,
			});
			return res.data;
		} catch (err) {
			console.log(err);
		}
	};

	const axiosJWT = axios.create()

	axiosJWT.interceptors.request.use(
		async (config) => {
			let currentDate = new Date();
			const decodedToken = jwt_decode(user.token);
			if (decodedToken.exp * 1000 < currentDate.getTime()) {
				const data = await refreshToken();
				config.headers["authorization"] = "Bearer " + data.token;
			}
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
	///////////////////////////////////////////////////////////////////////////////// 
	console.log('values', formState.values)

	const [sexAdd, setSexAdd] = useState('men');
	const cateMen = ['', 'Polo', 'T-shirts', 'Somi', 'WesternPants', 'Shorts']
	const cateWomen = ['', 'Polo', 'T-shirts', 'Somi', 'Dress', 'FemaleJeans']

	const [size_color, setSize_color] = useState({
		S: { white: 0, black: 0, red: 0, blue: 0 },
		M: { white: 0, black: 0, red: 0, blue: 0 },
		L: { white: 0, black: 0, red: 0, blue: 0 },
		XL: { white: 0, black: 0, red: 0, blue: 0 },
		XXL: { white: 0, black: 0, red: 0, blue: 0 },
	})

	const [filterTags, setFilterTags] = useState([])

	const [sizeSelect, setSizeSelect] = useState([])

	const filterHandler = (event) => {
		if (event.target.checked) {
			setFilterTags([...filterTags, event.target.value])
		} else {
			setFilterTags(
				filterTags.filter((filterTag) => filterTag !== event.target.value)
			)
		}
	}

	useEffect(() => {
		if (sizeSelect.length === 0) {
			setShowColor('')
		}
	}, [sizeSelect])



	const handleShowColor = (e) => {
		setShowColor(e.target.value)
	}

	const filterQuantity = (e, k) => {
		setSize_color({
			...size_color,
			[showColor]: {
				...size_color[showColor],
				[e]: k.target.value
			}
		})

	}


	const [showColor, setShowColor] = useState('')

	const handleSizeColor = (e) => {
		if (e.target.checked) {
			setSizeSelect([...sizeSelect, e.target.value])
		} else {
			setSizeSelect(
				sizeSelect.filter((sizeSelect) => sizeSelect !== e.target.value)
			)
		}
	}


	useEffect(() => {
		setFormState(formState => ({
			...formState,
			values: {
				...formState.values,
				'size_color': size_color

			}
		}))
	}, [size_color])


	useEffect(() => {
		Object.keys(size_color).forEach(item => {
			let check = false
			sizeSelect.forEach(e => {
				if (item === e) {
					check = true
				}
			})
			!check && setSize_color({
				...size_color,
				[item]: { white: 0, black: 0, red: 0, blue: 0 }
			})
		})


	}, [sizeSelect])
	return (
		<>
			<div className="container-scroller">
				<Header />
				<div className="container-fluid page-body-wrapper">
<<<<<<< Updated upstream
				   <Sidebar/>
				   <div className="main-panel">
				        <div className="content-wrapper">
					        <div className="row">
				               <div className="col-12 grid-margin">
				                  <div className="card">
				                     <div className="card-body">
				                        <h4 className="card-title">Edit Product</h4>
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
				                            	<button type="submit" className="btn btn-primary me-2">Update</button>
                    							<Link to="/products"><button className="btn btn-light">Cancel</button></Link>
                    						</div>
				                        </form>
				                     </div>
				                  </div>
				               </div>
				            </div>
			            </div>
				       <Footer/>
				    </div>
=======
					<Sidebar />
					<div className="main-panel">
						<div className="content-wrapper">
							<div className="row">
								<div className="col-12 grid-margin">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Edit Product</h4>
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
																	name="desc"
																	onChange={handleChange}
																	value={formState.values.desc || ''}
																/>
																{submitted && !formState.values.desc &&
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
																	value={formState.values.img || ''}
																/>
																{submitted && !formState.values.img &&
																	<div className="inline-errormsg">Image is required</div>
																}
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
															<label className="col-sm-3 col-form-label">category</label>
															<div className="col-sm-9">
																<select className="form-control form-control-lg" name="category" onChange={handleChange} value={formState.values.category || ''}>
																	{sexAdd === 'men' ? (cateMen.map((e, index) => (
																		<option key={index} value={e}>{e}</option>
																	))) :
																		(cateWomen.map((e, index) => (
																			<option key={index} value={e}>{e}</option>
																		)))
																	}
																</select>
															</div>
														</div>
													</div>
												</div>


												<div className="row">
													<div className="col-md-6">
														<div className="form-group row">
															<label className="col-sm-3 col-form-label">Size_Color</label>
															<div className="col-sm-9" >
																<ul>
																	{Object.keys(size_color).map((e, index) => (
																		<li key={index} style={{ display: 'inline-block' }}>
																			<div>
																				<input
																					type='checkbox'
																					name={e}
																					value={e}
																					onClick={handleSizeColor}
																					//checked={productEdit.product.size_color[e]}

																				/>
																				<span>{e}</span>
																			</div>
																		</li>
																	))}
																</ul>

																<ul>
																	{sizeSelect.map((e, index) => (
																		<li key={index} style={{ display: 'inline-block' }}  >
																			<button type='button' value={e} onClick={handleShowColor}>{e}</button>
																		</li>
																	))}
																</ul>
																<>
																	{sizeSelect.length !== 0 && showColor.length !== 0 && (
																		<ul>
																			{Object.keys(size_color[showColor]).map((e, index) => (
																				<li key={index}>
																					<div>
																						<span>
																							<input
																								type='checkbox'
																								onChange={filterHandler}
																								value={e}
																								checked={size_color[showColor][e] > 0}

																							/>
																							{e}
																						</span>
																						{
																							filterTags.includes(e) && (
																								<input
																									type='number'
																									className="form-control form-control-sm"
																									onChange={(k) => filterQuantity(e, k)}
																									//defaultValue={size_color[showColor][e]}
																									value={size_color[showColor][e]}
																								/>
																							)
																						}
																					</div>
																				</li>
																			))}
																		</ul>
																	)}
																</>
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group row">
															<label className="col-sm-3 col-form-label">In Stock</label>
															<div className="col-sm-9">
																<select className="form-control" name="inStock" onChange={handleChange} defaultValue={formState.values.inStock}>
																	<option value="true">Yes</option>
																	<option value="false">Empty</option>
																</select>
															</div>
														</div>
													</div>
												</div>
												<div className="text-center">
													<button type="submit" className="btn btn-primary me-2">Update</button>
													<Link to="/products"><button className="btn btn-light">Cancel</button></Link>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Footer />
					</div>
>>>>>>> Stashed changes
				</div>
			</div>
		</>
	)
}

export default EditProduct;