/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');
var Catalog = require('../api/catalog/catalog.model');
var mainCatalog, home, bowls, vases;

User.find({}).removeAsync()
  .then(function() {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: process.env.ADMIN_PASSWORD || 'admin'
    })
    .then(function() {
      console.log('finished populating users');
    });
  });

Catalog
  .find({})
  .remove()
  .then(function () {
    return Catalog.create({ name: 'All'});
  })
  .then(function (catalog) {
    mainCatalog = catalog;
    return mainCatalog.addChild({name: 'Home'});
  })
  .then(function (category) {
    home = category._id;
    return mainCatalog.addChild({name: 'Bowls'});
  })
  .then(function (category) {
    bowls = category._id;
    return mainCatalog.addChild({name: 'Vases'});
  })
  .then(function (category) {
    vases = category._id;
    return Product.find({}).remove({});
  })
  .then(function() {
    return Product.create({
      title: 'The Pottery Store Bowl',
      imageUrl: '/assets/uploads/bowl.jpg',
      price: 25,
      stock: 250,
      categories: [bowls],
      description: 'Jemma Charman has made this bowl'
    }, {
      title: 'The Pottery Store Vase',
      imageUrl: '/assets/uploads/vase.jpg',
      price: 15,
      stock: 100,
      categories: [vases],
      description: 'This is a lovely vase made exclusively for The Pottery Store'
    }, {
      title: 'The Pottery Store Platter',
      imageUrl: '/assets/uploads/platter.jpg',
      price: 8,
      stock: 50,
      categories: [home],
      description: 'A handmade platter'
    });
  })
  .then(function () {
    console.log('Finished populating Products with categories');
  })
  .then(null, function (err) {
    console.error('Error populating Products & categories: ', err);
  });
