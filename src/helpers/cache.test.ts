import { readFromCache, writeToCache } from "./cache";

describe('Cache helper', () => {
    const key = 'testKey';

    beforeEach(() => {
        localStorage.clear();
    });

    test('readFromCache returns an empty array for non-existing key', () => {
        const result = readFromCache(key);
        expect(result).toEqual([]);
    });

    test('readFromCache returns parsed data for an existing key', () => {
        const testData = [{ id: 1, name: 'Test' }];
        localStorage.setItem(key, JSON.stringify(testData));

        const result = readFromCache(key);
        expect(result).toEqual(testData);
    });

    test('writeToCache writes data to localStorage', () => {
        const testData = [{ id: 1, name: 'Test' }];
        writeToCache(key, testData);

        const storedData = localStorage.getItem(key);
        expect(storedData).toEqual(JSON.stringify(testData));
    });

    test('writeToCache overwrites existing data in localStorage', () => {
        const initialData = [{ id: 1, name: 'Test' }];
        localStorage.setItem(key, JSON.stringify(initialData));

        const testData = [{ id: 2, name: 'Test' }];
        writeToCache(key, testData);

        const storedData = localStorage.getItem(key);
        expect(storedData).toEqual(JSON.stringify(testData));
    });
});