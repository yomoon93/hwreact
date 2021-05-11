import React from 'react'
import Div3 from './div3'

class Div2 extends React.Component{
    render(){
        return(
            <div>
                <Div3 />
                <Div3 />
            </div>
        )
    }
}
export default Div2