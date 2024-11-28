import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import LoaderScreen from "./LoaderScreen";
function AppLayout() {
  const navigateion = useNavigation()
  const isLoading = navigateion.state === 'loading'

  return (
    <div className="layout">
      {
        isLoading && <LoaderScreen />
      }
       <Header>
       </Header>
       <main>
        <Outlet />
       </main>
       <CartOverview />
    </div>
  );
}

export default  AppLayout;