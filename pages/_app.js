import '../styles/main/main.scss';
import Store from '../store';
import { Provider } from 'react-redux';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
    )
}

export default MyApp
