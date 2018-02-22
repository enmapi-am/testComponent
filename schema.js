const { Types } = require('enmapi/database/utils');

module.exports = {
  Component: {
    Schema: {
      name: {
        type: String,
        required: true,
        unique: true
      },
      gh_url: {
        type: String,
        required: true,
        unique: true
      },
      description: {
        type: String
      },
      installMessage: {
        type: String
      },
      author: {
        type: Types.ObjectId,
        ref: 'User'
      },
      version: {
        type: String,
        default: '0.1.0'
      }
    }
  }
};
