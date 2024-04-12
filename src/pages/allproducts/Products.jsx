import React from 'react'
import Layout from '../../components/layout/Layout'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'


const Products = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }
  return (
    <Layout>
      <Filter />
      <ProductCard />
    </Layout>
  )
}

export default Products