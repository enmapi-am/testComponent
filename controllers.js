const Component = require('enmapi/database').Component;
const { sendUserError } = require('enmapi/common/errors');
const { github_api } = require('enmapi/services/').Github;

module.exports = {
  getFindComponentByName: async (req, res) => {
    try {
      const { component_name } = req.params;
      const component = await Component.findOne({ name: component_name });
      if (!component) throw new Error('Component not found');
      res.json(component);
    } catch (error) {
      sendUserError(error, res);
    }
  },
  postSubmitComponent: async (req, res) => {
    try {
      // const { name, author, installMessage, files, }
      const component = await new Component(req.body).save();
      const new_team_repo = await github_api.orgs.addTeamRepo({
        id,
        org,
        repo
      });
      res.json(component);
    } catch (error) {
      sendUserError(error, res);
    }
  },
  getTest: async (req, res) => {
    try {
      const gh = await github_api.asApp();
      console.log(gh.repos.create());
      const gh_teams = await gh.repos.create({
        name: 'a_test_repo_from_robots',
        description: 'A test, duh',
        homepage: 'https://github.com',
        private: false
      });
      res.json(gh_teams);
    } catch (error) {
      sendUserError(error, res);
    }
  }
};
