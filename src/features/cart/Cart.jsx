import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import { getUserName } from '../user/userSlice';
import EmptyCart from './EmptyCart';
const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(getCart)
  console.log(cart)
  const username = useSelector(getUserName)
  function handleClearCart(){
    dispatch(clearCart())
  }
  function handleDelete(){

  }
  if(!cart.length) return <EmptyCart />
  return (
    <div className='py-3 px-4'>
      <LinkButton to='/menu'>
          &larr; Back to Menu
      </LinkButton>

      <h2 className='mt-7 text-lg font-semibold'>Your cart, {username}</h2>
      <ul className='divide-y divide-stone-200'>
        {cart.map((item,index) => (
          <CartItem item={item} key={index}/>
        ))}
      </ul>
      <div className='mt-6 space-x-2'>
        <Button to='/order/new' type='primary'>Order pizzas</Button>
        <Button type='secondary' onClick={handleClearCart} >Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
