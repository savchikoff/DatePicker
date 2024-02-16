const readFromCache = (key: string) => {
    const storage = localStorage.getItem(key);
    if (storage) {
        return JSON.parse(storage);
    }
    return [];
};

const writeToCache = (key: string, data: object[]) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export { readFromCache, writeToCache };
