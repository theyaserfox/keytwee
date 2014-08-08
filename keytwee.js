module.exports.run = function(args) {
	if (args == null) {
		args = process.argv;
	}
	
	if(args.length > 2) {
		var keyword = process.argv[2];

		var keyword_tweets_stream = require("keyword-tweets-stream");

		keyword_tweets_stream.getTweetsStream(keyword, function(tweet_text){
			console.log("Tweet: " + tweet_text);
		});
	} else console.log("Type a keyword after 'node TwiiterApp.js' command");
};