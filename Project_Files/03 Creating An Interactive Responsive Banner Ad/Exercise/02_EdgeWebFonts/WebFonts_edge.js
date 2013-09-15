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
            id:'WinterCover',
            type:'image',
            rect:['0','0','960px','500px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"WinterCover.jpg",'0px','0px']
         },
         {
            id:'TextBase',
            type:'rect',
            rect:['0px','401px','960px','100px','auto','auto'],
            opacity:0.5234375,
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Head',
            type:'text',
            rect:['137px','181px','auto','auto','auto','auto'],
            text:"If it is winter in Ontario ….",
            font:['Arial, Helvetica, sans-serif',60,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'Text2',
            type:'text',
            rect:['364px','429px','auto','auto','auto','auto'],
            text:"It is playtime!",
            align:"left",
            font:['Arial, Helvetica, sans-serif',40,"rgba(255,255,255,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_TextBase}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '100px'],
            ["style", "opacity", '0.5234375'],
            ["style", "left", '0px'],
            ["style", "top", '401px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '960px'],
            ["style", "height", '500px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text2}": [
            ["style", "top", '429px'],
            ["style", "left", '364px'],
            ["style", "font-size", '40px']
         ],
         "${_Head}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '181px'],
            ["style", "left", '137px'],
            ["style", "font-size", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
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
})(jQuery, AdobeEdge, "EDGE-425999110");
