import React, { useState } from "react"; 
import HogDetails from "./HogDetails";

function HogCard ( { hog }) {

    const { name, specialty, image } = hog;

    const [isHidden, setIsHidden] = useState(false);

    const [showDetails, setShowDetails] = useState(false); 

   const handleShowDetails = () => {
        setShowDetails((showDetails) => !showDetails)
    }

    if (isHidden) return null;

    return (
        <div className="ui card eight wide column pigTile">
            <div className="image">
                 <img src={image} alt="hogPic" />
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
                <div className="description">Specialty: {specialty}</div>
            </div>
            <div className="extra content">
                {showDetails ? <HogDetails hog={hog}/> : null }
                <button onClick={handleShowDetails}>
                    {showDetails ? "Less Info" : "More Info"}
                </button>
                <button className="ui button" onClick={() => setIsHidden(true)}>
                         Hide Me{" "}
                    <span role="img" aria-label="snout">
                         🐽
                    </span>
                </button>
            </div>
        </div>
    )
}

export default HogCard; 