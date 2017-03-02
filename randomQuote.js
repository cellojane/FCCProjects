//Quote database
var testQuote = [
  {
    "name": "Malala Yousafzai",
    "quote": "I raise up my voice—not so I can shout, but so that those without a voice can be heard...we cannot succeed when half of us are held back.",
    "tags": ["education"],
    "id": 1
  }, {
    "name": "Chimamanda Ngozi Adichie",
    "quote": "Of course I am not worried about intimidating men. The type of man who will be intimidated by me is exactly the type of man I have no interest in.",
    "tags": ["men"],
    "id": 2   
  },
  {
    "name": "Eleanor Roosevelt",
    "quote": "A woman is like a tea bag—you never know how strong she is until she gets in hot water.",
    "tags": ["adversity"],
    "id": 3   
  },
  {
    "name": "Audre Lorde",
    "quote": "I am not free while any woman is unfree, even when her shackles are very different from my own.",
    "tags": ["adversity", "solidarity"],
    "id": 4   
  },
  {
    "name": "Kamala Harris",
    "quote": "No woman should be told she can't make decisions about her own body. When women's rights are under attack, we fight back.",
    "tags": ["solidarity"],
    "id": 5   
  }, 
  {
    "name": "Sheryl Sandberg",
    "quote": "In the future, there will be no female leaders. There will just be leaders.",
    "tags": ["leadership"],
    "id": 6   
  },  {
    "name": "Michelle Obama",
    "quote": "No country can ever truly flourish if it stifles the potential of its women and deprives itself of the contributions of half its citizens.",
    "tags": ["leadership"],
    "id": 7    
  },  {
    "name": "Jane Austen",
    "quote": "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
    "tags": ["activism"],
    "id": 8   
  }];

//quote variable defined
var quote = "Quote loading...";


//Grab a new quote!
$(document).ready(function() {
      var quoteNumber = selectRandomQuote(1, 7);
      $(".quote").html('"' +  testQuote[quoteNumber].quote + '"');
      $(".name").html('- ' + testQuote[quoteNumber].name);
      quote = testQuote[quoteNumber].quote;
      /*var QuoteURL = quoteToTweetURL(quote);
      console.log(quoteURL);*/
    $("#newQuote").on("click", function(){
      var quoteNumber = selectRandomQuote(1, 7);
      $(".quote").html('"' +  testQuote[quoteNumber].quote + '"');
      $(".name").html('- ' + testQuote[quoteNumber].name);
      quote = testQuote[quoteNumber].quote;
    });
    $("#tweetQuote").on("click", function() {
      $("a").html(href="https://twitter.com/intent/tweet?text=Hello%20world");
    });  
  });

//grab random number to access quote array
   function selectRandomQuote(myMin, myMax) {
   return that = Math.floor(Math.random () * (myMax - myMin + 1)) + myMin;
      };




//Convert quote to Twitter share URL
function quoteToTweetURL(quoteOnPage) {
  return quoteOnPage.replace(/\s/gi, "20%");
};

var testString = "The quick brown fox";
console.log(quoteToTweetURL(testString));



