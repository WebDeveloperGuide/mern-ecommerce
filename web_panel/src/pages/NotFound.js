import logo from '../images/logo.svg';
import NavBar from '../components/Navbar';
import notFoundImg from '../images/not-found.png';
import {Link} from 'react-router-dom';

const NotFound = () =>{
  return(
        <>
          <NavBar/>
          <div className="container not-found-page">
            <div className="d-flex justify-content-center align-items-center not-found-text">
              <h4 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h4>
              <div className="align-middle">
                <h4 className="font-weight-normal lead" id="desc">The page you requested was not found.</h4>              
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <img
                style={{ width: "100%", height: "300px", objectFit: "contain" }}
                src={notFoundImg}
                alt="Not-found"
              />              
              <Link to="/" className="col-md-3 col-sm-6 col-12 btn">
                  Home page
              </Link>              
            </div>
          </div>
        </>
      )
}

export default NotFound;