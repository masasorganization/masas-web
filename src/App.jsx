import './App.css';
import CategoryPage from './pages/admin/welcome';
import BoxManagement from './components/admin/BoxManagement';
import ButtonAppBar from './components/admin/NavBarAdmin';
import ProductManagement from './pages/admin/productmanag';
import SellerManagement from './pages/admin/sellermanag';

function App() {
  return (
    <div className="App">
      {/* <CategoryPage></CategoryPage> */}
      {/* <ProductManagement title='productos'></ProductManagement> */}
      <SellerManagement title='cuentas'></SellerManagement>
      
    </div>
  );
}

export default App;
  