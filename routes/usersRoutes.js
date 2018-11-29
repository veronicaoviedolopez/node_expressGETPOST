import mongoose, { mongo } from 'mongoose';
import {tipoDato} from '../lib/userMiddleware';
import '../models/user';

const User = mongoose.model('users');

module.exports =(app) =>{
    app.get(
        '/api/users',
        async (req,res) => {
            try{
                const respuesta = await User.find({});
                res.send(respuesta);
            }
            catch(error){
                res.send(error.message);
            }
        }       
    );

    app.get(
        '/api/users/:id',
        async (req,res) =>{
            try{
                const respuesta = await User.find({_id:req.params.id});
                res.send(respuesta);
            }
            catch(error){
                res.send(error.message);
            }
        }
    );

    app.post( 
        '/api/users',
        tipoDato,
        async (req, res) =>{
            try{
                const nueva = new User(req.body);
                const respuesta = await nueva.save();
                return res.send(respuesta);
            }
            catch(error)
            {
                res.send(error.message);
            }
        }

    );

    app.delete(
        '/api/users/:id',
        async (req,res) =>{
            try{
                const respuesta = await User.deleteOne({_id: req.params.id});
                res.send(respuesta);
            }
            catch(error){
                res.send(error.message);
            }
        }
    )
}

