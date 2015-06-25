var baseProcess = require('../time_tables/baseProcess');

var TIMES = [{

  id: 422,
  stops: {
    'san-francisco': '8:15am',
    '22nd-street': '8:20am',
    'bayshore': '8:25am',
    'so-san-francisco': '8:31am',
    'san-bruno': '8:35am',
    'millbrae': '8:39am',
    'broadway': '8:43am',
    'burlingame': '8:45am',
    'san-mateo': '8:51am',
    'hayward-park': '8:54am',
    'hillsdale': '8:57am',
    'belmont': '9:00am',
    'san-carlos': '9:03am',
    'redwood-city': '9:09am',
    'atherton': '9:13am',
    'menlo-park': '9:16am',
    'palo-alto': '9:19am',
    'california-ave': '9:23am',
    'san-antonio': '9:27am',
    'mountain-view': '9:31am',
    'sunnyvale': '9:36am',
    'lawrence': '9:40am',
    'santa-clara': '9:45am',
    'san-jose': '9:53am',
  }
}, {

  id: 424,
  stops: {
    'san-francisco': '9:15am',
    '22nd-street': '9:20am',
    'bayshore': '9:25am',
    'so-san-francisco': '9:31am',
    'san-bruno': '9:35am',
    'millbrae': '9:39am',
    'broadway': '9:43am',
    'burlingame': '9:45am',
    'san-mateo': '9:51am',
    'hayward-park': '9:54am',
    'hillsdale': '9:57am',
    'belmont': '10:00am',
    'san-carlos': '10:03am',
    'redwood-city': '10:09am',
    'atherton': '10:13am',
    'menlo-park': '10:16am',
    'palo-alto': '10:19am',
    'california-ave': '10:23am',
    'san-antonio': '10:27am',
    'mountain-view': '10:31am',
    'sunnyvale': '10:36am',
    'lawrence': '10:40am',
    'santa-clara': '10:45am',
    'san-jose': '10:53am',
  }
}, {

  id: 426,
  stops: {
    'san-francisco': '10:15am',
    '22nd-street': '10:20am',
    'bayshore': '10:25am',
    'so-san-francisco': '10:31am',
    'san-bruno': '10:35am',
    'millbrae': '10:39am',
    'broadway': '10:43am',
    'burlingame': '10:45am',
    'san-mateo': '10:51am',
    'hayward-park': '10:54am',
    'hillsdale': '10:57am',
    'belmont': '11:00am',
    'san-carlos': '11:03am',
    'redwood-city': '11:09am',
    'atherton': '11:13am',
    'menlo-park': '11:16am',
    'palo-alto': '11:19am',
    'california-ave': '11:23am',
    'san-antonio': '11:27am',
    'mountain-view': '11:31am',
    'sunnyvale': '11:36am',
    'lawrence': '11:40am',
    'santa-clara': '11:45am',
    'san-jose': '11:53am',
  }
}, {

  id: 428,
  stops: {
    'san-francisco': '11:15am',
    '22nd-street': '11:20am',
    'bayshore': '11:25am',
    'so-san-francisco': '11:31am',
    'san-bruno': '11:35am',
    'millbrae': '11:39am',
    'broadway': '11:43am',
    'burlingame': '11:45am',
    'san-mateo': '11:51am',
    'hayward-park': '11:54am',
    'hillsdale': '11:57am',
    'belmont': '12:00pm',
    'san-carlos': '12:03pm',
    'redwood-city': '12:09pm',
    'atherton': '12:13pm',
    'menlo-park': '12:16pm',
    'palo-alto': '12:19pm',
    'california-ave': '12:23pm',
    'san-antonio': '12:27pm',
    'mountain-view': '12:31pm',
    'sunnyvale': '12:36pm',
    'lawrence': '12:40pm',
    'santa-clara': '12:45pm',
    'san-jose': '12:53pm',
  }
}, {

  id: 802,
  stops: {
    'san-francisco': '11:59am',
    'millbrae': '12:15pm',
    'san-mateo': '12:23pm',
    'hillsdale': '12:27pm',
    'redwood-city': '12:35pm',
    'palo-alto': '12:41pm',
    'mountain-view': '12:49pm',
    'sunnyvale': '12:54pm',
    'san-jose': '1:05pm',
  }
}, {

  id: 430,
  stops: {
    'san-francisco': '12:15pm',
    '22nd-street': '12:20pm',
    'bayshore': '12:25pm',
    'so-san-francisco': '12:31pm',
    'san-bruno': '12:35pm',
    'millbrae': '12:39pm',
    'broadway': '12:43pm',
    'burlingame': '12:45pm',
    'san-mateo': '12:51pm',
    'hayward-park': '12:54pm',
    'hillsdale': '12:57pm',
    'belmont': '1:00pm',
    'san-carlos': '1:03pm',
    'redwood-city': '1:09pm',
    'atherton': '1:13pm',
    'menlo-park': '1:16pm',
    'palo-alto': '1:19pm',
    'california-ave': '1:23pm',
    'san-antonio': '1:27pm',
    'mountain-view': '1:31pm',
    'sunnyvale': '1:36pm',
    'lawrence': '1:40pm',
    'santa-clara': '1:45pm',
    'san-jose': '1:53pm',
  }
}, {

  id: 432,
  stops: {
    'san-francisco': '1:15pm',
    '22nd-street': '1:20pm',
    'bayshore': '1:25pm',
    'so-san-francisco': '1:31pm',
    'san-bruno': '1:35pm',
    'millbrae': '1:39pm',
    'broadway': '1:43pm',
    'burlingame': '1:45pm',
    'san-mateo': '1:51pm',
    'hayward-park': '1:54pm',
    'hillsdale': '1:57pm',
    'belmont': '2:00pm',
    'san-carlos': '2:03pm',
    'redwood-city': '2:09pm',
    'atherton': '2:13pm',
    'menlo-park': '2:16pm',
    'palo-alto': '2:19pm',
    'california-ave': '2:23pm',
    'san-antonio': '2:27pm',
    'mountain-view': '2:31pm',
    'sunnyvale': '2:36pm',
    'lawrence': '2:40pm',
    'santa-clara': '2:45pm',
    'san-jose': '2:53pm',
  }
}, {

  id: 434,
  stops: {
    'san-francisco': '2:15pm',
    '22nd-street': '2:20pm',
    'bayshore': '2:25pm',
    'so-san-francisco': '2:31pm',
    'san-bruno': '2:35pm',
    'millbrae': '2:39pm',
    'broadway': '2:43pm',
    'burlingame': '2:45pm',
    'san-mateo': '2:51pm',
    'hayward-park': '2:54pm',
    'hillsdale': '2:57pm',
    'belmont': '3:00pm',
    'san-carlos': '3:03pm',
    'redwood-city': '3:09pm',
    'atherton': '3:13pm',
    'menlo-park': '3:16pm',
    'palo-alto': '3:19pm',
    'california-ave': '3:23pm',
    'san-antonio': '3:27pm',
    'mountain-view': '3:31pm',
    'sunnyvale': '3:36pm',
    'lawrence': '3:40pm',
    'santa-clara': '3:45pm',
    'san-jose': '3:53pm',
  }
}, {

  id: 436,
  stops: {
    'san-francisco': '3:15pm',
    '22nd-street': '3:20pm',
    'bayshore': '3:25pm',
    'so-san-francisco': '3:31pm',
    'san-bruno': '3:35pm',
    'millbrae': '3:39pm',
    'broadway': '3:43pm',
    'burlingame': '3:45pm',
    'san-mateo': '3:51pm',
    'hayward-park': '3:54pm',
    'hillsdale': '3:57pm',
    'belmont': '4:00pm',
    'san-carlos': '4:03pm',
    'redwood-city': '4:09pm',
    'atherton': '4:13pm',
    'menlo-park': '4:16pm',
    'palo-alto': '4:19pm',
    'california-ave': '4:23pm',
    'san-antonio': '4:27pm',
    'mountain-view': '4:31pm',
    'sunnyvale': '4:36pm',
    'lawrence': '4:40pm',
    'santa-clara': '4:45pm',
    'san-jose': '4:53pm',
  }
}, {

  id: 438,
  stops: {
    'san-francisco': '4:15pm',
    '22nd-street': '4:20pm',
    'bayshore': '4:25pm',
    'so-san-francisco': '4:31pm',
    'san-bruno': '4:35pm',
    'millbrae': '4:39pm',
    'broadway': '4:43pm',
    'burlingame': '4:45pm',
    'san-mateo': '4:51pm',
    'hayward-park': '4:54pm',
    'hillsdale': '4:57pm',
    'belmont': '5:00pm',
    'san-carlos': '5:03pm',
    'redwood-city': '5:09pm',
    'atherton': '5:13pm',
    'menlo-park': '5:16pm',
    'palo-alto': '5:19pm',
    'california-ave': '5:23pm',
    'san-antonio': '5:27pm',
    'mountain-view': '5:31pm',
    'sunnyvale': '5:36pm',
    'lawrence': '5:40pm',
    'santa-clara': '5:45pm',
    'san-jose': '5:53pm',
  }
}, {

  id: 440,
  stops: {
    'san-francisco': '5:15pm',
    '22nd-street': '5:20pm',
    'bayshore': '5:25pm',
    'so-san-francisco': '5:31pm',
    'san-bruno': '5:35pm',
    'millbrae': '5:39pm',
    'broadway': '5:43pm',
    'burlingame': '5:45pm',
    'san-mateo': '5:51pm',
    'hayward-park': '5:54pm',
    'hillsdale': '5:57pm',
    'belmont': '6:00pm',
    'san-carlos': '6:03pm',
    'redwood-city': '6:09pm',
    'atherton': '6:13pm',
    'menlo-park': '6:16pm',
    'palo-alto': '6:19pm',
    'california-ave': '6:23pm',
    'san-antonio': '6:27pm',
    'mountain-view': '6:31pm',
    'sunnyvale': '6:36pm',
    'lawrence': '6:40pm',
    'santa-clara': '6:45pm',
    'san-jose': '6:53pm',
  }
}, {

  id: 442,
  stops: {
    'san-francisco': '6:15pm',
    '22nd-street': '6:20pm',
    'bayshore': '6:25pm',
    'so-san-francisco': '6:31pm',
    'san-bruno': '6:35pm',
    'millbrae': '6:39pm',
    'broadway': '6:43pm',
    'burlingame': '6:45pm',
    'san-mateo': '6:51pm',
    'hayward-park': '6:54pm',
    'hillsdale': '6:57pm',
    'belmont': '7:00pm',
    'san-carlos': '7:03pm',
    'redwood-city': '7:09pm',
    'atherton': '7:13pm',
    'menlo-park': '7:16pm',
    'palo-alto': '7:19pm',
    'california-ave': '7:23pm',
    'san-antonio': '7:27pm',
    'mountain-view': '7:31pm',
    'sunnyvale': '7:36pm',
    'lawrence': '7:40pm',
    'santa-clara': '7:45pm',
    'san-jose': '7:53pm',
  }
}, {

  id: 804,
  stops: {
    'san-francisco': '6:59pm',
    'millbrae': '7:15pm',
    'san-mateo': '7:23pm',
    'hillsdale': '7:27pm',
    'redwood-city': '7:35pm',
    'palo-alto': '7:41pm',
    'mountain-view': '7:49pm',
    'sunnyvale': '7:54pm',
    'san-jose': '8:05pm',
  }
}, {

  id: 444,
  stops: {
    'san-francisco': '7:15pm',
    '22nd-street': '7:20pm',
    'bayshore': '7:25pm',
    'so-san-francisco': '7:31pm',
    'san-bruno': '7:35pm',
    'millbrae': '7:39pm',
    'broadway': '7:43pm',
    'burlingame': '7:45pm',
    'san-mateo': '7:51pm',
    'hayward-park': '7:54pm',
    'hillsdale': '7:57pm',
    'belmont': '8:00pm',
    'san-carlos': '8:03pm',
    'redwood-city': '8:09pm',
    'atherton': '8:13pm',
    'menlo-park': '8:16pm',
    'palo-alto': '8:19pm',
    'california-ave': '8:23pm',
    'san-antonio': '8:27pm',
    'mountain-view': '8:31pm',
    'sunnyvale': '8:36pm',
    'lawrence': '8:40pm',
    'santa-clara': '8:45pm',
    'san-jose': '8:53pm',
  }
}, {

  id: 446,
  stops: {
    'san-francisco': '8:15pm',
    '22nd-street': '8:20pm',
    'bayshore': '8:25pm',
    'so-san-francisco': '8:31pm',
    'san-bruno': '8:35pm',
    'millbrae': '8:39pm',
    'broadway': '8:43pm',
    'burlingame': '8:45pm',
    'san-mateo': '8:51pm',
    'hayward-park': '8:54pm',
    'hillsdale': '8:57pm',
    'belmont': '9:00pm',
    'san-carlos': '9:03pm',
    'redwood-city': '9:09pm',
    'atherton': '9:13pm',
    'menlo-park': '9:16pm',
    'palo-alto': '9:19pm',
    'california-ave': '9:23pm',
    'san-antonio': '9:27pm',
    'mountain-view': '9:31pm',
    'sunnyvale': '9:36pm',
    'lawrence': '9:40pm',
    'santa-clara': '9:45pm',
    'san-jose': '9:53pm',
  }
}, {

  id: 448,
  stops: {
    'san-francisco': '9:15pm',
    '22nd-street': '9:20pm',
    'bayshore': '9:25pm',
    'so-san-francisco': '9:31pm',
    'san-bruno': '9:35pm',
    'millbrae': '9:39pm',
    'broadway': '9:43pm',
    'burlingame': '9:45pm',
    'san-mateo': '9:51pm',
    'hayward-park': '9:54pm',
    'hillsdale': '9:57pm',
    'belmont': '10:00pm',
    'san-carlos': '10:03pm',
    'redwood-city': '10:09pm',
    'atherton': '10:13pm',
    'menlo-park': '10:16pm',
    'palo-alto': '10:19pm',
    'california-ave': '10:23pm',
    'san-antonio': '10:27pm',
    'mountain-view': '10:31pm',
    'sunnyvale': '10:36pm',
    'lawrence': '10:40pm',
    'santa-clara': '10:45pm',
    'san-jose': '10:53pm',
  }
}, {

  id: 450,
  stops: {
    'san-francisco': '10:15pm',
    '22nd-street': '10:20pm',
    'bayshore': '10:25pm',
    'so-san-francisco': '10:31pm',
    'san-bruno': '10:35pm',
    'millbrae': '10:39pm',
    'broadway': '10:43pm',
    'burlingame': '10:45pm',
    'san-mateo': '10:51pm',
    'hayward-park': '10:54pm',
    'hillsdale': '10:57pm',
    'belmont': '11:00pm',
    'san-carlos': '11:03pm',
    'redwood-city': '11:09pm',
    'atherton': '11:13pm',
    'menlo-park': '11:16pm',
    'palo-alto': '11:19pm',
    'california-ave': '11:23pm',
    'san-antonio': '11:27pm',
    'mountain-view': '11:31pm',
    'sunnyvale': '11:36pm',
    'lawrence': '11:40pm',
    'santa-clara': '11:45pm',
    'san-jose': '11:53pm',
  }
}, {

  id: 454,
  stops: {
    'san-francisco': '+12:01am',
    '22nd-street': '+12:06am',
    'bayshore': '+12:11am',
    'so-san-francisco': '+12:17am',
    'san-bruno': '+12:21am',
    'millbrae': '+12:25am',
    'broadway': '+12:29am',
    'burlingame': '+12:31am',
    'san-mateo': '+12:37am',
    'hayward-park': '+12:40am',
    'hillsdale': '+12:43am',
    'belmont': '+12:46am',
    'san-carlos': '+12:49am',
    'redwood-city': '+12:55am',
    'atherton': '+12:59am',
    'menlo-park': '+1:02am',
    'palo-alto': '+1:05am',
    'california-ave': '+1:09am',
    'san-antonio': '+1:13am',
    'mountain-view': '+1:17am',
    'sunnyvale': '+1:22am',
    'lawrence': '+1:26am',
    'santa-clara': '+1:31am',
    'san-jose': '+1:39am',
  }

}];

TIMES.forEach(function(train) {
  baseProcess.addType(train);
});

module.exports = TIMES;
