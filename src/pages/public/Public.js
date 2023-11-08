import './Public.css'
import axios from 'axios'
import { useEffect } from 'react'

export const Public = ({theme}) => {
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


  return (
    <section className='public'>
      <div className='container'>
        <div className='public__wrapper'>
          Public
        </div>
      </div>
    </section>
  )
}
