
let filter = (works,filtter_name) =>{
	if (filtter_name) {
		let filtter_name_length = Object.keys(filtter_name).length;
		for (let i = filtter_name_length - 1; i >= 0; i--) {
			name = filtter_name[i];
			let works_length = Object.keys(works[name]).length;
			console.log(works_length)
			for (let i = works_length - 1; i >= 0; i--) {
				console.log(works[name][i].img_url)
				document.getElementById('ourWorks').insertAdjacentHTML('beforeend', '<div class="img_wrapper"><img class="img" src="'+works[name][i].img_url+'" alt="'+works[name][i].name+'"><div class="work_hover"><i class="far fa-eye"></i><span class="title">'+works[name][i].name+'</span><span class="category">'+works[name][i].category+'</span></div></div>');
			}
		}
	}else{
		let works_length = Object.keys(works).length;
		for (let i = works_length - 1; i >= 0; i--) {
			console.log(works[i].img_url)
			document.getElementById('ourWorks').insertAdjacentHTML('beforeend', '<div class="img_wrapper"><img class="img" src="'+works[i].img_url+'" alt="'+works[i].name+'"><div class="work_hover"><i class="far fa-eye"></i><span class="title">'+works[i].name+'</span><span class="category">'+works[i].category+'</span></div></div>');
		}
	}
}


let database = (filterName) =>{
	let works,
		filtter_name;

	fetch('database/our_work.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			if (filterName === 'all') {
				filtter_name = data.works.filtter_name
				works = data.works
				filter(works, filtter_name)
			}else{
				works = data.works[filterName]
				filter(works)
			}
		})
}

let deleteAll = () => {
	let element = document.getElementById('ourWorks');
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}



let filterMenu = () =>{
	let item_array = document.querySelectorAll('#fillterMenu li')
		active_fillter = 0;
		item_array = Array.from(item_array);

	document.querySelector('#fillterMenu').addEventListener('click', (e)=>{
		if (e.target.tagName === 'LI') {
			let filterName = e.target.getAttribute('data-fillter');
			deleteAll()
			database(filterName);
			item_array[active_fillter].classList.remove('active');
			active_fillter = item_array.indexOf(e.target);
			item_array[active_fillter].classList.add('active');
		}
	})
}




document.addEventListener('DOMContentLoaded', function(){
	filterMenu();
	database('all');

	document.getElementById('openMemu').addEventListener('click', ()=>{
		document.getElementById('menuWrapper').style.display = 'flex';
		document.getElementById('menuWrapper').style.background = '#333';
		document.getElementById('menuWrapper').style.zIndex = '2';
	})

	document.getElementById('menuWrapper').addEventListener('click', ()=>{
		document.getElementById('menuWrapper').style.display = 'none';
	})
		

});