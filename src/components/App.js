import React from "react";
import Nav from "./Nav";
import Filter from "./Filter"; 
import HogList from "./HogList"; 

import hogs from "../porkers_data";

function App() {

	return (
		<div className=" ui grid container App">
			<div className="sixteen wide column centered" > 
				<Nav />
			</div>
			<div className="sixteen wide column centered" > 
				<Filter />
			</div>
			<div className="sixteen wide column centered" > 
				<HogList hogs={hogs}/>
			</div>
		</div>
	);
}

export default App;
