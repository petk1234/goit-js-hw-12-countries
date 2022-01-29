import {error, success, alert, defaultModules } from '@pnotify/core/dist/PNotify.js'; 
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js'; 
import '@pnotify/core/dist/PNotify.css'; 
import '@pnotify/core/dist/BrightTheme.css'; 
 defaultModules.set(PNotifyMobile, {});

 const Handlebars = require("handlebars");
import siteTemplate from './templates.hbs';
const debounce = require('lodash.debounce'); 
import countries from "./fetchCountries.js"; 
let allUrl = 'https://restcountries.eu/rest/v2/'; 
const refs ={ 
    inputEl: document.querySelector('input'),
    bodyEl: document.querySelector('body'),
} 
const getCountry = e => { 
    let countryName = e.target.value; 
        const promise = countries.sendRequest(allUrl+ 'name/' + countryName);
        promise.then(datas => {
            console.log(datas.length);
            if(datas.length >= 10){
                return error({text: 'To many'});
            }
            if(datas.length === 1){
                console.log('Oh shit');
                let source = "<li>{{name}}</li>";
                let template = Handlebars.compile(source);
                const arr = datas.map( data => {
                //     console.log(data.name);
                //     siteTemplate(data);

                let result = template(data);
                //console.log(result);
                refs.bodyEl.insertAdjacentHTML("beforeend", result);
                return data.name;
                 });
                console.log(arr);
               // refs.bodyEl.insertAdjacentHTML('afterbegin', arr);
            }
            else{
                return success({text: 'Nice'});
            }
        });
        console.log(countries.sendRequest(allUrl+ 'name/' + countryName));
        //console.log(countries.sendRequest(allUrl+ 'name/' + countryName).result);
        // const arr = countries(allUrl+ 'name/' + countryName).forEach( country => {
        //     siteTemplate(country);
        // })

    // } 
} 

// error({
//     text: 'To many matches found. Please enter a more specific query!',
//   });
 
refs.inputEl.addEventListener('input', debounce(getCountry, 500));