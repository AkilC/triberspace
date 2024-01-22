/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WorldCreateFormInputValues = {
    name?: string;
    Spaces?: any[];
    Creator?: any;
};
export declare type WorldCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    Spaces?: ValidationFunction<any>;
    Creator?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorldCreateFormOverridesProps = {
    WorldCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Spaces?: PrimitiveOverrideProps<AutocompleteProps>;
    Creator?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type WorldCreateFormProps = React.PropsWithChildren<{
    overrides?: WorldCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorldCreateFormInputValues) => WorldCreateFormInputValues;
    onSuccess?: (fields: WorldCreateFormInputValues) => void;
    onError?: (fields: WorldCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorldCreateFormInputValues) => WorldCreateFormInputValues;
    onValidate?: WorldCreateFormValidationValues;
} & React.CSSProperties>;
export default function WorldCreateForm(props: WorldCreateFormProps): React.ReactElement;
