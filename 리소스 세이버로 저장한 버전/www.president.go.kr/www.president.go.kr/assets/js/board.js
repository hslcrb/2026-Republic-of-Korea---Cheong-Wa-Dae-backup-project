$(document).ready(function() {

    $(".btn_search").click(function() {
        $('input[name=page]').val(1);
        search_form.action = '';
        search_form.submit();
    });

})

function move_page(page, url) {
    if (url > '') {
        search_form.action = url;
    } else {
        search_form.action = '';
    }
    $('input[name=page]').val(page);
    search_form.submit();
}

function move_detail(url) {
    location.href = url;
}