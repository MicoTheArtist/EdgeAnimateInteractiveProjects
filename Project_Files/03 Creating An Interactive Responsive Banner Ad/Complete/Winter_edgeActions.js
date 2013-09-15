/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_RightArrow}", "mouseover", function(sym, e) {
         sym.getSymbol("RightArrow").play("Over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RightArrow}", "mouseout", function(sym, e) {
         sym.getSymbol("RightArrow").play("Up");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RightArrow}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1957, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_LeftArrow}", "mouseout", function(sym, e) {
         sym.getSymbol("LeftArrow").play("Up");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_LeftArrow}", "mouseover", function(sym, e) {
         sym.getSymbol("LeftArrow").play("Over");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_LeftArrow}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         $("#Stage").css("margin","auto");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'RightArrow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Forward");
   //Edge symbol end:'Forward'

   //=========================================================
   
   //Edge symbol: 'Back'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Back");
   //Edge symbol end:'Back'

})(jQuery, AdobeEdge, "EDGE-158684116");