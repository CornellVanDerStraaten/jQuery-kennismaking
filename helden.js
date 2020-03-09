$(document).ready( function() {
    
    // test
    // $('main').hide(3000).delay(1000).show(5000);

    // Mouse events
    $('figure img').mouseenter( function() {
        $(this).fadeTo(1000, .1);
    }).mouseleave( function() {
        $(this).fadeTo(1000, 1);
    }).click( function() {
        $(this).next().toggle(700);
    })

    $('#clickMe').click( function() {
       alert("SURPRISE!");
    })

    $("#hideMain").click( function() {
       $('main').slideToggle(1000, 'swing')
    });
    // footer

    $('footer').click( function() {
        $(this).animate( {
            top: '-=100px',
            'padding-top': '+=200px'
        }, 800);
    }).dblclick( function() {
        $(this).fadeTo(10000, -0.1)
    })
    $('.js-example-basic-single').select2();
});
