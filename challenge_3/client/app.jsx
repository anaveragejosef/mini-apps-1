import axios from 'axios';

function UserForm(props) {
  return (
    <form onSubmit={props.onClick}>
      <label>Name:
      <input type='text' name='name' onChange={props.onChange}></input>
      </label>
      <label>Email:
      <input type='text' name='email' onChange={props.onChange}></input>
      </label>
      <label>Password:
      <input type='text' name='password' onChange={props.onChange}></input>
      </label>
      <input type='submit' value='Next' />
    </form>
  );
}

function DemographicForm(props) {
  return (
    <form onSubmit={props.onClick}>
      <label>Address 1:
      <input type='text' name='address1' onChange={props.onChange} onChange={props.onChange}></input>
      </label>
      <label>Address 2:
      <input type='text' name='address2' onChange={props.onChange}></input>
      </label>
      <label>City:
      <input type='text' name='city' onChange={props.onChange}></input>
      </label>
      <label>State:
      <input type='text' name='state' onChange={props.onChange}></input>
      </label>
      <label>Zip Code:
      <input type='text' name='zip' onChange={props.onChange}></input>
      </label>
      <label>Phone Number:
      <input type='text' name='phone' onChange={props.onChange}></input>
      </label>
      <input type='submit' value='Next' />
    </form>
  );
}

function PaymentForm(props) {
  return (
    <form onSubmit={props.onClick}>
      <label>Credit Card Number:
      <input type='text' name='card' onChange={props.onChange}></input>
      </label>
      <label>Expiration Data:
      <input type='text' name='exp' onChange={props.onChange}></input>
      </label>
      <label>CVV:
      <input type='text' name='cvv' onChange={props.onChange}></input>
      </label>
      <label>Billing Zip Code:
      <input type='text' name='billing' onChange={props.onChange}></input>
      </label>
      <input type='submit' value='Purchase' />
    </form>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutId: null,
      isHomePage: true,
      isUserForm: false,
      isDemoForm: false,
      isPaymentForm: false
    };
    this.moveToUserForm = this.moveToUserForm.bind(this);
    this.moveToDemoForm = this.moveToDemoForm.bind(this);
    this.moveToPaymentForm = this.moveToPaymentForm.bind(this);
    this.moveToHomePage = this.moveToHomePage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // On change event to pass to everyone
  handleChange(event) {
    var value = event.target.value;
    this.setState({
      [event.target.name]: value
    });
    console.log(this.state);
  }
  // Onclick for App
  moveToUserForm() {
    axios.get('http://localhost:3000/')
      .then(res => {
        console.log(res);
        this.setState({
          this.checkoutId: res,
          isHomePage: false,
          isUserForm: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // Onclick for User form
  moveToDemoForm() {
    this.setState({
      isUserForm: false,
      isDemoForm: true
    });
  }

  // Onclick for Demo form
  moveToPaymentForm() {
    this.setState({
      isDemoForm: false,
      isPaymentForm: true
    });
  }

  // Onclick for Payment form
  moveToHomePage() {
    this.setState({
      isPaymentForm: false,
      isHomePage: true
    });
  }

  render() {
    let form;
    if (this.state.isHomePage) {
      form = <button onClick={this.moveToUserForm}>Checkout</button>;
    } else if (this.state.isUserForm) {
      form = <UserForm checkoutId={this.state.checkoutID} onClick={this.moveToDemoForm} onChange={this.handleChange}/>;
    } else if (this.state.isDemoForm) {
      form = <DemographicForm checkoutId={this.state.checkoutID} onClick={this.moveToPaymentForm} onChange={this.handleChange}/>;
    } else if (this.state.isPaymentForm) {
      form = <PaymentForm checkoutId={this.state.checkoutID} onClick={this.moveToHomePage} onChange={this.handleChange}/>;
    }
    return (
      <div>
        <h1>Welcome to the Checkout Flow</h1>
        {form}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));