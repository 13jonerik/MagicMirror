// for navigator language
// var lang = window.navigator.language;
// you can change the language
var lang = 'en';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'q':'SAN FRANCISCO,CA',
    'units':'imperial',
    'lang':lang,
    'APPID':'00523096fd12295b5507c4dcf316e016'
};

//var feed = 'http://feeds.nos.nl/nosjournaal?format=rss';
//var feed = 'http://www.nu.nl/feeds/rss/achterklap.rss';
//var feed = 'http://www.nu.nl/feeds/rss/opmerkelijk.rss';
//var feed = 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';
//var feed = 'https://queryfeed.net/tw?q=docusign';
//var feed = 'https://script.google.com/macros/s/ABCD/exec?656677225316507648';
//var feed = 'https://script.google.com/macros/s/AKfycbwp7_SMKl6kMCMnPPxC6zQA99NblajyqCmOkDP9czdVNW3f69M/exec?656677225316507648';
//var feed = 'http://www.twitter-rss.com/user_timeline.php?screen_name=%40docusign';
var feed = 'https://news.google.de/news/feeds?pz=1&cf=all&ned=en&hl=us&q=DocuSign&output=rss';

// compliments:
var morning = [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ];
        
var afternoon = [
            'Hello!',
            'Looking good today!'
        ];
       
var evening = [
            'Cheers!',
            'You look nice!',
            'Hi!'
        ];
