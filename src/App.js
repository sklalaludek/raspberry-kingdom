import React, { Component } from 'react';
import { sendData } from './helper';
import Toolbar from './components/Toolbar/Toolbar';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import './App.css';


const styles = theme => ({
  DialogTitle: {
    fontFamily: 'Aleo'
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#a2425e',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#a2425e',
    },
  }
});
class App extends Component {
  constructor(props){
    super();
    this.state = {
      open: false,
      email: '',
      password: '',
      response: '',
      error: null
    };
  };

  handlerOnClickButton = () => {
    this.setState({
      open: true,
      error: null
    });
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  }

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value,
    });
  };

  handlerFormOnSubmit = e => {
    e.preventDefault();

    sendData(this.state.email, this.state.password)
      .then( res => {
        this.setState({
          email: '',
          password: ''
        })
      })
      .catch( err => {
        this.setState({
          email: '',
          password: '',
          error: 'error'
        })
      });
  }

  render() {
    const { classes } = this.props;
    const { open, email, password, error } = this.state;

    return (
      <div className="App">
        <Toolbar />
        <div className="main-content">
          <h1 className="main-content__title">Raspberry kingdom</h1>
          <button
            className="main-content__btn"
            onClick={this.handlerOnClickButton}
          >
            enter the gates
          </button>
        </div>
        <Dialog
          open={open}
          onClose={this.handleClose}
          onSubmit={this.handlerFormOnSubmit}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle
            id="form-dialog-title"
            className={classes.DialogTitle}
          >
            Are you Raspeberry Knight?
          </DialogTitle>
          <DialogContent>
            { !error ?
                <form className='login-form' onSubmit={this.handlerFormOnSubmit}>
                <TextField
                  margin="dense"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={this.handleChange('email')}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  classes={{
                    underline: classes.cssUnderline,
                  }}
                />
                <TextField
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={this.handleChange('password')}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  classes={{
                    underline: classes.cssUnderline,
                  }}
                />
                <button
                  className='login-form__btn'
                  type="submit"
                >
                  log in
                </button>
                <button
                  className='login-form__btn'
                  onClick={this.handleClose}
                >
                  close
                </button>
              </form>
              : <span>you shall not pass... </span>
            }
          </DialogContent>
        </Dialog>
        <footer className="footer">
          <p className="footer__copyrights">&copy; 2014 raspberry kingdom</p>
          <p className="footer__priv">Cookies <span>|</span> Privacy</p>
          <p className="footer__design">Desing by <a href="/" rel="nofollow">Wizzard of Oz</a></p>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(App);
