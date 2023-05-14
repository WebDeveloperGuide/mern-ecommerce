import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';


const Category = (props) => {
	let { _id, name, img, createdAt } = props.category;
	const dispatch = useDispatch();

	const deletehandler = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			cancelButtonColor: '#d33',
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(deleteCategory(id));
				Swal.fire(
					'Deleted!',
					'Your file has been deleted.',
					'success'
				);
			}
		}
	)


	return (
		<>
			<tr>
				<td>{name}</td>
				<td><img src={img} /></td>
				<td>{createdAt}</td>
				<td><Link
					to={`/category/edit/${_id}`}
				>
					<i className="fa fa-edit"></i>
				</Link>
					<Link
						to="#"
						onClick={() => deletehandler(_id)}
					>
						<i className="fa fa-trash"></i>
					</Link>
				</td>
			</tr>
		</>
	)
	
}
}

export default Category;