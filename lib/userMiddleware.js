module.exports =(()=>{
    const tipoDato =(req,res,next) =>{
        const {nombre, apellidos, edad} = req.body;
        if(typeof(nombre)!=='string') return res.send('Nombre debe ser string');
        if(typeof(apellidos)!=='string') return res.send('apellido debe ser string');
        if(typeof(edad)!=='number') return res.send('edad debe ser número');
        next();
    };
    return{
        tipoDato
    }
})();