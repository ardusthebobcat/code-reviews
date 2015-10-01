import Ember from 'ember';

export function docRating(params/*, hash*/) {
  var docRating = parseInt(params[0].get('doc_rating'));
  if (docRating < 3) {
    var color = "error";
  } else if (docRating < 4) {
    var color = "warning";
  } else {
    var color = "success";
  }
  var output = '<div class="ui progress '+color+'" data-percent="'+docRating * 20+'">'
  output += '<div class="bar" style="transition-duration: 300ms; width: '+docRating * 20+'%;">'
  output += '<div class="progress">'+docRating+' out of 5</div></div></div>'
  return output;
}

export default Ember.Helper.helper(docRating);
