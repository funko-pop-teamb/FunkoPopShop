import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../auth/authSlice";
import { deleteFunkoPop } from "../../app/slice/allFunkoSlice";
import {
  fetchSingleFunkoPop,
  selectSingleFunkoPop,
  updateFunkoPop,
} from "../../app/slice/oneFunkoSlice";

const SingleFunko = () => {
  // const [name, setName] = useState("");
  // const [imageUrl, setimageUrl] = useState("");
  // const [price, setPrice] = useState("");
  // const [category, setCategory] = useState("");
  // const [edition, setEdition] = useState("");
  // const [size, setSize] = useState("");
  // const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const { funkoId, id } = useParams();

  const singleFunko = useSelector(selectSingleFunkoPop);
  const { userType } = useSelector((state) => state.auth.me);

  const { name, imageUrl, price, category, size, edition, description } =
    singleFunko;

  useEffect(() => {
    dispatch(fetchSingleFunkoPop(funkoId));
    dispatch(me());
  }, [dispatch, funkoId]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(
      updateFunkoPop({
        name,
        category,
        price,
        imageUrl,
        size,
        edition,
        description,
      })
    );
    useNavigate(`/funkoPops/${funkoId}`);
  };

  const handleDelete = async () => {
    await dispatch(deleteFunkoPop(funkoId));
  };

  return (
    <>
      <div id="single-funko">
        <h1>{name}</h1>
        <img src={imageUrl} />
        <h4>${price}</h4>
        <h4>Category:{category}</h4>
        <h4>
          Edition:{edition} / Size:{size}
        </h4>
        <hr></hr>
        <h3>About me: {description}</h3>
        <button type="submit">Add to Cart</button>
        <hr></hr>
        {userType === "admin" ? (
          <div className="admin-buttons">
            <button onClick={handleDelete} className="delete">
              Delete
            </button>
          </div>
        ) : // <form id='update-funko-form' onSubmit={handleSubmit}>
        //     <label htmlFor='name'>
        //         <input
        //         name='name'
        //         value={name}
        //         onChange={(evt) =>} />
        //     </label>
        // </form>
        null}
      </div>
    </>
  );
};

export default SingleFunko;
