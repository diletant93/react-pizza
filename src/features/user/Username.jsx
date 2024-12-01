import { useDispatch, useSelector } from "react-redux";
import { getUserName, updateName } from "./userSlice";
function Username({children}) {
  const username = useSelector(getUserName)
  if(!username) return null
  return (
    <p className="hidden text-sm font-semibold md:block">
        {username}
    </p>
  );
}

export default  Username;