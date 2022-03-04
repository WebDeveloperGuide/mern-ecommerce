import {Link} from 'react-router-dom';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';


const Product = (props) => {
	let {title,image,price,stock} = props.product;
	return(
		<>
		    <tr>
              <td>{title}</td>
              <td><img src={image} /></td>
              <td>{price}</td>
              <td>{stock}</td>
              <td><i class="fa fa-edit"></i><i class="fa fa-trash"></i></td>
            </tr>
		</>
		)
}

export default Product;