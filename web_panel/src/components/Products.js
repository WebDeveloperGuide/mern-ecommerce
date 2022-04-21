import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Filters from './Filters';
import Product from './Product';
import {getProducts,resetProducts} from '../redux/actions/productActions';
import Loading from '../components/Loading';

const Products = () => {

	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(0);	
	const [priceFilter,setPriceFilter] = useState(10000);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortByFilter, setSortByFilter] = useState('');
	const [filter, setFilter] = useState('');
	const allProducts = useSelector((state)=> state.allProducts);
	const { products, numOfPages, sortBy, searchText, price } = allProducts;
	const productsPerPage = 9;

	const changePrice = (e) => {
		setPriceFilter(e.target.value)		
	}

	const changeSearch = (e) => {
		setSearchTerm(e.target.value)		
	}

	const loadMoreProduct = (e) => {
		if (window.innerHeight + document.documentElement.scrollTop > (document.documentElement.offsetHeight - 200)) {
  			setCurrentPage((page) => page + 1);
      	}
	};


	const renderList = products.map((product)=>{
		return(
			<Product detail={product} key={product._id}/>
			)
	})
  	

	useEffect(()=>{
		if(currentPage <= numOfPages){
			dispatch(getProducts(currentPage,productsPerPage, sortBy, searchTerm, price));			
		}		
	},[currentPage,filter])

	
	//Call Function after stop typing text
  	useEffect(() => {
  		dispatch(resetProducts());
  		const delaySearchFunc = setTimeout(() => {
	      setCurrentPage(0);
	      setFilter(searchTerm+priceFilter)	      
	    }, 1500)

	    window.addEventListener("scroll", loadMoreProduct);

	    return () => {
	    	clearTimeout(delaySearchFunc);
	    	window.removeEventListener("scroll", loadMoreProduct);
	    }

	}, [searchTerm, priceFilter])

  	const handleSortBy = (e) => {
  		const sortByValue = e.target.value;
  		setCurrentPage(0);
  		dispatch(getProducts(currentPage,productsPerPage, sortByValue, searchTerm, price));
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