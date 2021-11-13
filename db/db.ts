import { connect } from 'mongoose';
// const { connect } = require('mongoose');

const conectarBD = async () => {
  return await connect(
<<<<<<< HEAD
    'mongodb+srv://admin:Admin666@gestionproyectossowace.gdbfi.mongodb.net/gestionProyectos?retryWrites=true&w=majority'
  )
    .then(() => {
      console.log('DB Connected');
      })
    .catch ((e) => {
      console.error("Error conectando la DB", e);
=======
    'mongodb+srv://admin:AdminProyectos@gestionproyectosmisiont.1zmu5.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
  )
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
>>>>>>> origin/explicaciones_mongoose
    });
};

export default conectarBD;
