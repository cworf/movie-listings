function Ticket(movieName, yourAge, showTime){
  this.movie = movieName;
  this.age = yourAge;
  this.showing = showTime;
}

$(function(){
  $('input:radio').click(function(){
    $('.hidden').show();
  });

  $('.movie-list').submit(function(event){
    event.preventDefault();
    var movieName = $('input:radio[name=movie]:checked').val();
    var yourAge = parseInt($('#age'))
    var showTime = parseInt($('select option:checked').val())
    console.log(showTime)

    alert()
  });
});
