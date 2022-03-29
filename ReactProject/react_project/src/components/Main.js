import React, {Component} from 'react';
// import Modal from './components/Modal';
import Modal from './Modal'
import { Alert, Button } from 'reactstrap';
import axios from 'axios';

class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      // modal:false,
      viewCompleted:false,
      activeItem:{
        title:"",
        description:"",
        completed:false
      },
      todoList: []
    };
  }


refreshList = () => {
  axios
  .get("http://petsapp-api.herokuapp.com/todo/api/task/")
  .then(res => this.setState({todoList:res.data}))
  // .catch(err => console.log(err))
};

componentDidMount(){
  this.refreshList();
}

toggle = () =>{
  this.setState({ modal: !this.state.modal});
}

handleSubmit = item =>{
  this.toggle();
  if(item.id){
    axios.put(`http://petsapp-api.herokuapp.com/todo/api/task/${item.id}/`, item)
    .then(res=> this.refreshList());
        return(
        <div>
            <Alert color='success'>
            Task Updated Successfully..
            </Alert>
        </div>
        
        )
  }
  axios.post('http://petsapp-api.herokuapp.com/todo/api/task/', item)
  .then(res=>this.refreshList());
  return(
    <div>
         <Alert color='success'>
    Task Created Successfully..
  </Alert>
    </div>
   
  )

};

handleDelete = item => {
  axios.delete(`http://petsapp-api.herokuapp.com/todo/api/task/${item.id}/`)
  .then(res=> this.refreshList());
  return(
    <div>
    <Alert color='danger'>
        Task have been deleted Successfully..
    </Alert>
    </div>
  )
  
};


createItem = () => {
  const item = {title:"", description:"", completed:false};
  this.setState({activeItem:item, modal:!this.state.modal});
 
};


editItem = item =>{
  this.setState({activeItem:item, modal:!this.state.modal})
}


displayCompleted = status =>{
  if(status){
    return this.setState({viewCompleted:true})
  }
  return this.setState({viewCompleted:false})
}


renderTabList = () => {
  return(
    <div className='my-5 tab-list'>
      <span onClick={()=>this.displayCompleted(true)}
      className={this.state.viewCompleted ? "active":""}>
        Completed
      </span>
      <span onClick={()=>this.displayCompleted(false)}
      className={this.state.viewCompleted ? "":"active"}>
        Incomplete
      </span>
    </div>
  )
}

renderItems = () => {
      const { viewCompleted } = this.state;
      const newItems = this.state.todoList.filter(
        item => item.completed === viewCompleted
      );
      return newItems.map(item => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span
            className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""
              }`}
            title={item.description}
          >
            {item.title}
          </span>
          <span>
            <button
              onClick={() => this.editItem(item)}
              className="btn btn-secondary mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => this.handleDelete(item)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </span>
        </li>
      ));
    };



render() {
      return (
        <main className="content">
          <div class="container-fluid bg-light text-dark p-5">
                  <div class="container bg-light p-5">
                    <h1 class="display-4 fw-bold">Task Manager App</h1>
                    <hr/>
                  
                      <p>Go to My Website</p>
                      <a href="https://indrakhanal.com.np" class="btn btn-primary">link</a>
                  </div>
                

          {/* <h1 className="text-black text-uppercase text-center my-4">Task Manager</h1> */}
          <div className="row ">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
              <div className="card p-3">
                <div className="">
                  <button onClick={this.createItem} className="btn btn-primary">
                    Add task
                  </button>
                </div>
                {this.renderTabList()}
                <ul className="list-group list-group-flush">
                  {this.renderItems()}
                </ul>
              </div>
            </div>
          </div>
          {this.state.modal ? (
            <Modal
              activeItem={this.state.activeItem}
              toggle={this.toggle}
              onSave={this.handleSubmit}
            />
          ) : null}

        </div>
        </main>
      );
    }
  }

export default Main;
