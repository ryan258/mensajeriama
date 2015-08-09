$('body').scrollspy({ target: '#nav' })

$('#nav').affix({
    offset: {     
      top: $('#nav').offset().top
    }
});