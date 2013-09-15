/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['droid-serif, serif']='<script src=\"http://use.edgefonts.net/droid-serif.js\"></script>';
   fonts['droid-sans, serif']='<script src=\"http://use.edgefonts.net/droid-sans.js\"></script>';


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
            rect:['0px','0px','960px','500px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"WinterCover.jpg",'0px','0px','960px','auto']
         },
         {
            id:'Head',
            type:'text',
            rect:['33px','160px','903px','75px','auto','auto'],
            text:"If it is winter in Ontario ...",
            align:"center",
            font:['Arial, Helvetica, sans-serif',60,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['0px','400px','960px','100px','auto','auto'],
            opacity:0.701416015625,
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","solid"]
         },
         {
            id:'RightArrow',
            type:'rect',
            rect:['929px','142px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'LeftArrow',
            display:'none',
            type:'rect',
            rect:['0px','142px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'Subhead',
            display:'none',
            type:'text',
            rect:['334px','430px','292px','62px','auto','auto'],
            text:"It is playtime!",
            align:"center",
            font:['droid-serif, serif',24,"rgba(255,255,255,1)","700","none","normal"]
         }],
         symbolInstances: [
         {
            id:'LeftArrow',
            symbolName:'Back'
         },
         {
            id:'RightArrow',
            symbolName:'Forward'
         }
         ]
      },
   states: {
      "Base State": {
         "${_LeftArrow}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_Subhead}": [
            ["style", "bottom", 'auto'],
            ["style", "right", 'auto'],
            ["style", "left", '333.98px'],
            ["style", "font-size", '24px'],
            ["style", "top", '430px'],
            ["style", "text-align", 'center'],
            ["style", "width", '291.65px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'droid-serif, serif'],
            ["style", "height", '40.75px'],
            ["style", "font-weight", '700']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "min-width", '720px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '500px'],
            ["style", "width", '960px']
         ],
         "${_RightArrow}": [
            ["style", "right", 'auto'],
            ["style", "left", '929px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "bottom", 'auto'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '960px'],
            ["style", "top", '400.4px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0.701416015625'],
            ["style", "right", 'auto']
         ],
         "${_WinterCover}": [
            ["style", "opacity", '1'],
            ["style", "background-size", [960,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
            ["style", "width", '960px']
         ],
         "${_Head}": [
            ["style", "line-height", '56px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "right", 'auto'],
            ["style", "left", '32.94px'],
            ["style", "width", '896.06px'],
            ["style", "top", '150px'],
            ["style", "font-weight", '700'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '57.45px'],
            ["style", "display", 'block'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '48px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1094,
         autoPlay: true,
         timeline: [
            { id: "eid58", tween: [ "style", "${_Head}", "font-size", '48px', { fromValue: '48px'}], position: 550, duration: 0 },
            { id: "eid16", tween: [ "style", "${_Head}", "display", 'none', { fromValue: 'block'}], position: 1046, duration: 0 },
            { id: "eid62", tween: [ "style", "${_Subhead}", "top", '430px', { fromValue: '430px'}], position: 550, duration: 0 },
            { id: "eid55", tween: [ "style", "${_Subhead}", "height", '40.75px', { fromValue: '40.75px'}], position: 550, duration: 0 },
            { id: "eid61", tween: [ "style", "${_Head}", "width", '896.06px', { fromValue: '896.06px'}], position: 785, duration: 0 },
            { id: "eid60", tween: [ "style", "${_Head}", "top", '150px', { fromValue: '150px'}], position: 550, duration: 0 },
            { id: "eid59", tween: [ "style", "${_Head}", "height", '57.45px', { fromValue: '57.45px'}], position: 550, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Subhead}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid17", tween: [ "style", "${_Subhead}", "display", 'none', { fromValue: 'block'}], position: 1046, duration: 0, easing: "easeOutCubic" },
            { id: "eid50", tween: [ "style", "${_LeftArrow}", "display", 'block', { fromValue: 'none'}], position: 1094, duration: 0, easing: "easeOutBounce" }         ]
      }
   }
},
"Forward": {
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
      type: 'text',
      id: 'Next',
      text: '&gt;',
      rect: ['0px','0px','auto','auto','auto','auto'],
      font: ['droid-sans, serif',60,'rgba(255,255,255,1.00)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '75px'],
            ["style", "width", '31px']
         ],
         "${_Next}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'droid-sans, serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '60px']
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
            "Up": 0,
            "Over": 1000
         },
         timeline: [
            { id: "eid1", tween: [ "color", "${_Next}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "color", "${_Next}", "color", 'rgba(185,8,8,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Back": {
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
      type: 'text',
      rect: ['0px','0px','auto','auto','auto','auto'],
      id: 'Previous',
      text: '&lt;',
      align: 'left',
      font: ['droid-sans, serif',60,'rgba(255,255,255,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Previous}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'droid-sans, serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '75px'],
            ["style", "width", '31px']
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
            "Up": 0,
            "Over": 1000
         },
         timeline: [
            { id: "eid48", tween: [ "color", "${_Previous}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid49", tween: [ "color", "${_Previous}", "color", 'rgba(218,11,11,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 1000, duration: 0, easing: "easeOutBounce" }         ]
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
})(jQuery, AdobeEdge, "EDGE-158684116");
