import axios from "axios"
import { useState, useEffect } from "react"
import "./Account.css"
import { PasteModal } from "../../components/pasteModal/PasteModal"

export const Account = () => {
    const [pasteDetail, setPasteDetail] = useState("")
    const [user, setUser] = useState([])
    const [pasteDelete, setPasteDelete] = useState("")

    useEffect(() => {
        const getUser = async (userId) => {
            let { data } = await axios(`https://fakestoreapi.com/users/${userId}`)
            setUser(data)
        }
        getUser(1)
    }, [])

    const handleDelete = async (e) => {
        const { data } = await axios.delete(
            // `...${e.target.id}`
            "https://fakestoreapi.com/products/6"
        )
        setPasteDelete(data)
    }

    console.log(pasteDelete)

    const handleDetails = (e) => {
        setPasteDetail(e.target.id)
        console.log(e.target.id)

    }

    console.log(user)
    console.log(pasteDetail)
    return (
        <section className="acc">
            <div className="container">
                <h2 className="acc__title">{user.username}'s Pastebin</h2>
                <div className="acc__wrapper">
                    <table className="acc__table">
                        <thead>
                            <tr>
                                <th className="acc__row">Paste Title</th>
                                <th className="acc__row">Deadline</th>
                                <th className="acc__row">Privacy</th>
                                <th className="acc__row">Details</th>
                                <th className="acc__row">Delete</th>
                            </tr>
                        </thead>
                        {/* {user.paste.map((paste) => {
                    <div style={{
                        display: paste.id === pasteDelete ? "none" : "block"
                    }}>
                        <tbody>
                            <tr>
                                <td>{paste.title}</td>
                                <td>{paste.deadLine}</td>
                                <td>{paste.isPrivat}</td>
                                <td id={paste.id} onCLick={handleDetails}>DETAILS</td>
                                <td id={paste.id} onCLick={handleDelete}>DELETE</td>
                            </tr>
                        </tbody>
                    </div>
                })} */}

                    </table>
                    <button id="1" onClick={handleDetails} style={{ color: "white" }}>DETAILS</button>
                    <div>{pasteDetail ? <PasteModal pasteDetail={pasteDetail} setPasteDetail={setPasteDetail} /> : ""}</div>
                </div>
            </div>
        </section>
    )
}