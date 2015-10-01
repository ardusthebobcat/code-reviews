import Ember from 'ember';

export function username(params/*, hash*/) {
  // debugger;
  return params;
  // return this.store.userData.get('username');
}

export default Ember.Helper.helper(username);
