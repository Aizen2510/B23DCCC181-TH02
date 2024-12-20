import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ products, setEditingProduct, deleteProduct }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleEdit = (product, index) => {
    setEditingProduct({ ...product, index });
    navigate('/add-product');
  };

  const handleDelete = (index) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa hàng hóa này?')) {
      deleteProduct(index);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="product-container">
      <h2>Danh Sách Hàng Hóa</h2>
      <div className="product-header">
        <input
          type="text"
          placeholder="Tìm kiếm hàng hóa..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="add-button" onClick={() => navigate('/add-product')}>
          Thêm Hàng Hóa
        </button>
      </div>
      <ul className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <li key={index} className="product-item">
              <span>{product.name} - {product.price} VND</span>
              <div className="product-actions">
                <button className="edit-button" onClick={() => handleEdit(product, index)}>
                  Chỉnh sửa
                </button>
                <button className="delete-button" onClick={() => handleDelete(index)}>
                  Xóa
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="no-results">Không tìm thấy hàng hóa nào!</li>
        )}
      </ul>
    </div>
  );
};

export default Product;
