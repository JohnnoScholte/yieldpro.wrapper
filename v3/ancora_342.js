//RTV Noord
//1: section ids
//enter all sections, mapping the id that is set on the website to the section_id in the backend
section_mapping = {
    "Home": "1169",
    "Container": "1170",
    "NewsItem": "1171",
    "RadioTvArchive": "1172",
    "RadioTvEpisode": "1173",
    "RadioTvGuide": "1174",
    "RadioTvPortal": "1175",
    "TaggedTagPage": "1176",
    "TaggedTheme": "1177",
    "TaggedThemes": "1178",
    "Weather": "1344"
    }

//2: Settings for adslots and headerbidding.

adslot_mapping = {
        "ancora_site_id": 342,
        "headerbidding": true,
        "viewports": true,
        "headerbidding_networks": {
            "rubicon": true,
            "rubicon_site_id": "151882",
            "rubicon_account_id": "16476",
            "appnexus": true,
            "appnexus_id": "12288085",
            "criteo": true
        },
        "criteo_hb": {
            "300x250": "1159034",
            "320x50": "1159036",
            "728x90": "1159035"
        },
        "adslots": {
        "1169": {
            "defaultcontent1": {
                "ancora_adslot_id": "568",
                "rubicon_zone_id": 832778,
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [320, 50]
                },
                {
                    "minwidth": 768,
                    "sizes": []
                }]
            },
            "defaultcontent2": {
                "ancora_adslot_id": "569",
                "rubicon_zone_id": 832780,
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                },
                {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent3": {
                "ancora_adslot_id": "570",
                "rubicon_zone_id": 832782,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                },
                {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "headerbanner": {
                "ancora_adslot_id": "571",
                "rubicon_zone_id": 832792,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 1200,
                    "sizes": []
                },
                {
                    "minwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "mobileheaderbanner": {
                "ancora_adslot_id": "572",
                "rubicon_zone_id": 832794,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "maxwidth": 1200,
                    "sizes": [320, 50]
                },
                {
                    "minwidth":1200,
                    "sizes":[]
                }]
            },
            "defaultsidebar1": {
                "ancora_adslot_id": "573",
                "rubicon_zone_id": 832786,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                 },
                 {
                    "minwidth": 992,
                    "sizes": [300, 250]
                }]
            },
            "defaultsidebar2": {
                "ancora_adslot_id": "771",
                "rubicon_zone_id": 783738,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "sizes": [300, 250]
                }]
            }
        },
        "1170": {
            "defaultcontent1": {
                "ancora_adslot_id": "574",
                "rubicon_zone_id": 837948,
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                },
                {
                    "minwidth": 768,
                    "sizes": [728, 90]
                 }]
            },
            "headerbanner": {
                "ancora_adslot_id": "575",
                "rubicon_zone_id": 837952,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 1200,
                    "sizes": []
                },
                {
                    "minwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "mobileheaderbanner": {
                "ancora_adslot_id": "576",
                "rubicon_zone_id": 837954,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "maxwidth":1200,
                    "sizes": [320, 50]
                },
                {
                    "minwidth":1200,
                    "sizes":[]
                }]
            },
            "defaultsidebar1": {
                "ancora_adslot_id": "577",
                "rubicon_zone_id": 837950,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "sizes": [300, 250]
                }]
            }
        },
        "1171": {
            "defaultcontent1": {
                "ancora_adslot_id": "578",
                "rubicon_zone_id": 832838,
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                },
                {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent2": {
                "ancora_adslot_id": "579",
                "rubicon_zone_id": 832840,
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [320, 50]
                },
                {
                    "minwidth": 768,
                    "sizes": []
                }]
            },
            "headerbanner": {
                "ancora_adslot_id": "580",
                "rubicon_zone_id": 832844,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 1200,
                    "sizes": []
                },
                {
                    "minwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "mobileheaderbanner": {
                "ancora_adslot_id": "581",
                "rubicon_zone_id": 832846,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "maxwidth": 1200,
                    "sizes": [320, 50]
                },
                {
                    "minwidth":1200,
                    "sizes":[]
                }]
            },
            "defaultsidebar1": {
                "ancora_adslot_id": "582",
                "rubicon_zone_id": 832842,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "sizes": [300, 250]
                }]
            }
        },
        "1172": {
            "defaultcontent1": {
                "ancora_adslot_id": "583",
                "rubicon_zone_id": 838050,
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                },
                {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent2": {
                "ancora_adslot_id": "584",
                "rubicon_zone_id": 838052,
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [320, 50]
                },
                {
                    "minwidth": 768,
                    "sizes": []
                }]
            },
            "headerbanner": {
                "ancora_adslot_id": "585",
                "rubicon_zone_id": 838056,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 1200,
                    "sizes": []
                },
                {
                    "minwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "mobileheaderbanner": {
                "ancora_adslot_id": "586",
                "rubicon_zone_id": 838058,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "maxwidth": 1200,
                    "sizes": [320, 50]
                },
                {
                    "minwidth": 1200,
                    "sizes":[]
                }]
            },
            "defaultsidebar1": {
                "ancora_adslot_id": "587",
                "rubicon_zone_id": 838054,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "sizes": [300, 250]
                }]
            }
        },
        "1173": {
            "defaultcontent1": {
                "ancora_adslot_id": "588",
                "rubicon_zone_id": 838030,
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [320, 50]
                },
                {
                    "minwidth": 768,
                    "sizes": []
                 }]
            },
            "headerbanner": {
                "ancora_adslot_id": "590",
                "rubicon_zone_id": 838034,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 1200,
                    "sizes": []
                },
                {
                    "minwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "mobileheaderbanner": {
                "ancora_adslot_id": "591",
                "rubicon_zone_id": 838036,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "maxwidth": 1200,
                    "sizes": [320, 50]
                },
                {
                    "minwidth": 1200,
                    "sizes": []
                }]
            },
            "defaultsidebar1": {
                "ancora_adslot_id": "592",
                "rubicon_zone_id": 838032,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "sizes": [300, 250]
                }]
            }
        },
        "1174": {
            "defaultcontent1": {
                "ancora_adslot_id": "593",
                "rubicon_zone_id": 783738,
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                },
                {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent2": {
                "ancora_adslot_id": "594",
                "rubicon_zone_id": 783738,
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [320, 50]
                },
                {
                    "minwidth": 768,
                    "sizes": []
                }]
            },
            "headerbanner": {
                "ancora_adslot_id": "595",
                "rubicon_zone_id": 783738,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 1200,
                    "sizes": []
                },
                {
                    "minwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "mobileheaderbanner": {
                "ancora_adslot_id": "596",
                "rubicon_zone_id": 783738,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "maxwidth": 1200,
                    "sizes": [320, 50]
                },
                {
                    "minwidth": 1200,
                    "sizes": []
                }]
            },
            "defaultsidebar1": {
                "ancora_adslot_id": "597",
                "rubicon_zone_id": 783738,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "sizes": [300, 250]
                }]
            }
        },
        "1175": {
            "defaultcontent1": {
                "ancora_adslot_id": "598",
                "rubicon_zone_id": 838068,
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                },
                {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "headerbanner": {
                "ancora_adslot_id": "599",
                "rubicon_zone_id": 838072,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 1200,
                    "sizes": []
                },
                {
                    "minwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "mobileheaderbanner": {
                "ancora_adslot_id": "600",
                "rubicon_zone_id": 838076,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "maxwidth": 1200,
                    "sizes": [320, 50]
                },
                {
                    "minwidth":1200,
                    "sizes": []
                }]
            },
            "defaultsidebar1": {
                "ancora_adslot_id": "601",
                "rubicon_zone_id": 838070,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "sizes": [300, 250]
                }]
            }
        },
        "1176": {
            "defaultcontent1": {
                "ancora_adslot_id": "602",
                "rubicon_zone_id": 783738,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                },
                {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "headerbanner": {
                "ancora_adslot_id": "603",
                "rubicon_zone_id": 783738,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 1200,
                    "sizes": []
                },
                {
                    "minwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "mobileheaderbanner": {
                "ancora_adslot_id": "604",
                "rubicon_zone_id": 783738,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "maxwidth": 1200,
                    "sizes": [320, 50]
                },
                {
                    "minwidth":1200,
                    "sizes":[]
                }]
            },
            "defaultsidebar1": {
                "ancora_adslot_id": "605",
                "rubicon_zone_id": 783738,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "sizes": [300, 250]
                }]
            }
        },
        "1177": {
            "defaultcontent1": {
                "ancora_adslot_id": "606",
                "rubicon_zone_id": 837976,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                },
                {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "headerbanner": {
                "ancora_adslot_id": "607",
                "rubicon_zone_id": 837980,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 1200,
                    "sizes": []
                },
                {
                    "minwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "mobileheaderbanner": {
                "ancora_adslot_id": "608",
                "rubicon_zone_id": 837982,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "maxwidth": 1200,
                    "sizes": [320, 50]
                },
                {
                    "minwidth":1200,
                    "sizes": []
                }]
            },
            "defaultsidebar1": {
                "ancora_adslot_id": "609",
                "rubicon_zone_id": 837978,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "sizes": [300, 250]
                }]
            }
        },
        "1178": {
            "defaultcontent1": {
                "ancora_adslot_id": "610",
                "rubicon_zone_id": 783738,
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                },
                {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent2": {
                "ancora_adslot_id": "611",
                "rubicon_zone_id": 783738,
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [320, 50]
                },
                {
                    "minwidth": 768,
                    "sizes": []
                }]
            },
            "headerbanner": {
                "ancora_adslot_id": "612",
                "rubicon_zone_id": 783738,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 1200,
                    "sizes": []
                },
                {
                    "minwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "mobileheaderbanner": {
                "ancora_adslot_id": "613",
                "rubicon_zone_id": 783738,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "nmaxwidth": 1200,
                    "sizes": [320, 50]
                },
                {
                    "minwidth":1200,
                    "sizes":[]
                }]
            },
            "defaultsidebar1": {
                "ancora_adslot_id": "614",
                "rubicon_zone_id": 783738,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "sizes": [300, 250]
                }]
            }
        },
        "1344": {
            "headerbanner": {
                "ancora_adslot_id": "1046",
                "rubicon_zone_id": 863060,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 1200,
                    "sizes": []
                },
                {
                    "minwidth": 1200,
                    "sizes": [728, 90]
                }]
            },
            "mobileheaderbanner": {
                "ancora_adslot_id": "1047",
                "rubicon_zone_id": 863062,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "nmaxwidth": 1200,
                    "sizes": [320, 50]
                },
                {
                    "minwidth":1200,
                    "sizes":[]
                }]
            },
            "defaultsidebar1": {
                "ancora_adslot_id": "1048",
                "rubicon_zone_id": 863064,
                "viewports": [
                {
                    "minwidth": 0,
                    "maxwidth": 992,
                    "sizes": []
                },
                {
                    "minwidth": 992,
                    "sizes": [300, 250]
                }]
            }
        }
    }
};


var site_hash = 'ecb7937d';
