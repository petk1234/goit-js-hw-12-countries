import {error, success, alert, defaultModules } from '@pnotify/core/dist/PNotify.js'; 
import '@pnotify/core/dist/PNotify.css'; 
import '@pnotify/core/dist/BrightTheme.css'; 
import './styles.css';
import siteTemplate from './templates.hbs';
import siteTemplate2 from './template2.hbs';
const debounce = require('lodash.debounce'); 
import countries from "./fetchCountries.js"; 

let allUrl = 'https://restcountries.eu/rest/v2/'; 
const refs ={ 
    inputEl: document.querySelector('input'),
    bodyEl: document.querySelector('body'),
} 
const templateFunc2 = datas =>{
    const arr = datas.map( data => {
        let result = siteTemplate2(data);
        refs.bodyEl.insertAdjacentHTML("beforeend", result);
        return data.name;
    });
}
const templateFunc1 = datas =>{
    const arr = datas.map( data => {
        let result = siteTemplate(data);
        refs.bodyEl.insertAdjacentHTML("beforeend", result);
        return data.name;
    });
}

const getCountry = e => { 
    let countryName = e.target.value; 
        const promise = countries.sendRequest(allUrl+ 'name/' + countryName);
        // let liEls = document.querySelectorAll('li')
        // console.log(liEls);
        // liEls.forEach( li => {
        //     li.remove();
        // });
        let divEls = document.querySelectorAll('.container')
        console.log(divEls);
        divEls.forEach( div => {
            div.remove();
        });
        promise.then(datas => {
            console.log(datas.length);
            if(datas.length >= 10){
                 return error({text: 'To many'});
            }
            if(datas.length === 1){
                console.log('Oh shit');
                templateFunc2(datas);
            }
            else{
                templateFunc1(datas);
                return success({text: 'Nice'});
            }
        });
        console.log(countries.sendRequest(allUrl+ 'name/' + countryName));
} 
 
refs.inputEl.addEventListener('input', debounce(getCountry, 500));