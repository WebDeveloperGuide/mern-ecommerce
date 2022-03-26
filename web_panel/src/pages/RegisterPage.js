import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';
import {Link} from 'react-router-dom';
import { Register, RegisterReset } from "../redux/actions/userActions";

const RegisterPage = ({history}) => {

  const [submitted, setSubmitted] = useState(false);  
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { register_status } = userRegister;


  const [formState,setFormState] = useState({
        values:{}       
    });

  const handleChange = (event) => {
        setFormState(formState =>({
          ...formState,
          values:{
            ...formState.values,
            [event.target.name]:
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value
          }
          
        }));
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); 
        const { name, email, password } = formState.values;
        if (name && email && password) {
            dispatch(Register(name, email, password));
        }
    }

    useEffect(() => {
       if(register_status){
          history.push("/");
          dispatch(RegisterReset());
       }
      
    }, [dispatch, register_status]);

	return(
		<>
		 	<NavBar/>	
		 	<PageHeading title="Home / Register"/>
		 	<section className="section section-center">
		        <div className="container h-100">
			        <div className="d-flex justify-content-center h-100">
			          <div className="user_card content-card">
                  <h4 className="content-heading">Register</h4>       
			            <div className="d-flex justify-content-center form_container auth-page-container">
			              <form onSubmit={handleSubmit} autoComplete="off">
			              	<div className="input-group">
			                  <div className={'input-group-append' + (submitted && !formState.values.name ? ' is-invalid' : '')}>
			                    <span className="input-group-text"><i className="fas fa-user" /></span>
			                  </div>
			                  <input type="text" className={'form-control form-control-lg' + (submitted && !formState.values.name ? ' is-invalid' : '')} 
                                        name="name" 
                                        placeholder="Name"
                                        onChange={handleChange}
                                        value={formState.values.name || ''}
                                        />                                        
			                </div>
                        {submitted && !formState.values.name &&
                              <div className="inline-errormsg">Name is required</div>
                        }
			                <div className="input-group mt-3">
			                  <div className={'input-group-append' + (submitted && !formState.values.name ? ' is-invalid' : '')}>
			                    <span className="input-group-text"><i className="fas fa-envelope" /></span>
			                  </div>			                  
			                  <input type="email" className={'form-control form-control-lg' + (submitted && !formState.values.email ? ' is-invalid' : '')} 
                                        name="email" 
                                        placeholder="Email"
                                        onChange={handleChange}
                                        value={formState.values.email || ''}
                                        />                                       
			                </div>
                      {submitted && !formState.values.email &&
                          <div className="inline-errormsg">Email is required</div>
                      }
			                <div className="input-group mt-3">
			                  <div className={'input-group-append' + (submitted && !formState.values.name ? ' is-invalid' : '')}>
			                    <span className="input-group-text"><i className="fas fa-key" /></span>
			                  </div>
			                  <input type="password" className={'form-control form-control-lg' + (submitted && !formState.values.password ? ' is-invalid' : '')} 
                                        name="password" 
                                        placeholder="Password"
                                        onChange={handleChange}
                                        value={formState.values.password || ''}
                                        />                                        
			                </div>
                      {submitted && !formState.values.password &&
                          <div className="inline-errormsg">Password is required</div>
                      }
			                <div className="d-flex justify-content-center mt-3 login_container">
			                  <button className="btn login_btn">Submit</button>
			                </div>
			              </form>
			            </div>
			            <div className="mt-4">
			              <div className="d-flex justify-content-center links">
			                Already have an account? <Link to="/login" className="ml-2">Login</Link>
			              </div>
			              <div className="d-flex justify-content-center links">
			                <Link to="/forgot-password">Forgot your password?</Link>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
		    </section>
		 	<Sidebar/>
		 	<Cart/>
		</>
		)
}


export default RegisterPage;