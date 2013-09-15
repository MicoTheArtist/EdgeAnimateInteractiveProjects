
(function($,Edge,compId){var _=null,y=true,n=false,x17='900',x9='Arial Black, Gadget, sans-serif',x3='1.0.1.204',a='Base State',qos='easeOutSine',bsz='background-size',x31='hidden',e43='${_HotelBase}',dt='Default Timeline',xw='max-width',i='none',qor='easeOutQuart',lf='left',x23='inset',bg='background-color',x21='auto',bt='bottom',fs='font-size',tp='top',ta='text-align',ov='overflow',xc='rgba(0,0,0,1)',x20='stage',e33='${_Maps}',e34='${_Explore}',c='color',x4='rgba(0,0,0,0)',g='image',po='center',e44='${_HotelStrip}',x24='rgba(109,0,25,0.648438)',d='display',x37='rgba(19,27,228,1.00)',x='text',e42='${_Hotels}',e41='${_start}',e40='${_TourBase}',m='rect',x6='rgba(3,11,173,1.00)',x38='rgba(255,255,255,1.00)',h='height',e45='${_Tours}',e30='${_Stage}',x1='1.0.0',e35='${_Mapbase}',x28='@@0@@% @@1@@',ql='linear',p='px',rt='right',x22='rgba(169,3,41,1)',x25='rgba(0,0,0,1.00)',b='block',x8='58',e46='${_MapStrip}',x12='38',e32='${_Paris}',x26='pointer',x13='Arial, Helvetica, sans-serif',e47='${_TourStrip}',l='normal',e36='${_Visit}',x29='rgba(2,2,2,1.00)',s='style',o='opacity',w='width',e27='${_HeadBG}',x16='24',mw='min-width',x14='rgba(169,3,41,1.00)',x39='rgba(19,27,228,1)',ff='font-family',x2='0.1.7';var im='images/';var g5='Paris.jpg',g10='start.png';var s15="Tours",s18="Hotels",s7="Visit Paris",s11="Explore",s19="Maps";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Paris',t:g,r:['0px','0px','480px','800px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'HeadBG',t:m,r:['0px','0px','480px','130px','auto','auto'],o:0.60211181640625,f:[x6],s:[0,xc,i]},{id:'Visit',t:x,r:['0px','55px','480px','60px','auto','auto'],cu:['pointer'],text:s7,align:"center",n:[x9,x8,xc,l,i,""],textShadow:["rgba(0,0,0,1.00)",7,6,8]},{id:'start',t:g,r:['87.7%','51.6%','16.7%','10%','auto','auto'],cu:['pointer'],f:[x4,im+g10,'0%','0%','100%','auto']},{id:'Explore',t:x,r:['34.2%','59%','34.2%','5.7%','auto','auto'],cu:['pointer'],text:s11,align:"center",n:[x13,x12,"rgba(0,0,0,1.00)",l,i,l]},{id:'TourStrip',v:i,t:'group',r:['auto','auto','480px','60px','0px','120px'],c:[{id:'TourBase',v:i,t:m,r:['0px','0px','480px','60px','auto','auto'],f:[x14],s:[0,"rgb(0, 0, 0)",i],boxShadow:["inset",12,-7,49,6,"rgba(109,0,25,0.65)"]},{id:'Tours',v:i,t:x,r:['auto','auto','480px','31px','0px','15px'],text:s15,align:"center",n:[x13,x16,"rgba(255,255,255,1)",x17,i,l]}]},{id:'HotelStrip',v:i,t:'group',r:['0px','860px','480px','60px','auto','auto'],c:[{id:'HotelBase',v:i,t:m,r:['0%','0%','100%','100%','auto','auto'],f:[x14],s:[0,"rgb(0, 0, 0)",i],boxShadow:["inset",12,-7,49,6,"rgba(109,0,25,0.65)"]},{id:'Hotels',v:i,t:x,r:['auto','auto','100%','51.7%','0%','24.6%'],text:s18,align:"center",n:[x13,x16,"rgba(255,255,255,1)",x17,i,l]}]},{id:'MapStrip',v:i,t:'group',r:['0px','920px','480px','60px','auto','auto'],c:[{id:'Mapbase',v:i,t:m,r:['0%','0%','100%','100%','auto','auto'],f:[x14],s:[0,"rgb(0, 0, 0)",i],boxShadow:["inset",12,-7,49,6,"rgba(109,0,25,0.65)"]},{id:'Maps',v:i,t:x,r:['auto','auto','100%','51.7%','0px','15px'],text:s19,align:"center",n:[x13,x16,"rgba(255,255,255,1)",x17,i,l]}]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1699,a:y,tt:[]}}}};var S1=symbols[x20];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e27).P(tp,0).P(o,0.6,_,_,"").P(h,130.15,_,_,p).P(bg,x6,c);A1.A(e30).P(bg,x29,c).P(mw,480).P(ov,x31).P(h,800).P(xw,i).P(w,480);A1.A(e32).P(lf,0).P(tp,0);A1.A(e33).P(tp,x21).P(ta,po).P(bt,14.77).P(h,52.06,_,_,"%").P(rt,0,_,_,p).P(lf,x21).P(w,100,_,_,"%").P(d,i).T(0.5,b);A1.A(e34).P("letter-spacing",0).P(c,x25,c).P(fs,38).P(w,34.19,_,_,"%").P("text-indent",0,_,_,p).P(h,5.69,_,_,"%").P(ff,x13).P("word-spacing",0,_,_,p).P("cursor",x26).P(tp,53.75,_,_,"%").T(0.5,53.75).P(o,0.7,_,_,"").T(0,1,0.5,ql).P(lf,-50.3,_,_,"%").T(0,43.97,0.5);A1.A(e35).P(bg,x22,c).P("boxShadow.inset",x23,"subproperty").P("boxShadow.color",x24,"subproperty").P(lf,0,_,_,"%").P(tp,0).P(h,100).P("boxShadow.offsetV",-7,"subproperty",_,p).P("boxShadow.spread",6,"subproperty").P("boxShadow.offsetH",12,"subproperty").P("boxShadow.blur",49,"subproperty").P(d,i).T(0.5,b);A1.A(e36).P("textShadow.blur",8,"subproperty").P("letter-spacing",0).P(w,480).P("textShadow.offsetH",7,"subproperty").P("textShadow.offsetV",6,"subproperty").P(lf,0).P("textShadow.color",x25,"subproperty").P(ta,po).P("text-indent",0).P(h,60).P(ff,x9).P("word-spacing",0).P("cursor",x26).P(tp,-82).T(0,35.02,0.5,qor).P(c,x37,c).T(0,x38,0.124,ql,x39).T(0.5,x38).P(fs,40).T(1.699,40);A1.A(e40).P(bg,x22,c).P("boxShadow.inset",x23,"subproperty").P("boxShadow.color",x24,"subproperty").P(lf,0).P(tp,0).P(h,60).P("boxShadow.offsetV",-7,"subproperty").P("boxShadow.spread",6,"subproperty").P("boxShadow.offsetH",12,"subproperty").P("boxShadow.blur",49,"subproperty").P(d,i).T(0.5,b);A1.A(e41).P(bsz,[100,'auto'],_,x28).P(h,10.03,_,_,"%").P("cursor",x26).P(w,16.71).P(tp,51.6).T(0.5,51.6).P(o,0.7,_,_,"").T(0,1,0.5,ql).P(lf,-17.5,_,_,"%").T(0,79.86,0.5);A1.A(e42).P(tp,x21).P(ta,po).P(bt,24.61,_,_,"%").P(h,52.06).P(rt,0).P(lf,x21).P(w,100).P(d,i).T(0.5,b);A1.A(e43).P(bg,x22,c).P("boxShadow.inset",x23,"subproperty").P("boxShadow.color",x24,"subproperty").P(lf,0,_,_,"%").P(tp,0).P(h,100).P("boxShadow.offsetV",-7,"subproperty",_,p).P("boxShadow.spread",6,"subproperty").P("boxShadow.offsetH",12,"subproperty").P("boxShadow.blur",49,"subproperty").P(d,i).T(0.5,b);A1.A(e44).P(tp,860.4).T(0.75,680,0.699,ql).P(d,i).T(0.5,b);A1.A(e45).P("letter-spacing",0).P(bt,14.77).P(rt,0).P(lf,x21).P(w,480).P(tp,x21).P(ta,po).P("text-indent",0).P(h,31.24).P("word-spacing",0).P(fs,24).P(d,i).T(0.5,b);A1.A(e46).P(tp,920.4).T(1,740.24,0.699,ql).P(d,i).T(0.5,b);A1.A(e47).P(tp,x21).P(rt,0).P(lf,x21).P(d,i).T(0.5,b).P(bt,-60).T(0.551,118.32,0.699,ql);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-434326268");