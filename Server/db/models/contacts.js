const bookshelf = require('./bookshelf')

const Contacts = bookshelf.Model.extend({
  tableName: 'contactsTable',
  hasTimestamps: true
})

module.exports = Contacts