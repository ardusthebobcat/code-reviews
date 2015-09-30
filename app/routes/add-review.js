import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addReview(reviewParams, tagParams) {
      var newReview = this.store.createRecord('review', reviewParams);
      var context = this;
      tagParams.forEach(function(tagParam) {
        var newTag = context.store.createRecord('tag', tagParam);
        newReview.save().then(function() {
          newTag.save().then(function() {
            var reviewTagParams = {tag: newTag, review: newReview};
            var newReviewTag = context.store.createRecord('reviewtag', reviewTagParams);
            newReviewTag.save().then(function() {
              newReview.get('review_tags').addObject(newReviewTag);
              newTag.get('review_tags').addObject(newReviewTag);
              newReview.save().then(function() {
                newTag.save();
              })
            });
          });
        });
      });
      this.transitionTo('index');
    },
    addUser(params) {
      var ref = new Firebase("https://codereviews.firebaseio.com");
      ref.createUser({
        email    : params.email,
        password : params.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
        }
      });
      var newParams = {username: params.username, email: params.email};
      var newUser = this.store.createRecord('user', newParams);
      debugger;
      newUser.save();
      this.transitionTo('login');
    },
    login(params) {
      var ref = new Firebase("https://codereviews.firebaseio.com");
      ref.authWithPassword({
        email    : params.email,
        password : params.password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          window.location.reload();
          this.transitionTo('add-review');
        }
      });
    }

  }
});
