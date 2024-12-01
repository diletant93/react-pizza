import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center">
      <p>
        {quantity}&times; {name}
      </p>

      <div className="flex items-center justify-between sm:gap-6 ml-auto">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={quantity}/>
        <DeleteItem pizzaId={pizzaId}>Delete</DeleteItem>
      </div>
      <p className='transition-colros
       inline-block rounded-full text-sm
       bg-yellow-400 font-semibold
        uppercase tracking-wide text-stone-800
         duration-300 hover:bg-yellow-300
          focus:bg-yellow-300 focus:outline-none 
          focus:ring focus:ring-yellow-300
          focus:ring-offset-2 
          disabled:cursor-not-allowed '></p>
    </li>
  );
}

export default CartItem;
