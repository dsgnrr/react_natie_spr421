import * as SQLite from "expo-sqlite";
import * as Crypto from 'expo-crypto';

export interface Product{
    id?:string;
    title: string;
    description?: string|null
    price: number
    created_at?: number
    deleted_at?: number
}

class DatabaseManager{
    private db: SQLite.SQLiteDatabase|null = null;

    async init(){
        this.db = await SQLite.openDatabaseAsync("shop.db");

        await this.db.execAsync(`
            CREATE TABLE IF NOT EXISTS products(
                id TEXT PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                description TEXT,
                price REAL NOT NULL,
                created_at INTEGER NOT NULL,
                deleted_at INTEGER DEFAULT NULL
            );
            `)
            console.log("DB created succesfully");
    }
    async addProduct(product:Product){
        if(!this.db) throw new Error("DB is not initialized");
        const result = await this.db.runAsync(
            `INSERT INTO products (id, title, price, description, created_at) VALUES(?, ?, ?, ?, ?);`,[
                Crypto.randomUUID(), product.title, product.price, product.description? product.description: null, Date.now()
            ]
        );

        return result.lastInsertRowId;
    }
    async getAllProducts(): Promise<Product[]>{
        if(!this.db) throw new Error("DB is not initialized");
        const rows = this.db.getAllAsync<Product>('SELECT * FROM products WHERE deleted_at IS NULL ORDER BY title;');
        return rows;
    }
    async deleteProduct(id: string){
        if(!this.db) throw new Error("DB is not initialized");
        await this.db.runAsync('UPDATE products SET deleted_at = ? WHERE id = ?;', [
            Date.now(), id
        ]);
    }
}

export const dbManager = new DatabaseManager();