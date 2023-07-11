import { Component } from "react"
import done from './done.png';


export class ToDoList extends Component {
    state = {
        userInput: '',
        userList: [],
        image: done
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addEvent(input) {
        if (input === '') {
            alert ("Please enter any text!")
        } else {
            let listArray = this.state.userList;
            listArray.push(input);
            this.setState({userList: listArray, userInput: ''})
        }
    }

    deletList () {
        let listArray = this.state.userList;
            listArray = [];
            this.setState({userList: listArray})
    }

    crossWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render () {
        return(
            <div className="container">
                <h1>To Do List</h1>
                <form onSubmit={this.onFormSubmit} className="main-container">
                    <div className="container-input">
                        <div>
                            <input 
                            placeholder="Enter text" 
                            type="text"
                            onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                            value = {this.state.userInput}/>
                        </div>
                        <div className="header">
                            <button className="btn-add" onClick={() => this.addEvent(this.state.userInput)}>Add case</button>
                        </div>
                        <div className="header">
                            <button className="btn-clear" onClick={() => this.deletList()}>Clear all</button>
                        </div>
                    </div>
                    <div className="container-list">
                        <ul>
                            {this.state.userList.map((item, index) => (
                                <li onClick={this.crossWord} key = {index}>
                                    <img src={this.state.image} alt="flag" width="30px" />
                                    {" " + item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}