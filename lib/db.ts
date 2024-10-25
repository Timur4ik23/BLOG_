import mysql from 'mysql2/promise';
let connection;

const createConnectionMy = async () => {

    if (!connection) {
        try {
            connection = await mysql.createConnection({
                host: 'localhost',
                user: 'tymur',
                password: 'qwerty',
                database: 'blog',
            });
            console.log('Database connection established'); 
        } catch (error) {
            console.error('Error connecting to the database:', error);
            throw error; 
        }
    }
    return connection;
};

export default createConnectionMy;
