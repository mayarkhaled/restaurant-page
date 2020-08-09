 function setup(){
    const div = document.createElement('div');
    const h = document.createElement('h');
    const p = document.createElement('p');
    div.id = 'content';
    div.style.padding = '10px'
    h.textContent = "Welcome to Meya's";
    h.style.fontWeight = 'bold';
    h.style.fontSize = '25px'
    p.textContent = "Here are meya's restaurant which provid to customer our special pizza with its all kinds from all cultures "+
                    " we provid the best quality and the best prices , we hire the best chefs for you . visit us in 26 korba st - cairo " ;

    p.style.fontSize = '20px';
    p.style.fontWeight = 'italic'                
   div.appendChild(h);
   div.appendChild(p);
   return div;                 
}
export {setup};
