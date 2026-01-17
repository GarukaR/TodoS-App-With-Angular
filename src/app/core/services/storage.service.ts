import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class StorageService {
    setStorage<T>(key: string, value: T): void {
        try {
            const serialized = JSON.stringify(value);
            localStorage.setItem(key, serialized);
        } catch (error) {
            console.error(`StorageService: Error saving key: ${key}`, error);
        }
    }

    getStorage<T>(key: string): T | null {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) as T : null;
        } catch (error) {
            console.error(`StorageService: Error getting key: ${key}`, error);
            return null;
        }
    }

    removeStorage(key: string): void {
        localStorage.removeItem(key);
    }

    clearStorage(): void {
        localStorage.clear();
    }
}


