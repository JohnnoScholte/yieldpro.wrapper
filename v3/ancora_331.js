//regiogrid 1
//1: section ids
//enter all sections, mapping the id that is set on the website to the section_id in the backend
section_mapping = {
    "home": "1060",
    "thema": "1061",
    "weer": "1062:"

}

//2: Settings for adslots and headerbidding.
adslot_mapping = {
    "ancora_site_id": 331,
    "headerbidding": false,
    "viewports": true, //if set to false, set 1 viewport dictionary for minwidth = 0
    "headerbidding_networks": {
        "rubicon": true,
        "rubicon_site_id": "43266",
        "rubicon_account_id": "12042",
        "appnexus": true,
        "some_other": false,
    },
    "adslots": {
        "1108": { //section_id
            "homeheader": {
                "ancora_adslot_id": "349",
                "rubicon_zone_id": "576678",
                "appnexus_id": "10898630",
                "some_other_id": "1111",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 600, //only required if more viewports are defined
                    "sizes": [[320,50]] //must be comma separated list
                },
                {
                    "minwidth": 600, 
                    "sizes": [[728,90]] //empty list if no ads should be displayed
                }]
            },
            "homesidebar1": {
                "ancora_adslot_id": "350",
                "rubicon_zone_id": "576678",
                "appnexus_id": "10898630",
                "some_other_id": "2222",
                "viewports" : [
                {
                    "minwidth": 0,
                    "sizes": [300,250]
                }]
            },
            "homesidebar2": {
                "ancora_adslot_id": "351",
                "rubicon_zone_id": "576678",
                "appnexus_id": "10898630",
                "some_other_id": "2222",
                "viewports" : [
                {
                    "minwidth": 0,
                    "sizes": [300,250]
                }]
            },
            "homecontent1": {
                "ancora_adslot_id": "352",
                "rubicon_zone_id": "576678",
                "appnexus_id": "10898630",
                "some_other_id": "2222",
                "viewports" : [{
                    "minwidth": 0,
                    "maxwidth": 600,
                    "sizes": [[320, 50]]
                },
                {
                    "minwidth": 600,
                    "sizes": [728, 90]
                }]
            },
            "homecontent2": {
                "ancora_adslot_id": "353",
                "rubicon_zone_id": "576678",
                "appnexus_id": "10898630",
                "some_other_id": "2222",
                "viewports" : [{
                    "minwidth": 0,
                    "maxwidth": 600,
                    "sizes": [[320, 50]]
                },
                {
                    "minwidth": 600,
                    "sizes": [728, 90]
                }]
            },
        },
        "1109": {
            "banner": {
                "ancora_adslot_id": "4",
                "rubicon_zone_id": "44",
                "appnexus_id": "444",
                "some_other_id": "4444",
                "viewports" : [{
                    "minwidth": 0,
                    "maxwidth": 762,
                    "sizes": [] //no ads will be served for viewports up to 762px here
                },
                {
                    "minwidth": 762,
                    "sizes": [[336,280],[300,250]],
                }]
            },
            "sidebar-top": {
                "ancora_adslot_id": "5",
                "rubicon_zone_id": "55",
                "appnexus_id": "555",
                "some_other_id": "5555",
                "viewports" : [{
                    "minwidth": 0,
                    "maxwidth": 762,
                    "sizes": []
                },
                {
                    "minwidth": 762,
                    "sizes": [[336,280],[300,250]]
                }]
            },
            "banner-bft": {
                "ancora_adslot_id": "6",
                "rubicon_zone_id": "66",
                "appnexus_id": "666",
                "some_other_id": "6666",
                "viewports" : [{
                    "minwidth": 0,
                    "maxwidth": 762,
                    "sizes": [[]]
                },
                {
                    "minwidth": 762,
                    "sizes": [[336,280],[300,250]]
                }]
            }
        }
    }
};

var site_hash = 'c28aca23';
