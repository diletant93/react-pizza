import { Link } from 'react-router-dom';
import Username from '../features/user/Username';
import SearchOrder from '../features/order/SearchOrder';
function Header() {
  return (
    <header className="flex items-center justify-between border border-solid border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest font-pizza">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username>Jonas</Username>
    </header>
  );
}

export default Header;
