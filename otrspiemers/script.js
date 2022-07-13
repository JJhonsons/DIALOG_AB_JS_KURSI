var up = document.getElementById('GFG_UP');
		up.innerHTML = "Nospiediet pogu lai redzētu bildi";
		var down = document.getElementById('GFG_DOWN');
		
		function GFG_Fun() {
			var img = document.createElement('img');
			img.src =
'https://www.zbrushcentral.com/uploads/default/original/3X/c/1/c1952cf4b91ac35af547389311d024d5fb9a2d30.jpeg';
			document.getElementById('body').appendChild(img);
			down.innerHTML = "Image Element Added.";
		}