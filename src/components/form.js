import React from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

class StudentForm extends React.Component {
  state = {
    name: '',
  }

  render() {
    return (
      <form className='studentform'>
        <h2>Enter First Year's Name</h2>
        <input
        type='text'
        name='name'
        value={this.state.name}
        placeholder='Your name...'
        className='form-control form-control-lg m-1'
        required
        />
        <Button color="success">Submit</Button>
        <br/>
        <br/>
      </form>
    );
  }
}

export default StudentForm;
