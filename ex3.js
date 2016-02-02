//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(function() {
  console.log('ready');

    $('.tip').hide();
    //tooltip for eat (hover takes two functions)
    $('#needing').hover(function() { // first function

      //turn on the tool tip
      $('#need').show();

    }, function() { // second function
      $('#need').hide();

    });
    
    $('#enjoying').hover(function() { // first function

      //turn on the tool tip
      $('#enjoy').show();

    }, function() { // second function
      $('#enjoy').hide();

    });
  //add code for the tooltip for design (hover takes two functions)
    $('#moving').hover(function() { // first function

      //turn on the tool tip
      $('#move').show();

    }, function() { // second function
      $('#move').hide();

    });
    
    $('#working').hover(function() { // first function

      //turn on the tool tip
      $('#work').show();

    }, function() { // second function
      $('#work').hide();

    });
    
//Purple Mouse Contact
    
    $('.purple').mouseover(function() {
      //console.log('click');
        
        $('ul li span.green').css('color', 'lightgrey');
        return false;
        
    });
    
    $('.purple').mouseover(function() {
      //console.log('click');
        
        $('ul li span.red').css('color', 'lightgrey');
        return false;
        
    });
    
    $('.purple').mouseover(function() {
      //console.log('click');
        
        $('ul li span.blue').css('color', 'lightgrey');
        return false;
        
    });
    
    
    $('.purple').mouseout(function() {
      //console.log('click');
        
        $('ul li span.green').css('color', 'green');
        return false;
        
    });
    
    $('.purple').mouseout(function() {
      //console.log('click');
     
        $('ul li span.red').css('color', 'darkred');
        return false;
        
    });
    
    $('.purple').mouseout(function() {
      //console.log('click');
     
        $('ul li span.blue').css('color', 'blue');
        return false;
        
    });
    
//Green Mouse Contact
    
    $('.green').mouseover(function() {
      //console.log('click');
        
        $('ul li span.purple').css('color', 'lightgrey');
        return false;
        
    });
    
    $('.green').mouseover(function() {
      //console.log('click');
        
        $('ul li span.red').css('color', 'lightgrey');
        return false;
        
    });
    
    $('.green').mouseover(function() {
      //console.log('click');
        
        $('ul li span.blue').css('color', 'lightgrey');
        return false;
        
    });
    
    
    $('.green').mouseout(function() {
      //console.log('click');
        
        $('ul li span.purple').css('color', 'purple');
        return false;
        
    });
    
    $('.green').mouseout(function() {
      //console.log('click');
     
        $('ul li span.red').css('color', 'darkred');
        return false;
        
    });
    
    $('.green').mouseout(function() {
      //console.log('click');
     
        $('ul li span.blue').css('color', 'blue');
        return false;
        
    });
    
//Blue Mouse Contact
    
    $('.blue').mouseover(function() {
      //console.log('click');
        
        $('ul li span.green').css('color', 'lightgrey');
        return false;
        
    });
    
    $('.blue').mouseover(function() {
      //console.log('click');
        
        $('ul li span.red').css('color', 'lightgrey');
        return false;
        
    });
    
    $('.blue').mouseover(function() {
      //console.log('click');
        
        $('ul li span.purple').css('color', 'lightgrey');
        return false;
        
    });
    
    
    $('.blue').mouseout(function() {
      //console.log('click');
        
        $('ul li span.green').css('color', 'green');
        return false;
        
    });
    
    $('.blue').mouseout(function() {
      //console.log('click');
     
        $('ul li span.red').css('color', 'darkred');
        return false;
        
    });
    
    $('.blue').mouseout(function() {
      //console.log('click');
     
        $('ul li span.purple').css('color', 'purple');
        return false;
        
    });
    
//Red Mouse Contact
    
    $('.red').mouseover(function() {
      //console.log('click');
        
        $('ul li span.purple').css('color', 'lightgrey');
        return false;
        
    });
    
    $('.red').mouseover(function() {
      //console.log('click');
        
        $('ul li span.green').css('color', 'lightgrey');
        return false;
        
    });
    
    $('.red').mouseover(function() {
      //console.log('click');
        
        $('ul li span.blue').css('color', 'lightgrey');
        return false;
        
    });
    
    
    $('.red').mouseout(function() {
      //console.log('click');
        
        $('ul li span.purple').css('color', 'purple');
        return false;
        
    });
    
    $('.red').mouseout(function() {
      //console.log('click');
     
        $('ul li span.green').css('color', 'green');
        return false;
        
    });
    
    $('.red').mouseout(function() {
      //console.log('click');
     
        $('ul li span.blue').css('color', 'blue');
        return false;
        
    });
    
//Enlarge text size
    
    $('.all').mouseover(function() {
      console.log('click');
        
        $('.all').css('font-size', '32px');
        return false;
        
    });
    
    $('.all').mouseout(function() {
      console.log('click');
        
        $('.all').css('font-size', '30px');
        return false;
        
    });
    
//All Mouse Contact
    
    $('.all').mouseover(function() {
      console.log('click');
        
        $('ul li span.purple').css('color', 'lightgrey');
        return false;
        
    });
    
    $('.all').mouseover(function() {
      console.log('click');
        
        $('ul li span.green').css('color', 'lightgrey');
        return false;
        
    });
    
    $('.all').mouseover(function() {
      console.log('click');
        
        $('ul li span.blue').css('color', 'lightgrey');
        return false;
        
    });
    
     $('.all').mouseover(function() {
      console.log('click');
        
        $('ul li span.red').css('color', 'lightgrey');
        return false;
        
    });
    
    
    $('.all').mouseout(function() {
      console.log('click');
        
        $('ul li span.purple').css('color', 'purple');
        return false;
        
    });
    
    $('.all').mouseout(function() {
      console.log('click');
     
        $('ul li span.green').css('color', 'green');
        return false;
        
    });
    
    $('.all').mouseout(function() {
      console.log('click');
     
        $('ul li span.blue').css('color', 'blue');
        return false;
        
    });
    
     $('.all').mouseout(function() {
      console.log('click');
     
        $('ul li span.red').css('color', 'darkred');
        return false;
        
    });
    
});