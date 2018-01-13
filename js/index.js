//this popup will show up after playr get level 4 then he/she win cup
function alertNumber() {
    $(function () {
        //here call css method make popup visible on player screen 
        $('.popup')
            .css({
                'transform': 'translateY(0)'
                , 'visibility': 'visible'
                , 'z-index': '900'
            });
        //will hidden background by shadow 
        $('body')
            .addClass('overlay');
        //show cup image 
        $('.popup .img')
            .animate({
                left: '0'
            }, 1000);

        $(this)
            .css({
                'z-index': '-1'
            });
        //close botton to close windows 
        $('.popup > .close')
            .on('click', function () {
                //to remove popup from screen 
                $(this)
                    .parent()
                    .css({
                        'transform': 'translateY(-100%)'
                    });
                //remove shdow from background 
                $('body')
                    .removeClass('overlay');
                $(this)
                    .parent()
                    .siblings('.btn')
                    .css({
                        'z-index': '1'
                    });
                //hidden popup
                $('.popup')
                    .css({
                        'visibility': 'hidden'
                    , });
                level = 1;
                document.getElementById("myspan")
                    .innerHTML = level;
            });
    });
}
