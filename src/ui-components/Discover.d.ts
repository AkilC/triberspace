/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type DiscoverOverridesProps = {
    Discover?: PrimitiveOverrideProps<FlexProps>;
    SubMenu?: PrimitiveOverrideProps<FlexProps>;
    ContentWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Top Section"?: PrimitiveOverrideProps<FlexProps>;
    FeaturedWrapper38582002?: PrimitiveOverrideProps<FlexProps>;
    Featured?: PrimitiveOverrideProps<TextProps>;
    CardsWrapper38582004?: PrimitiveOverrideProps<FlexProps>;
    Cards38582005?: PrimitiveOverrideProps<FlexProps>;
    Cards38582006?: PrimitiveOverrideProps<FlexProps>;
    Cards38582007?: PrimitiveOverrideProps<FlexProps>;
    Cards38582008?: PrimitiveOverrideProps<FlexProps>;
    FeaturedWrapper38582009?: PrimitiveOverrideProps<FlexProps>;
    Clothing?: PrimitiveOverrideProps<TextProps>;
    CardsWrapper38582011?: PrimitiveOverrideProps<FlexProps>;
    Cards38582012?: PrimitiveOverrideProps<FlexProps>;
    Cards38582013?: PrimitiveOverrideProps<FlexProps>;
    Cards38582014?: PrimitiveOverrideProps<FlexProps>;
    Cards38582015?: PrimitiveOverrideProps<FlexProps>;
    FeaturedWrapper38582016?: PrimitiveOverrideProps<FlexProps>;
    Avatars?: PrimitiveOverrideProps<TextProps>;
    CardsWrapper38582018?: PrimitiveOverrideProps<FlexProps>;
    Cards38582019?: PrimitiveOverrideProps<FlexProps>;
    Cards38582020?: PrimitiveOverrideProps<FlexProps>;
    Cards38582021?: PrimitiveOverrideProps<FlexProps>;
    Cards38582022?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type DiscoverProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DiscoverOverridesProps | undefined | null;
}>;
export default function Discover(props: DiscoverProps): React.ReactElement;
