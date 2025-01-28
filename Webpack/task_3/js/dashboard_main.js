import $ from "jquery";
import { debounce } from "lodash";
import '../css/main.css'

let counter = 0;


// Function increment counter
function updateCounter() {
  counter += 1;
  $('#count').text(`${counter} clicks on the button`);
}


// Funciton who generate HTML.
$(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
  $('button').on('click', _.debounce(updateCounter, 500));
});