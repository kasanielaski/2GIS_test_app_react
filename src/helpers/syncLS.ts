export const saveLS = (key: string, payload: string): void => {
    try {
        localStorage.setItem(key, payload);
    } catch (error) {
        throw new Error(`There is problem with LS: ${error}`);
    }
};

export const loadLS = (key: string): string | undefined => {
    try {
        return localStorage.getItem(key)!;
    } catch (error) {
        throw new Error(`There is problem with LS: ${error}`);
    }
};
