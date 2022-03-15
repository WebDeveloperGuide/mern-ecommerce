import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {setProducts} from '../redux/actions/productActions';
import Product from './Product';
import Loading from '../components/Loading';

const FeaturedProducts = () => {

	const products = useSelector((state)=> state.allProducts.products);
	const featuredProduct = products.slice(0, 6);
	const renderList = featuredProduct.map((product)=>{
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
				<section className="section featured">
			        <div className="title">
			          <span />
			          <h2>Featured Products</h2>
			          <span />
			        </div>
			        {
						(Object.keys(products).length === 0) ? 
						<Loading/> :
						<div className="section-center featured-center">
				          { renderList }
				        </div>
			        }
			        
			        <Link to="/products" className="btn"> all products </Link>
			    </section>
			</>
		)
}

export default FeaturedProducts;