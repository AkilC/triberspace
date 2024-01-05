/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ListItemProps } from "./ListItem";
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
export declare type SubMenuOverridesProps = {
    SubMenu?: PrimitiveOverrideProps<FlexProps>;
    ListItemWrapper?: PrimitiveOverrideProps<FlexProps>;
    "List Item38792209"?: ListItemProps;
    "List Item38792211"?: ListItemProps;
    "List Item38792207"?: ListItemProps;
    "List Item38792213"?: ListItemProps;
    Cart?: PrimitiveOverrideProps<FlexProps>;
    Wrapper?: PrimitiveOverrideProps<FlexProps>;
    Icons?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    NumberWrapper?: PrimitiveOverrideProps<FlexProps>;
    Num?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SubMenuProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SubMenuOverridesProps | undefined | null;
}>;
export default function SubMenu(props: SubMenuProps): React.ReactElement;
