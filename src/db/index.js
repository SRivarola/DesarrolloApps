import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('address.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS miLista (id INTEGER PRIMARY KEY NOT NULL, item TEXT NOT NULL);',
                [],
                () => resolve(),
                (_, err) => reject(err)
            )
        })
    })

    return promise;
}

export const getItems = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM miLista',
                [],
                (_, result) => {
                    resolve(result)
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    })
    return promise;
}

export const insertItem = (item) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(
                'INSERT INTO miLista (item) VALUES (?)',
                [JSON.stringify(item)],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    console.log(err);
                    reject(err)
                }
            )
        })
    })
    return promise;
}

export const deleteItem = (id) => {
    let query = "DELETE FROM miLista WHERE id = ?";
    let params = [id];
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx =>{
            tx.executeSql(query, params,
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    console.log('error: ', err);
                    reject(err)
                }
            )
        })
    })
    return promise;
}