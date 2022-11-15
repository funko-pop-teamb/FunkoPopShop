import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { filteredOrdersByStatus } from "../../app/slice/cartProducts";
import { logout } from "../../store";

import {
  selectFunkoPops,
  fetchFunkoPops,
  fetchFunkosByName,
  fetchFunkosByPriceLow,
  fetchFunkosByPriceHigh,
  fetchMiniFunkos,
  fetchRegularFunkos,
  fetchJumboFunkos,
} from "../../app/slice/allFunkoSlice";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };
  const { userType, id } = useSelector((state) => state.auth.me);
  //
  const funkos = useSelector(selectFunkoPops);
  const [sortType, setSortType] = useState("");
  
  useEffect(() => {
    dispatch(filteredOrdersByStatus(id));
  }, []);

  //*add a handleChange instead to to handle onChange drop down menu??
  const handleChange = async (evt) => {
    evt.preventDefault();
    setSortType({[evt.target.name]: evt.target.value});

    if (evt.target.value === "priceLow") {
      await dispatch(fetchFunkosByPriceLow());
    } else if (evt.target.value === "priceHigh") {
      await dispatch(fetchFunkosByPriceHigh());
    } else if (evt.target.value === "byName") {
      await dispatch(fetchFunkosByName());
    } else if (evt.target.value === "mini") {
      await dispatch(fetchMiniFunkos());
    } else if (evt.target.value === "regular") {
      await dispatch(fetchRegularFunkos());
    } else if (evt.target.value === "jumbo") {
      await dispatch(fetchJumboFunkos());
    } else {
      await dispatch(fetchFunkoPops());
    }
  };

  const cartId = useSelector((state) => {
    return state.cart.cart.id;
  });

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            {/* <Link to='/funkoPops'>All Funko</Link> */}
            <div>
              <select id="search-bar" onChange={handleChange} value={sortType.dropDown} name='dropDown'>
              <option value="default">
                  -----
                </option>
                <option value="priceLow">
                  Price Low to High
                </option>
                <option value="priceHigh">Price High to Low</option>
                <option value="byName">A to Z</option>
                <option value="mini">Minis</option>
                <option value="regular">Regular</option>
                <option value="jumbo">Jumbos</option>
              </select>
            </div>
            <Link to={`/cart/${id}/${cartId}`}>Cart</Link>
            <Link to="/account">Account</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/funkoPops">All Funko</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
