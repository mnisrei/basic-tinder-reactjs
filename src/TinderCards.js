import React, { useState, useEffect } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import axios from "./axios";

function TinderCards() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        async function fetchData() {
            console.log("running")
            const req = await axios.get("/tinder/cards");
            setPeople(req.data);
        }
        fetchData();
    }, [])

    console.log(people);
    const swiped = (direction, nameToDelete) => {
        console.log("Removing >>>> " + nameToDelete);
    }
    const outOfFrame = (name) => {
        console.log(name + " >>>> Left the Screen ")
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {
                    people.map((person) => {
                        return (
                            <TinderCard
                                key={person._id}
                                className="swipe"
                                preventSwipe={["up", "down"]}
                                onSwipe={(dir) => {
                                    return swiped(dir, person.name)
                                }}
                                onCardLeftScreen={() => outOfFrame(person.name)}
                            >
                                <div
                                    style={{ backgroundImage: `url(${person.imgUrl})` }}
                                    className="card"
                                >
                                    <h3 >{person.name}</h3>
                                </div>
                            </TinderCard>
                        );
                    })}
            </div>
        </div>
    )
}

export default TinderCards
