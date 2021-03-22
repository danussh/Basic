import react,{Component} from "react"
class Classes extends Component{

    constructor(){
        super()
            this.state={
               count:0
            
        }
        this.HandleChange=this.HandleChange.bind(this)
    }
    HandleChange(){
       this.setState({
           count : this.state.count + 1
       })
    }
    dec(){
        this.setState({
            count:this.state.count -1 ,
        })
    }

    render(){
           return (
           <>
           <h1>Hello  {this.state.count}</h1>
           {/* best approach below */}
           <button onClick={this.HandleChange}>Incremented</button> 
           
           <button onClick={this.dec.bind(this)}>decrementer</button>
           </>
           )
    }

}

export default Classes;