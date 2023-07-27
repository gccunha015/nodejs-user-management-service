import { randomUUID } from 'node:crypto'

export default class User {
  constructor({email, password}, options) {
    this.id = randomUUID()
    this.email = email
    this.password = password
    this.creation_date = new Date()
    this.options = options
  }
}