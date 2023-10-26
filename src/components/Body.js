import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body = () => {
  const [listOfResturants,setListOfRestrants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter resturant
            let filterData = listOfResturants.filter((res) => res.info.avgRating > 4 );
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
