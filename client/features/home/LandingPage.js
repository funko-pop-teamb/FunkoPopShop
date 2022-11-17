import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectFunkoPops, fetchFunkoPops } from "../../app/slice/allFunkoSlice";
import { fetchFunkoPopByCategory } from "../../app/slice/allFunkoSlice";

/**
 * COMPONENT
 */
const LandingPage = () => {
  const Funkos = useSelector(selectFunkoPops);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFunkoPops());
  }, []);

  async function handleFilterChange(category) {
    if (category == "All") {
      dispatch(fetchFunkoPops());
    } else {
      dispatch(fetchFunkoPopByCategory(category));
    }
  }

  return (
    <>
      <div>
        <div className="sideNavBar">
          <div
            onClick={(evt) => {
              handleFilterChange("All");
            }}
          >
            <NavLink to="/funkoPops"> All </NavLink>
          </div>
          <div
            onClick={(evt) => {
              handleFilterChange("Anime");
            }}
          >
            <NavLink to="/funkoPops"> Anime </NavLink>
          </div>
          <div
            onClick={(evt) => {
              handleFilterChange("Music Icons");
            }}
          >
            {" "}
            <NavLink to="/funkoPops">Music Icons</NavLink>
          </div>
          <div
            onClick={(evt) => {
              handleFilterChange("Disney");
            }}
          >
            <NavLink to="/funkoPops"> Disney</NavLink>
          </div>
          <div
            onClick={(evt) => {
              handleFilterChange("Movies");
            }}
          >
            <NavLink to="/funkoPops"> Movies</NavLink>
          </div>
          <div
            onClick={(evt) => {
              handleFilterChange("TV");
            }}
          >
            {" "}
            <NavLink to="/funkoPops">TV</NavLink>
          </div>
          <div
            onClick={(evt) => {
              handleFilterChange("DC Comics");
            }}
          >
            {" "}
            <NavLink to="/funkoPops">DC Comics</NavLink>
          </div>
          <div
            onClick={(evt) => {
              handleFilterChange("Marvel");
            }}
          >
            {" "}
            <NavLink to="/funkoPops"> Marvel</NavLink>
          </div>
          <div
            onClick={(evt) => {
              handleFilterChange("Star Wars");
            }}
          >
            {" "}
            <NavLink to="/funkoPops"> Star Wars</NavLink>
          </div>
        </div>
        <div> </div>
      </div>
    </>
  );
};

export default LandingPage;
