import * as player from "./player.js";


const $signinIdInput = document.querySelector('.signin-id-input');
const $signinPasswordInput = document.querySelector('.signin-password-input');
const $signinSigninBtn = document.querySelector('.signin-signin-btn');
const $signOut = document.querySelector('.sign-out');
const $mainId = document.querySelector('.id-main');
const $popId = document.querySelector('.id-pop');
const $userName = document.querySelector('.user-name');
const $userGrade = document.querySelector('.user-grade');
const $userEmail = document.querySelector('.user-email');
const $guestMenu = document.querySelector('.guest-menu');
const $userMenu = document.querySelector('.user-menu');
const $popupUserGuest = document.querySelector('.popup-user-guest');
const $popupUserNormal = document.querySelector('.popup-user-normal');
const $popupUserPreimium = document.querySelector('.popup-user-premium');


// localstorage
const myStorage = window.localStorage;

const exchangeUserWindow = () => {
  console.log(myStorage);
  if (myStorage.isuser === 'true' && myStorage.premium === 'true') {
    $guestMenu.classList.add('hidden');
    $userMenu.classList.remove('hidden');
    $popupUserGuest.classList.add('hidden');
    $popupUserNormal.classList.add('hidden');
    $popupUserPreimium.classList.remove('hidden');
  } else if (myStorage.isuser === 'true' && myStorage.premium === 'false') {
    $guestMenu.classList.add('hidden');
    $userMenu.classList.remove('hidden');
    $popupUserGuest.classList.add('hidden');
    $popupUserNormal.classList.remove('hidden');
    $popupUserPreimium.classList.add('hidden');
  } else {
    $guestMenu.classList.remove('hidden');
    $userMenu.classList.add('hidden');
    $popupUserGuest.classList.remove('hidden');
    $popupUserNormal.classList.add('hidden');
    $popupUserPreimium.classList.add('hidden');
  }
};

const setUserInfo = () => {
  $mainId.textContent = myStorage.getItem('id');
  $popId.textContent = myStorage.getItem('id');
  $userName.textContent = myStorage.getItem('name');
  $userGrade.textContent = myStorage.getItem('premium') === 'true' ? '프리미엄 회원' : '일반회원';
  $userEmail.textContent = myStorage.getItem('email');
  exchangeUserWindow();
};


const login = async (id, password) => {
  // eslint-disable-next-line no-undef
  const { data } = await axios.post('/login', { id, password });
  console.log(data);
  try {
    if (data) {
      console.log(data);
      myStorage.setItem('id', data.id);
      myStorage.setItem('name', data.name);
      myStorage.setItem('premium', data.premium);
      myStorage.setItem('playListType', 'playList');
      myStorage.setItem('email', data.email);
      myStorage.setItem('isuser', true);

      player.setPlayList.fromServer(id);
      player.setMusic();
      player.listRender();
      setUserInfo();
    } else {
      // popup 추가할것
      console.log('unmatching!', data);
    }
  } catch (e) {
    console.error(e);
  }
};


const logout = () => {
  if (myStorage.getItem('id') === 'guest') return;

  myStorage.setItem('id', 'guest');
  myStorage.setItem('name', 'Guest');
  myStorage.setItem('premium', false);
  myStorage.setItem('playList', '[]');
  myStorage.setItem('playListType', 'playList');
  myStorage.setItem('isuser', false);

  player.setMusic();
  player.listRender();

  setUserInfo();
};


$signinSigninBtn.addEventListener('click', () => {
  const id = $signinIdInput.value;
  const password = $signinPasswordInput.value;
  login(id, password);
  console.log(myStorage.getItem('id'));
});


$signOut.addEventListener('click', () => {
  logout();
});


export {
  setUserInfo
};
