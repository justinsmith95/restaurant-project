
import React, { useState, useEffect } from "react";
import MenuItem from './MenuItem.js';
import axios from "axios";



function App() {
    let Images = ['Image1.png', 'Image2.png', 'Image3.png', 'Image4.png',
        'Image5.png', 'Image6.png', 'Image7.png', 'Image8.png', 'Image9.png',
        'Image10.png', 'Image11.png', 'Image12.png', 'Image13.png', 'Image14.png', 'Image15.png']
    const [menuArrayData, setMenuArrayData] = useState([]);
    const [page, setPage] = useState(0);
    const randomArr = [...Array(99).keys()]  //add to 2 decimal places
    const loadMenu = async () => {
        setPage(page + 1);
    }
    console.log(Array(99))
    console.log(page);
    useEffect(() => {
        async function loadAPI() {
            const itemAPI_URL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/items/95"
            // Make a request for a list of menu items
            await axios.get(itemAPI_URL)
                .then(function (response) {
                    // handle success
                    setMenuArrayData(response.data);
                    //setMenuArrayData(menuArrayData.filter(menuArrayData.data.meal_type_id => menuArrayData.data.meal_type_id[5]))
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    console.log(menuArrayData);
                });
        }

        loadAPI();
    }, []);








    return (
        <>
            <h1 className="App-header text-center">
                Roullettatouille
      </h1>
            <>
            <p>No idea what to eat? We got you! Our Menu (and Price!) is random every time. Feeling lucky?</p>
            <break></break>
                {/* <button onClick={loadMenu}>What's For Dinner?</button> */}
                <div className="row">
                    {menuArrayData.map((item, index) => {
                        return (
                            <MenuItem
                                show={page !== 0}
                                data={item}
                                price={`$${randomArr[Math.floor(Math.random() * randomArr.length)]}.${randomArr[Math.floor(Math.random() * randomArr.length)]}`}
                                src={`${Images[Math.floor(Math.random() * Images.length)]}`}
                                key={index}
                            />
                        )
                    })
                    }

                </div>
            </>





        </>

    );
}

export default App;
