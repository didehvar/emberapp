import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      let { email, password } = this.getProperties(
        'email', 'password'
      );

      this.get('session')
        .authenticate('authenticator:oauth2', email, password)
        .catch((reason) => this.set('errorMessage', reason.error));
    },

    authenticateGithub() {
      this.get('session')
        .authenticate('authenticator:torii', 'github-oauth2')
        .catch((reason) => this.set('errorMessage', reason.error));
    }
  }
});
