import './Public.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { PasteModal } from "../../components/pasteModal/PasteModal"
import { Pagination } from "../../components/pagination/Pagination"

export const Public = ({ theme }) => {
  const [pasteDetail, setPasteDetail] = useState("")
  const [user, setUser] = useState([])
  const [pasteDelete, setPasteDelete] = useState("")
  const [publicPastes, setPublicPastes] = useState([])

  const handleDelete = async (e) => {
    const { data } = await axios.delete(
      // `...${e.target.id}`
      "https://fakestoreapi.com/products/6"
    )
    setPasteDelete(data)
  }

  // useEffect(() => {
  //   const getPastes = async () => {
  //     let {data} = await axios('https://1387-212-42-120-155.ngrok-free.app/api/Poste', {
  //       method: 'GET',
  //         headers: {
  //           "ngrok-skip-browser-warning": "69420",
  //           }        
  //     }
  //     )
  //     console.log(data);
  //   }
  //   getPastes()
  // }, [])

  useEffect(() => {
    const getPublicPastes = async () => {
      let { data } = await axios(`https://fakestoreapi.com/products`)
      setPublicPastes(data)
    }
    getPublicPastes()
  }, [])

  console.log(publicPastes);

  const pastesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPaste = currentPage * pastesPerPage;
  const indexOfFirstPaste = indexOfLastPaste - pastesPerPage;
  const currentPastes = publicPastes.slice(indexOfFirstPaste, indexOfLastPaste)

  const handleDetails = (e) => {
    setPasteDetail(e.target.id)
    console.log(e.target.id)
  }

  return (
    <section className="public">
      <div className="container">
        <div className="public__titlegroup">
          <h2 className="public__title">{user.username}'s Pastebin</h2>
          <div className="public__color"></div>
        </div>
        <div className="public__wrapper">
          <table className="public__table">
            <thead>
              <tr>
                <th className="public__row">Paste Title</th>
                <th className="public__row">Deadline</th>
                <th className="public__row">Privacy</th>
                <th className="public__row">Details</th>
                <th className="public__row">Delete</th>
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
                return <tr>
                  <td className="table__line">{paste.title}</td>
                  <td className="table__line">{paste.price}</td>
                  <td className="table__line">{paste.category}</td>
                  <td className="table__line table__line-btn" id={paste.id} onCLick={handleDetails}>DETAILS</td>
                  <td className="table__line table__line-btn" id={paste.id} onCLick={handleDelete}>DELETE</td>
                </tr>
              })}
            </tbody>
          </table>
          {/* <button id="1" onClick={handleDetails} style={{ color: "white" }}>DETAILS</button> */}
          <div>{pasteDetail ? <PasteModal pasteDetail={pasteDetail}
            setPasteDetail={setPasteDetail} /> : ""}</div>
          <Pagination theme={theme}
            pastes={publicPastes}
            pastesPerPage={pastesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  )
}
