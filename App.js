import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *   - Search
 *   - Resturant Container
 *      - Resturant Card
 *          - Img
 *          - Name of resturant,Star Rating,Cuisines,Delivery Time
 * Footer
 *    - Copyright
 *    - Links
 *    - Address
 *    - Contact US
 */

    const Header = () => {
        return (
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About US</li>
                        <li>Contact US</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        )
    }

    const ResturantCard = (props) => {
        const {resData} = props;
        const {cloudinaryImageId,name,cuisines,avgRating,feeDetails,sla} = resData?.info;
        return (
            <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
                <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>Rs.{feeDetails.totalFee/100}</h4>
                <h4>{sla.deliveryTime} Minutes</h4>
            </div>
        )
    }

   const resList = [
    {
      "info": {
        "id": "632152",
        "name": "Soul Rasa",
        "cloudinaryImageId": "uggeyavij0hvhue0wmci",
        "locality": "Gachibowli Road",
        "areaName": "Kondapur",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Indian",
          "Healthy Food",
          "Home Food",
          "South Indian",
          "North Indian"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "632152",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5100
        },
        "parentId": "239281",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              "description": "OnlyOnSwiggy"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "OnlyOnSwiggy",
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-4a90cdb2-4374-4bd0-824a-2c7d3ce74bc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/soul-rasa-gachibowli-road-kondapur-hyderabad-632152",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "166493",
        "name": "Subbayya Gari Hotel",
        "cloudinaryImageId": "dyewhwljehwirmiy6i63",
        "locality": "Kondapur",
        "areaName": "Hitec City",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian",
          "Andhra",
          "Sweets"
        ],
        "avgRating": 3.6,
        "veg": true,
        "feeDetails": {
          "restaurantId": "166493",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3800
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3800
        },
        "parentId": "12343",
        "avgRatingString": "3.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 4.6,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "4.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 16:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-4a90cdb2-4374-4bd0-824a-2c7d3ce74bc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subbayya-gari-hotel-kondapur-hitec-city-hyderabad-166493",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "487816",
        "name": "Shoyu",
        "cloudinaryImageId": "htihgh01jvclpaznbv88",
        "locality": "Vijayalakshmi Pride",
        "areaName": "Madhapur",
        "costForTwo": "₹1200 for two",
        "cuisines": [
          "Asian",
          "Japanese"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "487816",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "255090",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹1500",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-4a90cdb2-4374-4bd0-824a-2c7d3ce74bc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/shoyu-vijayalakshmi-pride-madhapur-hyderabad-487816",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "29087",
        "name": "Sarvi Take Away",
        "cloudinaryImageId": "dw307jhy1c2t3gmzy5zn",
        "locality": "Hi-tech city road",
        "areaName": "Hi tech city road",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Indian",
          "Tandoor",
          "Kebabs"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "29087",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2600
        },
        "parentId": "6292",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "14 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-24 01:15:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-4a90cdb2-4374-4bd0-824a-2c7d3ce74bc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sarvi-take-away-hi-tech-city-road-hyderabad-29087",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "3622",
        "name": "Madhapur Bawarchi Restaurant",
        "cloudinaryImageId": "35676313896c39c25537ec9464502d16",
        "locality": "Madhapur",
        "areaName": "Madhapur",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Chinese"
        ],
        "avgRating": 3.7,
        "feeDetails": {
          "restaurantId": "3622",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2600
        },
        "parentId": "19388",
        "avgRatingString": "3.7",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "14 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-4a90cdb2-4374-4bd0-824a-2c7d3ce74bc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/madhapur-bawarchi-restaurant-madhapur-hyderabad-3622",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "628541",
        "name": "Great Indian Khichdi by EatFit",
        "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
        "locality": "Hitech City R",
        "areaName": "Madhapur",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Indian",
          "Home Food",
          "Healthy Food",
          "Snacks"
        ],
        "avgRating": 4.1,
        "veg": true,
        "feeDetails": {
          "restaurantId": "628541",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2600
        },
        "parentId": "319582",
        "avgRatingString": "4.1",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-4a90cdb2-4374-4bd0-824a-2c7d3ce74bc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-hitech-city-r-madhapur-hyderabad-628541",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "263851",
        "name": "Navratri Specials by LunchBox",
        "cloudinaryImageId": "ofazc7nnkpcnrbswswna",
        "locality": "Serlingampally",
        "areaName": "Hitech City",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.6,
        "veg": true,
        "feeDetails": {
          "restaurantId": "263851",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3200
        },
        "parentId": "10210",
        "avgRatingString": "3.6",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹349",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-4a90cdb2-4374-4bd0-824a-2c7d3ce74bc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/navratri-specials-by-lunchbox-serlingampally-hitech-city-hyderabad-263851",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "584301",
        "name": "Guntur Gongura",
        "cloudinaryImageId": "pspqr1dexd4811349are",
        "locality": "Khanmet",
        "areaName": "Madhapur",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Mughlai",
          "Biryani"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "584301",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2600
        },
        "parentId": "18528",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 13,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "13 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:55:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-4a90cdb2-4374-4bd0-824a-2c7d3ce74bc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/guntur-gongura-khanmet-madhapur-hyderabad-584301",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "680898",
        "name": "Boho Bowls",
        "cloudinaryImageId": "364f97aa9fa60ea940c6e33d5a0b88c9",
        "locality": "Khanamet",
        "areaName": "Madhapur",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Asian",
          "Mexican"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "680898",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2600
        },
        "parentId": "406809",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "16 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-4a90cdb2-4374-4bd0-824a-2c7d3ce74bc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/boho-bowls-khanamet-madhapur-hyderabad-680898",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ]

    const Body = () => {
        return (
            <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                  {
                    resList.map(resturant => <ResturantCard key={resturant.info.id} resData={resturant} />)
                  }
                </div>
            </div>
        )
    }

    const AppLayout = () => {
        return (
            <div className="app">
                <Header/>
                <Body/>
            </div>
        )
    }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


