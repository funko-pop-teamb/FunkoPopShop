import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filteredOrdersByStatus } from "../../app/slice/cartProducts";
import { logout } from "../../store";

import { selectFunkoPops, fetchFunkoPops } from "../../app/slice/allFunkoSlice";

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

  const [data, setData] = useState([]);
  // const [funkos, setFunkos] = useState([]);
  const [sortType, setSortType] = useState("");
  //

  //
  useEffect(() => {
    //

    // const sortViews = async (type) => {
    //   const types = {
    //     priceLow: 'price',
    //     priceHigh: 'price',
    //     byName: 'name',
    //     mini: 'mini',
    //     regular: 'regular',
    //     jumbo: 'jumbo',
    //   };
    //   const sortProperty = types[type];

    //   if (sortProperty === types[priceLow] || types[byName]){
    //     const sorted =  [...funkos].sort((a, b) => a[sortProperty] - b[sortProperty]);
    //     await setData(sorted);
    //   } else if (sortProperty === types[priceHigh]){
    //     const revSort =  [...funkos].sort((a, b) => b[sortProperty] - a[sortProperty]);
    //     await setData(revSort);
    //   } else if (sortProperty === types[mini] || types[regular] || types[jumbo]){
    //     const findSize =  [... funkos].filter((funko) => funko[size] == sortProperty);
    //     await setData(findSize)
    //   }
    // };
    //  sortViews(sortType);
    //
    //allows us to access orderId in cart
    dispatch(filteredOrdersByStatus(id));
    // dispatch(fetchFunkoPops());
  }, [id]);

  //*add a handleChange instead to to handle onChange drop down menu??
  const types = {
    priceLow: "price",
    priceHigh: "price",
    byName: "name",
    mini: "mini",
    regular: "regular",
    jumbo: "jumbo",
  };

  async function handleChange(value, type, evt) {
    // evt.preventDefault();

    const sortProperty = types[type];
//working on reconfiguring into the handleChange func
//
    // if (value === 'priceLow' || 'byName') {
    //   const sorted = [...funkos].sort(
    //     (a, b) => a[sortProperty] - b[sortProperty]
    //   );
    //   await setData(sorted);
    // } else if (sortProperty === types[priceHigh]) {
    //   const revSort = [...funkos].sort(
    //     (a, b) => b[sortProperty] - a[sortProperty]
    //   );
    //   await setData(revSort);
    // } else if (sortProperty === types[mini] || types[regular] || types[jumbo]) {
    //   const findSize = [...funkos].filter(
    //     (funko) => funko[size] == sortProperty
    //   );
    //   await setData(findSize);
    // }
    // dispatch(fetchFunkoPopBySize(size))
  }

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
              <select id="search-bar" value={sortType} onChange={handleChange}>
                <option value="priceLow">Price Low to High</option>
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
