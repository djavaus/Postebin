import axios from "axios";
import { useEffect, useState } from "react";
import './PasteModal.css'
import modal_close from "./modal_close.png"

export const PasteModal = ({ pasteDetail, setPasteDetail }) => {
    const [paste, setPaste] = useState([])
    console.log(pasteDetail)

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
                <img className="modal__close" src={modal_close} onClick={handleClose} />
                <h3 className="modal__title">{paste.title}</h3>
                <div className="modal__content"><span>Privacy: </span><p>{paste.title}</p></div>
                <div className="modal__content"><span>Deadline: </span><p>{paste.title}</p></div>
                <div className="modal__content"><span>Paste text: </span><p>Redux is typically used with the React-Redux library for integrating Redux and React together
                    Redux Toolkit is the recommended way to write Redux logic
                    Redux uses a "one-way data flow" app structure
                    State describes the condition of the app at a point in time, and UI renders based on that state
                    When something happens in the app:
                    The UI dispatches an action
                    The store runs the reducers, and the state is updated based on what occurred
                    The store notifies the UI that the state has changed
                    edux uses a "one-way data flow" app structure
                    State describes the condition of the app at a point in time, and UI renders based on that state
                    When something happens in the app:
                    The UI dispatches an action
                    The store runs the reducers, and the state is updated based on what occurred
                    The store notifies the UI that the state has changed </p></div>
            </div >
            <div className='modal__overlay'></div>
        </div >
    )
}