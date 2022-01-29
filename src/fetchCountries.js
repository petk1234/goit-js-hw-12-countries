// import {error, alert, success, notice, info, defaultModules } from '@pnotify/core/dist/PNotify.js'; 
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js'; 
// import '@pnotify/core/dist/PNotify.css'; 
// import '@pnotify/core/dist/BrightTheme.css'; 
// defaultModules.set(PNotifyMobile, {});
// export default function fetchCountries(url){ 
//     fetch(url) 
//     .then( promise => { 
//         return promise.json(); 
//     }) 
//     .then( data => {
//         console.log(data);
//         return data 
//     }) 
//     .catch( error => { 
//         console.log('Errorrrrrrrrrrrrrrrrrrrrrrrrrr'); 
//     }) 
// }

export default{
    sendRequest(url) {
         return fetch(url)
         .then(res => res.json())
          .then(data => {
             console.log(data); 
             return data;
             })
     },
};