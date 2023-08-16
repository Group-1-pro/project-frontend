import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const handleSearch = event => {
    onSearch(event.target.value);
  };

  const scrollToPosts = () => {
    const postsSection = document.getElementById('posts');
    if (postsSection) {
      window.scrollTo({
        top: postsSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      scrollToPosts();
    }
  };

  return (
    <div className="flex items-center justify-center mb-20" id = 'search-bar'> {/* Added margin-bottom */}
      <div id="cover" className="relative w-1/2 mx-auto rounded-full bg-[#F2EEE0] shadow-lg">
        <div className="td">
          <div className="relative">
            <input
              type="text"
              placeholder="Write location or keyword"
              onChange={handleSearch}
              onKeyPress={handleKeyPress}
              className="w-full h-8 p-2 pl-12 text-xl leading-5 bg-transparent rounded-full outline-none"
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
              onClick={scrollToPosts}
            >
              <FaSearch className="text-gray-400" /> {/* Search icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
