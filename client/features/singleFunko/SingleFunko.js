import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSingleFunkoPop,
  selectSingleFunkoPop,
} from "../../app/slice/oneFunkoSlice";

const SingleFunko = () => {
  const dispatch = useDispatch();
  const { funkoId } = useParams();

  const singleFunko = useSelector(selectSingleFunkoPop);

  const { name, imageUrl,price, category, size, edition, description } = singleFunko;

  useEffect(() => {
    dispatch(fetchSingleFunkoPop(funkoId));
  }, [dispatch]);

  return (
    <div id="single-funko" >
        <h1>{name}</h1>
        <img src={imageUrl} />
        <h4>${price}</h4>
        <h4>Category:{category}</h4>
        <h4>Edition:{edition} / Size:{size}</h4>
        <hr></hr>
        <h3>About me: {description}</h3>
        <button type="submit">Add to Cart</button>
        
    </div>
  )
};
