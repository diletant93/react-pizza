import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu)
  return( 
  <ul className="divide-y divide-stone-200 px-2 overflow-x-hidden">
    {
      menu.map(pizza =>(
        <MenuItem pizza={pizza} key={pizza.id}/>
      ))
    }
  </ul>
  );
}

async function loader(){
  const menu = await getMenu()
  return menu
}

export {loader}
export default Menu;
