import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Filters from './Filters';
import Product from './Product';
import {getProducts} from '../redux/actions/productActions';
import Loading from '../components/Loading';

const Products = () => {

	const [currentPage, setCurrentPage] = useState(0);	
	const [priceFilter,setPriceFilter] = useState(10000);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortByFilter, setSortByFilter] = useState('');

	const changePrice = (e) => {
		setPriceFilter(e.target.value)		
	}

	const changeSearch = (e) => {
		setSearchTerm(e.target.value)		
	}

	const allProducts = useSelector((state)=> state.allProducts);
	const { products, numOfPages, sortBy, searchText, price } = allProducts;	


	const renderList = products.map((product)=>{
		return(
			<Product detail={product} key={product._id}/>
			)
	})

	const dispatch = useDispatch();
	let pageNum = 0;
  	let productsPerPage = 9;
  	

	useEffect(()=>{
		dispatch(getProducts(pageNum,productsPerPage, sortBy, searchText, price));
	},[])


	//Call Function after stop typing text
  	useEffect(() => {
	    const delaySearchFunc = setTimeout(() => {
	      setCurrentPage(0);
		  dispatch(getProducts(pageNum,productsPerPage, sortByFilter, searchTerm, priceFilter));	      
	    }, 1500)

	    return () => clearTimeout(delaySearchFunc)
	}, [searchTerm, priceFilter])

  	const handleSortBy = (e) => {
  		const sortByValue = e.target.value;
  		setCurrentPage(0);
  		dispatch(getProducts(pageNum,productsPerPage, sortByValue, searchText, price));
  	}

	return(
			<>
			    <section className="products">
			        <Filters priceFilter={priceFilter} changePrice={changePrice} changeSearch={changeSearch}/>
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