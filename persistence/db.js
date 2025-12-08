import * as SQLite from 'expo-sqlite';

export async function getDo() {
    const db =
        await SQLite.openDatabaseAsync('ShopList.db');
    await db.execAsync(`
    PRAGMA journal_mode = 'WAL';
    CREATE TABLE IF NOT EXISTS ShopListItem(
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        title TEXT NOT NULL
    );
 `);
    return db;
}