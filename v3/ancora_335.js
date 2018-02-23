//RTV Oost Mobile v1
//1: section ids
//enter all sections, mapping the id that is set on the website to the section_id in the backend
section_mapping = {
    "Home": "1118",
	"Nieuws": "1119",
    "Sport": "1120",
    "Overige": "1121",
    "mob_artikel_nieuws": "1203",
    "mob_artikel_sport": "1204",
    "mob_artikel_overig": "1205" 
    }

//2: Settings for adslots and headerbidding.
adslot_mapping = {
    "ancora_site_id": 335,
    "headerbidding": true,
    "viewports": true,
    "headerbidding_networks": {
        "rubicon": true,
        "rubicon_site_id": "148456",
        "rubicon_account_id": "16476",
        "appnexus": true,
        "appnexus_id": "10898630",
        "criteo": true,
    },
    "criteo_hb": {
        "320x50": "1159046",
    },
    "adslots": {
        "1118": {
            "atf": {
                "ancora_adslot_id": "369",
                "rubicon_zone_id": "859060",
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            },
            
      "btf": {
                "ancora_adslot_id": "370",
                "rubicon_zone_id": "859060",
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            }  

        },
        "1119": {
            "atf": {
                "ancora_adslot_id": "369",
                "rubicon_zone_id": "859060",
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            },
            
      "btf": {
                "ancora_adslot_id": "370",
                "rubicon_zone_id": "859060",
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            }   

        },
       "1120": {
            "atf": {
                "ancora_adslot_id": "369",
                "rubicon_zone_id": "859060",
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            },
            
      "btf": {
                "ancora_adslot_id": "370",
                "rubicon_zone_id": "859060",
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            }   

        },
       "1121": {
            "atf": {
                "ancora_adslot_id": "369",
                "rubicon_zone_id": "859060",
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            },
            
      "btf": {
                "ancora_adslot_id": "370",
                "rubicon_zone_id": "859060",
                "viewports" : [{
                    "minwidth": 0,
                    "sizes": [[320,50]]
                }]
            }    

        },
        "1203": {
        	"artikel": {
        	"ancora_adslot_id": "774",
        	"viewports" : [{
        			"minwidth": 0,
        			"sizes": [320, 50]
        			}]
        		}
        },
        "1204": {
        	"artikel": {
        	"ancora_adslot_id": "774",
        	"viewports" : [{
        			"minwidth": 0,
        			"sizes": [320, 50]
        			}]
        		}
        },
        "1205": {
        	"artikel": {
        	"ancora_adslot_id": "774",
        	"viewports" : [{
        			"minwidth": 0,
        			"sizes": [320, 50]
        	}]
            }
        }
    }
};

var site_hash = '683e725c';