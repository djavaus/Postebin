import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { ThemeContext } from '../../App'
import "./Account.css"
import { PasteModal } from "../../components/pasteModal/PasteModal"
import { Pagination } from "../../components/pagination/Pagination"


export const Account = () => {
    const [pasteDetail, setPasteDetail] = useState("")
    const [user, setUser] = useState([])
    const [pasteDelete, setPasteDelete] = useState("")
    const [pastes, setPastes] = useState([])
 const theme = useContext(ThemeContext);  

    useEffect(() => {
        const getPastes = async () => {
            let { data } = await axios(`https://fakestoreapi.com/products`)
            setPastes(data)
        }
        getPastes()
    }, [])

    const pastesPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastPaste = currentPage * pastesPerPage;
    const indexOfFirstPaste = indexOfLastPaste - pastesPerPage;
    const currentPastes = pastes.slice(indexOfFirstPaste, indexOfLastPaste)

    // console.log(currentPastes);

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

    // console.log(pasteDelete)

    const handleDetails = (e) => {
        setPasteDetail(e.target.id)
        console.log(e);
        
    }
console.log(pasteDetail)
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
                    <div className="acc__table">
                        <div className="acc__head">
                            <p>Paste Title</p>
                            <p>Deadline</p>
                            <p>Privacy</p>
                            <p>Delete Paste</p>
                        </div>
                        {currentPastes.map((paste) => {
                            return <div className="acc__lines" onClick={handleDetails}>
                                <p className="acc__line acc__line-title" id={paste.id}>{paste.title}</p>
                                <p className="acc__line" id={paste.id}>{paste.price}</p>
                                <p className="acc__line" id={paste.id}>{paste.category}</p>
                                <p className="acc__line acc__line-btn" id={paste.id} onCLick={handleDelete}>DELETE</p>
                            </div>
                        })}
                    </div>
                    {pasteDetail ? <PasteModal pasteDetail={pasteDetail} setPasteDetail={setPasteDetail} /> : ""}
                    <Pagination pastes={pastes}
                        pastesPerPage={pastesPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </section>
    )
}