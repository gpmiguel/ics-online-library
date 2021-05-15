import React from 'react';
import Nav from '../components/main-page/nav';
import SearchPageBody from '../components/search-page/search-body';
import Footer from '../components/main-page/footer';

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