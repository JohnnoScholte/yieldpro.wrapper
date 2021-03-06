//Flevoland
//1: section ids
//enter all sections, mapping the id that is set on the website to the section_id in the backend
section_mapping = {
    1: "1073",
    2: "1074",
    3: "1075",
    4: "1076",
    5: "1077",
    6: "1078",
    7: "1079",
    8: "1080"
    }

//2: Settings for adslots and headerbidding.
adslot_mapping = {
    "ancora_site_id": 325,
    "headerbidding": true,
    "viewports": true,
    "headerbidding_networks": {
        "rubicon": true,
        "rubicon_site_id": "151248",
        "rubicon_account_id": "16476",
        "appnexus": true,
        "appnexus_id": "12379298",
        "criteo": true,
    },
    "criteo_hb": {
        "300x250": "1158982",
        "320x50": "1158984",
        "728x90": "1158983",
    },
    "adslots": {
        "1073": {
            "homelead1": {
                "ancora_adslot_id": "295",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0,
                    "maxwidth": 700,
                    "sizes": [[320, 50]]
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]]
                }]
            },
  			"homerect1": {
                "ancora_adslot_id": "296",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0,
                    "maxwidth": 700,
                    "sizes": [[320, 50]]
                },
                {
                    "minwidth": 700,
                    "sizes": [[300, 250]]
                }]
            },
		 	"homelead2": {
                "ancora_adslot_id": "297",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
   			"homerect2": {
                "ancora_adslot_id": "298",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[300, 250]] //empty list if no ads should be displayed
                }]
            },
  			"homerect3": {
                "ancora_adslot_id": "299",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[300, 250]] //empty list if no ads should be displayed
                }]
            }                               

        },
        "1074": {
             "lay2lead1": {
                "ancora_adslot_id": "300",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay2lead2": {
                "ancora_adslot_id": "301",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay2lead3": {
                "ancora_adslot_id": "302",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay2rect1": {
                "ancora_adslot_id": "303",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[300, 250]] //empty list if no ads should be displayed
                }]
            },
            "lay2rect2": {
                "ancora_adslot_id": "304",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[300, 250]] //empty list if no ads should be displayed
                }]
            },
        },
        "1075": {
             "lay2lead1": {
                "ancora_adslot_id": "300",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay2lead2": {
                "ancora_adslot_id": "301",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay2lead3": {
                "ancora_adslot_id": "302",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay2rect1": {
                "ancora_adslot_id": "303",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[300, 250]] //empty list if no ads should be displayed
                }]
            },
            "lay2rect2": {
                "ancora_adslot_id": "304",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[300, 250]] //empty list if no ads should be displayed
                }]
            }
        },
        "1076": {
            "lay2lead1": {
                "ancora_adslot_id": "305",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay2lead2": {
                "ancora_adslot_id": "306",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay3rect1": {
                "ancora_adslot_id": "307",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[300, 250]] //empty list if no ads should be displayed
                }]
            },

        },  
        "1077": {
             "lay2lead1": {
                "ancora_adslot_id": "305",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "homelead1": { //should be
                "ancora_adslot_id": "306",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay3rect1": {
                "ancora_adslot_id": "307",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[300, 250]] //empty list if no ads should be displayed
                }]
            },

        }, 
        "1078": {
             "lay2lead1": {
                "ancora_adslot_id": "910",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay2lead2": {
                "ancora_adslot_id": "911",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay3rect1": {
                "ancora_adslot_id": "912",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[300, 250]] //empty list if no ads should be displayed
                }]
            },
            "lay3rect3": {
                "ancora_adslot_id": "915",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[300, 250]] //empty list if no ads should be displayed
                }]
            }
        },
        "1079": {
             "lay2lead1": {
                "ancora_adslot_id": "305",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay2lead2": {
                "ancora_adslot_id": "306",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay3rect1": { //!not called on website
                "ancora_adslot_id": "307",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[]] //empty list if no ads should be displayed
                }]
            },

        }, 
        "1080": {
             "lay2lead1": {
                "ancora_adslot_id": "305",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay2lead2": {
                "ancora_adslot_id": "306",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0, //minwidth always required
                    "maxwidth": 700, //only required if more viewports are defined
                    "sizes": [[320, 50]] //must be comma separated list
                },
                {
                    "minwidth": 700,
                    "sizes": [[728, 90]] //empty list if no ads should be displayed
                }]
            },
            "lay3rect1": { //  !!not called on website (legacy adslot instead)
                "ancora_adslot_id": "307",
                "rubicon_zone_id": "783748",
                "viewports" : [{
                    "minwidth": 0,
                    "maxwidth": 700,
                    "sizes": [[320, 50]]
                },
                {
                    "minwidth": 700,
                    "sizes": [[300, 250]]
                }]
            },

        }            
    }
};

var site_hash = 'a1422e6a';