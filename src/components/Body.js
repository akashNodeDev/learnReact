import ResturantCard from "./ResturantCard";
//import resList from "../utils/mockData";
import Shimmer from "./Shimmer"
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfResturants, setListOfRestrants] = useState([]);

  // useEffect Introduction
  useEffect(() => {
    // console.log("UseEffectCallback function gets rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4490568&lng=78.3927348&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // optional chaining
    setListOfRestrants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  // conditional rendering
  return (listOfResturants.length === 0) ? <Shimmer/> :(
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter resturant
            let filterData = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestrants(filterData);
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
