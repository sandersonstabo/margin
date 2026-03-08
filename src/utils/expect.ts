const is_empty_object = (value: unknown) => {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    if (Object.getPrototypeOf(value) !== Object.prototype) {
        return false;
    }

    return Object.keys(value).length === 0;
};

const is_empty_value = (value: unknown) => {
    if (value == null) {
        return true;
    }

    if (typeof value === "string") {
        return value.trim().length === 0;
    }

    if (Array.isArray(value)) {
        return value.length === 0;
    }

    return is_empty_object(value);
};

export const expect = <T>(
    value: T,
    message = "expected value to be non-empty",
): NonNullable<T> => {
    if (is_empty_value(value)) {
        throw new Error(message);
    }

    return value as NonNullable<T>;
};
