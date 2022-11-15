import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { filteredOrdersByStatus } from '../../app/slice/cartProducts';
import { logout } from '../../store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };
  const { userType, id } = useSelector((state) => state.auth.me)
  //allows us to access orderId in cart
  useEffect(()=> {

    dispatch(filteredOrdersByStatus(id))
    // dispatch(fetchAllCartFunkos(cartId))

  }
  )
  const cartId=useSelector((state)=>  state.cart.cart.id)

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to='/funkoPops'>All Funko</Link>
            <Link to={`/cart/`}>Cart</Link>
            <Link to='/account'>Account</Link>

            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to='/funkoPops'>All Funko</Link>
            {/* <Link to={`/cart`}>Cart</Link> */}
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
