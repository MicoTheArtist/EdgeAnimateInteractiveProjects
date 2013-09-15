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
            fill:["rgba(0,0,0,0)",im+"WinterCover.jpg",'0%','0%','100%','auto']
         },
         {
            id:'Cover2',
            display:'none',
            type:'image',
            rect:['0','0','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Cover.jpg",'0px','0px']
         },
         {
            id:'SnowPine',
            display:'none',
            type:'image',
            rect:['0%','0%','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"SnowPine.jpg",'0px','0px']
         },
         {
            id:'Head',
            type:'text',
            rect:['auto','31.9%','94.1%','15%','3.2%','auto'],
            text:"If it is winter in Ontario ...",
            align:"center",
            font:['Arial, Helvetica, sans-serif',60,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['0px','auto','960px','100px','auto','0px'],
            opacity:0.701416015625,
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","solid"]
         },
         {
            id:'Tent3',
            display:'none',
            type:'image',
            rect:['-30.4%','auto','292px','146px','auto','-2.2%'],
            fill:["rgba(0,0,0,0)",im+"Tent.png",'0px','0px']
         },
         {
            id:'RightArrow',
            type:'rect',
            rect:['auto','28.4%','auto','auto','0%','auto'],
            cursor:['pointer']
         },
         {
            id:'LeftArrow',
            display:'none',
            type:'rect',
            rect:['0%','28.4%','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'Subhead',
            display:'none',
            type:'text',
            rect:['auto','auto','30.4%','12.4%','34.8%','4.6%'],
            text:"It is playtime!",
            align:"center",
            font:['droid-serif, serif',40,"rgba(255,255,255,1)","700","none","normal"]
         },
         {
            id:'SlideTwoHead',
            display:'none',
            type:'text',
            rect:['auto','auto','799px','46px','8.4%','9.6%'],
            text:"Hike. Camp. Ski. Snowshoe! Explore!",
            align:"center",
            font:['droid-serif, serif',60,"rgba(255,255,255,1)","400","none","normal"]
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
         "${_SlideTwoHead}": [
            ["style", "bottom", '5.4%'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'center'],
            ["style", "right", '8.41%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'droid-serif, serif'],
            ["style", "height", '45.984375px'],
            ["style", "width", '799.25px']
         ],
         "${_Tent3}": [
            ["style", "top", 'auto'],
            ["style", "display", 'none'],
            ["style", "left", '-30.42%'],
            ["style", "bottom", '-2.2%']
         ],
         "${_RightArrow}": [
            ["style", "right", '0%'],
            ["style", "left", 'auto'],
            ["style", "cursor", 'pointer']
         ],
         "${_Subhead}": [
            ["style", "bottom", '4.6%'],
            ["style", "right", '34.83%'],
            ["style", "left", 'auto'],
            ["style", "font-size", '40px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'center'],
            ["style", "width", '30.38%'],
            ["style", "display", 'none'],
            ["style", "font-family", 'droid-serif, serif'],
            ["style", "height", '12.4%'],
            ["style", "font-weight", '700']
         ],
         "${_Cover2}": [
            ["style", "left", '960px'],
            ["style", "display", 'none']
         ],
         "${_LeftArrow}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_SnowPine}": [
            ["style", "left", '100%'],
            ["style", "display", 'none']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "bottom", '-0.4px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '960px'],
            ["style", "top", 'auto'],
            ["style", "height", '100px'],
            ["style", "opacity", '0.701416015625'],
            ["style", "right", 'auto']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "min-width", '720px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '500px'],
            ["style", "width", '960px']
         ],
         "${_WinterCover}": [
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "width", '960px']
         ],
         "${_Head}": [
            ["style", "line-height", '56px'],
            ["style", "letter-spacing", '0px'],
            ["style", "right", '3.23%'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "width", '94.07%'],
            ["style", "top", '31.91%'],
            ["style", "height", '15%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "display", 'block'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "eid16", tween: [ "style", "${_Head}", "display", 'none', { fromValue: 'block'}], position: 1046, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Subhead}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid17", tween: [ "style", "${_Subhead}", "display", 'none', { fromValue: 'block'}], position: 1046, duration: 0, easing: "easeOutCubic" },
            { id: "eid50", tween: [ "style", "${_LeftArrow}", "display", 'block', { fromValue: 'none'}], position: 1094, duration: 0, easing: "easeOutBounce" },
            { id: "eid53", tween: [ "style", "${_SnowPine}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutBounce" },
            { id: "eid47", tween: [ "style", "${_Tent3}", "left", '0.73%', { fromValue: '-30.42%'}], position: 3000, duration: 500, easing: "easeOutBounce" },
            { id: "eid18", tween: [ "style", "${_SlideTwoHead}", "display", 'block', { fromValue: 'none'}], position: 1094, duration: 0, easing: "easeOutCubic" },
            { id: "eid14", tween: [ "style", "${_WinterCover}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid51", tween: [ "style", "${_WinterCover}", "display", 'none', { fromValue: 'block'}], position: 1046, duration: 0, easing: "easeOutBounce" },
            { id: "eid12", tween: [ "style", "${_Cover2}", "display", 'block', { fromValue: 'none'}], position: 1046, duration: 0 },
            { id: "eid52", tween: [ "style", "${_Cover2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeOutBounce" },
            { id: "eid54", tween: [ "style", "${_SlideTwoHead}", "bottom", '5.4%', { fromValue: '5.4%'}], position: 1094, duration: 0, easing: "easeOutCubic" },
            { id: "eid26", tween: [ "style", "${_SnowPine}", "left", '0%', { fromValue: '100%'}], position: 2000, duration: 1000, easing: "easeOutCubic" },
            { id: "eid20", tween: [ "style", "${_SlideTwoHead}", "font-size", '36px', { fromValue: '36px'}], position: 1094, duration: 0, easing: "easeOutCubic" },
            { id: "eid11", tween: [ "style", "${_Cover2}", "left", '0px', { fromValue: '960px'}], position: 1000, duration: 1000, easing: "easeOutCubic" },
            { id: "eid37", tween: [ "style", "${_Tent3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutCubic" }         ]
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
      rect: ['0px','0px','auto','auto','auto','auto'],
      id: 'Next',
      text: '&gt;',
      font: ['droid-sans, serif',60,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
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
      rect: ['0px','0px','auto','auto','auto','auto'],
      font: ['droid-sans, serif',60,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Previous',
      text: '&lt;',
      align: 'left',
      type: 'text'
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
