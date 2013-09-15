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
            id:'Background',
            display:'none',
            type:'image',
            rect:['0','0px','550px','400px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Background.jpg",'0px','0px']
         },
         {
            id:'CableCarSign',
            type:'image',
            rect:['0','0','550px','400px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"CableCarSign.jpg",'0px','0px']
         },
         {
            id:'Holder',
            display:'none',
            type:'image',
            rect:['74px','85px','425px','245px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Holder.png",'0px','0px']
         },
         {
            id:'Rectangle',
            display:'none',
            type:'rect',
            rect:['75px','80px','400px','239px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'TV_Btn',
            type:'image',
            rect:['473px','190px','72px','78px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"TV1.svg",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['405px','163px','114px','37px','auto','auto'],
            text:"Click to ride the Cable Car",
            font:['Verdana, Geneva, sans-serif',14,"rgba(0,0,0,1)","700","none",""]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_TV_Btn}": [
            ["style", "top", '190.18px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '472.94px'],
            ["style", "display", 'block']
         ],
         "${_Text}": [
            ["style", "top", '162.6px'],
            ["style", "display", 'block'],
            ["style", "width", '114.43333435059px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '37.40625px'],
            ["style", "font-weight", '700'],
            ["style", "left", '405.29px'],
            ["style", "font-size", '14px']
         ],
         "${_Holder}": [
            ["style", "top", '84.7px'],
            ["style", "left", '73.78px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_Rectangle}": [
            ["style", "top", '94px'],
            ["style", "height", '225px'],
            ["style", "display", 'none'],
            ["style", "left", '86px'],
            ["style", "width", '399.9744275507px']
         ],
         "${_CableCarSign}": [
            ["style", "display", 'block']
         ],
         "${_Background}": [
            ["style", "top", '0px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         labels: {
            "Main": 0,
            "Video": 1000
         },
         timeline: [
            { id: "eid18", tween: [ "style", "${_TV_Btn}", "display", 'none', { fromValue: 'block'}], position: 945, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid3", tween: [ "style", "${_CableCarSign}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_CableCarSign}", "display", 'none', { fromValue: 'block'}], position: 945, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Background}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid19", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 945, duration: 0 },
            { id: "eid12", tween: [ "style", "${_Holder}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-25923733");
