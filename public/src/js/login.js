const myStorage = window.localStorage;
// signIn,signUp On,Close
const $signIn = document.querySelector('.sign-in');
const $signinPopup = document.querySelector('.signin-popup.hidden');
const $popupClose = document.querySelector('.popup-close');
const $signUp = document.querySelector('.sign-up');
const $signupPopup = document.querySelector('.signup-popup');
const $signupClose = document.querySelector('.signup-popup-close');
const $signInSignUpBtn = document.querySelector('.signin-signup-btn');
// signIn
const $signinIdInput = document.querySelector('.signin-id-input');
const $signInError = document.querySelector('.signin-error');
const $signInErrorPw = document.querySelector('.signin-errorpw');
const $signPwInput = document.querySelector('.signin-password-input');
const $signInBtn = document.querySelector('.signin-signin-btn');
// signUp
const $signUpError = document.querySelector('.signup-error');
const $signUpErrorPw = document.querySelector('.signup-errorpw');
const $signUpErrorPwRe = document.querySelector('.signup-errorpwre');
const $signUpErrorName = document.querySelector('.signup-errorname');
const $signUpErrorEmail = document.querySelector('.signup-erroremail');
const $signUpIdInput = document.querySelector('.signup-id-input');
const $signUpPwInput = document.querySelector('.signup-password-input');
const $signUpPwInputRe = document.querySelector('.signup-password-re-input');
const $signupNameInput = document.querySelector('.signup-name-input');
const $signUpMailInput = document.querySelector('.signup-email-input');
// userInfo
const $userInfo = document.querySelector('.user-info');
const $userinfoPopUp = document.querySelector('.userinfo-popup');
const $userinfoPopUpClose = document.querySelector('.userinfo-popup-close');
const $userinfoSigninBtn = document.querySelector('.userinfo-signin-btn');
const $userinfoSignUpBtn = document.querySelector('.userinfo-signup-btn');
const $signupBtn = document.querySelector('.signup-signup-btn');
// nomal User Pop
const $nomalUserPop = document.querySelector('.nomal-user-pop');

// User Info On,Close Function
const UserInfoOn = () => {
  $userinfoPopUp.classList.remove('hidden');
  $signinPopup.classList.add('hidden');
  $signupPopup.classList.add('hidden');
};
const UserInfoClose = () => {
  $userinfoPopUp.classList.add('hidden');
};
// User Info On,Close
$userInfo.addEventListener('click', function () {
  UserInfoOn();
});
$userinfoPopUpClose.addEventListener('click', function () {
  UserInfoClose();
});

// User Info function
const UserInfoSignBtn = () => {
  $userinfoPopUp.classList.add('hidden');
  $signinPopup.classList.remove('hidden');
  $signInError.innerText = '';
  $signinIdInput.value = '';
  $signPwInput.value = '';
  $signInErrorPw.innerText = '';
};
const UserinfoBtnSignup = () => {
  $userinfoPopUp.classList.add('hidden');
  $signupPopup.classList.remove('hidden');
  $signUpIdInput.value = '';
  $signUpPwInput.value = '';
  $signUpError.innerText = '';
  $signUpErrorPw.innerText = '';
  $signUpErrorPwRe.innerText = '';
  $signUpErrorName.innerText = '';
  $signUpErrorEmail.innerText = '';
};
// User Info
$userinfoSigninBtn.addEventListener('click', function () {
  UserInfoSignBtn();
});
$userinfoSignUpBtn.addEventListener('click', function () {
  UserinfoBtnSignup();
});


// SignIn Popup On,Close Functinon
const closePopup = () => {
  $signinPopup.classList.add('hidden');
  $signInError.innerText = '';
  $signinIdInput.value = '';
  $signinIdInput.style.border = '1px solid #70707093';
  $signPwInput.style.border = '1px solid #70707093';
};

const signInEvent = () => {
  $signinPopup.classList.remove('hidden');
  $signupPopup.classList.add('hidden'); // signInUpPopUP 중복 방지.
  $userinfoPopUp.classList.add('hidden'); // userPopUp 중복 방지.
  $signInError.innerText = '';
  $signinIdInput.value = '';
  $signPwInput.value = '';
  $signInErrorPw.innerText = '';
};
const BtnsignInSignUp = () => {
  $signupPopup.classList.remove('hidden');
  $signinPopup.classList.add('hidden');
};

// SignIn Popup On,Close

$popupClose.addEventListener('click', function () {
  closePopup();
});

$signIn.addEventListener('click', function () {
  signInEvent();
});

$signInSignUpBtn.addEventListener('click', function () {
  BtnsignInSignUp();
});
// SignIn PopUp Function
const inputSignIn = () => {
  const regexrid = /^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){4,}$/;
  if (!regexrid.test($signinIdInput.value)) {
    $signinIdInput.style.border = '1px solid red';
    $signInError.innerText = '영문,영문과 숫자의 조합으로만 가능합니다.';
  } else {
    $signinIdInput.style.border = '1px solid green';
    $signInError.innerText = '';
  }
};
const inputSignPw = () => {
  const regexrpw = /^[A-Za-z0-9]{5,15}$/;
  if (!regexrpw.test($signPwInput.value)) {
    $signPwInput.style.border = '1px solid red';
    $signInErrorPw.innerText = '6자리 이상으로만 가능합니다.';
  } else {
    $signPwInput.style.border = '1px solid green';
    $signInErrorPw.innerText = '';
  }
};
// SignIn PopUp
$signinIdInput.addEventListener('keydown', function () {
  inputSignIn();
});

