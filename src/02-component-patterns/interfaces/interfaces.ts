import { ReactElement } from 'react';
import { Props as ProductButtonsProps} from '../components/ProductButtons';
import { Props as ProductCardProps} from '../components/ProductCard';
import { Props as ProductImageProps} from '../components/ProductImage';
import { Props as ProductTitleProps} from '../components/ProductTitle';

export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: ( value: number ) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): ReactElement,
    Buttons: (Props: ProductButtonsProps) => ReactElement,
    Image: (Props: ProductImageProps) => ReactElement,
    Title: (Props: ProductTitleProps) => ReactElement,
}

export interface onChangesArgs {
    counter: number;
    product: Product;
}

export interface ProductInCart extends Product {
    count: number;
}
