import React, {Fragment} from "react"
import Context from "./context/context"
import Provider  from "./Provider"

function Agents(){
    return <AgentOne/>
}

function AgentOne(){
    return <AgentTwo/>
}

function AgentTwo(){
    return <AgentBond/>
}

function AgentBond(){
    return(
        <Context.Consumer>
            {
                (context)=>(
                    <Fragment>
                        <span>Practice for Context API</span>
                        <h1>Mission Name :{context.data.M_name}</h1>
                        <h2>Agent :{context.data.Agent}</h2>
                        <h3>Mission Status :{context.data.status}</h3>
                        <button
                            onClick={()=>{
                                context.ChangeStatus()                                
                            }}
                        >Change Status</button>
                    </Fragment>
                )
            }
        </Context.Consumer>
    )
}

function App(){
    return(
        <Fragment>
            <h1>Context API with Hooks and Fragments</h1>
            <Provider>
                <Agents/>
            </Provider>
        </Fragment>
    )
}

export default App