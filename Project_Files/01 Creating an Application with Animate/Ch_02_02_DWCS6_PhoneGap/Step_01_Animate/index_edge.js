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
            id:'Paris',
            type:'image',
            rect:['0px','0px','480px','800px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Paris.jpg",'0px','0px']
         },
         {
            id:'HeadBG',
            type:'rect',
            rect:['0px','0px','480px','130px','auto','auto'],
            opacity:0.60211181640625,
            fill:["rgba(3,11,173,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Visit',
            type:'text',
            rect:['0px','55px','480px','60px','auto','auto'],
            cursor:['pointer'],
            text:"Visit Paris",
            align:"center",
            font:['Arial Black, Gadget, sans-serif',58,"rgba(0,0,0,1)","normal","none",""],
            textShadow:["rgba(0,0,0,1.00)",7,6,8]
         },
         {
            id:'start',
            type:'image',
            rect:['87.7%','51.6%','16.7%','10%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"start.png",'0%','0%','100%','auto']
         },
         {
            id:'Explore',
            type:'text',
            rect:['34.2%','59%','34.2%','5.7%','auto','auto'],
            cursor:['pointer'],
            text:"Explore",
            align:"center",
            font:['Arial, Helvetica, sans-serif',38,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'TourStrip',
            display:'none',
            type:'group',
            rect:['auto','auto','480px','60px','0px','120px'],
            c:[
            {
               id:'TourBase',
               display:'none',
               type:'rect',
               rect:['0px','0px','480px','60px','auto','auto'],
               fill:["rgba(169,3,41,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               boxShadow:["inset",12,-7,49,6,"rgba(109,0,25,0.65)"]
            },
            {
               id:'Tours',
               display:'none',
               type:'text',
               rect:['auto','auto','480px','31px','0px','15px'],
               text:"Tours",
               align:"center",
               font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1)","900","none","normal"]
            }]
         },
         {
            id:'HotelStrip',
            display:'none',
            type:'group',
            rect:['0px','860px','480px','60px','auto','auto'],
            c:[
            {
               id:'HotelBase',
               display:'none',
               type:'rect',
               rect:['0%','0%','100%','100%','auto','auto'],
               fill:["rgba(169,3,41,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               boxShadow:["inset",12,-7,49,6,"rgba(109,0,25,0.65)"]
            },
            {
               id:'Hotels',
               display:'none',
               type:'text',
               rect:['auto','auto','100%','51.7%','0%','24.6%'],
               text:"Hotels",
               align:"center",
               font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1)","900","none","normal"]
            }]
         },
         {
            id:'MapStrip',
            display:'none',
            type:'group',
            rect:['0px','920px','480px','60px','auto','auto'],
            c:[
            {
               id:'Mapbase',
               display:'none',
               type:'rect',
               rect:['0%','0%','100%','100%','auto','auto'],
               fill:["rgba(169,3,41,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               boxShadow:["inset",12,-7,49,6,"rgba(109,0,25,0.65)"]
            },
            {
               id:'Maps',
               display:'none',
               type:'text',
               rect:['auto','auto','100%','51.7%','0px','15px'],
               text:"Maps",
               align:"center",
               font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1)","900","none","normal"]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Maps}": [
            ["style", "top", 'auto'],
            ["style", "display", 'none'],
            ["style", "text-align", 'center'],
            ["style", "bottom", '14.77px'],
            ["style", "height", '52.06%'],
            ["style", "right", '0px'],
            ["style", "left", 'auto'],
            ["style", "width", '100%']
         ],
         "${_TourBase}": [
            ["color", "background-color", 'rgba(169,3,41,1)'],
            ["subproperty", "boxShadow.inset", 'inset'],
            ["subproperty", "boxShadow.color", 'rgba(109,0,25,0.648438)'],
            ["style", "left", '0px'],
            ["style", "top", '0px'],
            ["style", "height", '60px'],
            ["subproperty", "boxShadow.offsetV", '-7px'],
            ["style", "display", 'none'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetH", '12px'],
            ["subproperty", "boxShadow.blur", '49px']
         ],
         "${_Explore}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0.70022583007812'],
            ["style", "left", '-50.3%'],
            ["style", "font-size", '38px'],
            ["style", "top", '53.75%'],
            ["style", "width", '34.19%'],
            ["style", "text-indent", '0px'],
            ["style", "height", '5.69%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Mapbase}": [
            ["color", "background-color", 'rgba(169,3,41,1)'],
            ["subproperty", "boxShadow.inset", 'inset'],
            ["subproperty", "boxShadow.color", 'rgba(109,0,25,0.648438)'],
            ["style", "left", '0%'],
            ["style", "top", '0%'],
            ["style", "height", '100%'],
            ["subproperty", "boxShadow.offsetV", '-7px'],
            ["style", "display", 'none'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetH", '12px'],
            ["subproperty", "boxShadow.blur", '49px']
         ],
         "${_HeadBG}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.60211181640625'],
            ["style", "height", '130.14999389648px'],
            ["color", "background-color", 'rgba(3,11,173,1.00)']
         ],
         "${_Visit}": [
            ["subproperty", "textShadow.blur", '8px'],
            ["style", "letter-spacing", '0px'],
            ["style", "width", '480px'],
            ["subproperty", "textShadow.offsetH", '7px'],
            ["color", "color", 'rgba(19,27,228,1.00)'],
            ["subproperty", "textShadow.offsetV", '6px'],
            ["style", "left", '0px'],
            ["style", "font-size", '40px'],
            ["style", "top", '-82px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '60px'],
            ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_HotelStrip}": [
            ["style", "top", '860.4px'],
            ["style", "display", 'none']
         ],
         "${_start}": [
            ["style", "top", '51.6%'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "left", '-17.5%'],
            ["style", "height", '10.03%'],
            ["style", "opacity", '0.70022583007812'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '16.71%']
         ],
         "${_HotelBase}": [
            ["color", "background-color", 'rgba(169,3,41,1)'],
            ["subproperty", "boxShadow.inset", 'inset'],
            ["subproperty", "boxShadow.color", 'rgba(109,0,25,0.648438)'],
            ["style", "left", '0%'],
            ["style", "top", '0%'],
            ["style", "height", '100%'],
            ["subproperty", "boxShadow.offsetV", '-7px'],
            ["style", "display", 'none'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetH", '12px'],
            ["subproperty", "boxShadow.blur", '49px']
         ],
         "${_Hotels}": [
            ["style", "top", 'auto'],
            ["style", "display", 'none'],
            ["style", "text-align", 'center'],
            ["style", "bottom", '24.61%'],
            ["style", "height", '52.06%'],
            ["style", "right", '0%'],
            ["style", "left", 'auto'],
            ["style", "width", '100%']
         ],
         "${_MapStrip}": [
            ["style", "top", '920.4px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(2,2,2,1.00)'],
            ["style", "min-width", '480px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '800px'],
            ["style", "max-width", 'none'],
            ["style", "width", '480px']
         ],
         "${_Tours}": [
            ["style", "letter-spacing", '0px'],
            ["style", "bottom", '14.77px'],
            ["style", "right", '0px'],
            ["style", "left", 'auto'],
            ["style", "width", '480px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.24px'],
            ["style", "display", 'none'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '24px']
         ],
         "${_Paris}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_TourStrip}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-60px'],
            ["style", "display", 'none'],
            ["style", "right", '0px'],
            ["style", "left", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1699,
         autoPlay: true,
         timeline: [
            { id: "eid34", tween: [ "style", "${_start}", "left", '79.86%', { fromValue: '-17.5%'}], position: 0, duration: 500 },
            { id: "eid72", tween: [ "style", "${_Explore}", "top", '53.75%', { fromValue: '53.75%'}], position: 500, duration: 0 },
            { id: "eid56", tween: [ "style", "${_TourStrip}", "bottom", '118.32px', { fromValue: '-60px'}], position: 551, duration: 699 },
            { id: "eid65", tween: [ "style", "${_Mapbase}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid53", tween: [ "style", "${_MapStrip}", "top", '740.24px', { fromValue: '920.4px'}], position: 1000, duration: 699 },
            { id: "eid67", tween: [ "style", "${_Hotels}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid59", tween: [ "style", "${_Visit}", "font-size", '40px', { fromValue: '40px'}], position: 1699, duration: 0 },
            { id: "eid70", tween: [ "style", "${_Tours}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Visit}", "top", '35.02px', { fromValue: '-82px'}], position: 0, duration: 500, easing: "easeOutQuart" },
            { id: "eid68", tween: [ "style", "${_HotelBase}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid33", tween: [ "style", "${_Explore}", "opacity", '1', { fromValue: '0.70022583007812'}], position: 0, duration: 500 },
            { id: "eid32", tween: [ "style", "${_Explore}", "left", '43.97%', { fromValue: '-50.3%'}], position: 0, duration: 500 },
            { id: "eid62", tween: [ "style", "${_start}", "top", '51.6%', { fromValue: '51.6%'}], position: 500, duration: 0 },
            { id: "eid71", tween: [ "style", "${_TourBase}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid64", tween: [ "style", "${_Maps}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid54", tween: [ "style", "${_HotelStrip}", "top", '680px', { fromValue: '860.4px'}], position: 750, duration: 699 },
            { id: "eid63", tween: [ "style", "${_MapStrip}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid69", tween: [ "style", "${_TourStrip}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid66", tween: [ "style", "${_HotelStrip}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid16", tween: [ "color", "${_Visit}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(19,27,228,1)'}], position: 0, duration: 124 },
            { id: "eid17", tween: [ "color", "${_Visit}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 500, duration: 0, easing: "easeOutSine" },
            { id: "eid35", tween: [ "style", "${_start}", "opacity", '1', { fromValue: '0.70022583007812'}], position: 0, duration: 500 }         ]
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
})(jQuery, AdobeEdge, "EDGE-434326268");
