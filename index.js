let path_to_img = "images/";
var input = document.getElementById('input-img');
var result = document.getElementById('result');
counter = 0;

function handleImage(fileInput){
    let file = fileInput.files;
    for(let i = 0; i < file.length; i++){
        let div = document.createElement('div');
        div.setAttribute('id', 'file-' + counter);
        result.append(div);

        let name = file.item(i).name;
        let type = file.item(i).type;

        generateImg(div, counter, name, type);
        counter++;
    }
}

function generateResult(IMG){
    let fileID = IMG.id.slice(3);
    console.log(fileID)
    let root = document.getElementById('file-' + fileID);
    let div = document.createElement('div');
    div.setAttribute('class', 'text-' + fileID);
    root.append(div);

    let img = document.getElementById(IMG.id);
    let width = img.naturalWidth;
    let height = img.naturalHeight;
    let size = width + 'x' + height;

    let headerName = document.createElement('h3');
    headerName.innerHTML = 'Name: ' + IMG.name;
    div.append(headerName);

    let text = document.createElement('p');
    text.innerHTML = "<br>Size: " + size;
    div.append(text);
}

function generateImg(root, counter, name, type){
    let img = document.createElement('img');
    img.setAttribute('src', path_to_img + name);
    img.setAttribute('name', name);
    img.setAttribute('width', '100');
    img.setAttribute('height', ' 100');
    img.setAttribute('id', 'img' + counter);
    img.setAttribute('onload', 'generateResult(this)');
    root.append(img);
}