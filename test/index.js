import { expect } from 'chai'
import { introspectionQuery } from 'graphql'
import request from 'supertest-as-promised'

import app from '../app'

describe('App test', () => {

  it('Introspection Query', done => {

    request(app)
      .post('/graphql')
      .set('Content-Type', 'application/json')
      .send({ query: introspectionQuery })
      .expect(200)
      .then(res => {

        expect(res.body).to.have.property('data')
          .and.have.property('__schema')

        expect(res.body.data.__schema).to.have.property('queryType')
        expect(res.body.data.__schema).to.have.property('mutationType')
        expect(res.body.data.__schema).to.have.property('subscriptionType')
        expect(res.body.data.__schema).to.have.property('types')
        expect(res.body.data.__schema).to.have.property('directives')

      })
      .asCallback(done)
  })

  it('User Query', done => {

    const query = `
      {
        user(email: "email@email") {
          id,
          email
        }
      }
    `

    request(app)
      .post('/graphql')
      .set('Content-Type', 'application/json')
      .send({ query })
      .expect(200)
      .then(res => {

        expect(res.body.data).to.have.deep.property('user.id')
          .and.to.be.a('string')

        expect(res.body.data).to.have.deep.property('user.email', 'email@email')

      })
      .asCallback(done)
  })

})
