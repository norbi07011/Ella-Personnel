// lib/validations.ts
// This file is not strictly necessary as validation is handled inline in OfferteForm.tsx,
// but created to fulfill the prompt's file list.

export const isEmail = (value: string): boolean => {
    if (!value) return false;
    return /\S+@\S+\.\S+/.test(value);
};

export const isRequired = (value: string): boolean => {
    return value.trim().length > 0;
};

export const hasMinLength = (value: string, min: number): boolean => {
    return value.length >= min;
};

export const hasMaxLength = (value: string, max: number): boolean => {
    return value.length <= max;
};
