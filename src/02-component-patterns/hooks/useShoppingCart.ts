import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
  
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]:ProductInCart }>({});

    const onProductCountChange = ( {counter, product}: { counter: number, product: Product} ) => {

        setShoppingCart( prev => {

            if ( counter === 0 ) {
                const { [product.id]: toDeleted, ...rest } = prev;
                return rest;
            }

            return {
                ...prev,
                [product.id]: { ...product, count: counter }
            }
        
        });
    };
  
    return {
        shoppingCart,
        onProductCountChange
    }
}
