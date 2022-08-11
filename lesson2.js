function getUsersfromServer(){
    let request = new XMLHttpRequest();

request.addEventListener('load', function(){ 
    let dabrunebuliPasuxi = this.responseText;
    let jsaddabrunebuliPasuxi =JSON.parse(dabrunebuliPasuxi);
    console.log(jsaddabrunebuliPasuxi);
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.textContent = jsaddabrunebuliPasuxi.data[1].year;

    ul.appendChild(li);
    document.getElementById('apiUsers').appendChild(ul);
})
request.open('GET','https://reqres.in/api/unknown');
request.send();
}
getUsersfromServer();