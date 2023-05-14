import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/actions/userActions";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';


const User = (props) => {
	let { _id, name, lastname, email, img, createdAt } = props.user;
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
				dispatch(deleteUser(id));
				Swal.fire(
					'Deleted!',
					'Your file has been deleted.',
					'success'
				);
				reloadPage();
			}
		})
	};

	const reloadPage = () => {
		window.location.reload();
	}
	return (
		<>
			<tr>
				<td><img src={img} /></td>
				<td>{lastname} {name}</td>
				<td>{email}</td>
				<td>{createdAt}</td>
				<td><Link
					to={`/users/edit/${_id}`}
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
export default User;