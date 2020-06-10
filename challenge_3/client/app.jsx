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
  }
  // On change event to pass to everyone

  // Onclick for App
  moveToUserForm() {
    console.log('In form');
    this.setState({
      isHomePage: false,
      isUserForm: true
    });
  }

  // Onclick for User form

  // Onclick for Demo form

  // Onclick for Payment form

  render() {
    let form;
    if (this.state.isHomePage) {
      form = <button onclick='moveToUserForm()'>Checkout</button>;
    } else if (this.state.isUserForm) {
      form = <userForm checkoutId={this.state.checkoutID}/>;
    } else if (this.state.isDemoForm) {
      from = <demographicForm checkoutId={this.state.checkoutID}/>;
    } else if (this.state.isPaymentForm) {
      form = <paymentForm checkoutId={this.state.checkoutID}/>;
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

var userForm = (props) => {
  return (
    <form onSubmit='send data to server'>
      <label>Name: </label>
      <input type='text' value='this.state.name'></input>
      <label>Email: </label>
      <input type='text' value='this.state.email'></input>
      <label>Password: </label>
      <input type='text' value='this.state.password'></input>
      <input type='submit'>Next</input>
    </form>
  );
}

var demographicForm = (props) => {
  return (
    <form onSubmit='send data to server'>
      <label>Address 1: </label>
      <input type='text' value='this.state.address1'></input>
      <label>Address 2: </label>
      <input type='text' value='this.state.address2'></input>
      <label>City: </label>
      <input type='text' value='this.state.city'></input>
      <label>State: </label>
      <input type='text' value='this.state.state'></input>
      <label>Zip Code: </label>
      <input type='text' value='this.state.zip'></input>
      <label>Phone Number: </label>
      <input type='text' value='this.state.phoneNumber'></input>
      <input type='submit'>Next</input>
    </form>
  );
}

var paymentForm = (props) => {
  return (
    <form onSubmit='send data to server'>
      <label>Credit Card Number: </label>
      <input type='text' value='this.state.creditcard'></input>
      <label>Expiration Data: </label>
      <input type='text' value='this.state.expiration'></input>
      <label>CVV: </label>
      <input type='text' value='this.state.cvv'></input>
      <label>Billing Zip Code: </label>
      <input type='text' value='this.state.billingZip'></input>
      <input type='submit'>Purchase</input>
    </form>
  );
}