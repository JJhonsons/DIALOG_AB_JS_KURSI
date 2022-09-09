let note = document.querySelector('.note');
console.log(note.parentNode);

let content = document.getElementById('menu');
let firstChild = content.firstChild;
console.log("...firstChild: ",firstChild);
console.log("...firstChild.nodeType: ",firstChild.nodeType);
console.log("...firstChild.nodeName: ",firstChild.nodeName);


        let div = document.createElement('div');
        div.id = 'content';
        div.className = 'note';
        div.innerHTML = '<p>CreateElement example</p>';
        
        document.body.appendChild(div);

        let li = document.createElement('li');
        li.textContent = 'Products';
        menu.appendChild(li);
        
        li = document.createElement('li');
        li.textContent = 'About Us';
        
        // select the ul menu element
        const menu = document.querySelector('#menu');
        menu.appendChild(li);