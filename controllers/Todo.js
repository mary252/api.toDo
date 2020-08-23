'use-strict';
const toDoModel =require("../models/toDo")


exports.get = function (req, res) {
    //console.log(req)
    toDoModel.load(req.query.id).then((results)=>{
        
            return res.status(200).send({
                status: true,
                message: 'Successful',
                results,
            });
        
    }).catch((e)=>{
        return res.status(500).send({
            status: false,
            message: 'Internal server Error',
        });
    })

    
}

exports.post = function (req, res) {
    //console.log(req)
    if ( !req.body.comment) {
        return res.status(400).send({
            status: false,
            message: 'invalid data'
        });
    }
    toDoModel.post(req.body).then((results)=>{
        toDoModel.load(req.query.id).then((results)=>{
        
            return res.status(200).send({
                status: true,
                message: 'Successful',
                results,
            });
        
    }).catch((e)=>{
        return res.status(500).send({
            status: false,
            message: 'Internal server Error',
        });
    })
    }).catch((e)=>{
        return res.status(500).send({
            status: false,
            message: 'Internal server Error',
        });
    })



}

exports.done= function (req, res) {
    if (!req.params.id) {
        return res.status(400).send({
            status: false,
            message: 'invalid id'
        });
    }

    toDoModel.done(req.params.id).then((results)=>{
    
        return res.status(200).send({
            status: true,
            message: 'Successful',
            results,
        });
    
    }).catch((e)=>{
        return res.status(500).send({
            status: false,
            message: 'Internal server Error',
        });
    })
}
exports.undo= function (req, res) {
    if (!req.params.id) {
        return res.status(400).send({
            status: false,
            message: 'invalid id'
        });
    }

    toDoModel.undo(req.params.id).then((results)=>{
    
        return res.status(200).send({
            status: true,
            message: 'Successful',
            results,
        });
    
    }).catch((e)=>{
        return res.status(500).send({
            status: false,
            message: 'Internal server Error',
        });
    })
}

exports.delete= function (req, res) {
    if (!req.params.id) {
        return res.status(400).send({
            status: false,
            message: 'invalid id'
        });
    }

    toDoModel.delete(req.params.id).then(()=>{
    
        return res.status(200).send({
            status: true,
            message: 'Successful',
        });
    
    }).catch((e)=>{
        return res.status(500).send({
            status: false,
            message: 'Internal server Error',
        });
    })
}
