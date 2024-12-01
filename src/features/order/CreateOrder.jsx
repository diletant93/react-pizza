import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store'
import { getTotalPrice } from '../cart/cartSlice';
import { formatCurrency } from '../../utils/helpers';
import { fetchAddress } from '../user/userSlice';
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );
const KOEF_WITH_PRIORITY = 1.2
function CreateOrder() {
   const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalPrice)
  const {username,status:addressStatus, position,address, error:errorAddress} = useSelector(store => store.user)
  const isLoadingAddress = addressStatus === 'loading'

  const totalPrice = withPriority? totalCartPrice * KOEF_WITH_PRIORITY : totalCartPrice
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const dispatch = useDispatch()

  if(!cart.length) return <EmptyCart />
  console.log(position)
  return (
    <div className='py-6 px-4'> 
      <h2 className='text-x font-semibold mb-8'>Ready to order? Let&apos;s go!</h2>
      <button
       onClick={() => dispatch(fetchAddress())}
       >
        Get position
        </button>
      <Form method="POST" action="/order/new">
        <div className='mb-5 flex gap-2 flex-col sm:flex-row sm:items-center '>
          <label className='sm:basis-40'>First Name</label>
          <input defaultValue={username} className='input flex-grow' type="text" name="customer" required />
        </div>

        <div className='mb-5 flex gap-2 flex-col sm:flex-row sm:items-center '>
          <label className='sm:basis-40'>Phone number</label>
          <div className='flex-grow'>
            <input className='input w-full' type="tel" name="phone" required />
            {formErrors?.phone && <p className='pl-2 mt-2 text-sm bg-red-500 text-white rounded-md  '>{formErrors.phone}</p>}
          </div>
        </div>

        <div className='mb-5 flex gap-2 flex-col sm:flex-row sm:items-center relative'>
          <label className='sm:basis-40'>Address</label>
          <div className='flex-grow'> 
            <div className='relative'>
            <input
              className="input w-full"
              type=" text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
          <span className='absolute top-[10%] right-[5px] z-50'>
            <Button type='small' onClick={(e)=> {
              e.preventDefault()
              dispatch(fetchAddress())}
            }>Get position</Button>
          </span>
            </div>
            {addressStatus === 'error' && <p className='pl-2 mt-2 text-sm bg-red-500 text-white rounded-md '>{errorAddress}</p>}
          </div>
        </div>

        <div className='mb-12 flex gap-5 items-center'>
          <input
           className='h-6 w-6 
           transition-all duration-300
            accent-yellow-400 
            focus:ring-offset-2 
            focus:outline-none 
            focus:ring 
            focus:ring-yellow-400'
            
            type="checkbox"
            name="priority"
            id="priority"
             value={withPriority}
             onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className='font-medium' htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>
          <input type="hidden" name="position" value= {position.longitude && position.latitude ? JSON.stringify(position): ''}></input>
          <Button disabled={isSubmitting} type='primary'>
            {isSubmitting ? 'Placing order...' : `Order now for ${formatCurrency(totalPrice)}$`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
async function action({ request }) {

  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === `true`,
  };
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = 'Please give us your correct phone number';
  if (Object.keys(errors).length > 0) return errors;
  console.log(order)
  const newOrder = await createOrder(order);
  store.dispatch(clearCart())
  return redirect(`/order/${newOrder.id}`);
}

export { action };
export default CreateOrder;
