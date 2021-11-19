import './App.css';
import CategoryPage from './pages/admin/welcome';
import ProductManagement from './pages/admin/productmanag';
import SellerManagement from './pages/admin/sellermanag';
import SalesPage from './pages/admin/salesrep';

function App() {
  return (
    <div className="App">
      <CategoryPage></CategoryPage>
      {/* <ProductManagement title='productos'></ProductManagement> */}
      {/* <SellerManagement title='cuentas'></SellerManagement> */}
      {/* <SalesPage title='cifras'></SalesPage> */}
    </div>
  );
}

export default App;
  