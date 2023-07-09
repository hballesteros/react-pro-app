import { ReactElement } from 'react';

export interface ProductCardProps {
    children?: ReactElement | ReactElement[];
    product: Product;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: ( value: number ) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): ReactElement,
    Title: ({ title }: { title?: string }) => ReactElement,
    Image: ({ img }: { img?: string }) => ReactElement,
    Buttons: () => ReactElement,
}