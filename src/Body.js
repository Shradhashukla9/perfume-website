import { perfumelist } from "./Config";
import PerfumeCard from "./PerfumeCard";
import Shimmer from "./components/Shimmer";
import { useState } from "react";


function filterData (searchText, perfumes) {
    const filteredData = perfumes.filter((perfume) =>
        perfume.product.title.includes(searchText)
    );
    return filteredData;
}

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [perfumes, setPerfumes] = useState(perfumelist);

    const handleSearch = () => {
        const filteredData = filterData(searchText, perfumelist);
        setPerfumes(filteredData);
    };

    return (perfumes.length ===0)? <Shimmer/> : (
        <>
        
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className="search-btn"
                    onClick={handleSearch}
                    
                >
                    Search
                </button>
            </div>
            <div className="perfume-list">
                {perfumes.map(perfume => <PerfumeCard key={perfume.id} {...perfume} />)}
            </div>
        </>
    );
};

export default Body;
