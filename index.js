import app from './app'

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphql`
))
