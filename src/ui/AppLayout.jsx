import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import LoaderScreen from './LoaderScreen';
function AppLayout() {
  const navigateion = useNavigation();
  const isLoading = navigateion.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <LoaderScreen />}
      <Header></Header>
      <div className="overflow-y-auto">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
