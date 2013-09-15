
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();var element=sym.$("vidRect");element.html('<video video width = "400" video height = "225" src = "video/Stockhorn.mp4" type = "video/mp4" src ="video/Stockhorn.webm" type= "video/webm" controls = "controls"></video>');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TV}","click",function(sym,e){sym.play("video");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-25923733");