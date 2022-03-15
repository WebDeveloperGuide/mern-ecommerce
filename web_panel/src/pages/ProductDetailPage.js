import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';
import Loading from '../components/Loading';
import axios from 'axios';
import {setProductDetail,resetProductDetail} from '../redux/actions/productActions';
import { toast } from 'react-toastify';
import {ToastObjects} from "../util/toastObject";


const ProductDetailPage = () => {

	const {id} = useParams();
	const productDetail = useSelector((state)=> state.allProducts.productDetail);

	const dispatch = useDispatch();

	const fetchProductDetail = async() =>{
		const response = await axios.get(`https://dummyjson.com/products/${id}`).catch((err) =>{
		  toast.error("No data found", ToastObjects);
		});
		
		if(response){
			dispatch(setProductDetail(response.data));	
		}
		
	};

	useEffect(()=>{
		if(id && id != ""){
			fetchProductDetail();	
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