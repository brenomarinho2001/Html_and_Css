import { useState } from "react"


function DropdownUFC({nome}) {

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
                <li>UFC</li>


                {state ?(<ul className="dropdown-list" onMouseEnter={showDropdown}>
                    <li> Grupos</li>
                    <li> Ônibus</li>
                    <li> Vivência</li>
                    <li> Informes</li>
                    <li> Calendario</li>
                </ul>):
                null}
            </div> 
        </div>
    )



}




export default DropdownUFC