function UserForm(props) {
  return (
    <form>
      <label>Name:
      <input type='text' name='name'></input>
      </label>
      <label>Email:
      <input type='text' name='email'></input>
      </label>
      <label>Password:
      <input type='text' name='password'></input>
      </label>
      <input type='submit' value='Next' />
    </form>
  );
}

function DemographicForm(props) {
  return (
    <form onSubmit='send data to server'>
      <label>Address 1:
      <input type='text' value='this.state.address1'></input>
      </label>
      <label>Address 2:
      <input type='text' value='this.state.address2'></input>
      </label>
      <label>City:
      <input type='text' value='this.state.city'></input>
      </label>
      <label>State:
      <input type='text' value='this.state.state'></input>
      </label>
      <label>Zip Code:
      <input type='text' value='this.state.zip'></input>
      </label>
      <label>Phone Number:
      <input type='text' value='this.state.phoneNumber'></input>
      </label>
      <input type='submit'>Next</input>
    </form>
  );
}

function PaymentForm(props) {
  return (
    <form onSubmit='send data to server'>
      <label>Credit Card Number:
      <input type='text' value='this.state.creditcard'></input>
      </label>
      <label>Expiration Data:
      <input type='text' value='this.state.expiration'></input>
      </label>
      <label>CVV:
      <input type='text' value='this.state.cvv'></input>
      </label>
      <label>Billing Zip Code:
      <input type='text' value='this.state.billingZip'></input>
      </label>
      <input type='submit'>Purchase</input>
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
      form = <button onClick={this.moveToUserForm}>Checkout</button>;
    } else if (this.state.isUserForm) {
      form = <UserForm checkoutId={this.state.checkoutID}/>;
    } else if (this.state.isDemoForm) {
      form = <DemographicForm checkoutId={this.state.checkoutID}/>;
    } else if (this.state.isPaymentForm) {
      form = <PaymentForm checkoutId={this.state.checkoutID}/>;
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