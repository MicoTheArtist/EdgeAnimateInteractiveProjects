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
            rect:['0px','0px','116.9%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Cafe.jpg",'0%','0%','100%','auto']
         },
         {
            id:'Church',
            display:'none',
            type:'image',
            rect:['950px','0px','116.9%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Church.jpg",'0%','0%','100%','auto']
         },
         {
            id:'Street',
            display:'none',
            type:'image',
            rect:['950','0','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Street.jpg",'0%','0%','100%','auto']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '440px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "max-width", '950px'],
            ["style", "width", '100%']
         ],
         "${_Street}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '950px'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ]
         ],
         "${_Cafe}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_Church}": [
            ["style", "top", '0px'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '950px'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid2", tween: [ "style", "${_Cafe}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid9", tween: [ "style", "${_Church}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid5", tween: [ "style", "${_Church}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid4", tween: [ "style", "${_Church}", "left", '0px', { fromValue: '950px'}], position: 1000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid8", tween: [ "style", "${_Street}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Street}", "left", '0px', { fromValue: '950px'}], position: 3000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid20", tween: [ "style", "${_Street}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 1000, easing: "easeOutQuart" },
            { id: "eid17", tween: [ "style", "${_Church}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeOutQuart" }         ]
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
