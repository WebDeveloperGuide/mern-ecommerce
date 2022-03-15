import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Filters from './Filters';
import Product from './Product';
import {getProducts} from '../redux/actions/productActions';
import Loading from '../components/Loading';

const Products = () => {

	const products = useSelector((state)=> state.allProducts.products);
	
	const renderList = products.map((product)=>{
		return(
			<Product detail={product} key={product.id}/>
			)
	})

	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getProducts());
	},[])

	return(
			<>
			    <section className="products">
			        <Filters/>
			        {
			        	(Object.keys(products).length === 0) ? 
						<Loading/> :
						<div className="products-container">
				          {renderList}
				        </div>	
			        }			        
			      </section>
			</>
		)
}

export default Products;