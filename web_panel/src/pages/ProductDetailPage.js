import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';
import Loading from '../components/Loading';
import {setProductDetail,resetProductDetail} from '../redux/actions/productActions';
import { toast } from 'react-toastify';
import {ToastObjects} from "../util/toastObject";


const ProductDetailPage = () => {

	const {id} = useParams();
	const productDetail = useSelector((state)=> state.allProducts.productDetail);

	const dispatch = useDispatch();	

	useEffect(()=>{
		if(id && id != ""){
			dispatch(setProductDetail(id));
		}

		return () => {
	      dispatch(resetProductDetail());
	    };
		
	},[])

	return(
		<>
		 	<NavBar/>	
		 	<PageHeading title="Home / Product"/>
		 	{
		 		(Object.keys(productDetail).length === 0) ? 
		 			<Loading /> 
		 			: <ProductDetail details={productDetail} />	
		 	}
		 	<Sidebar/>
		 	<Cart/>
		</>
		)
}


export default ProductDetailPage;