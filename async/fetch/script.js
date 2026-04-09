//FETCHING A JSON FILE
fetch('./movies.json')
.then((response)  => response.json())
.then((data) => console.log(data));

//FETCHING A TEXT FILE
fetch('./test.txt')
.then((response)  => response.text())
.then((data) => console.log(data));

//Fetching from an API