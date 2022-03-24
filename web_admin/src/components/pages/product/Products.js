import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Product from './Product';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../redux/actions/ProductActions";
import ReactPaginate from 'react-paginate';
import './product.css';

const Products = () => {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(0);	

	const productList = useSelector((state) => state.productList);
  	const { loading, error, products, numOfPages, sortBy, searchText } = productList;  	

  	let pageNum = 0;
  	let productsPerPage = 10;
  	const handlePageClick = (data) => {
  		pageNum = data.selected;
  		setCurrentPage(pageNum);	
  		dispatch(listProducts(pageNum,productsPerPage, sortBy, searchText));
  	}

	useEffect(() => {
    	dispatch(listProducts(pageNum,productsPerPage, sortBy, searchText));
  	}, [productsPerPage]);

  	const handleSortBy = (e) => {
  		const sortByValue = e.target.value;
  		setCurrentPage(0);
  		dispatch(listProducts(pageNum,productsPerPage, sortByValue, searchText));
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
		                      <h4 className="card-title">Products</h4>
		                      <Link to="/product/add" className="btn btn-outline-primary btn-fw float-right">
					            Add Product
					          </Link>
		                      <div className="float-right mr-5">
			                      <select className="form-select" aria-label="Sort By" onChange={handleSortBy}>
									  <option value="">Sort By</option>
									  <option value="name">Name</option>
									  <option value="price">Price</option>
									</select>
		                      </div>		                      
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