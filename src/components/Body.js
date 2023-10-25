import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body = () => {
  const [listOfResturants,setListOfRestrants] = useState([
    {
      info: {
        id: "632152",
        name: "Soul Rasa",
        cloudinaryImageId: "uggeyavij0hvhue0wmci",
        costForTwo: "₹300 for two",
        cuisines: [
          "Indian",
          "Healthy Food",
          "Home Food",
          "South Indian",
          "North Indian",
        ],
        avgRating: 3.2,
        feeDetails: {
          restaurantId: "632152",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5100,
        },
        avgRatingString: "3.2",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "632153",
        name: "Dominoz",
        cloudinaryImageId: "uggeyavij0hvhue0wmci",
        costForTwo: "₹300 for two",
        cuisines: [
          "Indian",
          "Healthy Food",
          "Home Food",
          "South Indian",
          "North Indian",
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "632152",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5100,
        },
        avgRatingString: "4.2",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "632154",
        name: "KFC",
        cloudinaryImageId: "uggeyavij0hvhue0wmci",
        costForTwo: "₹300 for two",
        cuisines: [
          "Indian",
          "Healthy Food",
          "Home Food",
          "South Indian",
          "North Indian",
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "632152",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5100,
        },
        avgRatingString: "4.2",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("Button Clicked");
            // filter resturant
            let filterData = listOfResturants.filter((res) => res.info.avgRating > 4 );
            //console.log("Data=",filterData)
            setListOfRestrants(filterData)
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
