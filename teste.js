$(function() {
    $(':input').css('backgroundColor', 'cyan');
    $(':text').css('backgroundColor', 'yellow');
    $(':password').css('backgroundColor', 'cyan');
    $(':radio').parent().css('backgroundColor', 'yellow');
    $(':submit').css('backgroundColor', 'cyan');
    $('#txt').val($('option:selected').text() + 'está selecionado!');

});