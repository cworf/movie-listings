function Ticket(movieNameCost, yourAgeCost, showTimeCost, name){
  this.movieCost = movieNameCost;
  this.ageCost = yourAgeCost;
  this.showTimeCost = showTimeCost;
  this.movieName = name;
}

Ticket.prototype.movieInformation = function(){
  return
}

Ticket.prototype.costCalculation = function(){
  return this.movieCost + this.ageCost + this.showTimeCost;
}

$(function(){
  $('input:radio').click(function(){
    $('.hidden').show();
  });

  $('.movie-list').submit(function(event){
    event.preventDefault();
    var movieName = $('input:radio[name=movie]:checked').text();
    var movieCost = parseInt($('input:radio[name=movie]:checked').val());
    var ageCost = parseInt($('select[name=ages] option:checked').val());
    var yourAge = $('select[name=ages] option:checked').text();
    var showTimeCost = parseInt($('select[name=showings] option:checked').val());
    var showTime = $('select option:checked').text();

    var customerInfo = new Ticket(movieCost, ageCost, showTimeCost);

    if (yourAge === "Children") {
      var price = 5;
    } else {
      var price = customerInfo.costCalculation();
    }

    $('.results').show();
    $('#price').text(price);

  });
});
