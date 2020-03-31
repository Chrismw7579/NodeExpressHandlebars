const connection = require('./connection');


const orm = {
    selectAll: (cb) => {
        connection.query('select * from burger', (err, results) => {
            if (err) {
                throw err;
            }
            cb(results);
            
        })
    },
    
    create: (name, cb) => {
        connection.query(`insert into burger (burger_name, devoured)
                          values (?,?)
                        `, [name, 0], (err, results) => {
                            if (err) {
                                throw err;
                            }
                            cb(results);
                        });
    },
    
    updateOne: (id, cb) => {
        console.log("id: ", id);
        connection.query(`update burger 
                            set devoured = 1
                            where id = ?
                        `, id, (err, res) => {
                            if (err) {
                                throw err;
                            }
                            console.log('Burger updated.');
                            cb(res);
                        })
    }
}

module.exports = orm;

