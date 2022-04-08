import {useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import Order from './Order';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../../redux/actions/OrderActions";
import ReactPaginate from 'react-paginate';
import { CSVLink } from "react-csv";
import axios from 'axios';
import './order.css';

const headers = [
  { label: "Name", key: "shippingAddress.customer_name"},
  { label: "Email", key: "user_info[0].email"}
];

const Products = () => {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(0);	
	const [searchTerm, setSearchTerm] = useState('');
	const [csvData, setCsvData] = useState([]);
	const myRefBtn= useRef(null);
	
	const orderList = useSelector((state) => state.orderList);
	const { loading, error, orders, numOfPages, sortBy, searchText } = orderList;  	

  	let pageNum = 0;
  	let ordersPerPage = 10;
  	const handlePageClick = (data) => {
  		pageNum = data.selected;
  		setCurrentPage(pageNum);	
  		dispatch(listOrders(pageNum,ordersPerPage, sortBy, searchText));
  	}

	useEffect(() => {
    	dispatch(listOrders(pageNum,ordersPerPage, sortBy, searchText));
  	}, [ordersPerPage]);

  	//Call Function after stop typing text
  	useEffect(() => {
	    const delaySearchFunc = setTimeout(() => {
	      setCurrentPage(0);
		  dispatch(listOrders(pageNum,ordersPerPage, sortBy, searchTerm));	      
	    }, 1500)

	    return () => clearTimeout(delaySearchFunc)
	}, [searchTerm])

  	const handleSortBy = (e) => {
  		const sortByValue = e.target.value;
  		setCurrentPage(0);
  		dispatch(listOrders(pageNum,ordersPerPage, sortByValue, searchText));
  	}

  	const getCsvOrders = async () => {
  		const responseData = await axios.get(`/orders/all`);
    	const data = responseData.data;
    	setCsvData(data.data);
    	myRefBtn.current.link.click();
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
		                <div className="col-lg-12 grid-margin stretch-card">
		                  <div className="card">
		                    <div className="card-body">
		                      <h4 className="card-title">Orders</h4>
		                      <div className="row">
	                              <div className="col-md-12">
	                                 <div className="form-group row">	                                 
	                                    <div className="offset-md-2 col-sm-4">
						                        <input type="text" placeholder="Search" className="form-control" 
		                                        name="search" onChange={(e) => setSearchTerm(e.target.value)}/>
	                                    </div>
	                                    <div className="col-sm-3 float-right">
	                                    	<select className="form-select form-control" aria-label="Sort By" onChange={handleSortBy}>
											  <option value="">Sort By</option>
											  <option value="status">Status</option>											  
											</select>
	                                    </div>
	                                    <div className="col-sm-1">
	                                    	<i className="fa fa-download download-csv" onClick={getCsvOrders} title="Download CSV"/>
	                                    	<CSVLink 
	                                    		data={csvData} 
	                                    		headers={headers}
      											className="d-none"
      											ref={myRefBtn}
      											filename={"Order-Data.csv"}
	                                    		>											  
											</CSVLink>											
	                                    </div>
	                                 </div>
	                              </div>				                              
	                           </div>
		                      <div className="float-right mr-5">
			                      
		                      </div>		                      
		                      <p className="card-description">
		                      </p>
		                      <div className="table-responsive">
		                        <table className="table table-hover products-table">
		                          <thead>
		                            <tr>
		                              <th className="order-name">Name</th>
		                              <th className="order-email">Email</th>
		                              <th className="order-total">Total</th>
		                              <th className="order-paid">Paid</th>
		                              <th className="order-date">Date</th>
		                              <th className="order-status">Status</th>
		                              <th className="order-action">Action</th>
		                            </tr>
		                          </thead>
		                          <tbody>
		                              {orders.map((order) => (
						                <Order order={order} key={order._id} />
						              ))}	                            
		                          </tbody>
		                        </table>
		                      </div>
		                      <div className={ 'mt-4' + (numOfPages ? '' : ' d-none')}>
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
		            <Footer/>
		          </div>
		        </div>		        
		      </div>
		</>
		)
}

export default Products;