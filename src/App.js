import styles from './css/App.module.scss';
import clsx from 'clsx';

import SearchBar from './components/SearchBar/index.js';
import NavButton from './components/NavButton/index.js';
import RouteButton from './components/RouteButton/index.js';

import logoFacebook from './images/logo-facebook.svg';
import icon1 from './images/icon-home.svg';
import icon2 from './images/icon-clip.svg';
import icon3 from './images/icon-store.svg';
import icon4 from './images/icon-group.svg';
import iconMenu from './images/icon-menu.svg';
import iconMessenger from './images/icon-messenger.svg';
import iconNotification from './images/icon-notification.svg';
import avatarDemo from './images/avatar-demo.jpg';

function App() {

  return (
    <div className={clsx(styles.wrapper)}>
      <header className={clsx(styles.header)}>
        <div>
          <img style={{'cursor': 'pointer'}} src={logoFacebook} alt='logo-facebook' />
          <SearchBar />
        </div>
        <div className={clsx(styles.routeNav)}>
          <RouteButton isActive linkIcon={icon1} desc={'home'}/>
          <RouteButton linkIcon={icon2} desc={'clip'}/>
          <RouteButton linkIcon={icon3} desc={'store'}/>
          <RouteButton linkIcon={icon4} desc={'group'}/>
        </div>
        <div>
          <NavButton linkImg={iconMenu}/>
          <NavButton linkImg={iconMessenger}/>
          <NavButton linkImg={iconNotification}/>
          <NavButton isAvatar linkImg={avatarDemo}/>
        </div>
      </header>
      
    </div>
  );
}

export default App;
