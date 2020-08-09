
function createItem(item){
    const div = document.createElement('div');
    const photo = document.createElement('img');
    const br = document.createElement('br');
    photo.src = item.img;
    photo.style.width = '280px';
    photo.style.height = '180px';


    const h = document.createElement('h');
     h.textContent = item.name;
     h.style.fontSize = '20px';
     h.style.margin = '10px'

    const label = document.createElement('label');
    label.textContent = item.price;
    div.appendChild(photo);
    div.appendChild(br);
    div.appendChild(h);
    div.appendChild(label);
    
    div.style.border = 'solid';
    div.style.margin = '10px'
    return div;
}
export {createItem} ;