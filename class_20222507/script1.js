function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create two Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Display age
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + ". My mother is " + myMother.age + "."; 

/*šis no vb lapas css  
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.wrap {
  margin: 2rem;

  transform-style: preserve-3d;
  transform: perspective(100rem);

  cursor: pointer;
}

.container {
  --rX: 0;
  --rY: 0;
  --bX: 50%;
  --bY: 80%;

  width: 30rem;
  height: 36rem;
  border: 1px solid var(--background-color);
  border-radius: 1.6rem;
  padding: 4rem;

  display: flex;
  align-items: flex-end;

  position: absolute;
  float: center;

  transform: rotateX(calc(var(--rX) * 1deg)) rotateY(calc(var(--rY) * 1deg));

  background: linear-gradient(hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1)), url("https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9");
  background-position: var(--bX) var(--bY);
  background-size: 40rem auto;
  box-shadow: 0 0 3rem .5rem hsla(0, 0%, 0%, .2);

  transition: transform .6s 1s;
}

.container::before,
.container::after {
  content: "";

  width: 2rem;
  height: 2rem;
  border: 1px solid #fff;

  position: absolute;
  z-index: 2;

  opacity: .3;
  transition: .3s;
}

.container::before {
  top: 2rem;
  right: 2rem;

  border-bottom-width: 0;
  border-left-width: 0;
}

.container::after {
  bottom: 2rem;
  left: 2rem;

  border-top-width: 0;
  border-right-width: 0;
}

.container--active {
  transition: none;
}

.container--1 {
filter: hue-rotate(40deg) saturate(140%) ;
}

.container--2 {
  filter: hue-rotate(80deg) saturate(140%);
}

.container--3 {
  filter: hue-rotate(160deg) saturate(140%);
}

.container p {
  color: hsla(0, 0%, 100%, .6);
  font-size: 2.2rem;
}

.wrap:hover .container::before,
.wrap:hover .container::after {
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
}

no idex faila
 <div class="wrap wrap--1">
                <div class="container container--1">
                  <p>01. Normal</p>
                </div>
              </div>
              
              <div class="wrap wrap--2">
                <div class="container container--2">
                  <p>02. Reverse</p>
                </div>
              </div>
              
              <div class="wrap wrap--3">
                <div class="container container--3">
                  <p>03. Normal</p>
                </div>
              </div>
              
              <script src="./script.js"></script>
    
