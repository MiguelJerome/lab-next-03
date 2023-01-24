import { useState } from "react"
import Accueil from "../components/Accueil";

export default function Home() {
  const [page, setPage] = useState('accueil');

  return <>
    {page === 'accueil' ? 
      <Accueil />
    : page === 'projet1' ? 
      <></>  
    : page === 'projet2' ?
      <></>
    :
      404
    }
  </>
}
