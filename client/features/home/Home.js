import React, {useEffect} from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { fetchSingleFunkoPop } from '../../app/slice/oneFunkoSlice';
import { selectSingleFunkoPop } from '../../app/slice/oneFunkoSlice';
import { Link, useParams } from 'react-router-dom'

/**
 * COMPONENT
 */
const Home = () => {
  // const username = useSelector((state) => state.auth.me.username);

  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchSingleFunkoPop(41))
  console.log(fetchSingleFunkoPop(41))
},[])
const oneFunko = useSelector((state) => { return state.singleFunkoPop })

// const funko = useSelector(selectSingleFunkoPop)
console.log(oneFunko)
return (
    <div>
        Funko of the month!
        <Link key={oneFunko.id} to={`/funkoPops/${oneFunko.id}`}>

        <img src={oneFunko.imageUrl} className='fImage' />
        <h2 className='fName'>{oneFunko.name}</h2>
        <h3 className='fCategory'>Category: {oneFunko.category}</h3>
        <h3 className='fPrice'>Price: ${oneFunko.price}</h3>
        </Link>
    </div>
  );
};

export default Home;
