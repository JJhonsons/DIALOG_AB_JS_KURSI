/*const node = document.documentElement.firstChild;
if (node.nodeType !== Node.COMMENT_NODE) {
  console.warn("You should comment your code!");
}
else {
    console.warn("Siet ir komentars");
}
*/
/*
const p = document.createElement("p");
p.textContent = "Once upon a time…";
console.log(p.nodeType);
console.log(p.textContent);
console.log(p.textContent.nodeType);
*/

const firstChildNode = document.documentElement.firstChild;
if (firstChildNode.nodeType !== Node.COMMENT_NODE) {
    console.warn("You should comment your code!");
    console.log(firstChildNode.nodeType);
    console.log(firstChildNode.nodeName);
    console.log(firstChildNode.nodeValue);
}
else {
    console.log("Good! :-) code is commented/described");
    console.log(firstChildNode.nodeType);
    console.log(firstChildNode.nodeName);
    console.log(firstChildNode.nodeValue);
}

const secondChildNode = firstChildNode.nextSibling;
console.log(secondChildNode.nodeType);
console.log(secondChildNode.nodeName);
console.log(secondChildNode.nodeValue);

const thirdChildNode = secondChildNode.nextSibling;
console.log(thirdChildNode.nodeType);
console.log(thirdChildNode.nodeName);
console.log(thirdChildNode.nodeValue);

const fourthChildNode = thirdChildNode.nextSibling;
console.log(fourthChildNode.nodeType);
console.log(fourthChildNode.nodeName);
console.log(fourthChildNode.nodeValue);

const fifthChildNode = fourthChildNode.nextSibling;
console.log(fifthChildNode.nodeType);
console.log(fifthChildNode.nodeName);
console.log(fifthChildNode.nodeValue);

const lastChildNode = document.documentElement.lastChild;
console.log("\n");
console.log(lastChildNode.nodeType);
console.log(lastChildNode.nodeName);
console.log(lastChildNode.nodeValue);

console.log("\n");
console.log(document.firstChild.nodeType);
console.log(document.firstChild.nodeName);
console.log(document.firstChild.nodeValue);

const p = document.getElementById('message');
console.log(p);

let btn = document.getElementById('btnRate');
        let output = document.getElementById('output');

        btn.addEventListener('click', () => {
            let rates = document.getElementsByName('rate');
            rates.forEach((rate) => {
                if (rate.checked) {
                    output.innerText = `You selected: ${rate.value}`;
                }
            });

        });

        let elements = document.getElementsByName("rate");
        console.log(elements);

    document.getElementById('btnCount');
        btn.addEventListener('click', () => {
            let headings = document.getElementsByTagName('h2');
            alert(`The number of H2 tags: ${headings.length}`);
        });