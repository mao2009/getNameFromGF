document.querySelectorAll('div[class="freebirdFormviewerViewNumberedItemContainer"]').forEach(div=>{
    const title = div.innerText.match(/.+?\n/)[0].replace("\n","")
    const result = div.innerHTML.match(/name="entry\..+?"/g)
    let names = ""
    for(let r in result){
        names += " " + result[r]
    }
    console.log( title + " :" + names)
})
