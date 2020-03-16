const field = document.querySelector('#field');
const tdsArr = [];

function createField(cols, rows) {

	for (let i = 0, n = 0; i < rows; i++) {
		const tr = document.createElement('tr');
		field.appendChild(tr);
		for (let j = 0; j < cols; j++) {
			const td = document.createElement('td');
			tr.appendChild(td);
			td.id = n;
			n++;
		}
	}

	for (let i = 0; i < cols*rows; i++) {
		tdsArr.push(0);
	};

}

createField(10, 10);

field.querySelectorAll('td').forEach(function(el) {
	el.addEventListener('click', function() {
		if (this.style.background === 'black') {
			this.style.background = 'none'
			tdsArr[this.id] = 0;
		} 
		else {;
			this.style.background = 'black';
			tdsArr[this.id] = 1;
		}
	})
});

clear.onclick = function() {
	field.querySelectorAll('td').forEach(function(el) {
		el.style.background = 'none';
	});
}

restore.onclick = function() {
	field.querySelectorAll('td').forEach(function(el) {
		if (tdsArr[el.id] === 1) {
			el.style.background = 'black';
		}	
	});
}






