//Quote database
var quoteData = [
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
  },  {
    "name": "Chimamanda Ngozi Adichie",
    "quote": "Racism should never have happened and so you don't get a cookie for reducing it.",
    "tags": ["activism"],
    "id": 9   
  },  {
    "name": "Dolores Huerta",
    "quote": "Walk the street with us into history. Get off the sidewalk.",
    "tags": ["activism"],
    "id": 10   
  },  {
    "name": "Beyoncé Knowles",
    "quote": "When you love and accept yourself, when you know who really cares about you, and when you learn from your mistakes, then you stop caring about what people who don't know you think.",
    "tags": ["self-esteem"],
    "id": 11   
  },  {
    "name": "Shonda Rhimes",
    "quote": "Boundaries don't keep other people out. They fence you in. Life is messy. That's how we're made. So, you can waste your life drawing lines. Or you can live your life crossing them.",
    "tags": ["activism"],
    "id": 12   
  },  {
    "name": "Sojourner Truth",
    "quote": "Truth is powerful and it prevails.",
    "tags": ["persistence"],
    "id": 13  
  },  {
    "name": "Julia Alvarez",
    "quote": "Men often say that women change their minds too much. I say they sometimes don't change them enough. I mean changing their state of mind, their attitudes, their outlook, their expectations, their consciousness - most of all, about themselves and what is possible in their lives.",
    "tags": ["confidence"],
    "id": 14  
  },  {
    "name": "Sonia Sotomayor",
    "quote": "I do know one thing about me: I don't measure myself by others' expectations or let others define my worth.",
    "tags": ["persistence"],
    "id": 15  
  },  {
    "name": "Evita Peron",
    "quote": "I demanded more rights for women because I know what women had to put up with.",
    "tags": ["persistence"],
    "id": 16
  },  {
    "name": "Sandra Cisneros",
    "quote": "I've put up too much, too long, and now I'm just too intelligent, too powerful, to beautiful, too sure of who I am finally to deserve anything less.",
    "tags": ["persistence"],
    "id": 17  
  }

];

var $quote = $('.quote');
var $name = $('.name');
//Load page with a random quote
$(document).ready(function() {
    //Display a random quote and name on page load

    selectRandomQuote(1, quoteData.length);
    $quote.hide().html('"' +  currentQuote + '"').fadeIn(1000);
    $name.hide().html('- ' + currentName).fadeIn(1000);
});
     
//display random new quote when button is clicked 
$("#newQuote").on("click", function() {
    selectRandomQuote(1, quoteData.length); 
  $quote.hide().html('"' + currentQuote + '"').fadeIn(1000);
    $name.hide().html('- ' + currentName).fadeIn(1000);
    $('html, body').animate({
        scrollTop: $('head').offset().top
                }, 800);


});


//select a random quote and set new twitter link
function selectRandomQuote(myMin, myMax) {
  selector = Math.floor(Math.random () * (myMax - myMin + 1)) + myMin;
  currentQuote = quoteData[selector].quote;
  currentName = quoteData[selector].name;
  twitterURL = ("https://twitter.com/intent/tweet?text=" + currentQuote.replace(/\s/gi, "%20") + " -" + currentName.replace(/\s/gi, "%20"));
  var link = document.getElementById("twitter-button");
  link.setAttribute("href", twitterURL);
};





