import React, { useEffect, useState } from 'react';
import ContDownTimer from './ContDownTimer.js'

export default function Home() {
    const [items, setItems] = useState([]);

    const apiUrl = "http://localhost:8000";

    useEffect(() => {
        getItems();
    }, [])
    const getItems = () => {
        fetch(apiUrl + "/times")
            .then((res) => res.json())
            .then((res) => {
                setItems(res);
            })
    }



    const targetDate = items.map(ite => new Date(ite.time).getTime());
    // const targetDate =  new Date("2025-04-17T23:59:59").getTime();
    return (
        <>
            <div className="ecosium center">
                <div className="ecosium-logo center">
                    <div className="ecosium-logo-main center">
                        <img src="../assets/logo/logo.svg" alt="Ecosiom Logo" />
                    </div>
                    <h1>ECOSIUM</h1>
                </div>
            </div>
            <div className="ecosium-coming-soon center">
                <h1>Our Website is Coming Soon!</h1>
                <h2>We’re working hard to bring you something amazing. Stay tuned!</h2>
            </div>
            <ContDownTimer targetDate={targetDate} />
            <div className="ecosium-emai-subscriptons center">
                <div className="ecosium-emai-subscriptons-main center">
                    <div className="ecosium-emai-subscriptons-email center">
                        <input type="email" placeholder='Enter your Email' />
                    </div>
                    <button>
                        SUBSCRIBE
                    </button>
                </div>
            </div>
            <div className="ecosium-footer center">
                <img src="../assets/logo/01.jpg" alt="Footer" />
                <div className="ecosium-footer-content center">
                    © 2025 <strong>ECOSIUM</strong>. All rights reserved. | ecosium.ae
                </div>
            </div>
        </>
    )
}