$signPwInput.addEventListener('keydown', function () {
  inputSignPw();
});
// SignUp Popup On,Close Function
const signUpClick = () => {
  $signupPopup.classList.remove('hidden');
  $signinPopup.classList.add('hidden'); // signIn PopUP 중복 방지.
  $userinfoPopUp.classList.add('hidden'); // userinfo PopUp 중복 방지.
  $signUpIdInput.value = '';
  $signUpPwInput.value = '';
  $signUpError.innerText = '';
  $signUpErrorPw.innerText = '';
  $signUpErrorPwRe.innerText = '';
  $signUpErrorName.innerText = '';
  $signUpErrorEmail.innerText = '';
};
const closeSignUp = () => {
  $signupPopup.classList.add('hidden');
  $signUpError.innerText = '';
  $signUpErrorPw.innerText = '';
  $signUpErrorPwRe.innerText = '';
  $signUpErrorName.innerText = '';
  $signUpErrorEmail.innerText = '';
  $signUpIdInput.value = '';
  $signUpPwInput.value = '';
  $signUpPwInputRe.value = '';
  $signupNameInput.value = '';
  $signUpMailInput.value = '';
  $signUpIdInput.style.border = '1px solid #70707093';
  $signUpPwInput.style.border = '1px solid #70707093';
  $signUpPwInputRe.style.border = '1px solid #70707093';
  $signupNameInput.style.border = '1px solid #70707093';
  $signUpMailInput.style.border = '1px solid #70707093';
  $signupBtn.disabled = true;
};

// SignUp Popup On,Close
$signUp.addEventListener('click', function () {
  signUpClick();
});

$signupClose.addEventListener('click', function () {
  closeSignUp();
});
// SignUp PopUp Function
const signupStatus = [false, false, false, false, false];

const completedSignUp = () => {
  const signupHover = signupStatus.every(item => item);
  if (!signupHover) return;
  $signupBtn.disabled = false;
};

const signUpInputKeyUp = () => {
  const regexr = /^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){4,}$/;
  if (!regexr.test($signUpIdInput.value)) {
    $signUpIdInput.style.border = '1px solid red';
    $signUpError.innerText = '영문,영문과 숫자의 조합으로만 가능합니다.';
    signupStatus[0] = false;
  } else {
    $signUpIdInput.style.border = '1px solid green';
    $signUpError.innerText = '';
    signupStatus[0] = true;
    completedSignUp();
  }
};

const signUpPwInputKeyUp = () => {
  const regexr = /^[A-Za-z0-9]{6,15}$/;
  if (!regexr.test($signUpPwInput.value)) {
    $signUpPwInput.style.border = '1px solid red';
    $signUpErrorPw.innerText = '6자리 이상으로만 가능합니다';
    signupStatus[1] = false;
  } else {
    $signUpPwInput.style.border = '1px solid green';
    $signUpErrorPw.innerText = '';
    signupStatus[1] = true;
    completedSignUp();
  }
};
const signUpPwInputReKeyUp = () => {
  if ($signUpPwInput.value !== $signUpPwInputRe.value) {
    $signUpPwInputRe.style.border = '1px solid red';
    $signUpErrorPwRe.innerText = '비밀번호를 다시 입력해 주세요, 비밀번호가 일치하지 않습니다';
    signupStatus[2] = false;
  }
  if ($signUpPwInput.value === $signUpPwInputRe.value) {
    $signUpPwInputRe.style.border = '1px solid green';
    $signUpErrorPwRe.innerText = '';
    signupStatus[2] = true;
    completedSignUp();
  }
};
const signupNameInputKeyUp = () => {
  const regexr = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
  if (!regexr.test($signupNameInput.value)) {
    $signupNameInput.style.border = '1px solid red';
    $signUpErrorName.innerText = '이름을 입력하세요';
    signupStatus[3] = false;
  } else {
    $signupNameInput.style.border = '1px solid green';
    $signUpErrorName.innerText = '';
    signupStatus[3] = true;
    completedSignUp();
  }
};
const signUpMailInputKeyUp = () => {
  const regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  if (!regexr.test($signUpMailInput.value)) {
    $signUpMailInput.style.border = '1px solid red';
    $signUpErrorEmail.innerText = 'E-mail 형식에 맞게 입력해 주세요';
    signupStatus[4] = false;
  } else {
    $signUpMailInput.style.border = '1px solid green';
    $signUpErrorEmail.innerText = '';
    signupStatus[4] = true;
    completedSignUp();
  }
};
// SignUp PopUp

$signUpIdInput.addEventListener('keyup', function () {
  signUpInputKeyUp();
});

$signUpPwInput.addEventListener('keyup', function () {
  signUpPwInputKeyUp();
});

$signUpPwInputRe.addEventListener('keyup', function () {
  signUpPwInputReKeyUp();
});

$signupNameInput.addEventListener('keyup', function () {
  signupNameInputKeyUp();
});

$signUpMailInput.addEventListener('keyup', function () {
  signUpMailInputKeyUp();
});

// Premium PopUp
const premiumPop = () => {
  if (myStorage.getItem('id') === 'guest') return;
  if (myStorage.getItem('id') === 'login') return;
  if ((JSON.parse(myStorage.getItem('premium')))) {
    $nomalUserPop.classList.add('hidden');
  }
};

// exprot
export {
  premiumPop
};
