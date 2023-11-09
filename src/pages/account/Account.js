import axios from "axios"
import { useState, useEffect } from "react"
import "./Account.css"
import { PasteModal } from "../../components/pasteModal/PasteModal"
import { Pagination } from "../../components/pagination/Pagination"

export const Account = ({ theme }) => {
    const [pasteDetail, setPasteDetail] = useState("")
    const [user, setUser] = useState([])
    const [pasteDelete, setPasteDelete] = useState("")
    const [pastes, setPastes] = useState([])

    const pastesPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastPaste = currentPage * pastesPerPage;
    const indexOfFirstPaste = indexOfLastPaste - pastesPerPage;
    const currentPastes = pastes.slice(indexOfFirstPaste, indexOfLastPaste)

    // useEffect(() => {
    //     const getUser = async (userId) => {
    //         let { data } = await axios(`https://bbcc-46-251-210-169.ngrok-free.app/api/User}`,
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     "ngrok-skip-browser-warning": "69420"
    //                 }
    //             })
    //         setUser(data)
    //     }
    //     getUser(1)
    // }, [])

    const handleDelete = async (e) => {
        const { data } = await axios.delete(
            // `...${e.target.id}`
            "https://fakestoreapi.com/products/6"
        )
        setPasteDelete(data)
    }

    useEffect(() => {
        const getPastes = async () => {
            let { data } = await axios(`https://fakestoreapi.com/products`)
            setPastes(data)
        }
        getPastes()
    }, [])

    // console.log(pasteDelete)

    const handleDetails = (data) => {
        setPasteDetail(data)
        console.log(data)
    }

    // console.log(user)
    // console.log(pasteDetail)
    return (
        <section className="acc">
            <div className="container">
                <div className="acc__titlegroup">
                    <h2 className="acc__title">{user.username}'s Pastebin</h2>
                    <div className="acc__color"></div>
                </div>
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
                        <tbody>
                            {currentPastes.map((paste) => {
                                return <tr onCLick={handleDetails}>
                                    <td className="table__line">{paste.title}</td>
                                    <td className="table__line">{paste.price}</td>
                                    <td className="table__line">{paste.category}</td>
                                    <td className="table__line table__line-btn" id='1' >DETAILS</td>
                                    <td className="table__line table__line-btn" id={paste.id} onCLick={handleDelete}>DELETE</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    {/* <button id="1" onClick={handleDetails} style={{ color: "white" }}>DETAILS</button> */}
                   {pasteDetail ? <PasteModal pasteDetail={pasteDetail} setPasteDetail={setPasteDetail} /> : ""}
                    <Pagination theme={theme}
                        pastes={pastes}
                        pastesPerPage={pastesPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </section>
    )
}