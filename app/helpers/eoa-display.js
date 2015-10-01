import Ember from 'ember';

export function eoaDisplay(params/*, hash*/) {
  var eoaRating = parseInt(params[0].get('eoa_rating'));
  if (eoaRating < 3) {
    var color = "error";
  } else if (eoaRating < 4) {
    var color = "warning";
  } else {
    var color = "success";
  }
  var output = '<div class="ui progress '+color+'" data-percent="'+eoaRating * 20+'">'
  output += '<div class="bar" style="transition-duration: 300ms; width: '+eoaRating * 20+'%;">'
  output += '<div class="progress">'+eoaRating+' out of 5</div></div></div>'
  return output;
}

export default Ember.Helper.helper(eoaDisplay);
