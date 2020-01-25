const showGFData = () => {
    const url = $("#google-form-url").val
    $.ajax({
        type:"GET",
        url: url
    }).done(html => {
        showAction(html.results[0]);
        showData(html.results[0]);
    });
};

function showAction(html){
    $('#action-view').text = $(html).find('form')[0].attr('action');
}

function showData(html){
    const elms = $(html).find('[class="freebirdFormviewerViewNumberedItemContainer"]');
    elms.each(elm => {
        const title = $(elm).text.match(/.+?\n/)[0].replace("\n","");
        const names = $(elm).text.match(/name="entry\..+?"/g);
        const formList = $("#form-list").prepend("ul");
        $(formList).prepend("<li>" + title +"</li>");
        for(name in names){
            $(formList).prepend("<li>" + name +"</li>");
        }
    });
}