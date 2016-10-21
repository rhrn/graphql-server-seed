import casual from 'casual';

const mocks = {
  ID: () => casual.integer(1),
  Int: () => casual.integer(1),
  String: () => casual.title,
  Query: () => ({
    user: (root, args) => {
      return { id: args.id, email: args.email, random: casual.random };
    }
  }),
  User: () => ({ email: casual.title, password: casual.first_name })
};

export default mocks;
