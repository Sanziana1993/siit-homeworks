import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function Rating({ratings}) {
   
   let [rating, setRating] = useState([]);

    useEffect(() => {
       getRating();
    }, []);

    async function getRating() {
        const res = await axios('https://ancient-caverns-16784.herokuapp.com/movies').then((res) =>res.data.results.Ratings);
        
    }

  return(
      <>
      <div>
          Rating : 
              {/* {ratings.map(rating => <div> {ratings.Value} </div> ) */}
                    

      </div>
    </>
  )
}

export default Rating;