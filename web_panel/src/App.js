import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import About from './pages/About';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Toast from "./components/Toast";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Toast/>
      <Router>
        <Switch>
        	<Route path="/" component={Home} exact/>
        	<Route path="/products" component={ProductsPage}/>
        	<Route path="/product/:id" component={ProductDetailPage}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>  
    </>
  );
}

export default App;
