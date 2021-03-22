import React,{createContext, useState} from 'react'
import Child2 from "./components/Child2"

const Child1 = () => {


const BioData =createContext()

    return (
        <BioData.Provider >
            <Child2 />
        </BioData.Provider>
    )
}

export default Child1;


