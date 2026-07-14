import {Routes,Route} from "react-router-dom"
import "./App.css";

import Sidebar from "./components/Sidebar"
import Navbar from "./components/Encabezado"

import Inicio from "./pages/Inicio"
import Clases from "./pages/Clases"
import Docentes from "./pages/Docentes"

import "./App.css"

function App(){

    return(

        <div className="layout">

            <Sidebar/>

            <div className="contenido">

                <Navbar/>

                <main>

                    <Routes>

                        <Route path="/" element={<Inicio/>}/>

                        <Route path="/clases" element={<Clases/>}/>

                        <Route path="/docentes" element={<Docentes/>}/>

                    </Routes>

                </main>

            </div>

        </div>

    )

}

export default App