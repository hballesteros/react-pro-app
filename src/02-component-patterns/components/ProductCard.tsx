import { createContext, ReactElement, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, increaseBy} = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            increaseBy,
        }}>
            <div 
                className={ `${ styles.productCard } ${ className ? className : '' }`  }
                style={ style } 
            >
                { children }
            </div>
        </Provider>
    )
}
