var element = document.querySelector('meta[property="ancorasection"]');
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

ancora_ids = [];

function create_ancora_adslot(class_name) {
    if (check_viewport(class_name)) {    
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
    }
};

function check_viewport(class_name){
    var sizes = '';
    vps = adslot_mapping["adslots"][ancora_section][class_name]["viewports"]
    for (var i = 0; i < vps.length; i++){
        if (vps[i]["maxwidth"]){
            if (viewport >= vps[i]["minwidth"] && viewport < vps[i]["maxwidth"])
            {
                sizes = vps[i]["sizes"];
            }
        }
        else if (viewport >= vps[i]["minwidth"])
        {
            sizes = vps[i]["sizes"];
        }
    }
    if (!sizes)
    {
        return false;
    }
    else if (sizes.length === 0)
    {
        return false;
    }
    else if (sizes.length > 1)
    {
        return true;
    }
    else if (sizes.length == 1)
    {
        try{
            if (sizes[0].length > 1)
            {
                return true;
            }
            if (sizes[0].length === 0)
            {
                return false;
            }
        }
        catch(err){
            return false;
        }
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
