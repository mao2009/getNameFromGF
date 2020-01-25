const showGFData = () => {
    const url = $("#google-form-url").val
    console.log(url)
    $.ajax({
        type:"GET",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfmcP1PYmr4BCJ7tdBN5ZF_5lLUQWdL8ixZ9B5En6EWcjcnjw/viewform"
    }).done(html => {
        //showAction(html.results[0]);
        //showData(html.results[0]);
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