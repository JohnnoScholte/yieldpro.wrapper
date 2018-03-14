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
var viewport = window.innerWidth;

//set section based on meta tag, else use the first defined value
var section_foreign_id = element && element.getAttribute("content");
var ancora_section = section_mapping[section_foreign_id];
if (!section_foreign_id || !ancora_section){
    section_foreign_id = '';
    ancora_section = Object.keys(adslot_mapping["adslots"])[0];
}

function build_vp(as, adslot, i) {
  hb_slots[as] = adslot.viewports[i].sizes;
  vp = {
    id: adslot.ancora_adslot_id,
    "viewports": [{
      "minwidth": adslot.viewports[i].minwidth,
      "sizes": sizes_to_string(adslot.viewports[i].sizes)
    }]
  }
  viewport_slots.push(vp);
}

//create viewports objects if needed
if (adslot_mapping.viewports) {
  var hb_slots = {}
  var viewport_slots = []
  for(var as in adslot_mapping.adslots[ancora_section])
  {
    adslot = adslot_mapping.adslots[ancora_section][as];
    sizes = adslot.viewports
    for(var i = 0; i < sizes.length; i++) {
      if (adslot.viewports[i].maxwidth)
      {
        if (viewport >= adslot.viewports[i].minwidth && viewport < adslot.viewports[i].maxwidth)
        {
          vp = build_vp(as, adslot, i);
        }
      }
      else if (viewport >= adslot.viewports[i].minwidth)
      {
        vp = build_vp(as, adslot, i);
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
if (adslot_mapping.headerbidding) {
  var adUnits = [];
  for(var i in adslot_mapping.adslots[ancora_section]){
    adslot = adslot_mapping.adslots[ancora_section][i]
    bids = [];

    if (adslot_mapping.headerbidding_networks.rubicon && adslot.rubicon_zone_id)
    {
      row = {
        bidder: "rubicon",
        params: {
          accountId: adslot_mapping.headerbidding_networks.rubicon_account_id,
          siteId: adslot_mapping.headerbidding_networks.rubicon_site_id,
          zoneId: adslot.rubicon_zone_id
        }
      }
      bids.push(row);
    }

    if (adslot_mapping.headerbidding_networks.appnexus)
    {
      if (adslot_mapping.headerbidding_networks.appnexus_id)
      {
         appnexus_id = adslot_mapping.headerbidding_networks.appnexus_id;
      }
      else
      {
        appnexus_id = adslot.appnexus_id;
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

    if (adslot_mapping.headerbidding_networks.criteo)
    {
      if(hb_slots[i].length > 0)
      sizes = hb_slots[i];
      if(sizes[0].constructor === Array)
      {
        for(var pos = 0; pos < sizes.length; pos++)
        {
          size = sizes[pos]
          build_criteo(size)
        }
      }
      else if (sizes.length > 0)
      {
        build_criteo(sizes)
      }
    }


    div_id = 'Ancora' + adslot.ancora_adslot_id + '_' + ancora_section;

    adUnits.push({
      "code": div_id,
      "sizes": hb_slots[i],
      "bids": bids
    });
  }
}

function build_criteo(size)
{
  txtsize = sizes_to_string(size);
  if (adslot_mapping.criteo_hb[txtsize])
  {
    row = {
    bidder: "criteo", 
    params: {
      zoneId: adslot_mapping.criteo_hb[txtsize]
      }
    }
  bids.push(row);
  }
}

var ancora_ids = [];

function create_ancora_adslot(class_name) {
    create_yieldpro_adslot(class_name);
};

function create_yieldpro_adslot(class_name) {
    new_div = document.createElement('div');
    ancora_id = 'Ancora' + adslot_mapping["adslots"][ancora_section][class_name]["ancora_adslot_id"] + '_' + ancora_section; 
    ancora_ids.push(ancora_id);
    new_div.id = ancora_id;
    var parent = document.getElementById(class_name).parentNode;
    parent.insertBefore(new_div, document.getElementById(class_name));

    if (adslot_mapping["headerbidding"]) {
        try{
            AncoraTagProvider.displayAd(ancora_id);
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