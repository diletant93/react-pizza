import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import Button from "../../ui/Button";
function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch()
  return (
    <div className="flex  gap-1 items-center md:gap-3">
       <Button type='round' onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
       <span className="font-semibold">{currentQuantity}</span>
       <Button type='round' onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  );
}

export default  UpdateItemQuantity;