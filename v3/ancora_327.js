// RTV Utrecht
//1: section ids
//enter all sections, mapping the id that is set on the website to the section_id in the backend
section_mapping = {
    "Home": 1088,
    "NewsItem": 1089, 
    "NewsItemRegio": 1090, 
    "SportItem": 1091,
    "MisdaadItem": 1092,
    "EPGGemist": 1094, 
    "EPGGids": 1095, 
    "OverigItem": 1267
}

//2: Settings for adslots and headerbidding.

adslot_mapping = {
    "ancora_site_id": 327,
    "headerbidding": true,
    "viewports": true,
    "headerbidding_networks": {
        "rubicon": true,
        "rubicon_site_id": "151390",
        "rubicon_account_id": "16476",
        "appnexus": true,
        "appnexus_id": "11904364",
        "criteo": true
    },
    "criteo_hb": {
        "300x250": "1159047",
        "320x50": "1159049",
        "728x90": "1159048",
    },
    "adslots": {
        "1088": {
            "defaultcontent1": {
                "ancora_adslot_id": 882,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent2": {
                "ancora_adslot_id": 883,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent3": {
                "ancora_adslot_id": 884,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50],[320, 100]]
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent4": {
                "ancora_adslot_id": 885,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent5": {
                "ancora_adslot_id": 886,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50],[320, 100]]
                },{
                    "minwidth": 768,
                    "sizes": [300, 250] 
                }]
            },
            "defaultcontent8": {
                "ancora_adslot_id": 905,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50], [320, 100]]
                },{
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            }
        },
        "1089": {
            "defaultcontent1": {
                "ancora_adslot_id": 318,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent2": {
                "ancora_adslot_id": 317,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent3": {
                "ancora_adslot_id": 316,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50],[320, 100]]
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent4": {
                "ancora_adslot_id": 887,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent6": { 
                "ancora_adslot_id": 888,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [300, 250]
                }, {
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent8": {
                "ancora_adslot_id": 904,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50], [320, 100]]
                },{
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            }
        },
        "1090": {
            "defaultcontent1": {
                "ancora_adslot_id": 318,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent2": {
                "ancora_adslot_id": 317,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent3": {
                "ancora_adslot_id": 316,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50],[320, 100]]
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent4": {
                "ancora_adslot_id": 887,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent6": {
                "ancora_adslot_id": 888,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [300, 250]
                }, {
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent8": {
                "ancora_adslot_id": 904,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50], [320, 100]]
                },{
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            }
        },
        "1091": {
            "defaultcontent1": {
                "ancora_adslot_id": 930,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent2": {
                "ancora_adslot_id": 929,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent3": {
                "ancora_adslot_id": 928,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50],[320, 100]]
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent4": {
                "ancora_adslot_id": 931,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent5": {
                "ancora_adslot_id": 1049,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent7": {
                "ancora_adslot_id": 933,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50], [320, 100]]
                }, {
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            }
        },
        "1092": {
            "defaultcontent1": {
                "ancora_adslot_id": 889,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent2": {
                "ancora_adslot_id": 890,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent3": {
                "ancora_adslot_id": 884,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50],[320, 100]]
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent4": {
                "ancora_adslot_id": 892,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent8": {
                "ancora_adslot_id": 906,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50], [320, 100]]
                },{
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            }
        },
        "1094": {
            "defaultcontent1": {
                "ancora_adslot_id": 889,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent2": {
                "ancora_adslot_id": 890,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent3": {
                "ancora_adslot_id": 884,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50],[320, 100]]
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent4": {
                "ancora_adslot_id": 892,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent8": {
                "ancora_adslot_id": 906,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50], [320, 100]]
                },{
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            }
        },
        "1095": {
            "defaultcontent1": {
                "ancora_adslot_id": 889,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent2": {
                "ancora_adslot_id": 890,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent3": {
                "ancora_adslot_id": 884,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50],[320, 100]]
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent4": {
                "ancora_adslot_id": 892,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent8": {
                "ancora_adslot_id": 906,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50], [320, 100]]
                },{
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            }
        },
        "1267": {
            "defaultcontent1": {
                "ancora_adslot_id": 318,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent2": {
                "ancora_adslot_id": 317,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent3": {
                "ancora_adslot_id": 316,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50],[320, 100]]
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent4": {
                "ancora_adslot_id": 887,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": []
                }, {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            },
            "defaultcontent6": {
                "ancora_adslot_id": 888,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [300, 250]
                }, {
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            },
            "defaultcontent8": {
                "ancora_adslot_id": 904,
                "rubicon_zone_id": "803126",
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 768,
                    "sizes": [[320, 50], [320, 100]]
                },{
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            }
        }
    }
};

var site_hash = '12f0de3d';
