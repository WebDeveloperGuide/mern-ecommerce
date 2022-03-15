import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Filters from './Filters';
import Product from './Product';
import axios from 'axios';
import {setProducts} from '../redux/actions/productActions';
import Loading from '../components/Loading';

const Products = () => {

	const products = useSelector((state)=> state.allProducts.products);
	console.log("products",products)
	const renderList = products.map((product)=>{
		return(
			<Product detail={product} key={product.id}/>
			)
	})

	const dispatch = useDispatch();

	const fetchProducts = async() =>{
		const response = await axios.get("https://dummyjson.com/products").catch((err) =>{
			console.log(err);
		});

		dispatch(setProducts(response.data.products));
	};

	useEffect(()=>{
		fetchProducts();
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