import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalPrice, getTotalQuanity } from './cartSlice';
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuanity)
  const totalCartPrice = useSelector(getTotalPrice)
  if(!totalCartQuantity) return null
  return (
    <div className="bg-stone-800 p-4 uppercase text-stone-200 sm:px-6
    flex items-center justify-between">
      <p className="space-x-4 font-semibold text-sm text-stone-300 sm:space-x-6 md:text-base">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
