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
  }
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
    axios.post('/api', {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone,
      card: this.state.card,
      exp: this.state.exp,
      cvv: this.state.cvv,
      billing: this.state.billing
    })
      .then(res => {
        this.setState({
          isPaymentForm: false,
          isHomePage: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let form;
    if (this.state.isHomePage) {
      form = <button onClick={this.moveToUserForm}>Checkout</button>;
    } else if (this.state.isUserForm) {
      form = <UserForm onClick={this.moveToDemoForm} onChange={this.handleChange}/>;
    } else if (this.state.isDemoForm) {
      form = <DemographicForm onClick={this.moveToPaymentForm} onChange={this.handleChange}/>;
    } else if (this.state.isPaymentForm) {
      form = <PaymentForm onClick={this.moveToHomePage} onChange={this.handleChange}/>;
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