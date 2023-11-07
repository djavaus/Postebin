import { useState, useEffect } from "react"
import './Home.css'
import moment from "moment/moment";
import axios from "axios";
import arrow_blue from "./arrow_blue.png"
import arrow_green from "./arrow_green.png"
import arrow_yellow from "./arrow_yellow.png"
import arrow_pink from "./arrow_pink.png"
import Cookies from 'js-cookie';

export const Home = () => {
    console.log(Cookies.get("token"));

    const initialValue = {
        text: "",
        title: "",
        isPrivate: "Public",
        // dateCreated: moment().format(),
        deadLine: moment().add(1, 'hour').format(),
    }

    const [newPost, setNewPost] = useState(initialValue)
    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target;
        setNewPost(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const getDate = () => {
        if (newPost.isPrivate === "Public") {
            newPost.isPrivate = false
        } else {
            newPost.isPrivate = true
        }

        if (newPost.deadLine === "1 hour") {
            newPost.deadLine = moment().add(1, 'hour').format();
        } else if (newPost.deadLine === "1 day") {
            newPost.deadLine = moment().add(1, 'day').format();
        } else if (newPost.deadLine === "1 week") {
            newPost.deadLine = moment().add(1, 'week').format();
        } else if (newPost.deadLine === "1 month") {
            newPost.deadLine = moment().add(1, "months").format();
        }
        const sendNewPost = async (newPost) => {
            console.log(newPost)
            let { data } = await axios('https://fakestoreapi.com/products', {
                method: "POST",
                body: JSON.stringify(
                    {
                        text: newPost.text,
                        title: newPost.title,
                        isPrivate: newPost.isPrivate,
                        // dateCreated: moment().format(),
                        deadLine: newPost.deadLine,
                    }
                )
            })
            console.log(data)
        }
        sendNewPost(newPost)
    }

    return (
        <section className="home">
            <div className="container">
                <div className="home__wrapper">
                    <div className="home__content">
                        <div className="home__head">
                            <h2 className="home__title home__title-paste">New Paste</h2>
                            <div className="home__color home__color-blue"></div>
                        </div>
                        <div className="home__setting"><span >Title:</span> <input className="home__desc" placeholder="Your paste title" type="text" name="title" onChange={handleChange} /></div>
                        <div className="home__setting"><span >Paste Exposure:</span> <select name="isPrivate" onChange={handleChange} value={initialValue.isPrivate} className="home__input">
                            <option>Public</option>
                            <option>Private</option>
                        </select></div>
                        <div className="home__setting"><span >Deadline:</span>
                            <select name="deadLine" type="date" onChange={handleChange} className="home__input">
                                <option>1 hour</option>
                                <option>1 day</option>
                                <option>1 week</option>
                                <option>1 month</option>
                            </select></div>
                        <div className="home__paste"><input className="home__desc home__text" placeholder="Write something..." name="post" type="text" onChange={handleChange} /></div>
                        <div><button name="date" onClick={getDate} className="home__submit">Paste</button></div>
                    </div>
                    <div className="home__latest">
                        <div className="home__head">
                            <h2 className="home__title home__title-latest">Latest Pastes</h2>
                            <div className="home__color home__color-yellow"></div>
                        </div>
                    </div>
                </div>

                {/* <div className='home__arrow home__arrow-home'>
                    <img src={arrow_blue} />
                    <p>You can create <br />a new paste here</p>
                </div>
                <div className='home__arrow home__arrow-paste'>
                    <img src={arrow_yellow} />
                    <p>Here you can find all your pastes</p>
                </div>
                <div className='home__arrow home__arrow-privacy'>
                    <img src={arrow_pink} />
                    <p>Choose who will be <br />able to see your paste</p>
                </div>
                <div className='home__arrow home__arrow-deadline'>
                    <img src={arrow_green} />
                    <p>Your paste will be deleted in the set time interval</p>
                </div> */}
            </div>
        </section>
    )
}


