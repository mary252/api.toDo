const db = require('./db')


exports.load= function(id) {
    return new Promise((resolve, reject)=>{
        let sql=`
            SELECT * 
            FROM notes`

            db.query(sql, (err, results) => {
                if(err) {reject(err)}
                
                    resolve(results)
                
            })
    })
}

exports.post= function(data){
    return new Promise((resolve, reject)=>{
        let sql=`
        INSERT INTO notes 
        (  comment) 
        VALUES ('${data.comment}' )`

            db.query(sql, (err, results) => {
                if(err) {reject(err)}

                    resolve(results[0])
                
            })
    })
}

exports.done= function (id){
    return new Promise((resolve, reject)=>{
        let sql=`
        UPDATE notes 
        SET done=${1}
        where id='${id}' `

            db.query(sql, (err, results) => {
                if(err) {reject(err)}
                
                    resolve(results[0])
                
            })
    })
}
exports.undo= function (id){
    return new Promise((resolve, reject)=>{
        // let sql=`
        // UPDATE notes 
        // SET done=${0}
        // where id='${id}' `
        console.log(id)
        let sql=`
        UPDATE notes SET done = 0 WHERE id = ${id} `
            db.query(sql, (err, results) => {
                if(err) {reject(err)}
                
                    resolve(results[0])
                
            })
    })
}
exports.delete= function(id){
    return new Promise((resolve, reject)=>{
        let sql=`
        DELETE FROM notes 
        WHERE
        id=${id}`

            db.query(sql, (err, results) => {
                if(err) {reject(err)}
                
                    resolve(results[0])
                
            })
    })
}