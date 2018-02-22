const {
  getFindComponentByName,
  postSubmitComponent,
  getTest
} = require('./controllers');

module.exports = {
  '/component': {
    get: {
      '/find/:component_name': getFindComponentByName
    },
    post: {
      '/submit': postSubmitComponent
    }
  },
  '/': {
    get: {
      '/': getTest
    }
  }
};
