import { useState } from "react"


function DropdownQuixada() {

    const [state,setState] = useState(false);
        
    const showDropdown=()=>{
        setState(true);
    }

    const hideDropdown=()=>{
        setState(false);
    }

    return(
        <div className="dropdown">
           <div className="dropdown-menu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <li>Quixadá</li>


                {state ?(<ul className="dropdown-list" onMouseEnter={showDropdown}>
                    <li> Pontos Turisticos</li>
                    <li> Contatos</li>
                    <li> Eventos</li>
                </ul>):
                null}
            </div> 
        </div>
    )



}




export default DropdownQuixada