import Ember from 'ember';

export function scoreRating(params/*, hash*/) {
  var scoreRating = parseInt(params[0].get('score'));
  if (scoreRating < 3) {
    var color = "error";
  } else if (scoreRating < 4) {
    var color = "warning";
  } else {
    var color = "success";
  }
  var output = '<div class="ui progress '+color+'" data-percent="'+scoreRating * 20+'">'
  output += '<div class="bar" style="transition-duration: 300ms; width: '+scoreRating * 20+'%;">'
  output += '<div class="progress">'+scoreRating+' out of 5</div></div></div>'
  return output;
}

export default Ember.Helper.helper(scoreRating);
