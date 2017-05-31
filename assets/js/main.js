jQuery(document).ready(function($) {
    var box = $('a.box');
    var meeseeksFace = $('#meeseeks_face');
    var audios = {
      "im_mr_meeseeks": $('audio.im_mr_meeseeks'),
      "oooh_yeaaah_caaaan_dooo": $('audio.oooh_yeaaah_caaaan_dooo'),
      "you_make_a_request": $('audio.you_make_a_request')
    };

    var form = $('form');
    var formInput = $(form).find('input.request');
    var formHelp = $(form).find('a.help');

    var reset = function() {
        form.removeClass('visible');
        meeseeksFace.hide();

        formInput.val('');
    };

    box.on('click', function(e) {
        reset();

        meeseeksFace.fadeIn();

        audios.im_mr_meeseeks.trigger('play');

        e.preventDefault();
    });

    audios.im_mr_meeseeks.on('ended', function() {
        form.addClass('visible');
        formInput.focus();
    });

    form.on('submit', function(e) {
        audios.oooh_yeaaah_caaaan_dooo.trigger('play');

        e.preventDefault();
    });

    formHelp.on('click', function(e) {
        audios.you_make_a_request.trigger('play');
        formInput.focus();

        e.preventDefault();
    });
});
