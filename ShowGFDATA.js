const showGFData = () => {
    const url = $("#google-form-url").val
    $.ajax({
        url: url, 
        cache: false,
        success: (html) => {
            showAction(html);
            showData(html);
        }
    });
};

function showAction(html){
    $('#action-view').text = $(html).find('form')[0].attr('action');
}

function showData(html){
    const elms = $(html).find('class="freebirdFormviewerViewNumberedItemContainer"]');
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