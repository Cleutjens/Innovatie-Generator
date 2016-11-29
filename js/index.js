	$(document).ready(function(){
		var quoteSource=[
		{
			quote:"Waar krijgen we energie van?",
			name:" "
	    },
	    {
	    	quote:"Duurzaam innoveren met een frisse blik.",
	    	name:" "
	    },
	    {
	    	quote:"Het Spotify model als best practice.",
	    	name:" "
	    },
	    {
	    	quote:"Outside the Box moeten we onze purpose vormen.",
	    	name:" "
	    },
	    {
	    	quote:"Bekijk het zowel top down als bottom up.",
	    	name:" "
	    },
	    {
	    	quote:"KPI's vormen een sense of urgency binnen de keten.",
	    	name:" "
	    },
	    {
	    	quote:"Best Practises zijn de kapstok voor 2016.",
	    	name:" "
	    },
	    {
	    	quote:"Dit is een typisch gevalletje 'low hanging fruit'.",
	    	name:" "
	    },
	    {
	    	quote:"Creeër een win-win situatie.",
	    	name:" "
	    },
	    {
	    	quote:"Laten we dit concept nog een stukje fine-tunen.",
	    	name:" "
	    },
	    {
	    	quote:"Waar zit het 'added value' element?.",
	    	name:" "
	    },
	    {
	    	quote:"Jongens! Even terug naar de helicopter-view.",
	    	name:" "
	    },
	    {
	    	quote:"Het ontbreekt nog aan een beetje synergie!",
	    	name:" "
	    },
	    {
	    	quote:"Awareness behalen met een sense of urgency.",
	    	name:" "
	    },
	    {
	    	quote:"Wat is onze output?",
	    	name:" "
	    },
	    {
	    	quote:"Laten we dit concept nog even breder trekken.",
	    	name:" "
	    },
	    {
	    	quote:"Die wil ik nog even challengen!",
	    	name:" "
	    },
	    {
	    	quote:"Het gaat er gewoon om dat we de grote lijnen volgen.",
	    	name:" "
	    },
	    {
	    	quote:"Deze leggen we even in de kast.",
	    	name:" "
	    },
	    {
	    	quote:"We moeten in een Bila hier nog effe over sparren",
	    	name:" "
	    },
			{
				quote:"Uber is ook klein begonnen",
				name:" "
			},
	    {
	    	quote:"Hoe sta jij hierin?",
	    	name:" "
	      },
	    {
	    	quote:"Jongens, even on-topic: 'go or no-go?'",
	    	name:" "
	    }

	];


		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 50;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');

        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });

			break;
		};//end for loop

	});//end quoteButton function


});//end document ready
