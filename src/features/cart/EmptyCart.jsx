import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='h-full mt-[40%] items-center w-full flex flex-col justify-center gap-4'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className=''>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
