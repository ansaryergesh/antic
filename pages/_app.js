import Nav from '../components/Nav/Nav'
import '../styles/global.scss'
import App from 'next/app';
import { Provider, connect } from 'react-redux';
import {fetchCurrentUser} from '../store/actions/userAction'
import store from '../store/store';
import { createWrapper } from 'next-redux-wrapper';
import Footer from '../components/Footer/Footer';

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <Provider store={store}>
        <Nav {...this.props} />
        {/* <div className='container'> */}

        <Component {...pageProps} />
        <Footer />
        {/* </div> */}
        {/* <Nav /> */}
      </Provider>
    )
  }
}

const makeStore=  () => store;
const wrapper = createWrapper(makeStore)
const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
});

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}


MyApp = connect(mapStateToProps,mapDispatchToProps)(MyApp)

export default wrapper.withRedux(MyApp);