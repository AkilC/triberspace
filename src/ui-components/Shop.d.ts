/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShopOverridesProps = {
    Shop?: PrimitiveOverrideProps<FlexProps>;
    SubMenu?: PrimitiveOverrideProps<FlexProps>;
    ContentWrapper?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    TopBar?: PrimitiveOverrideProps<FlexProps>;
    Icons?: PrimitiveOverrideProps<FlexProps>;
    "Frame 39"?: PrimitiveOverrideProps<FlexProps>;
    "Visit World"?: PrimitiveOverrideProps<TextProps>;
    StoreDetailsWrapper?: PrimitiveOverrideProps<FlexProps>;
    StoreWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 93"?: PrimitiveOverrideProps<IconProps>;
    "Shop Name"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet consectetur. At mauris vestibulum purus eu eu integer ligula. Cras turpis nulla velit dolor in tortor. Enim arcu faucibus turpis sollicitudin. Vulputate in massa nascetur"?: PrimitiveOverrideProps<TextProps>;
    "CTA Group"?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<IconProps>;
    "Current Listings38582128"?: PrimitiveOverrideProps<FlexProps>;
    "Current Listings38582129"?: PrimitiveOverrideProps<TextProps>;
    "Card Wrapper"?: PrimitiveOverrideProps<FlexProps>;
    Cards38582131?: PrimitiveOverrideProps<FlexProps>;
    Cards38582132?: PrimitiveOverrideProps<FlexProps>;
    Cards38582133?: PrimitiveOverrideProps<FlexProps>;
    Cards38582134?: PrimitiveOverrideProps<FlexProps>;
    Cards38582135?: PrimitiveOverrideProps<FlexProps>;
    Cards38582136?: PrimitiveOverrideProps<FlexProps>;
    Cards38582137?: PrimitiveOverrideProps<FlexProps>;
    Cards38582138?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type ShopProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ShopOverridesProps | undefined | null;
}>;
export default function Shop(props: ShopProps): React.ReactElement;
