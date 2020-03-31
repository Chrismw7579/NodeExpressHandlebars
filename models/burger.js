const orm = require('../config/orm.js');

const burger = {
    
    all: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        })
    },

    create: (name, cb) => {
        orm.create(name, (res) => {
            cb(res);
        });
    },

    update: (id, cb) => {
        console.log('burger update');
        orm.updateOne(id, (res) => {
            cb(res);
        })
    }
}

module.exports = burger;