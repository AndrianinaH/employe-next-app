const routes = require('next-routes');

// Name   Page      Pattern
// ----   ----      -----
// about  about     /about
// blog   blog      /blog/:slug
// user   profile   /user/:id

module.exports = routes().add('employe-edit', '/employe-edit/:id');
