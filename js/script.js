'use strict';

const body = document.body;

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const copyBtn = document.querySelector('.copy-btn');

body.style.background = `
    linear-gradient(90deg, ${'#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()}, ${'#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()})
`;

result.value = body.style.background;

btn.addEventListener('click', changeColor);

function changeColor() {
    body.style.background = `
        linear-gradient(90deg, ${'#' + (Math.random().toString(16) + '000000').substring    (2, 8).toUpperCase()}, ${'#' + (Math.random().toString(16) + '000000').substring    (2, 8).toUpperCase()})
    `;
    result.value = body.style.background;
}

copyBtn.addEventListener('click', clipBoard);

function clipBoard() {

    result.select();

    document.execCommand('copy');
}