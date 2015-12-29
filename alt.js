$(document).ready(function() {
	// Sidebar jQuery
	$("#sidebar-button").click(function(){
		$('.ui.labeled.icon.sidebar').sidebar('toggle');
		$("#examples").height($(window).height() + 50);
	});
	$(this).click(function(){
		$('.card').transition('fly right');
		$('.card').transition('fly right');
	});

	mappedJSONToStory();

	// // Deal with responsiveness
	// d3.select(window)
	//     .on("resize", setupForceLayout)
	//     .each(setupForceLayout);
});

// sample data
var data = [
{title: "Reingold–Tilford Tree (Radial)", url: "http://bl.ocks.org/mbostock/4063550", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Factorisation Diagrams", url: "http://www.jasondavies.com/factorisation-diagrams/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Phylogenetic Tree of Life", url: "http://www.jasondavies.com/tree-of-life/", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Geographic Clipping", url: "http://www.jasondavies.com/maps/clip/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Les Misérables Co-occurrence Matrix", url: "http://bost.ocks.org/mike/miserables/", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "L*a*b* and HCL color spaces", url: "http://bl.ocks.org/mbostock/3014589", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Treemap", url: "http://bl.ocks.org/mbostock/4063582", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Map Projection Transitions", url: "http://www.jasondavies.com/maps/transition/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Across U.S. Companies, Tax Rates Vary Greatly", url: "http://www.nytimes.com/interactive/2013/05/25/sunday-review/corporate-taxes.html", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Rotating Voronoi", url: "http://bl.ocks.org/mbostock/4636377", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Zoomable Geography", url: "http://bl.ocks.org/mbostock/2374239", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Fisheye Distortion", url: "http://bost.ocks.org/mike/fisheye/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Geodesic Rainbow", url: "http://bl.ocks.org/mbostock/3057239", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Hierarchical Bar Chart", url: "http://bl.ocks.org/mbostock/1283663", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Exoplanets", url: "http://bl.ocks.org/mbostock/3007180", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Crossfilter", url: "http://square.github.io/crossfilter/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Alaska’s villages on the frontline of climate change", url: "http://www.guardian.co.uk/environment/interactive/2013/may/14/alaska-villages-frontline-global-warming", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "The federal health-care exchange’s abysmal success rate", url: "http://www.washingtonpost.com/wp-srv/special/politics/state-vs-federal-exchanges/"},
{title: "Counties Blue and Red, Moving Right and Left", url: "http://www.nytimes.com/interactive/2012/11/11/sunday-review/counties-moving.html", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "At the National Conventions, the Words They Used", url: "http://www.nytimes.com/interactive/2012/09/06/us/politics/convention-word-counts.html", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Reprojected Raster Tiles", url: "http://www.jasondavies.com/maps/raster/", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Hive Plots", url: "http://bost.ocks.org/mike/hive/", image_url: "http://www.online-image-editor.com//styles/2014/images/example_image.png"},
{title: "Donut Transitions", url: "http://bl.ocks.org/mbostock/4341417", image_url: "http://www.online-image-editor.com//styles/2014/images/example_image.png"},
{title: "Non-Contiguous Cartogram", url: "http://bl.ocks.org/mbostock/4055908"},
{title: "Spermatozoa", url: "http://bl.ocks.org/mbostock/1136236", image_url: "http://www.online-image-editor.com//styles/2014/images/example_image.png"},
{title: "Reingold–Tilford Tree (Radial)", url: "http://bl.ocks.org/mbostock/4063550", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Factorisation Diagrams", url: "http://www.jasondavies.com/factorisation-diagrams/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Phylogenetic Tree of Life", url: "http://www.jasondavies.com/tree-of-life/", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Geographic Clipping", url: "http://www.jasondavies.com/maps/clip/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Les Misérables Co-occurrence Matrix", url: "http://bost.ocks.org/mike/miserables/", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "L*a*b* and HCL color spaces", url: "http://bl.ocks.org/mbostock/3014589", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Treemap", url: "http://bl.ocks.org/mbostock/4063582", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Map Projection Transitions", url: "http://www.jasondavies.com/maps/transition/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Across U.S. Companies, Tax Rates Vary Greatly", url: "http://www.nytimes.com/interactive/2013/05/25/sunday-review/corporate-taxes.html", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Rotating Voronoi", url: "http://bl.ocks.org/mbostock/4636377", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Zoomable Geography", url: "http://bl.ocks.org/mbostock/2374239", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Fisheye Distortion", url: "http://bost.ocks.org/mike/fisheye/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Geodesic Rainbow", url: "http://bl.ocks.org/mbostock/3057239", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Hierarchical Bar Chart", url: "http://bl.ocks.org/mbostock/1283663", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Exoplanets", url: "http://bl.ocks.org/mbostock/3007180", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Crossfilter", url: "http://square.github.io/crossfilter/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Alaska’s villages on the frontline of climate change", url: "http://www.guardian.co.uk/environment/interactive/2013/may/14/alaska-villages-frontline-global-warming", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "The federal health-care exchange’s abysmal success rate", url: "http://www.washingtonpost.com/wp-srv/special/politics/state-vs-federal-exchanges/"},
{title: "Counties Blue and Red, Moving Right and Left", url: "http://www.nytimes.com/interactive/2012/11/11/sunday-review/counties-moving.html", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "At the National Conventions, the Words They Used", url: "http://www.nytimes.com/interactive/2012/09/06/us/politics/convention-word-counts.html", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Reprojected Raster Tiles", url: "http://www.jasondavies.com/maps/raster/", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Hive Plots", url: "http://bost.ocks.org/mike/hive/", image_url: "http://www.online-image-editor.com//styles/2014/images/example_image.png"},
{title: "Donut Transitions", url: "http://bl.ocks.org/mbostock/4341417", image_url: "http://www.online-image-editor.com//styles/2014/images/example_image.png"},
{title: "Non-Contiguous Cartogram", url: "http://bl.ocks.org/mbostock/4055908"},
{title: "Spermatozoa", url: "http://bl.ocks.org/mbostock/1136236", image_url: "http://www.online-image-editor.com//styles/2014/images/example_image.png"},
{title: "Reingold–Tilford Tree (Radial)", url: "http://bl.ocks.org/mbostock/4063550", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Factorisation Diagrams", url: "http://www.jasondavies.com/factorisation-diagrams/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Phylogenetic Tree of Life", url: "http://www.jasondavies.com/tree-of-life/", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Geographic Clipping", url: "http://www.jasondavies.com/maps/clip/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Les Misérables Co-occurrence Matrix", url: "http://bost.ocks.org/mike/miserables/", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "L*a*b* and HCL color spaces", url: "http://bl.ocks.org/mbostock/3014589", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Treemap", url: "http://bl.ocks.org/mbostock/4063582", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Map Projection Transitions", url: "http://www.jasondavies.com/maps/transition/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Across U.S. Companies, Tax Rates Vary Greatly", url: "http://www.nytimes.com/interactive/2013/05/25/sunday-review/corporate-taxes.html", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Rotating Voronoi", url: "http://bl.ocks.org/mbostock/4636377", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Zoomable Geography", url: "http://bl.ocks.org/mbostock/2374239", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Fisheye Distortion", url: "http://bost.ocks.org/mike/fisheye/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Geodesic Rainbow", url: "http://bl.ocks.org/mbostock/3057239", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Hierarchical Bar Chart", url: "http://bl.ocks.org/mbostock/1283663", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Exoplanets", url: "http://bl.ocks.org/mbostock/3007180", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Crossfilter", url: "http://square.github.io/crossfilter/", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Alaska’s villages on the frontline of climate change", url: "http://www.guardian.co.uk/environment/interactive/2013/may/14/alaska-villages-frontline-global-warming", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "The federal health-care exchange’s abysmal success rate", url: "http://www.washingtonpost.com/wp-srv/special/politics/state-vs-federal-exchanges/"},
{title: "Counties Blue and Red, Moving Right and Left", url: "http://www.nytimes.com/interactive/2012/11/11/sunday-review/counties-moving.html", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "At the National Conventions, the Words They Used", url: "http://www.nytimes.com/interactive/2012/09/06/us/politics/convention-word-counts.html", image_url: "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg"},
{title: "Reprojected Raster Tiles", url: "http://www.jasondavies.com/maps/raster/", image_url: "http://www.w3schools.com/images/pulpit.jpg"},
{title: "Hive Plots", url: "http://bost.ocks.org/mike/hive/", image_url: "http://www.online-image-editor.com//styles/2014/images/example_image.png"},
{title: "Donut Transitions", url: "http://bl.ocks.org/mbostock/4341417", image_url: "http://www.online-image-editor.com//styles/2014/images/example_image.png"},
{title: "Non-Contiguous Cartogram", url: "http://bl.ocks.org/mbostock/4055908"},
{title: "Spermatozoa", url: "http://bl.ocks.org/mbostock/1136236", image_url: "http://www.online-image-editor.com//styles/2014/images/example_image.png"}
];

// end sample data

// Map JSON to story objects

var BASE_URL_FRONT = "http://api.nytimes.com/svc/topstories/v1/";
var BASE_URL_END = ".json?api-key=f0ea7f254bd61237ffaa7c92b9fa5979:11:73836972";

function Story(story_title, abstract, content_url, byline, image_url, image_caption){
	this.story_title = story_title;
	this.abstract = abstract;
	this.content_url = content_url;
	this.byline = byline;
	this.image_url = image_url;
	this.image_caption = image_caption;
};

var dataOfSection = function(section) {
	return BASE_URL_FRONT + section + BASE_URL_END;
};

var mappedJSONToStory = function() {
	var stories = [];
	
	$.get( dataOfSection("world"), function(data) {
		var results = data.results;
		// Map each JSON object into Story object
		results.forEach(function(story) {

			// Iterate to find large image in array of images per story
			var image_url;
			var image_caption;
			var imageLength = story["multimedia"].length;
			for (var i = 0; i < imageLength; i++) {
				var image = story.multimedia[i];
				if (image.format == "superJumbo") {
					image_url = image.url;
					image_caption = image.caption;
				};
			};

			// Construct new story for JSON object
			var mappedStory = new Story(story.title, story.abstract, story.url, story.byline, image_url, image_caption);
			stories.push(mappedStory);
		});
	  	//console.log(stories);

	  	// Set up d3 force layout
	  	setupForceLayout(stories);
	});
}

// end mapping

var addFillPattern = function(patternDef, patternName, url) {
	patternDef.append("pattern")
	                .attr("id", patternName)
	                .attr("height", 1)
	                .attr("width", 1)
	                .attr("x", "0")
	                .attr("y", "0")
	           .append("image")
					.attr("x", -20)
					.attr("y", -40)
					.attr("height", 300)
					.attr("width", 300)
					.attr("xlink:href", url);
};

var setupForceLayout = function(stories) {
	var windowWidth = $(window).width();
	// Determine width based on window width and device
	var width = windowWidth < 640 ? windowWidth : windowWidth - $("#story-specific").width(),
	    height = $(window).height(),
	    padding = 1, // separation between same-color circles
	    clusterPadding = 1, // separation between different-color circles
	    minRadius = 30,
	    maxRadius = 80;

    console.log(stories);
	var n = m = stories.length; // n: total number of circles, m: number of distinct clusters

	var color = d3.scale.category10()
	    .domain(d3.range(m));

	// The largest node for each cluster.
	var clusters = new Array(m);

	var nodes = d3.range(n).map(function() {
	  var i = Math.floor(Math.random() * m),
	      r = getRandomInt(minRadius, maxRadius),
	      d = {cluster: i, radius: r};
	  if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
	  	return d;
	});

	var force = d3.layout.force()
	    .nodes(nodes)
	    .size([width, height])
	    .gravity(.02)
	    .charge(0)
	    .on("tick", tick)
	    .start();

	d3.select("svg").remove();
	var svg = d3.select("#examples").append("svg")
	    .attr("width", width)
	    .attr("height", height + 50);

	if (windowWidth < 640) {
		$('main').css('top', $('.card').height() / 3);
	} else {
		$('main').css('top', -50);
	};

	// Define pattern fills for circles

	var defs = svg.append("defs").attr("id", "imgdefs");

	addFillPattern(defs, "trial-pattern", "https://www.wonderplugin.com/wp-content/plugins/wonderplugin-lightbox/images/demo-image0.jpg");

	// var trialPattern = defs.append("pattern")
	//                         .attr("id", "trial-pattern")
	//                         .attr("height", 1)
	//                         .attr("width", 1)
	//                         .attr("x", "0")
	//                         .attr("y", "0");

	// trialPattern.append("image")
	//      .attr("x", -20)
	//      .attr("y", -40)
	//      .attr("height", 300)
	//      .attr("width", 300)
	//      .attr("xlink:href", "https://www.wonderplugin.com/wp-content/plugins/wonderplugin-lightbox/images/demo-image0.jpg");

	// end pattern definitions

	var circle = svg.selectAll("circle")
	    .data(nodes)
	    .enter()
	    	.append("a")
		    	.attr("xlink:href", function(d) { return data[d.index].url; })
	    	.append("circle")
		    .attr("r", function(d) { return d.radius; })
		    .attr("fill", function(d) { 
		    	var tagName = data[d.index].title.replace(/\s+/g, '-').toLowerCase();
		    	addFillPattern(defs, tagName, data[d.index].image_url);
			    return "url(#" + tagName + ")"; 
		    })
		    .call(force.drag);

	// d3 force layout utility functions
	function tick(e) {
	  circle
	      .each(cluster(10 * e.alpha * e.alpha))
	      .each(collide(.5))
	      .attr("cx", function(d) { return d.x; })
	      .attr("cy", function(d) { return d.y; });
	}

	// Move d to be adjacent to the cluster node.
	function cluster(alpha) {
	  return function(d) {
	    var cluster = clusters[d.cluster];
	    if (cluster === d) return;
	    var x = d.x - cluster.x,
	        y = d.y - cluster.y,
	        l = Math.sqrt(x * x + y * y),
	        r = d.radius + cluster.radius;
	    if (l != r) {
	      l = (l - r) / l * alpha;
	      d.x -= x *= l;
	      d.y -= y *= l;
	      cluster.x += x;
	      cluster.y += y;
	    }
	  };
	}

	// Resolves collisions between d and all other circles.
	function collide(alpha) {
	  var quadtree = d3.geom.quadtree(nodes);
	  return function(d) {
	    var r = d.radius + maxRadius + Math.max(padding, clusterPadding),
	        nx1 = d.x - r,
	        nx2 = d.x + r,
	        ny1 = d.y - r,
	        ny2 = d.y + r;
	    quadtree.visit(function(quad, x1, y1, x2, y2) {
	      if (quad.point && (quad.point !== d)) {
	        var x = d.x - quad.point.x,
	            y = d.y - quad.point.y,
	            l = Math.sqrt(x * x + y * y),
	            r = d.radius + quad.point.radius + (d.cluster === quad.point.cluster ? padding : clusterPadding);
	        if (l < r) {
	          l = (l - r) / l * alpha;
	          d.x -= x *= l;
	          d.y -= y *= l;
	          quad.point.x += x;
	          quad.point.y += y;
	        }
	      }
	      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
	    });
	  };
	}

	// end utility functions
};

// Returns a random integer between min (inclusive) and max (inclusive)
// Using Math.round() will give you a non-uniform distribution!
var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}