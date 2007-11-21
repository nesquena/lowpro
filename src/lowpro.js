LowPro = {};
LowPro.Version = '0.5';
LowPro.CompatibleWithPrototype = '1.6.0';

if (Prototype.Version != LowPro.CompatibleWithPrototype && console && console.warn)
  console.warn("This version of Low Pro is tested with Prototype " + LowPro.CompatibleWithPrototype + 
                  " it may not work as expected with this version (" + Prototype.Version + ")");

if (!Element.addMethods) 
  Element.addMethods = function(o) { Object.extend(Element.Methods, o) };