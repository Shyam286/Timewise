import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };
;

  return (
    <div className="ProductCard w-[12rem] m-3 transition-all cursor-pointer" onClick={handleProductClick}>
      <div className="h-[15rem] w-full">
        <img
          className='h-full w-full object-cover object-left-top'
          src={product.image1}
          alt=""
        />
      </div>
      <div className="textpart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">₹{product.price}</p>
          <p className="font-semibold text-lg text-green-600">{Math.floor(((product.price-product.discountedPrice)/product.price)*100)}% off</p>
        </div>
      </div>
    </div>
  )
}

export default HomeSectionCard