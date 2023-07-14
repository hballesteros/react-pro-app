import { useEffect, useRef, useState } from 'react';
import { Product, onChangesArgs, InitialValues } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangesArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
  
    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false);

    console.log(initialValues?.count);
    

    const increaseBy = (value: number) => {

        //if( initialValues?.maxCount && counter + value > initialValues.maxCount ) return;
        let newValue = Math.max(0 , counter + value);
        if ( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues.maxCount )
        }

        setCounter( newValue );
        onChange && onChange({ counter: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {
        if( !isMounted.current ) return;
        setCounter( value );
    }, [ value ])

    useEffect(() => {
        isMounted.current = true;
    }, [])
      
    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset
    }
}
