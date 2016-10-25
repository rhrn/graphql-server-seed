mkdir graphql-seed
cd graphql-seed
npm init -y
npm i -D babel-preset-es2015@latest babel-polyfill@latest babel-cli@latest
npm i -S express@latest body-parser@latest
npm i -S graphql-tools@latest graphql@latest apollo-server@latest
npm i -D casual@latest
@ .babelrc
mkdir data
@ data/schema.js
@ data/mocks.js
@ data/resolvers.js
@ index.js
mkdir test
npm i -D mocha@latest supertest@latest supertest-as-promised@latest chai@latest
