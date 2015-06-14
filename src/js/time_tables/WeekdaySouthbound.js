var baseProcess = require('../time_tables/baseProcess');

var TIMES = [{

  id: 102,
  stops: {
    'san-francisco': '4:55am',
    '22nd-street': '5:00am',
    'bayshore': '5:05am',
    'so-san-francisco': '5:11am',
    'san-bruno': '5:15am',
    'millbrae': '5:19am',
    'burlingame': '5:23am',
    'san-mateo': '5:28am',
    'hayward-park': '5:31am',
    'hillsdale': '5:34am',
    'belmont': '5:37am',
    'san-carlos': '5:40am',
    'redwood-city': '5:45am',
    'menlo-park': '5:50am',
    'palo-alto': '5:53am',
    'california-ave': '5:57am',
    'san-antonio': '6:01am',
    'mountain-view': '6:05am',
    'sunnyvale': '6:10am',
    'lawrence': '6:14am',
    'santa-clara': '6:19am',
    'san-jose-diridon': '6:28am',
  }
}, {

  id: 104,
  stops: {
    'san-francisco': '5:25am',
    '22nd-street': '5:30am',
    'bayshore': '5:35am',
    'so-san-francisco': '5:41am',
    'san-bruno': '5:45am',
    'millbrae': '5:49am',
    'burlingame': '5:53am',
    'san-mateo': '5:58am',
    'hayward-park': '6:01am',
    'hillsdale': '6:04am',
    'belmont': '6:07am',
    'san-carlos': '6:10am',
    'redwood-city': '6:15am',
    'menlo-park': '6:20am',
    'palo-alto': '6:23am',
    'california-ave': '6:27am',
    'san-antonio': '6:31am',
    'mountain-view': '6:35am',
    'sunnyvale': '6:40am',
    'lawrence': '6:44am',
    'santa-clara': '6:49am',
    'san-jose-diridon': '6:58am',
    'tamien': '7:05am',
  }
}, {

  id: 206,
  stops: {
    'san-francisco': '6:11am',
    '22nd-street': '6:16am',
    'millbrae': '6:29am',
    'burlingame': '6:33am',
    'san-mateo': '6:38am',
    'hillsdale': '6:42am',
    'san-carlos': '6:46am',
    'redwood-city': '6:51am',
    'menlo-park': '6:56am',
    'palo-alto': '6:59am',
    'california-ave': '7:03am',
    'mountain-view': '7:09am',
    'lawrence': '7:14am',
    'san-jose-diridon': '7:26am',
  }
}, {

  id: 208,
  stops: {
    'san-francisco': '6:24am',
    '22nd-street': '6:29am',
    'bayshore': '6:34am',
    'so-san-francisco': '6:40am',
    'san-bruno': '6:44am',
    'millbrae': '6:48am',
    'burlingame': '6:52am',
    'san-mateo': '6:57am',
    'hayward-park': '7:00am',
    'hillsdale': '7:03am',
    'belmont': '7:06am',
    'san-carlos': '7:09am',
    'redwood-city': '7:14am',
    'palo-alto': '7:20am',
    'santa-clara': '7:36am',
    'san-jose-diridon': '7:45am',
    'tamien': '7:52am',
  }
}, {

  id: 210,
  stops: {
    'san-francisco': '6:44am',
    '22nd-street': '6:49am',
    'millbrae': '7:01am',
    'san-mateo': '7:09am',
    'san-carlos': '7:15am',
    'redwood-city': '7:20am',
    'menlo-park': '7:25am',
    'palo-alto': '7:28am',
    'california-ave': '7:32am',
    'san-antonio': '7:36am',
    'mountain-view': '7:40am',
    'sunnyvale': '7:45am',
    'lawrence': '7:51+am',
    'santa-clara': '7:58+am',
    'college-park': '8:01+am',
    'san-jose-diridon': '8:08am',
    'tamien': '8:15am',
  }
}, {

  id: 312,
  stops: {
    'san-francisco': '6:57am',
    '22nd-street': '7:02am',
    'millbrae': '7:15am',
    'redwood-city': '7:30am',
    'menlo-park': '7:35am',
    'palo-alto': '7:38am',
    'mountain-view': '7:46am',
    'san-jose-diridon': '8:00am',
  }
}, {

  id: 314,
  stops: {
    'san-francisco': '7:14am',
    '22nd-street': '7:19am',
    'millbrae': '7:32am',
    'hillsdale': '7:42am',
    'palo-alto': '7:53am',
    'mountain-view': '8:00am',
    'san-jose-diridon': '8:15am',
  }
}, {

  id: 216,
  stops: {
    'san-francisco': '7:19am',
    '22nd-street': '7:24am',
    'san-bruno': '7:35am',
    'burlingame': '7:40am',
    'san-mateo': '7:46am',
    'hillsdale': '7:50am',
    'san-carlos': '7:54am',
    'menlo-park': '8:02am',
    'palo-alto': '8:05am',
    'mountain-view': '8:13am',
    'lawrence': '8:20am',
    'san-jose-diridon': '8:32am',
  }
}, {

  id: 218,
  stops: {
    'san-francisco': '7:24am',
    '22nd-street': '7:29am',
    'bayshore': '7:34am',
    'so-san-francisco': '7:40am',
    'san-bruno': '7:44am',
    'millbrae': '7:48am',
    'burlingame': '7:52am',
    'san-mateo': '7:57am',
    'hayward-park': '8:00am',
    'hillsdale': '8:03am',
    'belmont': '8:06am',
    'san-carlos': '8:09am',
    'redwood-city': '8:14am',
    'palo-alto': '8:20am',
    'santa-clara': '8:36am',
    'san-jose-diridon': '8:45am',
    'tamien': '8:52am',
  }
}, {

  id: 220,
  stops: {
    'san-francisco': '7:44am',
    '22nd-street': '7:49am',
    'millbrae': '8:01am',
    'san-mateo': '8:09am',
    'san-carlos': '8:15am',
    'redwood-city': '8:20am',
    'menlo-park': '8:25am',
    'palo-alto': '8:28am',
    'california-ave': '8:32am',
    'san-antonio': '8:36am',
    'mountain-view': '8:40am',
    'sunnyvale': '8:45am',
    'lawrence': '8:51+am',
    'santa-clara': '8:58+am',
    'san-jose-diridon': '9:07am',
    'tamien': '9:14am',
  }
}, {

  id: 322,
  stops: {
    'san-francisco': '7:57am',
    '22nd-street': '8:02am',
    'millbrae': '8:15am',
    'redwood-city': '8:30am',
    'menlo-park': '8:35am',
    'palo-alto': '8:38am',
    'mountain-view': '8:46am',
    'san-jose-diridon': '9:00am',
  }
}, {

  id: 324,
  stops: {
    'san-francisco': '8:14am',
    '22nd-street': '8:19am',
    'millbrae': '8:32am',
    'hillsdale': '8:42am',
    'palo-alto': '8:53am',
    'mountain-view': '9:00am',
    'san-jose-diridon': '9:15am',
  }
}, {

  id: 226,
  stops: {
    'san-francisco': '8:19am',
    '22nd-street': '8:24am',
    'san-bruno': '8:35am',
    'burlingame': '8:40am',
    'san-mateo': '8:46am',
    'hillsdale': '8:50am',
    'san-carlos': '8:54am',
    'menlo-park': '9:02am',
    'palo-alto': '9:05am',
    'mountain-view': '9:13am',
    'lawrence': '9:20am',
    'san-jose-diridon': '9:32am',
  }
}, {

  id: 228,
  stops: {
    'san-francisco': '8:24am',
    '22nd-street': '8:29am',
    'bayshore': '8:34am',
    'so-san-francisco': '8:40am',
    'san-bruno': '8:44am',
    'millbrae': '8:48am',
    'burlingame': '8:52am',
    'san-mateo': '8:57am',
    'hayward-park': '9:00am',
    'hillsdale': '9:03am',
    'belmont': '9:06am',
    'san-carlos': '9:09am',
    'redwood-city': '9:14am',
    'palo-alto': '9:20am',
    'santa-clara': '9:36am',
    'san-jose-diridon': '9:45am',
    'tamien': '9:52am',
  }
}, {

  id: 230,
  stops: {
    'san-francisco': '8:44am',
    '22nd-street': '8:49am',
    'millbrae': '9:01am',
    'san-mateo': '9:09am',
    'san-carlos': '9:15am',
    'redwood-city': '9:20am',
    'menlo-park': '9:25am',
    'palo-alto': '9:28am',
    'california-ave': '9:32am',
    'san-antonio': '9:36am',
    'mountain-view': '9:40am',
    'sunnyvale': '9:45am',
    'lawrence': '9:51+am',
    'santa-clara': '9:58+am',
    'san-jose-diridon': '10:07am',
    'tamien': '10:14am',
  }
}, {

  id: 332,
  stops: {
    'san-francisco': '8:57am',
    '22nd-street': '9:02am',
    'millbrae': '9:15am',
    'redwood-city': '9:30am',
    'menlo-park': '9:35am',
    'palo-alto': '9:38am',
    'mountain-view': '9:46am',
    'san-jose-diridon': '10:00am',
  }
}, {

  id: 134,
  stops: {
    'san-francisco': '9:07am',
    '22nd-street': '9:12am',
    'bayshore': '9:17am',
    'so-san-francisco': '9:23am',
    'san-bruno': '9:27am',
    'millbrae': '9:31am',
    'burlingame': '9:35am',
    'san-mateo': '9:40am',
    'hayward-park': '9:43am',
    'hillsdale': '9:46am',
    'belmont': '9:49am',
    'san-carlos': '9:52am',
    'redwood-city': '9:57am',
    'menlo-park': '10:02am',
    'palo-alto': '10:05am',
    'california-ave': '10:09am',
    'san-antonio': '10:13am',
    'mountain-view': '10:17am',
    'sunnyvale': '10:22am',
    'lawrence': '10:26am',
    'santa-clara': '10:31am',
    'san-jose-diridon': '10:40am',
  }
}, {

  id: 236,
  stops: {
    'san-francisco': '9:37am',
    'san-bruno': '9:51am',
    'millbrae': '9:55am',
    'burlingame': '9:59am',
    'san-mateo': '10:04am',
    'hillsdale': '10:08am',
    'belmont': '10:11am',
    'san-carlos': '10:14am',
    'redwood-city': '10:19am',
    'menlo-park': '10:24am',
    'palo-alto': '10:27am',
    'california-ave': '10:31am',
    'san-antonio': '10:35am',
    'mountain-view': '10:39am',
    'sunnyvale': '10:44am',
    'lawrence': '10:48am',
    'santa-clara': '10:53am',
    'san-jose-diridon': '11:02am',
    'tamien': '11:09am',
  }
}, {

  id: 138,
  stops: {
    'san-francisco': '10:07am',
    '22nd-street': '10:12am',
    'bayshore': '10:17am',
    'so-san-francisco': '10:23am',
    'san-bruno': '10:27am',
    'millbrae': '10:31am',
    'burlingame': '10:35am',
    'san-mateo': '10:40am',
    'hayward-park': '10:43am',
    'hillsdale': '10:46am',
    'belmont': '10:49am',
    'san-carlos': '10:52am',
    'redwood-city': '10:57am',
    'menlo-park': '11:02am',
    'palo-alto': '11:05am',
    'california-ave': '11:09am',
    'san-antonio': '11:13am',
    'mountain-view': '11:17am',
    'sunnyvale': '11:22am',
    'lawrence': '11:26am',
    'santa-clara': '11:31am',
    'san-jose-diridon': '11:40am',
  }
}, {

  id: 142,
  stops: {
    'san-francisco': '11:07am',
    '22nd-street': '11:12am',
    'bayshore': '11:17am',
    'so-san-francisco': '11:23am',
    'san-bruno': '11:27am',
    'millbrae': '11:31am',
    'burlingame': '11:35am',
    'san-mateo': '11:40am',
    'hayward-park': '11:43am',
    'hillsdale': '11:46am',
    'belmont': '11:49am',
    'san-carlos': '11:52am',
    'redwood-city': '11:57am',
    'menlo-park': '12:02am',
    'palo-alto': '12:05am',
    'california-ave': '12:09am',
    'san-antonio': '12:13am',
    'mountain-view': '12:17am',
    'sunnyvale': '12:22am',
    'lawrence': '12:26am',
    'santa-clara': '12:31am',
    'san-jose-diridon': '12:40am',
  }
}, {

  id: 146,
  stops: {
    'san-francisco': '12:07pm',
    '22nd-street': '12:12pm',
    'bayshore': '12:17pm',
    'so-san-francisco': '12:23pm',
    'san-bruno': '12:27pm',
    'millbrae': '12:31pm',
    'burlingame': '12:35pm',
    'san-mateo': '12:40pm',
    'hayward-park': '12:43pm',
    'hillsdale': '12:46pm',
    'belmont': '12:49pm',
    'san-carlos': '12:52pm',
    'redwood-city': '12:57pm',
    'menlo-park': '1:02pm',
    'palo-alto': '1:05pm',
    'california-ave': '1:09pm',
    'san-antonio': '1:13pm',
    'mountain-view': '1:17pm',
    'sunnyvale': '1:22pm',
    'lawrence': '1:26pm',
    'santa-clara': '1:31pm',
    'san-jose-diridon': '1:40pm',
  }
}, {

  id: 150,
  stops: {
    'san-francisco': '1:07pm',
    '22nd-street': '1:12pm',
    'bayshore': '1:17pm',
    'so-san-francisco': '1:23pm',
    'san-bruno': '1:27pm',
    'millbrae': '1:31pm',
    'burlingame': '1:35pm',
    'san-mateo': '1:40pm',
    'hayward-park': '1:43pm',
    'hillsdale': '1:46pm',
    'belmont': '1:49pm',
    'san-carlos': '1:52pm',
    'redwood-city': '1:57pm',
    'menlo-park': '2:02pm',
    'palo-alto': '2:05pm',
    'california-ave': '2:09pm',
    'san-antonio': '2:13pm',
    'mountain-view': '2:17pm',
    'sunnyvale': '2:22pm',
    'lawrence': '2:26pm',
    'santa-clara': '2:31pm',
    'san-jose-diridon': '2:40pm',
  }
}, {

  id: 152,
  stops: {
    'san-francisco': '2:07pm',
    '22nd-street': '2:12pm',
    'bayshore': '2:17pm',
    'so-san-francisco': '2:23pm',
    'san-bruno': '2:27pm',
    'millbrae': '2:31pm',
    'burlingame': '2:35pm',
    'san-mateo': '2:40pm',
    'hayward-park': '2:43pm',
    'hillsdale': '2:46pm',
    'belmont': '2:49pm',
    'san-carlos': '2:52pm',
    'redwood-city': '2:57pm',
    'menlo-park': '3:02pm',
    'palo-alto': '3:05pm',
    'california-ave': '3:09pm',
    'san-antonio': '3:13pm',
    'mountain-view': '3:17pm',
    'sunnyvale': '3:22pm',
    'lawrence': '3:26pm',
    'santa-clara': '3:31pm',
    'san-jose-diridon': '3:40pm',
  }
}, {

  id: 254,
  stops: {
    'san-francisco': '2:37pm',
    'san-bruno': '2:51pm',
    'millbrae': '2:55pm',
    'burlingame': '2:59pm',
    'san-mateo': '3:04pm',
    'hillsdale': '3:08pm',
    'belmont': '3:11pm',
    'san-carlos': '3:14pm',
    'redwood-city': '3:19pm',
    'menlo-park': '3:24pm',
    'palo-alto': '3:27pm',
    'california-ave': '3:31pm',
    'san-antonio': '3:35pm',
    'mountain-view': '3:39pm',
    'sunnyvale': '3:44pm',
    'lawrence': '3:48pm',
    'santa-clara': '3:53pm',
    'san-jose-diridon': '4:02pm',
    'tamien': '4:09pm',
  }
}, {

  id: 156,
  stops: {
    'san-francisco': '3:07pm',
    '22nd-street': '3:12pm',
    'bayshore': '3:17pm',
    'so-san-francisco': '3:23pm',
    'san-bruno': '3:27pm',
    'millbrae': '3:31pm',
    'burlingame': '3:35pm',
    'san-mateo': '3:40pm',
    'hayward-park': '3:43pm',
    'hillsdale': '3:46pm',
    'belmont': '3:49pm',
    'san-carlos': '3:52pm',
    'redwood-city': '3:57pm',
    'menlo-park': '4:02pm',
    'palo-alto': '4:05pm',
    'california-ave': '4:09pm',
    'san-antonio': '4:13pm',
    'mountain-view': '4:17pm',
    'sunnyvale': '4:22pm',
    'lawrence': '4:26pm',
    'santa-clara': '4:31pm',
    'college-park': '4:34pm',
    'san-jose-diridon': '4:41pm',
    'tamien': '4:47pm',
    'capitol': '4:54pm',
    'blossom-hill': '5:00pm',
    'morgan-hill': '5:13pm',
    'san-martin': '5:19pm',
    'gilroy': '5:32pm',
  }
}, {

  id: 258,
  stops: {
    'san-francisco': '3:37pm',
    'san-bruno': '3:51pm',
    'millbrae': '3:55pm',
    'burlingame': '3:59pm',
    'san-mateo': '4:04pm',
    'hillsdale': '4:08pm',
    'belmont': '4:11pm',
    'san-carlos': '4:14pm',
    'redwood-city': '4:19pm',
    'menlo-park': '4:24pm',
    'palo-alto': '4:27pm',
    'california-ave': '4:31pm',
    'san-antonio': '4:35pm',
    'mountain-view': '4:39pm',
    'sunnyvale': '4:44pm',
    'lawrence': '4:48pm',
    'santa-clara': '4:53pm',
    'san-jose-diridon': '5:02pm',
    'tamien': '5:09pm',
  }
}, {

  id: 360,
  stops: {
    'san-francisco': '4:09pm',
    'millbrae': '4:25pm',
    'hillsdale': '4:35pm',
    'palo-alto': '4:46pm',
    'mountain-view': '4:53pm',
    'san-jose-diridon': '5:08pm',
  }
}, {

  id: 262,
  stops: {
    'san-francisco': '4:19pm',
    'san-bruno': '4:33pm',
    'burlingame': '4:38pm',
    'san-mateo': '4:44pm',
    'hillsdale': '4:49pm',
    'san-carlos': '4:53pm',
    'palo-alto': '5:03pm',
    'california-ave': '5:07pm',
    'mountain-view': '5:13pm',
    'sunnyvale': '5:18pm',
    'san-jose-diridon': '5:29pm',
  }
}, {

  id: 264,
  stops: {
    'san-francisco': '4:27pm',
    '22nd-street': '4:32pm',
    'bayshore': '4:40pm',
    'so-san-francisco': '4:48pm',
    'san-bruno': '4:52pm',
    'millbrae': '4:56pm',
    'burlingame': '5:00pm',
    'san-mateo': '5:06pm',
    'hayward-park': '5:09pm',
    'hillsdale': '5:13pm',
    'belmont': '5:16pm',
    'san-carlos': '5:20pm',
    'redwood-city': '5:24pm',
    'menlo-park': '5:30pm',
    'mountain-view': '5:38pm',
    'sunnyvale': '5:43pm',
    'santa-clara': '5:51pm',
    'san-jose-diridon': '5:59pm',
  }
}, {

  id: 366,
  stops: {
    'san-francisco': '4:33pm',
    'millbrae': '4:49pm',
    'san-mateo': '4:59pm',
    'redwood-city': '5:08pm',
    'palo-alto': '5:14pm',
    'sunnyvale': '5:23pm',
    'san-jose-diridon': '5:34pm',
    'tamien': '5:41pm',
  }
}, {

  id: 268,
  stops: {
    'san-francisco': '4:56pm',
    'so-san-francisco': '5:08pm',
    'millbrae': '5:14pm',
    'hillsdale': '5:24pm',
    'redwood-city': '5:30pm',
    'menlo-park': '5:36pm',
    'palo-alto': '5:40pm',
    'california-ave': '5:44pm',
    'san-antonio': '5:48pm',
    'mountain-view': '5:52pm',
    'sunnyvale': '5:57pm',
    'lawrence': '6:03+pm',
    'santa-clara': '6:10+pm',
    'san-jose-diridon': '6:18pm',
    'tamien': '6:24pm',
    'capitol': '6:31pm',
    'blossom-hill': '6:37pm',
    'morgan-hill': '6:50pm',
    'san-martin': '6:56pm',
    'gilroy': '7:09pm',
  }
}, {

  id: 370,
  stops: {
    'san-francisco': '5:14pm',
    'millbrae': '5:30pm',
    'hillsdale': '5:40pm',
    'palo-alto': '5:51pm',
    'mountain-view': '5:58pm',
    'san-jose-diridon': '6:13pm',
  }
}, {

  id: 272,
  stops: {
    'san-francisco': '5:20pm',
    'san-bruno': '5:34pm',
    'burlingame': '5:39pm',
    'san-mateo': '5:45pm',
    'hillsdale': '5:50pm',
    'san-carlos': '5:54pm',
    'palo-alto': '6:04pm',
    'california-ave': '6:08pm',
    'mountain-view': '6:14pm',
    'sunnyvale': '6:19pm',
    'san-jose-diridon': '6:30pm',
  }
}, {

  id: 274,
  stops: {
    'san-francisco': '5:27pm',
    '22nd-street': '5:32pm',
    'bayshore': '5:40pm',
    'so-san-francisco': '5:48pm',
    'san-bruno': '5:52pm',
    'millbrae': '5:56pm',
    'burlingame': '6:00pm',
    'san-mateo': '6:06pm',
    'hayward-park': '6:09pm',
    'hillsdale': '6:13pm',
    'belmont': '6:16pm',
    'san-carlos': '6:20pm',
    'redwood-city': '6:24pm',
    'menlo-park': '6:30pm',
    'mountain-view': '6:38pm',
    'sunnyvale': '6:43pm',
    'lawrence': '6:47pm',
    'santa-clara': '6:52pm',
    'san-jose-diridon': '7:00pm',
    'tamien': '7:06pm',
    'capitol': '7:13pm',
    'blossom-hill': '7:19pm',
    'morgan-hill': '7:32pm',
    'san-martin': '7:38pm',
    'gilroy': '7:51pm',
  }
}, {

  id: 376,
  stops: {
    'san-francisco': '5:33pm',
    'millbrae': '5:49pm',
    'san-mateo': '5:59pm',
    'redwood-city': '6:08pm',
    'palo-alto': '6:14pm',
    'sunnyvale': '6:24pm',
    'san-jose-diridon': '6:35pm',
    'tamien': '6:42pm',
  }
}, {

  id: 278,
  stops: {
    'san-francisco': '5:56pm',
    'so-san-francisco': '6:08pm',
    'millbrae': '6:14pm',
    'hillsdale': '6:24pm',
    'redwood-city': '6:30pm',
    'menlo-park': '6:36pm',
    'palo-alto': '6:40pm',
    'california-ave': '6:44pm',
    'san-antonio': '6:48pm',
    'mountain-view': '6:52pm',
    'sunnyvale': '6:57pm',
    'lawrence': '7:03+pm',
    'santa-clara': '7:10+pm',
    'san-jose-diridon': '7:18pm',
    'tamien': '7:25pm',
  }
}, {

  id: 380,
  stops: {
    'san-francisco': '6:14pm',
    'millbrae': '6:30pm',
    'hillsdale': '6:40pm',
    'palo-alto': '6:51pm',
    'mountain-view': '6:58pm',
    'san-jose-diridon': '7:13pm',
  }
}, {

  id: 282,
  stops: {
    'san-francisco': '6:20pm',
    'san-bruno': '6:34pm',
    'burlingame': '6:39pm',
    'san-mateo': '6:45pm',
    'hillsdale': '6:50pm',
    'san-carlos': '6:54pm',
    'palo-alto': '7:04pm',
    'california-ave': '7:08pm',
    'mountain-view': '7:14pm',
    'sunnyvale': '7:19pm',
    'san-jose-diridon': '7:30pm',
  }
}, {

  id: 284,
  stops: {
    'san-francisco': '6:27pm',
    '22nd-street': '6:32pm',
    'bayshore': '6:40pm',
    'so-san-francisco': '6:48pm',
    'san-bruno': '6:52pm',
    'millbrae': '6:56pm',
    'burlingame': '7:00pm',
    'san-mateo': '7:06pm',
    'hayward-park': '7:09pm',
    'hillsdale': '7:13pm',
    'belmont': '7:16pm',
    'san-carlos': '7:20pm',
    'redwood-city': '7:24pm',
    'menlo-park': '7:30pm',
    'mountain-view': '7:38pm',
    'sunnyvale': '7:43pm',
    'santa-clara': '7:51pm',
    'san-jose-diridon': '7:59pm',
  }
}, {

  id: 386,
  stops: {
    'san-francisco': '6:33pm',
    'millbrae': '6:49pm',
    'san-mateo': '6:59pm',
    'redwood-city': '7:08pm',
    'palo-alto': '7:14pm',
    'sunnyvale': '7:23pm',
    'san-jose-diridon': '7:34pm',
    'tamien': '7:41pm',
  }
}, {

  id: 288,
  stops: {
    'san-francisco': '6:56pm',
    'so-san-francisco': '7:08pm',
    'millbrae': '7:14pm',
    'hillsdale': '7:24pm',
    'redwood-city': '7:30pm',
    'menlo-park': '7:36pm',
    'palo-alto': '7:40pm',
    'california-ave': '7:44pm',
    'san-antonio': '7:48pm',
    'mountain-view': '7:52pm',
    'sunnyvale': '7:57pm',
    'lawrence': '8:01pm',
    'santa-clara': '8:06pm',
    'san-jose-diridon': '8:14pm',
    'tamien': '8:21pm',
  }
}, {

  id: 190,
  stops: {
    'san-francisco': '7:30pm',
    '22nd-street': '7:35pm',
    'bayshore': '7:40pm',
    'so-san-francisco': '7:46pm',
    'san-bruno': '7:50pm',
    'millbrae': '7:54pm',
    'burlingame': '7:58pm',
    'san-mateo': '8:03pm',
    'hayward-park': '8:06pm',
    'hillsdale': '8:09pm',
    'belmont': '8:12pm',
    'san-carlos': '8:15pm',
    'redwood-city': '8:20pm',
    'menlo-park': '8:25pm',
    'palo-alto': '8:28pm',
    'california-ave': '8:32pm',
    'san-antonio': '8:36pm',
    'mountain-view': '8:40pm',
    'sunnyvale': '8:45pm',
    'lawrence': '8:49pm',
    'santa-clara': '8:54pm',
    'san-jose-diridon': '9:03pm',
  }
}, {

  id: 192,
  stops: {
    'san-francisco': '8:40pm',
    '22nd-street': '8:45pm',
    'bayshore': '8:50pm',
    'so-san-francisco': '8:56pm',
    'san-bruno': '9:00pm',
    'millbrae': '9:04pm',
    'burlingame': '9:08pm',
    'san-mateo': '9:13pm',
    'hayward-park': '9:16pm',
    'hillsdale': '9:19pm',
    'belmont': '9:22pm',
    'san-carlos': '9:25pm',
    'redwood-city': '9:30pm',
    'menlo-park': '9:35pm',
    'palo-alto': '9:38pm',
    'california-ave': '9:42pm',
    'san-antonio': '9:46pm',
    'mountain-view': '9:50pm',
    'sunnyvale': '9:55pm',
    'lawrence': '9:59pm',
    'santa-clara': '10:04pm',
    'san-jose-diridon': '10:13pm',
    'tamien': '10:20pm',
  }
}, {

  id: 194,
  stops: {
    'san-francisco': '9:40pm',
    '22nd-street': '9:45pm',
    'bayshore': '9:50pm',
    'so-san-francisco': '9:56pm',
    'san-bruno': '10:00pm',
    'millbrae': '10:04pm',
    'burlingame': '10:08pm',
    'san-mateo': '10:13pm',
    'hayward-park': '10:16pm',
    'hillsdale': '10:19pm',
    'belmont': '10:22pm',
    'san-carlos': '10:25pm',
    'redwood-city': '10:30pm',
    'menlo-park': '10:35pm',
    'palo-alto': '10:38pm',
    'california-ave': '10:42pm',
    'san-antonio': '10:46pm',
    'mountain-view': '10:50pm',
    'sunnyvale': '10:55pm',
    'lawrence': '10:59pm',
    'santa-clara': '11:04pm',
    'san-jose-diridon': '11:13pm',
    'tamien': '11:20pm',
  }
}, {

  id: 196,
  stops: {
    'san-francisco': '10:40pm',
    '22nd-street': '10:45pm',
    'bayshore': '10:50pm',
    'so-san-francisco': '10:56pm',
    'san-bruno': '11:00pm',
    'millbrae': '11:04pm',
    'burlingame': '11:08pm',
    'san-mateo': '11:13pm',
    'hayward-park': '11:16pm',
    'hillsdale': '11:19pm',
    'belmont': '11:22pm',
    'san-carlos': '11:25pm',
    'redwood-city': '11:30pm',
    'menlo-park': '11:35pm',
    'palo-alto': '11:38pm',
    'california-ave': '11:42pm',
    'san-antonio': '11:46pm',
    'mountain-view': '11:50pm',
    'sunnyvale': '11:55pm',
    'lawrence': '11:59pm',
    'santa-clara': '12:04pm',
    'san-jose-diridon': '12:13pm',
  }
}, {

  id: 198,
  stops: {
    'san-francisco': '12:01pm',
    '22nd-street': '12:06pm',
    'bayshore': '12:11pm',
    'so-san-francisco': '12:17pm',
    'san-bruno': '12:21pm',
    'millbrae': '12:25pm',
    'burlingame': '12:29pm',
    'san-mateo': '12:34pm',
    'hayward-park': '12:37pm',
    'hillsdale': '12:40pm',
    'belmont': '12:43pm',
    'san-carlos': '12:46pm',
    'redwood-city': '12:51pm',
    'menlo-park': '12:56pm',
    'palo-alto': '12:59pm',
    'california-ave': '1:03pm',
    'san-antonio': '1:07pm',
    'mountain-view': '1:11pm',
    'sunnyvale': '1:16pm',
    'lawrence': '1:20pm',
    'santa-clara': '1:25pm',
    'san-jose-diridon': '1:34pm',
  }
}];

TIMES.forEach(function(train) {
  baseProcess.addType(train);
});

module.exports = TIMES;