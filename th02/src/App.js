import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (index, product) => {
    if (index !== null) {
      const updatedProducts = [...products];
      updatedProducts[index] = product;
      setProducts(updatedProducts);
    } else {
      setProducts([...products, product]);
    }
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Product
              products={products}
              setEditingProduct={setEditingProduct}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route
          path="/add-product"
          element={
            <AddProduct
              onSubmit={addProduct}
              editingProduct={editingProduct}
              setEditingProduct={setEditingProduct}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
