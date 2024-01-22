// plugins/facebook-sdk.js
export default ({ app }, inject) => {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v18.0',
      });
    };
  
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  
    inject('FB', () => {
      return new Promise((resolve) => {
        window.fbAsyncInit = () => {
          resolve(FB);
        };
      });
    });
  };
  