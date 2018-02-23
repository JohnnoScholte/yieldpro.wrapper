console.log("v3");
var element = document.querySelector('meta[property="ancorasection"]');
viewport = window.innerWidth;
console.log("Viewport:", viewport)

//set section based on meta tag, else use the first defined value
var section_foreign_id = element && element.getAttribute("content");
var ancora_section = section_mapping[section_foreign_id];
if (!section_foreign_id || !ancora_section){
    section_foreign_id = '';
    ancora_section = Object.keys(adslot_mapping["adslots"])[0];
}

//create viewports objects if needed
var hb_slots = {}
if (adslot_mapping["viewports"]) {
    var viewport_slots = []
    for (as in adslot_mapping["adslots"][ancora_section])
    {
        adslot = adslot_mapping["adslots"][ancora_section][as];
        sizes = adslot["viewports"]
        for (var i = 0; i < sizes.length; i++) {

            if (adslot["viewports"][i]["maxwidth"])
            {
                if (viewport >= adslot["viewports"][i]["minwidth"] && viewport < adslot["viewports"][i]["maxwidth"])
                {
                    hb_slots[as] = adslot["viewports"][i]["sizes"];
                    vp = {
                        id: adslot["ancora_adslot_id"],
                        "viewports": [{
                            "minwidth": adslot["viewports"][i]["minwidth"],
                            "sizes": sizes_to_string(adslot["viewports"][i]["sizes"])
                        }]
                    }
                    viewport_slots.push(vp);
                }
            }
            else if (viewport >= adslot["viewports"][i]["minwidth"])
            {
                hb_slots[as]= adslot["viewports"][i]["sizes"];
                vp = {
                    id: adslot["ancora_adslot_id"],
                    "viewports": [{
                        "minwidth": adslot["viewports"][i]["minwidth"],
                        "sizes": sizes_to_string(adslot["viewports"][i]["sizes"])
                    }]
                }
                viewport_slots.push(vp);
            }
        }
    }
}

else{
    var hb_slots = {}
    for (i in adslot_mapping["adslots"][ancora_section])
    {
        adslot = adslot_mapping["adslots"][ancora_section][i];
        sizes = adslot["viewports"][0]["sizes"]
        hb_slots[i] = sizes;
    }
}


//create headerbidding object if needed
if (adslot_mapping["headerbidding"]) {
    var adUnits = [];
    for (i in adslot_mapping["adslots"][ancora_section]){
        section = adslot_mapping["adslots"][ancora_section][i]
        bids = [];

        if (adslot_mapping["headerbidding_networks"]["rubicon"])
        {
            row = {
                bidder: "rubicon",
                params: {
                    accountId: adslot_mapping["headerbidding_networks"]["rubicon_account_id"],
                    siteId: adslot_mapping["headerbidding_networks"]["rubicon_site_id"],
                    zoneId: section["rubicon_zone_id"]
                }
            }
            bids.push(row);
        }

        if (adslot_mapping["headerbidding_networks"]["appnexus"])
        {
            row = {
                bidder: "appnexus",
                params: {
                    placementId: section["appnexus_id"]
                }
            }
            bids.push(row);
        }

        if (adslot_mapping["headerbidding_networks"]["other_network"])
        {
            //set elements for some other network
            row = {
                bidder: "other network",
                params: {
                    foo: "bar"
                }
            }
            bids.push(row)
        }

        div_id = 'Ancora' + section["ancora_adslot_id"] + '_' + ancora_section;

        adUnits.push({
            "code": div_id,
            "sizes": hb_slots[i],
            "bids": bids
        });
    }
};

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

function create_ancora_adslot(class_name) {
    new_div = document.createElement('div');

    //debugging: return console.log is Ad slot doesn't existing in site_settings.js
    var adSlotExists = adslot_mapping["adslots"][ancora_section].hasOwnProperty(class_name);
    if (!adSlotExists)
    {
        console.log("ERROR: Ad slot does not exist. Section: " + section_foreign_id + ", mapped to: " + ancora_section + ", Class: " + class_name);
        return;
    }

    try{
        ancora_id = 'Ancora' + adslot_mapping["adslots"][ancora_section][class_name]["ancora_adslot_id"] + '_' + ancora_section; 
        console.log("Ancora id :", ancora_id);
        new_div.id = ancora_id;
        var parent = document.getElementById(class_name).parentNode;
        parent.insertBefore(new_div, document.getElementById(class_name));

        if (adslot_mapping["headerbidding"]) {
            try{
                AncoraTagProvider.displayAd(ancora_id);
                }
            catch(err){};
        }
    }
    catch(err){};
};

function sizes_to_string(sizes) {
    stringsizes = [];
    if (!sizes.length)
    {   
        if (sizes[0] && sizes[1])
        {
            stringsizes = [sizes[0] + 'x' + sizes[1]];
        }
    }
    else {
        for (var i = 0; i < sizes.length; i++)
        {
            if (!sizes[i].length && sizes[0] && sizes[1])
            {
                stringsizes = [sizes[0] + 'x' + sizes[1]];
            }
            else if (sizes[i][0] && sizes[i][1])
            {
                stringsizes.push(sizes[i][0] + 'x' + sizes[i][1]);
            }
        }
    }
    return stringsizes
};