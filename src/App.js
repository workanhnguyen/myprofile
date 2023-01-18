import styles from './css/App.module.scss';
import clsx from 'clsx';

import SearchBar from './components/SearchBar/index.js';

import logoFacebook from './images/logo-facebook.svg';

function App() {

  return (
    <div className={(styles.wrapper)}>
      <header className={clsx(styles.header)}>
        <img src={logoFacebook} alt='logo-facebook' />
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
