import Header from './pages/Header';
import Footer from './pages/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
