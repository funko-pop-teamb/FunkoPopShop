import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { selectFunkoPops, fetchFunkoPops } from '../../app/slice/allFunkoSlice';
import {fetchFunkoPopByCategory} from '../../app/slice/allFunkoSlice'
/**
 * COMPONENT
 */
const LandingPage = () => {

    const Funkos = useSelector(selectFunkoPops)
    const dispatch = useDispatch();
    const [filteringMethod, setFilteringMethod] = useState('')



   useEffect(()=>{
    dispatch(fetchFunkoPops())
   }, [])

    const filteringMethods=['Disney', 'Movies']

   async function handleFilterChange(category) {
    console.log('working')
    setFilteringMethod(category)
    //console.log(fetchFunkoPopByCategory(category))
     dispatch(fetchFunkoPopByCategory(category))
    }

  console.log(Funkos)

  return (
<>
    <div className = "headerHome">
     <center> <img  src = "https://www.crystalcommerce.com/blog/wp-content/uploads/sites/2/2019/12/billboard_funko-pop-1024x264.jpg" width={1250}/></center>
    </div>

    <div>
        <div className='sideNavBar'>
                     <NavLink to='/allFunko'> All </NavLink>  
                    <div onClick={(evt)=> {handleFilterChange('Music Icons')}}> Music Icons</div> 
                    <div onClick={(evt)=> {handleFilterChange('Disney')}}> Disney</div> 
                    <div onClick={(evt)=> {handleFilterChange('Movies')}}> Movies</div> 
                    <div onClick={(evt)=> {handleFilterChange('TV')}}> TV</div> 
                    <div onClick={(evt)=> {handleFilterChange('DC Comics')}}> DC Comics</div> 
                    <div onClick={(evt)=> {handleFilterChange('Marvel')}}> Marvel</div> 
                    <div onClick={(evt)=> {handleFilterChange('Star Wars')}}> Star Wars</div>   
        </div>
        <div> </div>
    </div>
    </>
  );
};

export default LandingPage;