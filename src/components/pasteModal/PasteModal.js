import axios from "axios";
import { useState, useEffect, useContext } from "react"
import { ThemeContext } from '../../App'
import './PasteModal.css'
import modal_close_white from "./modal_close_white.png"
import modal_close_black from "./modal_close_black.png"

export const PasteModal = ({ pasteDetail, setPasteDetail }) => {
    const [paste, setPaste] = useState([])
    console.log(pasteDetail)
    const theme = useContext(ThemeContext);
    console.log(theme);

    useEffect(() => {
        const getPaste = async (pasteId) => {
            let { data } = await axios(`https://fakestoreapi.com/products/${pasteId}`)
            setPaste(data)
        }
        getPaste(pasteDetail)
    }, [pasteDetail])

    const handleClose = () => {
        setPasteDetail("")
    }
    console.log(paste);

    return (
        <div className="modal">
            <div className="modal__wrapper">
                <div onClick={handleClose} className="modal__cross">
                    <img className="modal__close" src={theme.theme === "light" ? modal_close_black : modal_close_white} />
                    <div className="modal__color"></div>
                </div>
                <h3 className="modal__title">{paste.title}</h3>
                <div className="modal__content"><span>Privacy: </span><p>{paste.title}</p></div>
                <div className="modal__content"><span>Deadline: </span><p>{paste.title}</p></div>
                <div className="modal__content"><span>Paste text: </span><p>{paste.description}</p></div>
            </div >
            <div className='modal__overlay'></div>
        </div >
    )
}