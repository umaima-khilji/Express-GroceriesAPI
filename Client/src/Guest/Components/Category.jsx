import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'

export default function Category() {
    const [category, setCategory] = useState([])
    // useEffect(() => {
    //     axios.get('/Api/get-all-categories')
    //         .then(json => setCategory(json.data.categories))
    //         .catch(err => alert(err.message))

    // }, [])


    const data =[
        {
            "CategoryName": "eyeliner",
            "CategoryImage": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1559249000-hooded-product-slide-sq-1548267770.jpg?crop=1xw:1xh;center,top&resize=980:*"
          }
,
          {
            "CategoryName": "mascara",
            "CategoryImage": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1559249000-hooded-product-slide-sq-1548267770.jpg?crop=1xw:1xh;center,top&resize=980:*"
          },
          {
            "CategoryName": "lipstick",
            "CategoryImage": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1559249000-hooded-product-slide-sq-1548267770.jpg?crop=1xw:1xh;center,top&resize=980:*"
          }
        ]

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    data.map((val, key) => <GuestCards key={key} image={val.CategoryImage} name={val.CategoryName} />)
                }

            </div>
        </div>
    )
}
