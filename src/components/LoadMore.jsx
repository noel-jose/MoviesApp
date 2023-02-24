import React from "react";
import "./LoadMore.scss";

const LoadMore = ({
  searchMovie,
  searchText,
  loadMore,
  isLoading,
  setIsLoading,
}) => {
  return (
    <div className="LoadMore">
      <button
        onClick={() => {
          searchMovie(searchText, loadMore);
          setIsLoading(true);
        }}
        disabled={isLoading}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
