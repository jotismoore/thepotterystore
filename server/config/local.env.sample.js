'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'meanshop-secret',

  FACEBOOK_ID:      'app-id',
  FACEBOOK_SECRET:  'secret',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  GOOGLE_ID:        'app-id',
  GOOGLE_SECRET:    'secret',

  BRAINTREE_ID: 'pgshtn33tfhbb66q',
  BRAINTREE_SECRET: '677149144ce57efdd1a044d98da18c74',
  BRAINTREE_MERCHANT: '79tscx5n4h4jpz42',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
