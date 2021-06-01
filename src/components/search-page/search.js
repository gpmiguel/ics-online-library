import React from 'react';
import Nav from '../main-page/nav';
import SearchPageBody from './search-body';
import Footer from '../main-page/footer';

const SearchPage = () => {
    return (
        <div>
            <Nav/>
            <SearchPageBody />
            <Footer />
        </div>
    );
};
export default SearchPage;