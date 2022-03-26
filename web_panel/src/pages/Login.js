import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';
import {Link} from 'react-router-dom';
import { Login } from "../redux/actions/userActions";

const LoginPage = ({history}) => {

  const [submitted, setSubmitted] = useState(false);  
  const dispatch = useDispatch();

  const userPanelLogin = useSelector((state) => state.userPanelLogin);
  const { userInfo } = userPanelLogin;

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
        const { email, password } = formState.values;
        if (email && password) {
            dispatch(Login(email, password));
        }
    }

    useEffect(() => {
      if (typeof userInfo !== 'undefined' && Object.keys(userInfo).length !== 0) {
        history.push("/");
      }      
    }, [userInfo, history]);

	return(
		<>
		 	<NavBar/>	
		 	<PageHeading title="Home / Login"/>
		 	<section className="section section-center">
		        <div className="container h-100">
			        <div className="d-flex justify-content-center h-100">
			          <div className="user_card content-card">     
                  <h4 className="content-heading">Login</h4>
			            <div className="d-flex justify-content-center form_container auth-page-container">
			              <form onSubmit={handleSubmit} autoComplete="off">
			                <div className="input-group">
			                  <div className={'input-group-append' + (submitted && !formState.values.email ? ' is-invalid' : '')}>
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
			                  <div className={'input-group-append' + (submitted && !formState.values.password ? ' is-invalid' : '')}>
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
			                  <button className="btn login_btn">Login</button>
			                </div>
			              </form>
			            </div>
			            <div className="mt-4">
			              <div className="d-flex justify-content-center links">
			                Don't have an account? <Link to="/register" className="ml-2">Sign Up</Link>
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


export default LoginPage;