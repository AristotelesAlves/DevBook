import { sqlite3 } from 'sqlite3';

const sqlite = new sqlite3

export let db = sqlite.Database('./meubanco.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados.');
});

