import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../app/slice/usersSlice";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const users = useSelector((state) => state.usersSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h2>All Users</h2>
      <div className="users">
        {users && users.length
          ? users.map((user) => (
              <div key={user.id}>
                <ul>
                  {/* <Link to={`/users/${user.id}`} key={user.id}> */}
                  <li>ID: {user.id}</li>
                  <li>Username: {user.username}</li>
                  <li>
                    Full Name: {user.firstName} {user.lastName}
                  </li>
                  {/* </Link> */}
                  <li>Email: {user.email}</li>
                <li>{user.username}'s Orders:</li>
                  {user.orders && user.orders.length
                    ? user.orders.map((order) => (
                        <ul key={order.id}>
                          <li>Order ID: {order.id}</li>
                          {/* <li>Order Status: {order.orderStatus}</li> */}
                          {/* <br></br> */}
                        </ul>
                      ))
                    : null}
                </ul>
<br></br>
              </div>
            ))
          : null}
      </div>
      
    </>
  );
};

export default AllUsers;
