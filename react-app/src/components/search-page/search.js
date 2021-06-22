// import React, {Component} from 'react';
import React, { useEffect, useState } from 'react';
import Nav from '../main-page/nav';
import SearchPageBody from './search-body';
import Footer from '../main-page/footer';
import axios from 'axios';


const SearchPage = () => {
    const [data, setData] = useState([]);
    // state = {
    //     resource_array : [],
    //   }

    // useEffect(() => {
    //     console.log("SEARCH PAGE LANDED\n");
    //     var temp;


    //     axios.get('http://localhost:3001/books/')
    //             .then(res => {
    //                 temp = res.data;
    //             })
    //         .catch(err => console.error(err));
    //     axios.get('http://localhost:3001/acad-papers/')
    //             .then(res => {
    //                 setData(Object.assign(res.data, temp));
    //                 console.log(data);
                    
    //             })
    //         .catch(err => console.error(err));

    // }, []);

    // useEffect(async () => {
    //     console.log("SEARCH PAGE LANDED\n");
    //     var temp;


    //     axios.get('http://localhost:3001/books/')
    //             .then(res => {
    //                 temp = res.data;
    //             })
    //         .catch(err => console.error(err));
    //     axios.get('http://localhost:3001/acad-papers/')
    //             .then(res => {
    //                 setData(Object.assign(res.data, temp));
    //                 console.log(data);
                    
    //             })
    //         .catch(err => console.error(err));

    // }, []);

        return (
            <div>
                <Nav/>
                <SearchPageBody/>
                <Footer />
            </div>
        );
};
export default SearchPage;