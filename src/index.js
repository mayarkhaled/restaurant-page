import {setup} from './homeTap.js'
import {menu} from './menuTap.js'
const hometap = document.querySelector('#tab2-1');
const menutap = document.querySelector('#tab2-2');
const container = document.querySelector('.container');
home();
hometap.addEventListener('click' , home);

menutap.addEventListener('click' , ()=>{     
      const content = document.querySelector('#content')
      const d = menu();
      container.removeChild(content);
      container.appendChild(d);
});

function home(){
      
     const content = document.querySelector('#content')
     const div = setup();
     container.removeChild(content);
     container.appendChild(div);
}


