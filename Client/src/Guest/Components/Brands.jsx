import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'
import { AppRoute } from '../../App'

export default function Brand() {
    const [brands, setbrands] = useState([])

    useEffect(() => {
        axios.get(`${AppRoute}/Api//get-all-brands`)
            .then(json => setbrands(json.data.brands))
            .catch(err => alert(err.message))
    }, [])

//     const data =[
//         {
//             "name": "MAC cosmetics",
//             "description": "we deals all brands of cosmatics with best and discounted offer prices for more details plz contact hasitate free to us",
//             "image": "https://i.pinimg.com/originals/20/c7/ca/20c7ca578ceb91b448c76e845e252a57.gif"
//         }
// ,
//           {
//             "name": "MAC cosmetics",
//   "description": "we deals all brands of cosmatics with best and discounted offer prices for more details plz contact hasitate free to us",
//   "image": "https://i.pinimg.com/originals/20/c7/ca/20c7ca578ceb91b448c76e845e252a57.gif"

//           },
//           {
//            "name": "MAC cosmetics",
//   "description": "we deals all brands of cosmatics with best and discounted offer prices for more details plz contact hasitate free to us",
//   "image": "https://i.pinimg.com/originals/20/c7/ca/20c7ca578ceb91b448c76e845e252a57.gif"
//           }
//         ]


    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Brands</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    brands.map((val, key) => <GuestCards key={key} image={val.BrandImage} name={val.BrandName} />)
                }

            </div>
        </div>
    )
}
