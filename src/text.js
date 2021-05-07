const text1 = ` @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

*{
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(32, 30, 30);
}

.container {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 256px;
  text-align: center;
  border: 10px solid rgb(14, 13, 13) ;
  background-color: rgb(14, 13, 13);
  border-radius: 5px;
}

.keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(60px, auto);
  background-color: rgb(14, 13, 13);
}

input[type="text"]{
  height: 75px;
  width: 249px;
  background-color: rgb(14, 13, 13);
  border: 0px;
  color: #ffffff;
  text-align: right;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 1px;
}

#clear {
  grid-column: 1/3;
  grid-row: 1;
  color: #262834;
}

#result {
  grid-column: 3/5;
  grid-row: 5;
  color: #262834;
}

#backspace {
  color: #262834;
}

button {
  margin: 5px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background: #262834;
  color: #ffffff;
  font-weight: 500;
}

input:focus,
input:active,
button:focus,
button:active {
  outline: none;
}

.highlight {
  background: gold;
}`

const text2 = `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

*{
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.container {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 256px;
  text-align: center;
  border: 10px solid rgb(100, 100, 100) ;
  background-color: rgb(100, 100, 100);
  border-radius: 5px;
}

.keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(60px, auto);
  background-color: rgb(206, 206, 206)
}

input[type="text"]{
  height: 75px;
  width: 249px;
  background-color: rgb(100, 100, 100);
  border: 0px;
  color: #ffffff;
  text-align: right;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 1px;
}

#clear {
  grid-column: 1/3;
  grid-row: 1;
  color: #262834;
}

#result {
  grid-column: 3/5;
  grid-row: 5;
  color: #262834;
}

#backspace {
  color: #262834;
}

button {
  margin: 5px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background: #38393f;
  color: #ffffff;
  font-weight: 500;
}

input:focus,
input:active,
button:focus,
button:active {
  outline: none;
}

.highlight {
  background: orangered;
}`
export { text1, text2 }