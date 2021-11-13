const resolvers = {
    Query: {
      Usuarios: async (parent, args) => {
        const usuarios = [
          {
            nombre: 'Oscar',
          },
          {
            nombre: 'Angeles',
          },
          {
            nombre: 'Sandra',
          },
        ];
  
        return usuarios;
      },
    },
  };
  
  export { resolvers };