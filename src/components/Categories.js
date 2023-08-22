import React from 'react';
import { useSelector } from 'react-redux';

function Category() {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className="category-container">
      {categories.map((category) => (
        <div key={1}>{category}</div>
      ))}
    </div>
  );
}

export default Category;
