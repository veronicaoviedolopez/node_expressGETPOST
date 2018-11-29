import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import ruta from './routes/usersRoutes';

const mongodbUri = 'mongodb://useradmin:useradmin123@ds217864.mlab.com:17864/user_dependents';

mongoose.connect(mongodbUri);

const app = express();
app.use(bodyParser.json());


ruta(app);
const port = 5000;

/*app.get('/', (req, res) => {
	res.send({ mensaje: 'hola Vweo'});
})
*/

app.listen(port, ()=>{console.log(`server running on port ${port}`)});
