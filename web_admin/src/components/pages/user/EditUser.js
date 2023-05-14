
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { editUser, updateUser } from '../../../redux/actions/userActions';
import { ToastObjects } from '../../../redux/actions/toastObject';
import { USER_UPDATE_RESET } from '../../../redux/constants/UserConstants';
import { Link } from 'react-router-dom';
import FileBase64 from 'react-file-base64';


const EditUser = ({ match }) => {

	const userId = match.params.id;
	console.log(userId);
	const [submitted, setSubmitted] = useState(false);
	const dispatch = useDispatch();
	const userEdit = useSelector((state) => state.userEdit);
	const { loading, error, user } = userEdit;
	console.log(userEdit);
	const userUpdate = useSelector((state) => state.userUpdate);
	const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate;
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const [formState, setFormState] = useState({
		values: {}
	});

	const [userState, setUserState] = useState(userInfo);
	const [name, setName] = useState('');
	const [lastname, setLastname] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);
	const [img, setImg] = useState('');



	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: USER_UPDATE_RESET });
			toast.success('Update user successfully!', ToastObjects);
		}
		if (!user || user._id !== userId) {
			dispatch(editUser(userId));
		} else {
			setFormState((formState) => ({
				values: user
			}));
		}
	}, [dispatch, user, userId, successUpdate]);



	const handleChange = (event) => {
		setFormState((formState) => ({
			...formState,
			values: {
				...formState.values,
				[event.target.id]:
					event.target.type === 'checkbox'
						? event.target.checked
						: event.target.value
			}

		}));
	}

	const submitHandler = (e) => {
		e.preventDefault();
		setSubmitted(true);
		let { name, lastname, username, email, isAdmin, img } = formState.values;
		if (name && lastname && username && email) {
			dispatch(updateUser({ _id: userId, name, lastname, username, email, isAdmin, img }));
			setFormState({ values: {} });
			setSubmitted(false);
			setFormState({ values: {} });
		}
		else {
			toast.error('Please fill all fields!', ToastObjects);
		}

	};


	const refreshToken = async () => {
		try {
			const res = await axios.post("auth/refreshToken", { token: userInfo.refreshToken });
			setUserState({
				...userState,
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
			const decodedToken = jwt_decode(userState.token);
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
	console.log('values', formState.values)

	//uploadFileHandler
	const uploadFileHandler = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('img', file);
		setImg(formData);
	};


	return (
		<>
			<div className="container-scroller">
				<Header />
				<div className="container-fluid page-body-wrapper">
					<Sidebar />
					<div className="main-panel">
						<div className="content-wrapper">
							<div className="row">
								<div className="col-12 grid-margin">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Edit User</h4>
											<form className="form-sample" onSubmit={submitHandler}>
												<p className="card-description"> Personal info </p>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="name">First Name</label>
															<input type="text" className="form-control" id="name" placeholder="Name" value={formState.values.name} onChange={handleChange} />
															{submitted && !formState.values.name &&
																<div className="text-danger">Name is required</div>
															}
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="lastname">Last Name</label>
															<input type="text" className="form-control" id="lastname" placeholder="Last Name" value={formState.values.lastname} onChange={handleChange} />
															{submitted && !formState.values.lastname &&
																<div className="text-danger">Lastname is required</div>
															}
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="username">Username</label>
															<input type="text" className="form-control" id="username" placeholder="Username" value={formState.values.username} onChange={handleChange} />
															{submitted && !formState.values.username &&
																<div className="text-danger">Username is required</div>
															}
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="email">Email address</label>
															<input type="email" className="form-control" id="email" placeholder="Email" value={formState.values.email} onChange={handleChange} />
															{submitted && !formState.values.email &&
																<div className="text-danger">Email is required</div>
															}
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="img">Image</label>
															
															{/* <input type="text" className="form-control" id="img" placeholder="Image" src={formState.values.img} onChange={handleChange} /> */}
															
															<img className="activator" style={{ width: '100%', height: 100, width: 100 }} src={formState.values.img} />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="isAdmin">Is Admin</label>
															<select className="form-control" id="isAdmin" checked={formState.values.isAdmin} onChange={handleChange} >
																<option value="true">True</option>
																<option value="false">False</option>
															</select>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															{/* <label htmlFor="imgFile">Image File</label> */}
															{/* <input type="file" className="form-control" id="imgFile" onChange={uploadFileHandler} /> */}
															{/* {uploading && <LoadingBox />} */}
															<FileBase64
																type="file"
																multiple={false}
																onDone={({ base64 }) => setFormState({ ...formState, values: { ...formState.values.img, img: base64 } })}
															/>
														</div>
													</div>
												</div>
												<button type="submit" className="btn btn-primary mr-2">Submit</button>
												<Link to="/users" className="btn btn-light">Cancel</Link>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Footer />
					</div>
				</div>
			</div>
		</>
	)
}
export default EditUser;