import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryStatus } from '../redux/categories/categories';

function Category() {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryStatus());
  }, [dispatch]);

  return (
    <div className="category-container">
      {categories.map((category) => (
        <div key={1}>{category}</div>
      ))}
    </div>
  );
}

export default Category;
