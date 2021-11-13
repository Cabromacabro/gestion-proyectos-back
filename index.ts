import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_Rol, Enum_TipoObjetivo } from './models/enums';
import { ProjectModel } from './models/project';
import { ObjectId } from 'mongoose';
import { ObjectiveModel } from './models/objective';

const main = async () => {
  await conectarBD();

<<<<<<< HEAD
// Customer.insertMany([
//   {
//     name: 'Oscar',
//     email: 'inhelltorment@gmail.com',
//   },
//   {
//     name: 'Alex',
//     email: 'oscarpedrazamartinez78@gmail.com',
//   },
// ])
//   .then((c) => {
//     console.log(c);
=======
  // const objet = await ObjectiveModel.create({
  //   descripcion: 'Este es el objetivo especifico',
  //   tipo: Enum_TipoObjetivo.especifico,
  // });

  // ProjectModel.create({
  //   nombre: 'Proyecto 2',
  //   presupuesto: 120,
  //   fechaInicio: Date.now(),
  //   fechaFin: new Date('2022/11/10'),
  //   lider: '618ac12a2fb091af1782732b',
  //   objetivos: ['618c146e8b21e4e8dc979e83', '618c148a42073e2513ec7dab'],
  // });

  const proyecto = await ProjectModel.find({ nombre: 'Proyecto 2' })
    .populate('lider')
    .populate('objetivos');
  console.log('el proyecto es: ', JSON.stringify(proyecto));

  // const lider = await UserModel.find({ _id: proyecto[0].lider });

  // console.log('el lider del proyecto es: ', lider);
};

main();

// CRUD USUARIOS

// CREAR UN USUARIO
// await UserModel.create({
//   apellido: 'Saldarriaga',
//   correo: 'lksk.dflcccc.com@',
//   identificacion: '123456789',
//   nombre: 'daniel',
//   rol: Enum_Rol.administrador,
// })
//   .then((u) => {
//     console.log('usuario creado', u);
>>>>>>> origin/explicaciones_mongoose
//   })
//   .catch((e) => {
//     console.error('Error creando el usuario', e);
//   });

<<<<<<< HEAD
// const customers = await Customer.find().then((c) => {
//   return c;
// });
// Order.create({
//   total: 1500,
//   customer_id: customers[0]._id,
// });

// UserModel.create({
//   name: 'Oscar',
//   lastName: 'Pedraza,
//   document: '11201445',
//   email: 'inhelltorment@gmail.com',
//   role: Enums.Enum_UserRole.estudiante,
// })
=======
// OBTENER LOS USUARIOS
// await UserModel.find()
>>>>>>> origin/explicaciones_mongoose
//   .then((u) => {
//     console.log('usuarios', u);
//   })
//   .catch((e) => {
//     console.error('error obteniendo los usuarios', e);
//   });

<<<<<<< HEAD
/*ProjectModel.create({
  name: 'Test',
  budget: 120,
  startDate: Date.now(),
  finishDate: new Date('2022/11/10'),
  leader: '6187d3a20a1d2fc06ea9b1f0',
})
  .then((p) => {
    console.log('project', p);
  })
  .catch((e) => {
    console.error(e);
  });*/
=======
// OBTENER UN SOLO USUARIO
// await UserModel.findOne({ identificacion: '16546' })
//   .then((u) => {
//     console.log('usuario encontrado', u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });
>>>>>>> origin/explicaciones_mongoose

// EDITAR UN USUARIO
// await UserModel.findOneAndUpdate(
//   { correo: 'dsl@cc.com' },
//   {
//     nombre: 'Juan',
//     apellido: 'López',
//   }
// )
//   .then((u) => {
//     console.log('usuario actualizado', u);
//   })
//   .catch((e) => {
//     console.error('Error actualizando', e);
//   });

<<<<<<< HEAD
const main = async () => {
  await connectDB();

  // order = await Order.find({ customer_id: '6186629a2dde6bb7f645aeaf' });
  // console.log(order);
};



main();
=======
// ELIMINAR UN USUARIO
// await UserModel.findOneAndDelete({ correo: 'dsl@cc.com' })
//   .then((u) => {
//     console.log('usuario eliminado: ', u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });
>>>>>>> origin/explicaciones_mongoose
