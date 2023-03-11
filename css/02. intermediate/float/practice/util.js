document.addEventListener("DOMContentLoaded", function(){
	let all = document.querySelectorAll("*");
	all.forEach(function(node) {
		if(node.hasAttribute("data-repeat")) {
			let repeat = parseInt(node.getAttribute('data-repeat'));
			node.removeAttribute('data-repeat');
			let parent = node.parentElement;
			parent.removeChild(node);

			for(let j=0;j<repeat;j++) {
				let clone = node.cloneNode(true);
				let outerHTML = node.outerHTML;
				if(outerHTML.includes('{index}')) {
					outerHTML = outerHTML.replaceAll('{index}', j + 1);
				}
				parent.insertAdjacentHTML('beforeend', outerHTML);
			}
		}
	});
	all = document.querySelectorAll("*");
	all.forEach(function(node) {
		const lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut massa sit amet nunc bibendum scelerisque imperdiet nec ex. ";
		if(node.hasAttribute("data-lipsum")) {
			let count = parseInt(node.getAttribute('data-lipsum'));
			node.innerText = lipsum.repeat(count);
		}
	})
});