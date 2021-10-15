import React from "react";
import MenuItem from '../Components/MenuItem.js';
//import axios from "axios";



function App() {




    return (
        <>
            <header className="App-header">
                Restaurant Name
      </header>
            <img src={""} alt="..." />
            <body>
                <>
                    <div className="row">
                        <div className="col-4">
                            <MenuItem />
                            <MenuItem />
                            <MenuItem />
                        </div>
                        <div className="col-4">
                            <MenuItem />
                            <MenuItem />
                            <MenuItem />
                        </div>
                        <div className="col-4">
                            <MenuItem />
                            <MenuItem />
                            <MenuItem />
                        </div>
                        <div className="col-4">
                            <MenuItem />
                            <MenuItem />
                            <MenuItem />
                        </div>
                        <div className="col-4">
                            <MenuItem />
                            <MenuItem />
                            <MenuItem />
                        </div>
                    </div>
                </>




            </body>



        </>
    );
}


export default App;