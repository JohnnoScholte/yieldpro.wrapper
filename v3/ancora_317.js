//1: section ids
//enter all sections, mapping the id that is set on the website to the section_id in the backend
section_mapping = {
    "homepage": "1037",
    "listview":"1038"
}

//2: Settings for adslots and headerbidding.

adslot_mapping = {
        "ancora_site_id": 317,
        "headerbidding": true,
        "viewports": true,
        "headerbidding_networks": {
            "rubicon": true,
            "rubicon_site_id": "151884",
            "rubicon_account_id": "16476",
            "appnexus": true,
            "appnexus_id": "11904342",
            "criteo": true,
        },
        "criteo_hb": {
            "300x250": "1159029",
            "728x90": "1159030",
        },
        "adslots": {
            "1037": {
                "rectangle": {
                    "ancora_adslot_id": "257",
                    "rubicon_zone_id": "859958",
                    	"viewports" : [{
                    	"minwidth": 0,
                    	"sizes": [[300, 250]]
                    	}]
                },
				"lb_vast_home": {
                    "ancora_adslot_id": "255",
                    "rubicon_zone_id": "859958",
                    	"viewports" : [{
                    	"minwidth": 0,
                    	"sizes": [[728, 90]]
                    	}]
                },
				"lb_home": {
                    "ancora_adslot_id": "256",
                    "rubicon_zone_id": "859958",
                    	"viewports" : [{
                    	"minwidth": 0,
                    	"sizes": [[728, 90]]
                    	}]
                },
        },
            "1038": {
                "leaderboard": {
                    "ancora_adslot_id": "258",
                    "rubicon_zone_id": "859958",
                   	"viewports" : [{
                    	"minwidth": 0,
                    	"sizes": [[728, 90]]
                    	}]
                },
				"rectangle2": {
                    "ancora_adslot_id": "259",
                    "rubicon_zone_id": "859958",
                   	"viewports" : [{
                    	"minwidth": 0,
                    	"sizes": [[300, 250]]
                    	}]
    			}
			}
		}
};

var site_hash = '683e725c';