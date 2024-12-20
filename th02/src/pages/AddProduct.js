import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

const AddProduct = ({ onSubmit, editingProduct, setEditingProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price };
    onSubmit(editingProduct ? editingProduct.index : null, product);
    setEditingProduct(null);
    navigate('/');
  };

  return (
    <div className="add-product-container">
      <h2>{editingProduct ? 'Chỉnh Sửa Hàng Hóa' : 'Thêm Hàng Hóa'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên hàng hóa"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Giá hàng hóa"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">
          {editingProduct ? 'Lưu chỉnh sửa' : 'Thêm hàng hóa'}
        </button>
        <button type="button" className="back-button" onClick={() => navigate('/')}>
          Quay Lại
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
