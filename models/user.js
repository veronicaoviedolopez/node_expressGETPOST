import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    nombre:String,
    apellidos:String,
    edad: Number,
    dependents: [
        {
            nombre:String,
            parentesco:String,
            edad: {
                type:Number,
                default: 1
            } 
        }
    ]
});

mongoose.model('users', userSchema);