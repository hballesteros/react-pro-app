import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
  
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]:ProductInCart }>({});

    const onProductCountChange = ( {counter, product}: { counter: number, product: Product} ) => {

        setShoppingCart( prev => {

            const productInCart: ProductInCart = prev[product.id] || { ...product, count: 0 };  

            if ( Math.max( productInCart.count + counter, 0 ) > 0 ) {
                productInCart.count += counter;
                return {
                    ...prev,
                    [product.id]: productInCart,
                }
            }
            
            // Borrar el producto del carrito si el contador es 0
            const { [product.id]: toDeleted, ...rest } = prev;
            return rest;
           

            // if ( counter === 0 ) {
            //     const { [product.id]: toDeleted, ...rest } = prev;
            //     return rest;
            // }

            // return {
            //     ...prev,
            //     [product.id]: { ...product, count: counter }
            // }
        
        });
    };
  
    return {
        shoppingCart,
        onProductCountChange
    }
}
