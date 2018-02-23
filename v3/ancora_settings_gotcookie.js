console.log("v3");

if (!adslot_mapping["headerbidding"])
    {
      (function(w) {
      var d = w.document; w.libServingName__ = "__ASL__";
      var url = ("https:" === d.location.protocol ? "https:" : "http:") + "//creatives.ancoraplatform.com/showad_" + site_hash + ".js";
      if (typeof w["__ASL_LIB_LOADED"] === "undefined") { asyncInclude(url); }
      w['__ASL_LIB_LOADED'] = 1; w['AncoraTagProvider'] = w['AncoraTagProvider'] || new Tag();
      function Tag() {
      var me = this; me['stack'] = {}; me['displayAd'] = function(){};
      me['requestAds'] = function(p) { var l = w[w.libServingName__];
      if ((p || {})['sectionId'] !== 0 && !(p || {})['sectionId']) { return; }
      try { l['requestAds'].call(l, p); } catch (e) { me['stack'][p['sectionId'] + ""] = p; }};}
      function asyncInclude(url) {
      var scriptEl = d.createElement("script"), node = d.getElementsByTagName("script")[0];
      scriptEl.type = "text/javascript"; scriptEl.src = url; scriptEl.async = true;
      if (navigator.userAgent.indexOf('Opera') !== -1) { setTimeout(function() { node.parentNode.insertBefore(scriptEl, node); }, 0); }
      else { node.parentNode.insertBefore(scriptEl, node); }}})(window);
    }

if (adslot_mapping['headerbidding'])
{
    (function(b){function f(){var d=this;d.stack={};d.displayAd=function(){};d.requestAds=function(a){var c=b[b.a];if(0===(a||{}).sectionId||(a||{})
    .sectionId)try{c.requestAds.call(c,a)}catch(e){d.stack[a.sectionId+(a.instance?"_"+a.instance:"")]=a}};d.setGlobalCustomParams=function(a)
    {var c=b[b.a];try{c.setGlobalCustomParams.call(c,a)}catch(e){d.globalCustomParams=a||{}}}}function g(b){var a=e.createElement("script")
    ,c=e.getElementsByTagName("script")[0];a.type="text/javascript";a.src=b;a.async=!0;-1!==
    navigator.userAgent.indexOf("Opera")?setTimeout(function(){c.parentNode.insertBefore(a,c)},0):c.parentNode.insertBefore(a,c)}var e=b
    .document;try{b.__putPixel(200100)}catch(k){}b.a="__ASL__";var h=("https:"===e.location.protocol?"https:":"http:")+"//creatives.ancoraplatform.com/showad_" + site_hash + ".js";if("undefined"===typeof b.__ASL_LIB_LOADED){g(h);try{b.__putPixel(200200)}catch
    (l){}}b.__ASL_LIB_LOADED=1;b["AncoraTagProvider"]=b["AncoraTagProvider"]||new f})(window);
    try{
      function sendAdserverRequest() {
         if (pbjs.adserverRequestSent) return;
         pbjs.adserverRequestSent = true;
         if (adslot_mapping["viewports"])
         {
             pbjs.que.push(function() {
                AncoraTagProvider.requestAds({
                    sectionId: ancora_section, 
                    dmp: false, 
                    sync: false, 
                    hbWinningBids: pbjs.getHighestCpmBids(), 
                    custom: {category: section_foreign_id},
                    slot_sizes: viewport_slots
                });
             });
         }
         else
         {
             pbjs.que.push(function() {
                AncoraTagProvider.requestAds({
                    sectionId: ancora_section,
                    dmp: false,
                    sync: false,
                    hbWinningBids: pbjs.getHighestCpmBids(),
                    custom: {category: section_foreign_id}
                });
             });
         }
      }
      pbjs.que.push(function() {
         pbjs.addAdUnits(adUnits);
         pbjs.requestBids({
            bidsBackHandler: sendAdserverRequest
         });
      });
      setTimeout(function() {
         sendAdserverRequest();
      }, 700);
    }catch(err){}
}

else{
    try{
        if (adslot_mapping["viewports"])
            {
            AncoraTagProvider.requestAds({
                sectionId: ancora_section,
                dmp: false,
                sync: false,
                custom: {category: section_foreign_id},
                slot_sizes: viewport_slots
            });
        }
        else
        {
            AncoraTagProvider.requestAds({
                sectionId: ancora_section,
                dmp: false,
                sync: false,
                custom: {category: section_foreign_id}
            });
        }
    }
    catch(err){};
};

