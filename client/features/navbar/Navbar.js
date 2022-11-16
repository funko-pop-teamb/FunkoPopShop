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
  const items = useSelector((state) => state.cart.items)

  const { userType, id } = useSelector((state) => state.auth.me);
  //
  const funkos = useSelector(selectFunkoPops);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
  }, []);

  //*add a handleChange instead to to handle onChange drop down menu??
  const handleChange = async (evt) => {
    evt.preventDefault();
    setSortType({ [evt.target.name]: evt.target.value });
    // {[evt.target.name]: evt.target.value}
    // value={sortType.dropDown} name='dropDown'

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

    <>
      <div className="headerHome">
        <center>
          {" "}
          <img
            src="https://www.crystalcommerce.com/blog/wp-content/uploads/sites/2/2019/12/billboard_funko-pop-1024x264.jpg"
            width={1400}
            height={250}
          />
        </center>
      </div>
      <div>
        <nav>
          {isLoggedIn ? (
            <div className="navBar">
              {/* The navbar will show these links after you log in */}
              <div className="navHome">
                <Link to="/home">
                  <img
                    src="https://funkilandia.com/wp-content/uploads/2022/07/imagen_1.1.png"
                    width={70}
                    height={25}
                  />
                </Link>
              </div>

              <div className="navSelect">
                <select
                  id="search-bar"
                  onChange={handleChange}
                  value={sortType.dropDown}
                  name="dropDown"
                >
                  <option value="default">-----</option>
                  <option value="priceLow">Price Low to High</option>
                  <option value="priceHigh">Price High to Low</option>
                  <option value="byName">A to Z</option>
                  <option value="mini">Minis</option>
                  <option value="regular">Regular</option>
                  <option value="jumbo">Jumbos</option>
                </select>
                
                <Link to="/account">Account</Link>
                <Link to="/cart/">Cart({items.length})</Link>
                <button type="button" onClick={logoutAndRedirectHome}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="navBar">
              {/* The navbar will show these links before you log in */}
              <div className="navHome">
              <Link to="/home">
                  <img
                    src="https://funkilandia.com/wp-content/uploads/2022/07/imagen_1.1.png"
                    width={70}
                    height={25}
                  />
                </Link>
                <Link to="/signup">Sign Up</Link>
              </div>

              <div className="navSelect">
                <select
                  id="search-bar"
                  onChange={handleChange}
                  value={sortType.dropDown}
                  name="dropDown"
                >
                  <option value="default">-----</option>
                  <option value="priceLow">Price Low to High</option>
                  <option value="priceHigh">Price High to Low</option>
                  <option value="byName">A to Z</option>
                  <option value="mini">Minis</option>
                  <option value="regular">Regular</option>
                  <option value="jumbo">Jumbos</option>
                </select>

                <Link to="/login">Login</Link>
                <Link to="/cart">Cart</Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
