$(document).ready(function() {
	$("#sidebar-button").click(function(){
		$('.ui.labeled.icon.sidebar').sidebar('toggle');
	});
	$(this).click(function(){
		$('.card').transition('fly right');
		$('.card').transition('fly right');
	});
});

// var BASE_URL_FRONT = "http://api.nytimes.com/svc/topstories/v1/";
// var BASE_URL_END = ".json?api-key=f0ea7f254bd61237ffaa7c92b9fa5979:11:73836972";

// function Story(story_title, abstract, content_url, byline, image_url, image_caption){
// 	this.story_title = story_title;
// 	this.abstract = abstract;
// 	this.content_url = content_url;
// 	this.byline = byline;
// 	this.image_url = image_url;
// 	this.image_caption = image_caption;
// };

// $(document).ready(function() {
// 	var stories = mappedJSONToStory();

// });

// var dataOfSection = function(section) {
// 	return BASE_URL_FRONT + section + BASE_URL_END;
// };

// var mappedJSONToStory = function() {
// 	var stories = [];
	
// 	$.get( dataOfSection("world"), function(data) {
// 		var results = data.results;
// 		// Map each JSON object into Story object
// 		results.forEach(function(story) {

// 			// Iterate to find large image in array of images per story
// 			var image_url;
// 			var image_caption;
// 			var imageLength = story["multimedia"].length;
// 			for (var i = 0; i < imageLength; i++) {
// 				var image = story.multimedia[i];
// 				if (image.format == "superJumbo") {
// 					image_url = image.url;
// 					image_caption = image.caption;
// 				};
// 			};

// 			// Construct new story for JSON object
// 			var mappedStory = new Story(story.title, story.abstract, story.url, story.byline, image_url, image_caption);
// 			stories.push(mappedStory);
// 		});
// 	  	console.log(stories);
// 	});

// 	return stories;
// };