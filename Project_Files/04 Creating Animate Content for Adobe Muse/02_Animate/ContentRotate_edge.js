/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Cafe',
            type:'image',
            rect:['0px','0px','1111px','300px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Cafe.jpg",'0%','0%','950px','auto']
         },
         {
            id:'Church',
            display:'none',
            type:'image',
            rect:['950px','0px','1111px','300px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Church.jpg",'0%','0%','950px','auto']
         },
         {
            id:'Street',
            display:'none',
            type:'image',
            rect:['950','0','950px','300px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Street.jpg",'0%','0%','950px','auto']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Street}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '950px'],
            ["style", "background-size", [950,'auto'], {valueTemplate:'@@0@@px @@1@@'} ]
         ],
         "${_Church}": [
            ["style", "top", '0px'],
            ["style", "background-size", [950,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '950px'],
            ["style", "width", '950px']
         ],
         "${_Cafe}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "background-size", [950,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
            ["style", "left", '0px'],
            ["style", "width", '950px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '440px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '300px'],
            ["style", "max-width", '950px'],
            ["style", "width", '950px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         timeline: [
            { id: "eid4", tween: [ "style", "${_Church}", "left", '0px', { fromValue: '950px'}], position: 1000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid9", tween: [ "style", "${_Church}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid5", tween: [ "style", "${_Church}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Street}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid17", tween: [ "style", "${_Church}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid20", tween: [ "style", "${_Street}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid7", tween: [ "style", "${_Street}", "left", '0px', { fromValue: '950px'}], position: 3000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid2", tween: [ "style", "${_Cafe}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-716255447");
