/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { ShopCardTallProps } from "./ShopCardTall";
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
export declare type DiscoverContentOverridesProps = {
    DiscoverContent?: PrimitiveOverrideProps<FlexProps>;
    "Top Section"?: PrimitiveOverrideProps<FlexProps>;
    FeaturedWrapper38791802?: PrimitiveOverrideProps<FlexProps>;
    Featured?: PrimitiveOverrideProps<TextProps>;
    CardsWrapper38791804?: PrimitiveOverrideProps<FlexProps>;
    "ShopCard-Tall38792126"?: ShopCardTallProps;
    "ShopCard-Tall38792076"?: ShopCardTallProps;
    "ShopCard-Tall38792056"?: ShopCardTallProps;
    "ShopCard-Tall38792116"?: ShopCardTallProps;
    FeaturedWrapper38791809?: PrimitiveOverrideProps<FlexProps>;
    Clothing?: PrimitiveOverrideProps<TextProps>;
    CardsWrapper38791811?: PrimitiveOverrideProps<FlexProps>;
    "ShopCard-Tall38792046"?: ShopCardTallProps;
    "ShopCard-Tall38792086"?: ShopCardTallProps;
    "ShopCard-Tall38792036"?: ShopCardTallProps;
    "ShopCard-Tall38792096"?: ShopCardTallProps;
    FeaturedWrapper38791816?: PrimitiveOverrideProps<FlexProps>;
    Avatars?: PrimitiveOverrideProps<TextProps>;
    CardsWrapper38791818?: PrimitiveOverrideProps<FlexProps>;
    "ShopCard-Tall38792136"?: ShopCardTallProps;
    "ShopCard-Tall38792066"?: ShopCardTallProps;
    "ShopCard-Tall38792106"?: ShopCardTallProps;
    "ShopCard-Tall38792026"?: ShopCardTallProps;
} & EscapeHatchProps;
export declare type DiscoverContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DiscoverContentOverridesProps | undefined | null;
}>;
export default function DiscoverContent(props: DiscoverContentProps): React.ReactElement;
