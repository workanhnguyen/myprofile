import styles from './App.module.scss';
import clsx from 'clsx';

import SearchBar from './components/SearchBar/index.js';
import NavButton from './components/NavButton/index.js';
import RouteButton from './components/RouteButton/index.js';
import LinkItem from './components/LinkItem';

import logoFacebook from './images/logo-facebook.svg';
import icon1 from './images/icon-home.svg';
import icon2 from './images/icon-clip.svg';
import icon3 from './images/icon-store.svg';
import icon4 from './images/icon-group.svg';
import iconMenu from './images/icon-menu.svg';
import iconMessenger from './images/icon-messenger.svg';
import iconNotification from './images/icon-notification.svg';
import iconNewFeed from './images/icon-newfeed.png';
import iconFriend from './images/icon-friend.png';
import iconSaved from './images/icon-saved.png';
import iconGroup from './images/icon-group.png';
import iconMarket from './images/icon-market.png';
import iconCompaign from './images/icon-compaign.png';
import iconPlayGame from './images/icon-play-game.png';
import iconOrder from './images/icon-order.png';
import iconBlood from './images/icon-blood.png';
import iconAdvert from './images/icon-advert.png';
import iconMemory from './images/icon-memory.png';
import iconMessengerPng from './images/icon-messenger.png';
import iconKidMessenger from './images/icon-kid-messenger.png';
import iconReel from './images/icon-reel.png';
import iconEvent from './images/icon-event.png';
import iconHealth from './images/icon-health.png';
import iconPage from './images/icon-page.png';
import iconManageAdvert from './images/icon-mg-advert.png';
import iconCenterGlobal from './images/icon-center-global.png';
import iconCenterAdvert from './images/icon-center-advert.png';
import iconSos from './images/icon-sos.png';
import iconLivestream from './images/icon-livestream.png';
import iconWatch from './images/icon-watch.png';
import iconStar from './images/icon-star.png';
import iconGame from './images/icon-game.png';
import avatarDemo from './images/avatar-demo.jpg';

function App() {

  return (
    <div className={clsx(styles.wrapper)}>
      {/* -- start Header */}
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
      {/* -- end Header */}

      {/* -- start Main Content */}
      <div className={clsx(styles.mainContent)}>

        <div className={clsx(styles.leftSide)}>
          <LinkItem isPersonPage linkImg={avatarDemo} desc={'description'} content={'Anh Nguy???n'} />
          <LinkItem linkImg={iconFriend} desc={'description'} content={'B???n b??'} />
          <LinkItem linkImg={iconNewFeed} desc={'description'} content={'G???n ????y nh???t'} />
          <LinkItem linkImg={iconSaved} desc={'description'} content={'???? l??u'} />
          <LinkItem linkImg={iconGroup} desc={'description'} content={'Nh??m'} />
          <LinkItem linkImg={iconMarket} desc={'description'} content={'Marketplace'} />
          <LinkItem linkImg={iconCompaign} desc={'description'} content={'Chi???n d???ch g??y qu???'} />
          <LinkItem linkImg={iconGame} desc={'description'} content={'Ch??i game'} />
          <LinkItem linkImg={iconOrder} desc={'description'} content={'????n ?????t h??ng v?? thanh to??n'} />
          <LinkItem linkImg={iconBlood} desc={'description'} content={'Hi???n m??u'} />
          <LinkItem linkImg={iconAdvert} desc={'description'} content={'Ho???t ?????ng qu???ng c??o g???n ????y'} />
          <LinkItem linkImg={iconMemory} desc={'description'} content={'K??? ni???m'} />
          <LinkItem linkImg={iconMessengerPng} desc={'description'} content={'Messenger'} />
          <LinkItem linkImg={iconKidMessenger} desc={'description'} content={'Messenger nh??'} />
          <LinkItem linkImg={iconReel} desc={'description'} content={'Reels'} />
          <LinkItem linkImg={iconEvent} desc={'description'} content={'S??? ki???n'} />
          <LinkItem linkImg={iconHealth} desc={'description'} content={'S???c kh???e c???m x??c'} />
          <LinkItem linkImg={iconPage} desc={'description'} content={'Trang'} />
          <LinkItem linkImg={iconManageAdvert} desc={'description'} content={'Tr??nh qu???n l?? qu???ng c??o'} />
          <LinkItem linkImg={iconCenterGlobal} desc={'description'} content={'Trung t??m khoa h???c kh?? h???u'} />
          <LinkItem linkImg={iconCenterAdvert} desc={'description'} content={'Trung t??m qu???ng c??o'} />
          <LinkItem linkImg={iconSos} desc={'description'} content={'???ng ph?? kh???n c???p'} />
          <LinkItem linkImg={iconPlayGame} desc={'description'} content={'Video ch??i game'} />
          <LinkItem linkImg={iconLivestream} desc={'description'} content={'Video tr???c ti???p'} />
          <LinkItem linkImg={iconWatch} desc={'description'} content={'Watch'} />
          <LinkItem linkImg={iconStar} desc={'description'} content={'Y??u th??ch'} />
          
        </div>


      </div>
      {/* -- end Main Content */}
    </div>
  );
}

export default App;
