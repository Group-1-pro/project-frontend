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
    <div class="postSearchBar" id="search-bar">
    <div id="cover" class="relative w-1/2 mx-auto rounded-full bg-[#F2EEE0] shadow-lg">
      <div class="td">
        <div class="relative">
          <input
            type="text"
            placeholder="Write location or keyword"
            oninput="handleSearch(event)"
            onkeypress="handleKeyPress(event)"
          />
          <div class="absolute inset-y-0 right-0" onclick="scrollToPosts()">
            <svg class="text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M12.442 13.328a7.5 7.5 0 111.33-1.33l3.713 3.712a1 1 0 11-1.415 1.414l-3.712-3.713zm-.872-2.12a5.5 5.5 0 111.414-1.414l3.713 3.712a1 1 0 11-1.414 1.415l-3.713-3.713z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SearchBar;
