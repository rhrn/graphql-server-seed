const resolvers = {
  Query: {
    user(root, args) {
      return { id: 1, email: 'email@email', password: 'passwd' }
    }
  }
};

export default resolvers;
