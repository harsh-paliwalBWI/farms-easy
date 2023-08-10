import React from 'react';
import ProductCard from '../productCard/ProductCard';
import veg2 from "../../images/veg2.svg"
import veg3 from "../../images/veg3.svg"
import veg4 from "../../images/veg4.svg"


const Farmerpageproducts = () => {
    // Example data for products, replace this with your actual product data.
    const productData = [
        { id: 1, productname: 'Potatos 20kg', price: 1400, image: veg2, discount: '15', category:'vegetables', vendor:'Organic Nature'},
        { id: 2, productname: 'Tomatoes 10kg', price: 950, image: veg3, discount: '15', category:'vegetables', vendor:'Organic Nature'},
        { id: 3, productname: 'Broccoli 10kg', price: 800, image: veg4, discount: '15', category:'vegetables', vendor:'Organic Nature'},
        { id: 4, productname: 'Potatos 20kg', price: 1400, image: veg2, discount: '15', category:'vegetables', vendor:'Organic Nature'},
        { id: 5, productname: 'Tomatoes 10kg', price: 950, image: veg3, discount: '15', category:'vegetables', vendor:'Organic Nature'},
        { id: 6, productname: 'Broccoli 10kg', price: 800, image: veg4, discount: '15', category:'vegetables', vendor:'Organic Nature'},
        { id: 7, productname: 'Potatos 20kg', price: 1400, image: veg2, discount: '15', category:'vegetables', vendor:'Organic Nature'},
        { id: 8, productname: 'Tomatoes 10kg', price: 950, image: veg3, discount: '15', category:'vegetables', vendor:'Organic Nature'},
        { id: 9, productname: 'Broccoli 10kg', price: 800, image: veg4, discount: '15', category:'vegetables', vendor:'Organic Nature'},
        
        // Add more product entries as needed.
    ];

    // Slice the data to get the first 6 products to be displayed.
    const displayedProducts = productData.slice(0, 5);

    return (
        <div className='flex flex-col md:flex-row flex-wrap justify-start items-center gap-6 md:gap-8 my-6'>
            {displayedProducts.map((product,idx) => (
                <ProductCard key={idx}></ProductCard>
                // <ProductCard
                //     key={product.id}
                //     productname={product.productname}
                //     price={product.price}
                //     image={product.image}
                //     category={product.category}
                //     discount={product.discount}
                //     vendor={product.vendor}
                // />

            ))}
        </div>
    );
};

export default Farmerpageproducts;
