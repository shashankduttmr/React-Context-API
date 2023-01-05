import React, {useState} from "react"
import PackageContext from "./context/context"

function Provider(props){
    const [mission, Setmission] = useState({
        M_name:'Go to Israel',
        Agent:'007',
        status:'Not Accepted'
    })

    return(
        <PackageContext.Provider
            value={{
                data:mission,
                ChangeStatus:()=>{
                    Setmission({...mission, status:'Mission Accepted'})
                }
            }}  
        >
            {props.children}
        </PackageContext.Provider>
    )
}

export default Provider