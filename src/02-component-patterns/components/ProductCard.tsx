import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy} = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            increaseBy,
        }}>
            <div className={ styles.productCard }>
                { children }
            </div>
        </Provider>
    )
}
