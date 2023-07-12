import { useEffect, useRef, useState } from 'react';
import { Product, onChangesArgs } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangesArgs) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
  
    const [counter, setCounter] = useState( value );

    const isControlled = useRef( !!onChange );


    const increaseBy = (value: number) => {

        if ( isControlled.current ) {
            return onChange!({ counter: value, product });
        }   
        
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
