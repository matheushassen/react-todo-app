import React from "react";
import { Link } from 'react-router-dom'


export default function Menu() {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-header py-2">
                     <Link to='/'className="navbar-brand d-flex align-items-center gap-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
                        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                        TodoApp 
                    </Link>
                </div>

                <div id="navbar" className="nav me-lg-auto mb-md-0">
                    <ul className="nav nav-pills">
                        <li><Link to='/todo' className="nav-link px-2 text-white">Tarefas</Link></li>
                        <li><Link to='/about' className="nav-link px-2 text-white">Sobre</Link></li>
                    </ul>
                </div>
            </div>
        </nav>  
    )
}
