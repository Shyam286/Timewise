import { Button, Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const reviews = { href: '#', average: 4, totalCount: 117 }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function ProductDetails() {

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [cartId, setCartId] = useState(null);

  const quantity =1;
  //const apiUrl2 =`http://localhost:8082/api/user/cart/${userId}`;
  const apiUrl = `http://localhost:8082/api/public/carts/${cartId}/products/${productId}/quantity/${quantity}`;

  const addToCart = async (cartId, productId) => {
    const localStorageData = JSON.parse(localStorage.getItem('data'));
    setCartId(localStorageData.cartId);
   //  const apiUrl = `http://localhost:8082/api/public/carts/${cartId}/products/${productId}`;
     try {
      const response = await axios.post(apiUrl);
      console.log(response.data); 
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };
  // useEffect(() =>{
  //   console.log(localStorage.getItem('cartId'));
  //   setCartId(localStorage.getItem('cartId'));
   
  // },[])
  useEffect(() => {
    //console.log("-----------------",id)
    // Fetch product details from the backend API based on the productId
    axios.get(`http://localhost:8082/api/public/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details', error));
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
               
        {/*TODO: For images and product details */}
      <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
        {/* Image gallery */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
          <img
          src={product.image1}
          alt={product.image1}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-wrap space-x-5 justify-center">
       <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"> 
          <img
            src={product.image2}
            alt={product.image2}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"> 
          <img
            src={product.image3}
            alt={product.image3}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
          
        </div>

        {/* Product info */}
        <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:col-span-2 ">
            <h1 className="text-lg lg:text-xl font-semibold text-gray-800">{product.name}</h1>
            <h1 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">
            {product.title} 
          </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <div className='flex space-x-5 items-center text-lg lg:text-x1 text-gray-900 mt-6'>
                <p className='font-semibold'>{product.discountedPrice}</p>
                <p className='opacity-50 line-through'> {product.price} </p>
                
            </div>
            
            {/* Reviews */}
            <div className="mt-6">
                <div className='flex items-center space-x-3'>
                 <Rating name="read-only" value={5.5} readOnly />
                 <p className='opacity-50 text-sm'>117 Ratings</p>
                 <p className='ml-3 text-sm font-medium text-indigo-700 hover:text-indigo-500'>380 Reviews</p>
                </div>
                
            </div>

            <form className="mt-10">

              <Button color="secondary" variant="contained" sx={{p:"2rem",py:"1rem"}}
              onClick={() => addToCart(cartId,productId)}>
                  Add to Cart
              </Button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* TODO: Rating and Reviews */}
      <section className="">
      <h1 className="font-semibold text-lg pb-4">
        Recent Review & Ratings
      </h1>
      
      </section>

      
      </div>
    </div>
  )
}
