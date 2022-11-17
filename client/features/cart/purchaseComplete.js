import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filteredOrdersByStatus } from '../../app/slice/cartProducts'

const PurchaseComplete = () => {
  const me = useSelector((state) => state.auth.me)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filteredOrdersByStatus(me.id));
  }, [])

  return (
    <>
      <div> Thank you for shopping with Funko Pop Shop!!</div>
    </>
  )
}

export default PurchaseComplete