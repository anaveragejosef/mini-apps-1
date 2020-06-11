function UserForm(props) {
  return (
    <form onSubmit={props.onClick}>
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
    <form onSubmit={props.onClick}>
      <label>Address 1:
      <input type='text' name='address1'></input>
      </label>
      <label>Address 2:
      <input type='text' name='address2'></input>
      </label>
      <label>City:
      <input type='text' name='city'></input>
      </label>
      <label>State:
      <input type='text' name='state'></input>
      </label>
      <label>Zip Code:
      <input type='text' name='zip'></input>
      </label>
      <label>Phone Number:
      <input type='text' name='phoneNumber'></input>
      </label>
      <input type='submit' value='Next' />
    </form>
  );
}

function PaymentForm(props) {
  return (
    <form onSubmit={props.onClick}>
      <label>Credit Card Number:
      <input type='text' name='creditcard'></input>
      </label>
      <label>Expiration Data:
      <input type='text' name='expiration'></input>
      </label>
      <label>CVV:
      <input type='text' name='cvv'></input>
      </label>
      <label>Billing Zip Code:
      <input type='text' name='billingZip'></input>
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
  }
  // On change event to pass to everyone

  // Onclick for App
  moveToUserForm() {
    this.setState({
      isHomePage: false,
      isUserForm: true
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
      form = <UserForm checkoutId={this.state.checkoutID} onClick={this.moveToDemoForm}/>;
    } else if (this.state.isDemoForm) {
      form = <DemographicForm checkoutId={this.state.checkoutID} onClick={this.moveToPaymentForm}/>;
    } else if (this.state.isPaymentForm) {
      form = <PaymentForm checkoutId={this.state.checkoutID} onClick={this.moveToHomePage}/>;
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