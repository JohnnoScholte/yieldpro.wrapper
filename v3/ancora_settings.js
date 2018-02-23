function get_custom(){
    var custom = {};
    try{
        keywords_raw = document.querySelector('meta[name="keywords"]').getAttribute("content").split(',');
        keywords = [];
        for (var i = 0; i < keywords_raw.length; i++){
            keywords.push(clean_chars(keywords_raw[i], false));
        };
        custom.keyword = keywords;
    }
    catch(err){}

    try{
        ancora_category_tag = document.querySelector('meta[property="ancoracategory"]').getAttribute("content");
        custom.category = ancora_category_tag
    }
    catch(err){}

    try
    {
        url_path = window.location.pathname;
        url_categories = url_path.split('/')
        clean_path = clean_chars(url_path, true);
        if (clean_path){custom.urlpath = clean_path};
    }
    catch(err){}

    try
    {
        url_cat_0 = clean_chars(url_categories[1], true);
        if (url_cat_0){custom.urlcategory1 = url_cat_0};
    }
    catch(err){}

    try
    {
        url_cat_1 = clean_chars(url_categories[2], true);
        if (url_cat_1){custom.urlcategory2 = url_cat_1};
    }
    catch(err){}

    return custom
}

function clean_chars(string, slash){
    try{
        if (slash === true){
            string = string.replace(new RegExp('/','g'), '_');
            };
        string = string.replace(/\W/g, '');
        if (string.length > 32){
            string = string.substring(0,32);
        }
        return string
    }
    catch(err){};
}

var element = document.querySelector('meta[property="yieldprosection"]');
if (!element){
    element = document.querySelector('meta[property="ancorasection"]');
};
viewport = window.innerWidth;

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

        if (adslot_mapping["headerbidding_networks"]["rubicon"] && section["rubicon_zone_id"])
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
            if (adslot_mapping["headerbidding_networks"]["appnexus_id"])
            {
               appnexus_id = adslot_mapping["headerbidding_networks"]["appnexus_id"];
            }
            else
            {
                appnexus_id = section["appnexus_id"];
            }
            if (appnexus_id){
                row = {
                    bidder: "appnexus",
                    params: {
                        placementId: appnexus_id
                    }
                }
                bids.push(row);
            }
        }

        if (adslot_mapping["headerbidding_networks"]["criteo"])
        {
            //criteo doesn't like empty value, send activate slots only
            for size in hb_slots[i]
            {
                txtsize = sizes_to_string(size);
                try adslot_mapping["criteo_hb"][txtsize]
                {
                    row = {
                        bidder: "criteo", 
                        params: {
                            zoneId: adslot_mapping["criteo_hb"][txtsize]
                        }
                    }
                    bids.push(row);
                }
                catch(err){};
            }
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
                    custom: get_custom(),
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
                    custom: get_custom()
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
                custom: get_custom(),
                slot_sizes: viewport_slots
            });
        }
        else
        {
            AncoraTagProvider.requestAds({
                sectionId: ancora_section,
                dmp: false,
                sync: false,
                custom: get_custom()
            });
        }
    }
    catch(err){};
};

function create_ancora_adslot(class_name) {
    create_yieldpro_adslot(class_name);
}

function create_yieldpro_adslot(class_name) {
    new_div = document.createElement('div');
    adslot_id = 'Ancora' + adslot_mapping["adslots"][ancora_section][class_name]["ancora_adslot_id"] + '_' + ancora_section; 
    new_div.id = adslot_id;
    var parent = document.getElementById(class_name).parentNode;
    parent.insertBefore(new_div, document.getElementById(class_name));

    if (adslot_mapping["headerbidding"]) {
        try{
            AncoraTagProvider.displayAd(adslot_id);
            }
        catch(err){};
    }
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