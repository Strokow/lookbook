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
        <form onSubmit={handleSubmit}> 
            <div className='search-bar'>
                <img className='search-icon' height={20} width={20} src="/img/search.png" alt="Search" />
                <input className='input' 
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Search by author or title"
                />
            </div>
        </form>
    );
};

export default SearchBar;