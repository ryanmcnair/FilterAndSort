import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import StudentForm from './form';

class Welcome extends React.Component {
  render() {
    const showForm = () => (<StudentForm />);
    return (
      <div>
        <Jumbotron className="jumbotron">
          <h1 className="display-3">Welcome to Hogwarts</h1>
          <p className="lead">In this school of Witchcraft and Wizardry you will be sorted into one of four houses... Gryffindor, Slytherin, Hufflepuff or Ravenclaw.</p>
          <p></p>
          <p className="lead">
            <Button className="btn btn-warning my-2" onClick={(e) => showForm(e)}>Let's Start Sorting</Button>
          </p>
        </Jumbotron>
        <div>{(<StudentForm />)}</div>
      </div>
    );
  }
}

export default Welcome;
