$(function() {
    "use strict";
    
var $gallery = $('.gallery-container')
    
$gallery
    .find('a')
    .colorbox({
    'rel':'gallery',
    'maxWidth':'90%',
    'innerHeight':'90%'
    });
    
$gallery
    .find('a')
    .colorbox({
    'rel':'gallery',
    'maxWidth':'90%',
    'transition':'fade',
    'speed':200,
    'opacity':0.8,
    'current':''
    });
});


