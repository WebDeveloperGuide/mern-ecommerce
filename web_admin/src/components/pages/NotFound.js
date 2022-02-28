import logo from '../../logo.svg';
import notFoundImg from '../../images/not-found.png';
import {Link} from 'react-router-dom';

const NotFound = () =>{
  return(
        <>
          <div className="container">
            <div className="d-flex justify-content-center align-items-center">
              <img src={logo} width="300" height="150"/>
            </div>
            <div className="d-flex justify-content-center align-items-center not-found-text">
              <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
              <div className="align-middle">
                <h2 className="font-weight-normal lead" id="desc">The page you requested was not found.</h2>              
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <img
                style={{ width: "100%", height: "300px", objectFit: "contain" }}
                src={notFoundImg}
                alt="Not-found"
              />
              <button className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">
                <Link to="/" className="text-white text-decoration-none">
                  Home page
                </Link>
              </button>
            </div>
          </div>
        </>
      )
}

export default NotFound;