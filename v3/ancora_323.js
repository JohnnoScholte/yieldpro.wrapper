//Limburg
//1: section ids
//enter all sections, mapping the id that is set on the website to the section_id in the backend
section_mapping = {
    "Home": "1069",
    "Overige": "1070",
    "Sectiepagina": "1317"
}

//2: Settings for adslots and headerbidding.

adslot_mapping = {
        "ancora_site_id": 323,
        "headerbidding": true,
        "viewports": true, //if set to false, set 1 viewport dictionary for minwidth = 0
        "headerbidding_networks": {
            "rubicon": true,
            "rubicon_site_id": "151244",
            "rubicon_account_id": "16476",
            "appnexus": true,
            "appnexus_id": "11904354",
            "criteo": true,
        },
        "criteo_hb": {
            "728x90": "1158974",
            "320x50": "1158975",
            "320x100": "1158976",
            "300x250": "1158973",
            "160x600": "1158972",
        },
        "adslots": {
            "1069": {
                "leaderboard": {
                    "ancora_adslot_id": "287",
                    "appnexus_id": "11904354",
                    "rubicon_zone_id": "766770",
                    "viewports": [{
                        "minwidth":0,
                        "maxwidth":975,
                        "sizes": []
                        },
                        {
                        "minwidth":975,
                        "sizes": [728, 90]
                    }]
                },
                "l1-ss1": {
                    "ancora_adslot_id": "288",
                    "appnexus_id": "11904354",
                    "rubicon_zone_id": "766744",
                    "viewports": [{
                        "minwidth":0,
                        "maxwidth":1341,
                        "sizes": []
                        },
                        {
                        "minwidth":1341,
                        "sizes":[160, 600]
                    }]
                },
                "l1-ss2": {
                    "ancora_adslot_id": "866",
                    "appnexus_id": "11904354",
                    "rubicon_zone_id": "766738",
                    "viewports": [{
                        "minwidth":0,
                        "maxwidth":1341,
                        "sizes": []
                        },
                        {
                        "minwidth":1341,
                        "sizes":[160, 600]
                    }]
                },
                "rectangle_m": {
                    "ancora_adslot_id": "289",
                    "appnexus_id": "11904354",
                    "rubicon_zone_id": "766750",
                    "viewports": [{
                        "minwidth":0,
                        "maxwidth":1341,
                        "sizes": []
                        },
                        {
                        "minwidth":1341,
                        "sizes":[300, 250]
                    }]
                }
            },
            "1070": {
                "leaderboard": {
                    "ancora_adslot_id": "1038",
                    "appnexus_id": "11904354",
                    "rubicon_zone_id": "767470",
                    "viewports": [{
                        "minwidth":0,
                        "maxwidth":767,
                        "sizes": []
                        },
                        {
                        "minwidth":767,
                        "sizes": [728, 90]
                    }]
                },
                "rectangle_l": {
                    "ancora_adslot_id": "1039",
                    "appnexus_id": "11904354",
                    "rubicon_zone_id": "767468",
                    "viewports": [{
                        "minwidth":0,
                        "maxwidth":956,
                        "sizes": []
                        },
                        {
                        "minwidth":956,
                        "sizes":[[336, 280], [300, 250]]
                    }]
                },
                "rectangle_m": {
                    "ancora_adslot_id": "1040",
                    "appnexus_id": "11904354",
                    "rubicon_zone_id": "767464",
                    "viewports": [{
                        "minwidth":0,
                        "maxwidth":767,
                        "sizes": []
                        },
                        {
                        "minwidth":767,
                        "sizes": [300, 250]
                    }]
                },
                "mobile_banner": {
                    "ancora_adslot_id": "1041",
                    "appnexus_id": "11904354",
                    "rubicon_zone_id": "767466",
                    "viewports": [{
                        "minwidth": 0,
                        "maxwidth": 320,
                        "sizes": []
                        },
                        {
                        "minwidth": 320,
                        "maxwidth": 767,
                        "sizes": [320, 100]
                        },
                        {
                        "minwidth": 767,
                        "sizes": []
                        }
                    ]
                }
            },
            "1317": {
                "leaderboard": {
                    "ancora_adslot_id": "287",
                    "appnexus_id": "11904354",
                    "rubicon_zone_id": "842000",
                    "viewports": [{
                        "minwidth":0,
                        "maxwidth":975,
                        "sizes": []
                        },
                        {
                        "minwidth":975,
                        "sizes": [728, 90]
                    }]
                },
                "l1-ss1": {
                    "ancora_adslot_id": "288",
                    "appnexus_id": "11904354",
                    "rubicon_zone_id": "842004",
                    "viewports": [{
                        "minwidth":0,
                        "maxwidth":1341,
                        "sizes": []
                        },
                        {
                        "minwidth":1341,
                        "sizes":[160, 600]
                    }]
                },
                "l1-ss2": {
                    "ancora_adslot_id": "866",
                    "appnexus_id": "11904354",
                    "rubicon_zone_id": "842006",
                    "viewports": [{
                        "minwidth":0,
                        "maxwidth":1341,
                        "sizes": []
                        },
                        {
                        "minwidth":1341,
                        "sizes":[160, 600]
                    }]
                },
                "rectangle_m": {
                    "ancora_adslot_id": "289",
                    "appnexus_id": "11904354",
                    "rubicon_zone_id": "842002",
                    "viewports": [{
                        "minwidth":0,
                        "maxwidth":1341,
                        "sizes": []
                        },
                        {
                        "minwidth":1341,
                        "sizes":[300, 250]
                    }]
                }
            }
        }
    }

var site_hash = '524e05dc';