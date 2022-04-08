import {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import {getOrderDetails,deliverOrder} from '../../../redux/actions/OrderActions'; 
import { ORDER_UPDATE_RESET } from "../../../redux/constants/OrderConstants";
import { toast } from "react-toastify";
import {ToastObjects} from '../../../redux/actions/toastObject'; 
import './order.css';

const EditOrder = ({match}) => {	
  const orderId = match.params.id;
  const [submitted, setSubmitted] = useState(false);  
  const dispatch = useDispatch();

  const {userLogin: { userInfo :{data} }} = useSelector((state) => state);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  console.log("order",order)

  useEffect(() => {
  	if (order._id !== orderId) {         
        dispatch(getOrderDetails(orderId)); 
    }    
  }, [order,dispatch, orderId]);

	const deliverHandler = (e) => {
	    e.preventDefault();	    
	    dispatch(deliverOrder(orderId));
	  };

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
				                     	<div className="clearfix mb-4">
										  <h4 className="float-left">Order Details</h4>
										  <Link to="/orders" className="btn btn-outline-primary float-right">Back to Orders</Link>
										</div>				                        
				                        <form className="form-sample clear-fix">
				                           <div className="card">
											  <h5 className="card-header">
											  	<div className="float-left">
												  	<span>
												  		<i className="fa fa-calendar"></i>
												  		<b>{moment(order.createdAt).format('llll')}</b>
												  	</span>
												  	<br/>											  	
												  	<small>
												  	Order ID: {order._id}
												  	</small>										  	
											  	</div>
											  	<div className="float-right">
											  	{order.isDelivered ? (
								                    <span className="btn btn-success me-2 cursor-auto">Delivered on {moment(order.deliveredAt).format('llll')}</span>
								                  ) : (
								                    <>
								                      {
								                      	loading ? 
								                      	"" 
								                      	: 
								                      	<button className="btn btn-primary me-2" onClick={deliverHandler}>Mark as Delivered</button>
								                  	  }
								                    </>
								                  )}

											  	</div>
											  </h5>

											  <div className="card-body">
											    <div className="row">
												  <div className="col-sm-4">
												    <div className="card">
												      <div className="card-body main-lable">
												        <article className="icontext align-items-start">
														   <span className="icon icon-sm rounded-circle alert-success"><i className="text-success fa fa-user" /></span>
														   <div className="text">
														      <h5 className="card-title mb-2">Customer</h5>
														      <p className="mb-1">{order.shippingAddress && order.shippingAddress.customer_name} <br /><a href="mailto:{data[0].email}">{data[0].email}</a></p>
														   </div>
														</article>
												      </div>
												    </div>
												  </div>
												  <div className="col-sm-4">
												    <div className="card">
												      <div className="card-body main-lable">
												        <article className="icontext align-items-start">
														   <span className="icon icon-sm rounded-circle alert-success"><i className="text-success fa fa-truck" /></span>
														   <div className="text">
														      <h5 className="card-title mb-2">Order info</h5>
														      <p className="mb-1">
														      	Pay method: {order.paymentMethod}
														      </p>
														      <p className="mb-1">
														      	Status: {order.isPaid ? <span className="badge badge-pill badge-success">Paid</span> : <span className="badge badge-pill badge-danger">Not Paid</span>}
														      </p>
														   </div>
														</article>   
												      </div>
												    </div>
												  </div>
												  <div className="col-sm-4">
												    <div className="card">
												      <div className="card-body main-lable">
												        <article className="icontext align-items-start">
														   <span className="icon icon-sm rounded-circle alert-success"><i className="text-success fa fa-map-marker" /></span>
														   <div className="text">
														      <h5 className="card-title mb-2">Deliver to</h5>
														      <p className="mb-1 card-text">
														      	{order.shippingAddress && order.shippingAddress.street1 }<br/>
														      	{order.shippingAddress && order.shippingAddress.street2 ? order.shippingAddress.street2 + <br/> : ""}
														      	{order.shippingAddress && order.shippingAddress.city}, {order.shippingAddress && order.shippingAddress.state } {order.shippingAddress && order.shippingAddress.zip}<br/>
														      	{order.shippingAddress && order.shippingAddress.country}<br/>
														      </p>
														   </div>
														</article> 
												      </div>
												    </div>
												  </div>
												</div>
												<div className="row mt-4">
													{
														(order.orderItems && order.orderItems.length) > 0 ? 
														(
															<div className="col-sm-12">
																<table className="table">
																  <thead className="thead-light">
																    <tr>
																      <th scope="col">Product</th>
																      <th scope="col">Unit Price</th>
																      <th scope="col">Quantity</th>
																      <th scope="col" className="text-end">Total</th>
																    </tr>
																  </thead>
																  <tbody>
																  {order.orderItems.map((item) => (
													                <tr key={item._id}>
																       <td>
																	      <div className="itemside">
																	         <div className="left">
																	         	<img src={item.image} alt={item.name} className="img-xs" />
																	         	</div>
																	         <div className="info">{item.name}</div>
																	      </div>
																	   </td>
																	   <td>${item.price}</td>
																	   <td>{item.qty}</td>
																	   <td className="text-end">${item.price * item.qty}</td>
																    </tr>
													              ))}
																    <tr>
																      <td colSpan="4">
																		   <article className="float-right">
																		      <dl className="dlist">
																		         <dt>Subtotal:</dt>
																		         <dd>${(order.itemsPrice).toFixed(2)}</dd>
																		      </dl>
																		      <dl className="dlist">
																		         <dt>Shipping cost:</dt>
																		         <dd>${(order.shippingPrice).toFixed(2)}</dd>
																		      </dl>
																		      <dl className="dlist">
																		         <dt>Tax:</dt>
																		         <dd>${(order.taxPrice).toFixed(2)}</dd>
																		      </dl>
																		      <dl className="dlist">
																		         <dt>Grand total:</dt>
																		         <dd><b className="h5">${((order.totalPrice)/100).toFixed(2)}</b></dd>
																		      </dl>		      
																		   </article>
																		</td>
																    </tr>
																  </tbody>
																</table>
															</div>
														) : (
														<div className="text-center">No Item Available</div>
														)
													}
													
												</div>
											  </div>
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

export default EditOrder;