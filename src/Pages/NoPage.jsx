import { Link } from "react-router-dom";


function Nopage() {

  return (
    <>
    <div className="grid h-screen place-content-center bg-white px-4">
      <h1 className="tracking-widest text-gray-500 uppercase text-2xl">404 | Not Found</h1>
      <Link to='/' className='text-center block text-[#36b7ff] m-1 hover:underline'>Gå Hjem</Link>
    </div>
    </>
  )
}

export default Nopage
