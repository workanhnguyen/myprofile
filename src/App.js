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
          <LinkItem isPersonPage linkImg={avatarDemo} desc={'description'} content={'Anh Nguyễn'} />
          <LinkItem linkImg={iconFriend} desc={'description'} content={'Bạn bè'} />
          <LinkItem linkImg={iconNewFeed} desc={'description'} content={'Gần đây nhất'} />
          <LinkItem linkImg={iconSaved} desc={'description'} content={'Đã lưu'} />
          <LinkItem linkImg={iconGroup} desc={'description'} content={'Nhóm'} />
          <LinkItem linkImg={iconMarket} desc={'description'} content={'Marketplace'} />
          <LinkItem linkImg={iconCompaign} desc={'description'} content={'Chiến dịch gây quỹ'} />
          <LinkItem linkImg={iconGame} desc={'description'} content={'Chơi game'} />
          <LinkItem linkImg={iconOrder} desc={'description'} content={'Đơn đặt hàng và thanh toán'} />
          <LinkItem linkImg={iconBlood} desc={'description'} content={'Hiến máu'} />
          <LinkItem linkImg={iconAdvert} desc={'description'} content={'Hoạt động quảng cáo gần đây'} />
          <LinkItem linkImg={iconMemory} desc={'description'} content={'Kỷ niệm'} />
          <LinkItem linkImg={iconMessengerPng} desc={'description'} content={'Messenger'} />
          <LinkItem linkImg={iconKidMessenger} desc={'description'} content={'Messenger nhí'} />
          <LinkItem linkImg={iconReel} desc={'description'} content={'Reels'} />
          <LinkItem linkImg={iconEvent} desc={'description'} content={'Sự kiện'} />
          <LinkItem linkImg={iconHealth} desc={'description'} content={'Sức khỏe cảm xúc'} />
          <LinkItem linkImg={iconPage} desc={'description'} content={'Trang'} />
          <LinkItem linkImg={iconManageAdvert} desc={'description'} content={'Trình quản lý quảng cáo'} />
          <LinkItem linkImg={iconCenterGlobal} desc={'description'} content={'Trung tâm khoa học khí hậu'} />
          <LinkItem linkImg={iconCenterAdvert} desc={'description'} content={'Trung tâm quảng cáo'} />
          <LinkItem linkImg={iconSos} desc={'description'} content={'Ứng phó khẩn cấp'} />
          <LinkItem linkImg={iconPlayGame} desc={'description'} content={'Video chơi game'} />
          <LinkItem linkImg={iconLivestream} desc={'description'} content={'Video trực tiếp'} />
          <LinkItem linkImg={iconWatch} desc={'description'} content={'Watch'} />
          <LinkItem linkImg={iconStar} desc={'description'} content={'Yêu thích'} />
          
        </div>


      </div>
      {/* -- end Main Content */}
    </div>
  );
}

export default App;
