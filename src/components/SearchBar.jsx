import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
        setSearchTerm(''); // Очистка поля ввода после отправки запроса
    };

    return (
    <form onSubmit={handleSubmit}>  Search by author or title:
            <input className='search-bar input'
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Enter your request"
            />
        </form>
    );
};

export default SearchBar;