import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Product from './Product';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../redux/actions/ProductActions";
import './product.css';

const Products = () => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
  	const { loading, error, products } = productList;  	

	useEffect(() => {
    	dispatch(listProducts());
  	}, [dispatch]);

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
		                      <h4 className="card-title">Products</h4>
		                      <Link to="/product/add" className="btn btn-outline-primary btn-fw float-right">
					            Add Product
					          </Link>
		                      <p className="card-description">
		                      </p>
		                      <div className="table-responsive">
		                        <table className="table table-hover products-table">
		                          <thead>
		                            <tr>
		                              <th className="product-title">Title</th>
		                              <th className="product-image">Image</th>
		                              <th className="product-price">Price</th>
		                              <th className="product-stock">Stock</th>
		                              <th className="product-action">Action</th>
		                            </tr>
		                          </thead>
		                          <tbody>
		                              {products.map((product) => (
						                <Product product={product} key={product._id} />
						              ))}	                            
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

export default Products;