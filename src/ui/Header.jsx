import { Link } from 'react-router-dom';
import Username from '../features/user/Username';
import SearchOrder from '../features/order/SearchOrder';
function Header() {
  return (
    <header className="bg-yellow-500 px-4 py-3 
    uppercase border border-solid border-stone-200
    ">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username>Jonas</Username>
    </header>
  );
}

export default Header;
