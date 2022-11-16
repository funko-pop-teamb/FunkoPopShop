import React, {useEffect} from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { fetchSingleFunkoPop } from '../../app/slice/oneFunkoSlice';
import { Link, useParams } from 'react-router-dom'
import { filteredOrdersByStatus } from '../../app/slice/cartProducts';

/**
 * COMPONENT
 */
const Home = () => {
  // const username = useSelector((state) => state.auth.me.username);

  const dispatch = useDispatch()
  const { userType, id } = useSelector((state) => state.auth.me);

useEffect(()=>{
  dispatch(fetchSingleFunkoPop(61))
  dispatch(filteredOrdersByStatus(id));

},[])
const oneFunko = useSelector((state) => { return state.singleFunkoPop })



// const funko = useSelector(selectSingleFunkoPop)
return (
    <div className='featuredFunko'>
        <h2 className='fTitle'>Funko of the Month!</h2>
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
