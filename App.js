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
        const {resData} = props
        return (
            <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
                <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
                <h3>{resData.info.name}</h3>
                <h4>{resData.info.cuisines.join(", ")}</h4>
                <h4>{resData.info.avgRating} stars</h4>
                <h4>Rs.{resData.info.feeDetails.totalFee/100}</h4>
                <h4>{resData.info.sla.deliveryTime} Minutes</h4>
            </div>
        )
    }

    let resObject =   {
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
      }

    const Body = () => {
        return (
            <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                    <ResturantCard resData={resObject}/>
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


