let deleteAll = () => {
	let element = document.getElementById('ourWorks');
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}

let filter = (works,category) =>{
	deleteAll()
	if (works) {
		let works_length = Object.keys(works).length;
		for (var i = works_length-1; i >= 0; i--) {
			if(category === 'all'){
				document.getElementById('ourWorks').insertAdjacentHTML('beforeend', '<div class="img_wrapper"><img class="img" src="'+works[i].img_url+'" alt="'+works[i].name+'"><div class="work_hover"><i class="far fa-eye"></i><span class="title">'+works[i].name+'</span><span class="category">'+works[i].category+'</span></div></div>');
			}else{
				if (works[i].category === category) {
				document.getElementById('ourWorks').insertAdjacentHTML('beforeend', '<div class="img_wrapper"><img class="img" src="'+works[i].img_url+'" alt="'+works[i].name+'"><div class="work_hover"><i class="far fa-eye"></i><span class="title">'+works[i].name+'</span><span class="category">'+works[i].category+'</span></div></div>');
				}
			}
		}
	}
	
}

let filterMenu = (works) =>{
	let item_array = document.querySelectorAll('#fillterMenu li')
		active_fillter = 0;
		item_array = Array.from(item_array);
	filter(works, 'all');
	document.querySelector('#fillterMenu').addEventListener('click', (e)=>{
		if (e.target.tagName === 'LI') {
			let category = e.target.getAttribute('data-fillter');			
			filter(works,category);
			item_array[active_fillter].classList.remove('active');
			active_fillter = item_array.indexOf(e.target);
			item_array[active_fillter].classList.add('active');
		}
	})
}

let database = () =>{
	let works;

	fetch('database/our_work.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			if (data) {
				works = data.works
				filterMenu(works)
			}
		})
}

let pageScroll = () =>{
	document.getElementById('mainMenu').addEventListener('click', (e)=>{
		e.preventDefault(); 
  		let menu_id = e.target.getAttribute('data-menu'); 
  			if (menu_id) {
  				let id = document.getElementById(menu_id);

  				id.scrollIntoView({block: "start", behavior: "smooth"});
  			}
	});
}

let mobailMenu = () =>{
	document.getElementById('openMenu').addEventListener('click', ()=>{
		document.getElementById('menuWrapper').style.display = 'flex';
	})
	document.getElementById('menuWrapper').addEventListener('click', ()=>{
		document.getElementById('menuWrapper').style.display = 'none';
	})
}

document.addEventListener('DOMContentLoaded', ()=>{
	database();
	pageScroll();
	if (screen.width < 992) {
		mobailMenu();
	}

});