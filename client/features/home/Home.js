import React, {useEffect} from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { fetchSingleFunkoPop } from '../../app/slice/oneFunkoSlice';
import { selectSingleFunkoPop } from '../../app/slice/oneFunkoSlice';
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

const funko = useSelector(selectSingleFunkoPop)
console.log(oneFunko)
return (
    <div>
        Funko of the month!
        <img src={funko.imageUrl} className='fImage' />
        <h2 className='fName'>{funko.name}</h2>
        <h3 className='fCategory'>Category: {funko.category}</h3>
        <h3 className='fPrice'>Price: ${funko.price}</h3>
    </div>
  );
};

export default Home;
