Event.addBehavior = function(rules) {
  var ab = this.addBehavior;
  Object.extend(ab.rules, rules);
  
  if (ab.autoTrigger) {
    var init = ab.load.bind(selectors);
    if (this.onDOMReady) this.onDOMReady(init);
    else this.observe(window, 'load', init);
  }
  
  if (ab.reassignAfterAjax) Ajax.Responders.register({
    onComplete : function() { ab.load(); }
  });
  
  ab.autoTrigger = ab.reassignAfterAjax = false;
}

Object.extend(Event.addBehavior, {
  rules : {}, cache : [],
  reassignAfterAjax : true,
  autoTrigger : true,
  
  load : function() {
    this.unload();
    for (var selector in this.rules) {
      var observer = this.rules[selector];
      var sels = selector.split(',');
      sels.each(function(sel) {
        var parts = sel.split(':'), css = parts[0], event = parts[1];
        $$(css).each(function(element) {
          if (event) {
            var oel = observer.bindAsEventListener(element);
            element.observe(event, oel);
            Event.addBehavior.cache.push([element, event, oel]);
          } else observer.call(element);
        })
      });
    }
  },
  
  unload : function() {
    this.cache.each(function(c) {
      Event.stopObserving.apply(Event, c);
    })
  }
  
});

Event.observe(window, 'unload', Event.addBehavior.unload.bind(Event.addBehavior));