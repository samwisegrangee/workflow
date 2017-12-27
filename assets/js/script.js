

$(window).on('scroll', function () {
		var scrollTop   = $(this).scrollTop(),
				heroHeight = $('.hero-container img').height();

    $('.hero').css('height', heroHeight);

		// Transition Hero
		if(scrollTop < heroHeight){
      var howMuchFade = heroHeight - scrollTop,
          fadePercent = howMuchFade/heroHeight,
          fadeFirst   = 1 - fadePercent;

      $('.hero-container img:last-child').css('opacity', fadeFirst);
      $('.hero-container img:first-child').css('opacity', fadePercent);
      $('.hero-container h1').css('opacity', '1');
      //console.log(fadeBackground);

		} else {
      $('.hero-container h1').css('opacity', '0');
    }
		//Stop the scroll to do the slider

		/*if(scrollTop > 2000) {
			$('body').addClass('stop-scrolling');
		}*/

	});

// Flowsate Section
  $('#flowstate').val('So I have this idea and I want to flesh it out a bit. I think a little pressure would help that happen a bit faster. ');

  function textAreaAdjust(o) {
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
  }

  //setup before functions
  var typingTimer;                //timer identifier
  var doneTypingInterval = 5000;  //time in ms, 5 second for example
  var $input = $('#flowstate');

  //on keyup, start the countdown
  $input.on('keyup', function () {
    clearTimeout(typingTimer);
  	$('#flowstate').addClass('slow-fade');

    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  });

  //on keydown, clear the countdown
  $input.on('keydown', function () {
  	$('#flowstate').removeClass('slow-fade');

    clearTimeout(typingTimer);
  });

  //user is "finished typing," do something
  function doneTyping () {

  	$('#flowstate').addClass('hidden');

  	$('#flowstate').delay(500).val("Yeah. It can be frustrating...");

  	$('#flowstate').delay(700).removeClass('slow-fade, hidden');
  }
  // ... End of Flowsate Section //
