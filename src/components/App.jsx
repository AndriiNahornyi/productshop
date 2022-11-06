import css from './App.module.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Products from '../pages/Products';
import Shop from '../pages/Shop';

function App() {
  return (
    <>
      <section className={css.Section}>
        <div className={css.Content}>
          <h1 className={css.Title}>Product Shop</h1>
        </div>

        <NavLink className={css.NavLink} to="/">
          <span className={css.Link}>Products gallery</span>
        </NavLink>
        <NavLink className={css.NavLink} to="/shop">
          <span className={css.Link}>Shop</span>
        </NavLink>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
