import React, { useState } from 'react';
import Card from "./Card";
import SearchBar from './SearchBar';

const SearchField = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSearch = async (searchTerm) => {
        try {
            
            // Отправка запроса на серверный эндпоинт для поиска книг
            const response = await fetch(`/api/books/${searchTerm}`);
            if (!response.ok) {
                throw new Error('Ошибка при выполнении запроса');
            }
            const data = await response.json();

            // Показать модальное окно, если результаты поиска пусты
            if (data.length === 0) {
                // Очистка найденных книг перед отображением новых результатов
                setSearchResults([]);
                setShowModal(true);
            } else {
                // Обновление состояния компонента с результатами поиска
                setSearchResults(data);
                setShowModal(false);
            }
            // Показать модальное окно, если результаты поиска пусты
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
            // Если произошла ошибка, показываем модальное окно
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="search-field">
            <SearchBar onSearch={handleSearch} />
            {/* Вывод результатов поиска */}
            {searchResults.length > 0 && (
                <div className="found-books">
                    {searchResults.map(book => (
                        <div style={{ marginBottom: "10px" }}>
                            <Card book={book} />
                        </div>
                    ))}
                </div>
            )}
            {/* Модальное окно "Книга не найдена" */}
            {showModal && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <div className="modal-dialog" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Book not found</h5>
                            </div>
                            <div className="modal-body">
                                <p>Unfortunately, your search returned no results!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchField;