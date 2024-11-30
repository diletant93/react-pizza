import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./userSlice";
function Username({children}) {
  const username = useSelector(store => store.user.username)
  if(!username) return null
  return (
    <p className="hidden text-sm font-semibold md:block">
        {username}
    </p>
  );
}

export default  Username;