import {createItem} from './menuItem';


let menuItems = [];
menuItems.push(item('pizza' , '55LE' ,'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png' ));
menuItems.push(item('Pasta' , '40LE' ,'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg'))
menuItems.push(item('Burger' , '50LE' ,'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2019_df_retail_butter-burger_20912_760x580.jpg?ext=.jpg'));
menuItems.push(item('Fried chicken' , '60LE' , 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg'))

function item(name , price , img){
    return {name , price , img};
}


function menu(){
    const div = document.createElement('div');
    div.id = 'content';
    for(let i = 0 ; i < menuItems.length ; i++){      
      const item = createItem(menuItems[i]);
      div.appendChild(item);
    }
    div.style.marginLeft = '30em'
    return div;
}

export {menu};