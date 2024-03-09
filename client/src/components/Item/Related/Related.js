import { useState, useEffect } from 'react';
import axios from 'axios'; 
import RelatedCard from '../../Card/RelatedCard/RelatedCard';
import './Related.css';

import items from '../../../asset/items.json';

const Related = (props) => {
    
    const [ menItems, setMenItems ] = useState()
    const [ womenItems, setWomenItems ] = useState()
    const [ kidsItems, setKidsItems ] = useState()

    
    // useEffect(() => {
    //     axios.get("http://localhost:5050/api/items")
    //         .then(res => {
    //             setMenItems(res.data.filter((item) => item.category === "men"))
    //             setKidsItems(res.data.filter((item) => item.category === "kids" ))
    //             setWomenItems(res.data.filter((item) => item.category === "women"))
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    useEffect(() => {
        setMenItems(items.filter((item) => item.category === "men"));
        setKidsItems(items.filter((item) => item.category === "kids"));
        setWomenItems(items.filter((item) => item.category === "women"));
    }, []);
    
    return ( 
            <div className="related__products">
                <div className="related__header__container">
                    <div className="related__header">
                        <h2>Recommended Products</h2>
                    </div>
                    <div className="related__header__line">
                            
                    </div>
                </div>
                <div className="related__card__container">
                    <div className="related__product__card">
                        { menItems && props.category === "men" && menItems.map((item) => <RelatedCard item={item}/>)}
                        { womenItems && props.category === "women" && womenItems.map((item) => <RelatedCard item={item}/>)}
                        { kidsItems && props.category === "kids" && kidsItems.map((item) => <RelatedCard item={item}/>)}
                        
                    </div>
                </div>
            </div>
     );
}
 
export default Related;
