import { useEffect, useState } from 'react';
import { Product, onChangesArgs } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangesArgs) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
  
    const [counter, setCounter] = useState( value );

    const increaseBy = (value: number) => {
        
        const newValue = Math.max(0 , counter + value);
        setCounter( newValue );
        
        onChange && onChange({ counter: newValue, product });
    }

    useEffect(() => {
        setCounter( value );
    }, [ value ])
      
    return {
        counter,
        increaseBy
    }
}
