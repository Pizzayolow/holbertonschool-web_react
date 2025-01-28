// Importer jQuery
import $ from 'jquery';

// Ajouter les éléments HTML dans l'ordre demandé
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');


export function updateCounter() {
    let count = parseInt($('count'.text()));
    count += 1;

    $('#count').text(count);
}

$('button').click(updateCounter);