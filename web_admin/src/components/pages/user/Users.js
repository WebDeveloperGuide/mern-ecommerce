import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import User from './User';
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../../../redux/actions/userActions";
import ReactPaginate from 'react-paginate';
import { CSVLink } from "react-csv";
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './user.css';

const headers = [
	{ label: "Name", key: "name" },
	{ label: "Lastname", key: "lastname" },
	{ label: "Username", key: "username" },
	{ label: "Email", key: "email" },
	{ label: "Admin", key: "isAdmin" },
	{ label: "Created At", key: "createdAt" }

];


const Users = () => {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');
	const [csvData, setCsvData] = useState([]);
	const myRefBtn = useRef(null);

	const userList = useSelector((state) => state.userList);
	const { loading, error, users, numOfPages, sortBy, searchText } = userList;
	console.log(userList);

	let pageNum = 0;
	let usersPerPage = 5;
	const handlePageClick = (data) => {
		pageNum = data.selected;
		setCurrentPage(pageNum);
		dispatch(listUsers(pageNum, usersPerPage, sortBy, searchText));
	}

	useEffect(() => {
		dispatch(listUsers(pageNum, usersPerPage, sortBy, searchText));
	}, [usersPerPage]);

	//Call Function after stop typing text
	useEffect(() => {
		const delaySearchFunc = setTimeout(() => {
			setCurrentPage(0);
			dispatch(listUsers(pageNum, usersPerPage, sortBy, searchTerm));
		}, 1500)

		return () => clearTimeout(delaySearchFunc)
	}
		, [searchTerm])

	const handleSortBy = (e) => {
		const sortByValue = e.target.value;
		setCurrentPage(0);
		dispatch(listUsers(pageNum, usersPerPage, sortByValue, searchText));
	}

	const getCsvUsers = async () => {
		const responseData = await axios.get(`/users`);
		const data = responseData.data;
		setCsvData(data);
		myRefBtn.current.link.click();
	}

	return (
		<>
			<div className="container-scroller">
				<Header />
				<div className="container-fluid page-body-wrapper">
					<Sidebar />
					<div className="main-panel">
						<div className="content-wrapper">
							<div className="row">
								<div className="col-lg-12 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Users</h4>
											<div className="row">
												<div className="col-lg-4">
													<div className="form-group">
														<label>Sort By</label>
														<select className="form-control" onChange={handleSortBy}>
															<option value="name">Name</option>
															<option value="email">Email</option>
															<option value="createdAt">Created At</option>
														</select>
													</div>
												</div>
												<div className="col-lg-4">
													<div className="form-group">
														<label>Search</label>
														<input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />

													</div>
												</div>
												<div className="col-sm-2">
													<div className="form-group">
														<label>Action</label>
														<Link to="/users/add" className="btn btn-primary btn-block">Add User</Link>
													</div>
													</div>

												<div className="col-sm-1">
													<div className="form-group">

														<label>Download</label>
														<i className="fa fa-download download-csv" onClick={getCsvUsers} title="Download CSV" />
														<CSVLink
															data={csvData}
															headers={headers}
															className="d-none"
															ref={myRefBtn}
															filename={"Users-Data.csv"}
														>
														</CSVLink>
													</div>
												</div>
												
											</div>

											<div className="table-responsive">
												<table className="table table-striped">
													<thead>
														<tr>
															<th> Avata </th>
															<th> Name </th>
															<th> Email </th>
															<th> Created At </th>
															<th> Actions </th>
														</tr>
													</thead>
													<tbody>
														{users.map((user) => (
															<User user={user} key={user._id} />
														))}
													</tbody>
												</table>
											</div>
											<div className="row">
												<div className="col-lg-12">
													<div className="d-flex justify-content-center">
														<div className={'mt-4' + (numOfPages ? '' : ' d-none')}>
															<ReactPaginate
																previousLabel={"Previous"}
																nextLabel={"Next"}
																breakLabel={"..."}
																pageCount={numOfPages}
																marginPagesDisplayed={2}
																pageRangeDisplayed={3}
																onPageChange={handlePageClick}
																containerClassName={"pagination justify-content-center"}
																pageClassName={"page-item"}
																pageLinkClassName={"page-link"}
																previousClassName={"page-item"}
																previousLinkClassName={"page-link"}
																nextClassName={"page-item"}
																nextLinkClassName={"page-link"}
																breakClassName={"page-item"}
																breakLinkClassName={"page-link"}
																activeClassName={"active"}
																forcePage={currentPage}
															/>
														</div>
													</div>
												</div>
											</div>
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

export default Users;
