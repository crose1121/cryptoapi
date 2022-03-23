import React, {useState} from 'react';
import axios from 'axios';

const CryptoAxios = (props) => {

    const [coinList, setCoinList] = useState([]);

    const fetchCoins = () => {

    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(response=>{
            console.log("JSON Response: ", response.data);
            setCoinList(response.data);
        })
        .catch(err=>console.log("Got an error: ", err))
    
    // console.log("Logging after the fetch!");
    }

    return (
        <div>
            <h1>Fetch Component!</h1>
            <button className='btn btn-info' onClick={fetchCoins}>Fetch Coins</button>

            {
                coinList.map((coin, i)=>{
                    return(
                        <div key={i}>
                            <h3>{i} - {coin.name}</h3>
                            <h4>Price: {coin.current_price}</h4>
                            <img src={coin.image} alt="" />
                            <hr />
                        </div>
                    )
                })
            }

        </div>
    );
};

export default CryptoAxios;