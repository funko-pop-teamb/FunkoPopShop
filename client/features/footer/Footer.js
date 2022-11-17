import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { fetchUsers } from "../../app/slice/usersSlice";
import { fetchUserOrders } from "../../app/slice/singleUserSlice";
import { fetchOrders, filteredOrders } from "../../app/slice/allOrderSlice";

const Footer = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const { userType } = useSelector((state) => state.auth.me);

  const dispatch = useDispatch();

//   const handleChange = async (evt) => {
//     evt.preventDefault();
//     if (evt.target.value === "allUsers") {
//         console.log(fetchUsers())
//       await dispatch(fetchUsers());
//     } else if (evt.target.value === "allOrders") {
//       await dispatch(fetchOrders());
//     }
//   };

  return (
    <>
      <div>
        <footer>
          <section className="socialIcons">
            <Link to="/home">
              <img
                src="https://funkilandia.com/wp-content/uploads/2022/07/imagen_1.1.png"
                width={70}
                height={25}
              />
            </Link>
            {/* FIND TRANSPARENT SOCIAL ICONS */}
            <a href="https://twitter.com/OriginalFunko">
              <img src="" />
              TWIT
            </a>
            <a href="https://www.facebook.com/originalfunko">
              <img src="" />
              FB
            </a>
            <a href="https://www.youtube.com/channel/UCiBxZWamaDdlemljJ3aGPZQ">
              <img src="" />
              YT
            </a>
          </section>
          {/* CHANGE TO isAdmin */}
          {isLoggedIn && userType === "admin" ? (
            <div className="footerMain">
              <div>
                <h4>ADMIN</h4>
                {/* grab all useers w/ order links */}
                {/* <div onClick={handleChange} value={"allUsers"}> */}
                <div>
                  <Link to="/users">All Users</Link>
                </div>
                {/* view all orders */}
                {/* <div onClick={handleChange} value={"allOrders"}> */}
                <div>
                  <Link to="/allOrders">Users' Orders</Link>
                </div>
              </div>
              <div>
                <h4>ABOUT FUNKO</h4>
                <ul>
                  {/* ?MAKE ABOUT US PG */}
                  <li>
                    <a href="https://about.funko.com/?_gl=1*1avfbi*_gcl_aw*R0NMLjE2Njg2MTIzMDQuQ2owS0NRaUFzZEtiQmhESEFSSXNBTko2LWpkcnUyaDRSVmVyRmw1QkcyZV9kZlRYWndDOFcyN0Q2M3J6UEhibEtadkFuVkJCLXRlTEtGY2FBdExIRUFMd193Y0I.">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.funko.com/blog">Blog</a>
                  </li>
                  <li>
                    <a href="https://www.funko.com/careers">Careers</a>
                  </li>
                  <li>Stores Coming Soon..</li>
                </ul>
              </div>
              <div>
                <h4>LET'S CONNECT</h4>
                <ul>
                  {/* ?MAKE CONTACT US PG */}
                  <li>
                    <a href="https://support.funko.com/hc/en-us">Contact Us</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/OriginalFunko">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/originalfunko">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCiBxZWamaDdlemljJ3aGPZQ">
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a href="https://funkogames.com/">Funko Games</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="footerMain">
              <div>
                <h4>ABOUT FUNKO</h4>
                <ul>
                  {/* ?MAKE ABOUT US PG */}
                  <li>
                    <a href="https://about.funko.com/?_gl=1*1avfbi*_gcl_aw*R0NMLjE2Njg2MTIzMDQuQ2owS0NRaUFzZEtiQmhESEFSSXNBTko2LWpkcnUyaDRSVmVyRmw1QkcyZV9kZlRYWndDOFcyN0Q2M3J6UEhibEtadkFuVkJCLXRlTEtGY2FBdExIRUFMd193Y0I.">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.funko.com/blog">Blog</a>
                  </li>
                  <li>
                    <a href="https://www.funko.com/careers">Careers</a>
                  </li>
                  <li>Stores Coming Soon..</li>
                </ul>
              </div>
              <div>
                <h4>LET'S CONNECT</h4>
                <ul>
                  {/* ?MAKE CONTACT US PG */}
                  <li>
                    <a href="https://support.funko.com/hc/en-us">Contact Us</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/OriginalFunko">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/originalfunko">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCiBxZWamaDdlemljJ3aGPZQ">
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a href="https://funkogames.com/">Funko Games</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </footer>
      </div>
    </>
  );
};

export default Footer;
