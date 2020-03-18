// Quotes about learning from goodreads -- http://www.goodreads.com/quotes/tag/learning

var quotes = [
	"Our team is multi-disciplinary, creating all-rounded brand experiences through strategy, content, design, innovation, digital products and print.  <br><br>—  Black Rabbit",
	"Our team is multi-disciplinary, creating all-rounded brand experiences through strategy, content, design, innovation, digital products and print.  <br><br>—  Black Rabbit",
	"Our team is multi-disciplinary, creating all-rounded brand experiences through strategy, content, design, innovation, digital products and print.  <br><br>—  Black Rabbit",
	"Our team is multi-disciplinary, creating all-rounded brand experiences through strategy, content, design, innovation, digital products and print.  <br><br>—  Black Rabbit",
	"Our team is multi-disciplinary, creating all-rounded brand experiences through strategy, content, design, innovation, digital products and print.  <br><br>—  Black Rabbit"
];

var index = 0;
var max = quotes.length - 1;
var delay = .02;

function random(min, max){
	return (Math.random() * (max - min)) + min;
}

function cycleQuotes(arr, i, sel){
	var el = $(sel);
	var message = arr[i];
	el.html(message);
	var split = new SplitText(el);
	var time = split.chars.length * delay;
	
	$(split.chars).each(function(i){
		TweenMax.from($(this), time, {
			opacity: 0,
			x: 0,
			y: random(-200, 200),
			z: random(500, 1000),
			// scale: .1,
			delay: i * delay,
			yoyo: true,
			repeat: -1,
			repeatDelay: time * 4,
			ease: Power1.easeOut
		});
	});
	
	index = index == max ?  0 : (index + 1);

	setTimeout(function(){
		
		cycleQuotes(quotes, index, ".split");
	}, ((time * 4) + (time * 4)) * 1000);
	
}

$(window).load(function(){
	cycleQuotes(quotes, index, ".split");
});