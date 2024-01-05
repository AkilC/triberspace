/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ProfileOverridesProps = {
    Profile?: PrimitiveOverrideProps<FlexProps>;
    TopBar?: PrimitiveOverrideProps<FlexProps>;
    Icons?: PrimitiveOverrideProps<FlexProps>;
    ProfileSettingsContent?: PrimitiveOverrideProps<FlexProps>;
    ProfileSettings?: PrimitiveOverrideProps<FlexProps>;
    "Profile Settings"?: PrimitiveOverrideProps<TextProps>;
    FieldsWrapper?: PrimitiveOverrideProps<FlexProps>;
    NameWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Name:"?: PrimitiveOverrideProps<TextProps>;
    NameField?: PrimitiveOverrideProps<ViewProps>;
    UsernameWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Username:"?: PrimitiveOverrideProps<TextProps>;
    UsernameField?: PrimitiveOverrideProps<ViewProps>;
    EmailWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Email:"?: PrimitiveOverrideProps<TextProps>;
    EmailField?: PrimitiveOverrideProps<ViewProps>;
    BirthdateWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Birthdate:"?: PrimitiveOverrideProps<TextProps>;
    BirthdateField?: PrimitiveOverrideProps<ViewProps>;
    GenderWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Gender:"?: PrimitiveOverrideProps<TextProps>;
    GenderField?: PrimitiveOverrideProps<ViewProps>;
    LocationWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Location:"?: PrimitiveOverrideProps<TextProps>;
    LocationField?: PrimitiveOverrideProps<ViewProps>;
    Divider38582218?: PrimitiveOverrideProps<IconProps>;
    PermissionsSettings?: PrimitiveOverrideProps<FlexProps>;
    "Privacy & Permissions"?: PrimitiveOverrideProps<TextProps>;
    PermissionsFields?: PrimitiveOverrideProps<FlexProps>;
    AccountWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Account Type:"?: PrimitiveOverrideProps<TextProps>;
    AccountField?: PrimitiveOverrideProps<ViewProps>;
    CameraWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Camera:"?: PrimitiveOverrideProps<TextProps>;
    CameraField?: PrimitiveOverrideProps<ViewProps>;
    MicrophoneWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Microphone:"?: PrimitiveOverrideProps<TextProps>;
    MicrophoneField?: PrimitiveOverrideProps<ViewProps>;
    Divider38582231?: PrimitiveOverrideProps<IconProps>;
    PaymentSettings?: PrimitiveOverrideProps<FlexProps>;
    "Payment & Subscriptions"?: PrimitiveOverrideProps<TextProps>;
    PaymentMethodsWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Payment Methods:"?: PrimitiveOverrideProps<TextProps>;
    PaymentMethodsFields?: PrimitiveOverrideProps<FlexProps>;
    "Frame 14438582237"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 145"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 146"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 147"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 148"?: PrimitiveOverrideProps<ViewProps>;
    SubscriptionWrapper?: PrimitiveOverrideProps<FlexProps>;
    "Subscription:"?: PrimitiveOverrideProps<TextProps>;
    CurrentSubscription?: PrimitiveOverrideProps<FlexProps>;
    "Frame 14438582245"?: PrimitiveOverrideProps<ViewProps>;
    "No Active Subscription"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProfileOverridesProps | undefined | null;
}>;
export default function Profile(props: ProfileProps): React.ReactElement;
