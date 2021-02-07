import React , {Component} from 'react'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import './Employee.css'

class RouteComponent extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Route component={Employee} path="/"></Route>
                    {/* <Route component={EmployeeDetails} path="/empDet/:list"></Route> */}
                </Router>
            </div>
        )
    }
}
class Employee extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            exp: '',
            list: []
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    render() {
        return (
            <div className="emp">

                <h1>Employee</h1>
                <div className="center">
                    <div className="margin">
                        <label>Name :</label> <input type="text" name="name" onChange={this.handleOnChange}></input>
                    </div>

                    <div className="margin">
                        <label>Experience : </label><input type="text" name="exp" onChange={this.handleOnChange}></input>
                    </div>
                </div>

                <div className="margin" ><button type="submit" onClick={this.onSubmit}> Submit</button></div>

                <div className="center">
                    <EmployeeDetails list={this.state.list} removeItem={this.removeItem}/>
                </div>
            </div>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        
       // console.log(this.state.name);
        //let list = this.state.list;
        
        // list.push({
        //     name: this.state.name,
        //     exp : this.state.exp
        // });
        console.log(this.state.name);
        this.setState((prevState) => ({
            list: {
              ...prevState.list,
              name: this.state.name,
              exp : this.state.exp
            }
          }));
        // this.setState( {
        //     list : list
        // });
       // console.log(this.state.list[0].name);
        // this.props.history.push(`/empDet/${this.state.list}`);

    }

    handleOnChange(event) {
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }

    removeItem(index) {
        console.log('deleteeee '+index);
        const empList = this.state.list.filter((emp, empIdx) => {
            return empIdx !== index;
        });

        this.setState( {
            list: empList
         }
        )
    }
}

class EmployeeDetails extends Component {

    render() {
        if(this.props.list.length > 0) {
            return (
               <div>
                    <h1>Employee List</h1>
                 <table>
                     <thead>
                         <tr>
                             <th>Name</th>
                             <th>Experience</th>
                         </tr>
                     </thead>
                     <tbody>
                       {
                         this.props.list.map (
                            (emp,i) =>
                                <tr key={i}>
                                    <td><button onClick={() => {this.props.removeItem(i)}}>Delete</button></td>
                                    <td>{emp.name}</td>
                                    <td>{emp.exp}</td>
                                </tr>
                         )
                        }
                     </tbody>
                 </table>

               </div>


             )
        } else return null;
        
    }

   
}
export default RouteComponent