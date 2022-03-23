import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CryptoAxiosUseEffect = (props) => {

    const [coinList, setCoinList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [clicked, setClicked] = useState(false);
    const [randCoin, setRandCoin] = useState(-1);

    useEffect(()=>{
        
        //axios call to api endpoint
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response=>{
                console.log("JSON Response: ", response.data);
                setCoinList(response.data);
            })
            .catch(err=>console.log("Got an error: ", err));
    }, [clicked])

    const randomCoin = () => {
        setRandCoin(Math.floor(Math.random() * 99));
    }

    const update = () => {
        setRandCoin(-1);
        setClicked(!clicked);
    }

    return (
        <div>
            <h1>Fetch Component!</h1>
            <button className='btn btn-info' onClick={update}>Get Updated Info</button><br />
            <button onClick={randomCoin}>Get Random Coin</button>
            <p>Search for a coin: <input type="text" onChange={(e)=>setSearchTerm(e.target.value)}/></p>

            {   randCoin<0?
                coinList.filter((coin)=>{
                    return coin.name.toLowerCase().includes(searchTerm.toLowerCase()); 
                }).map((coin, i)=>{
                    return(
                        <div key={i}>
                            <h3>{i} - {coin.name}</h3>
                            <h4>Price: {coin.current_price}</h4>
                            <img src={coin.image} alt="image" />
                            <hr />
                        </div>
                    )
                }):
                <div>
                    <h3>{coinList[randCoin].name}</h3>
                    <h4>Price: {coinList[randCoin].current_price}</h4>
                    <img src={coinList[randCoin].image} alt="" />
                </div>
            }

        </div>
    );
};

export default CryptoAxiosUseEffect;