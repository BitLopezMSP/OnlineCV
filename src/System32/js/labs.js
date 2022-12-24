async function load() {

  const requestObj = `../../Users/data/courses.json`;
  const request = new Request(requestObj);

  const response = await fetch(request);
  const courses = await response.json();

  tellCourses(courses);

};
function tellCourses(obj) {
  console.log(`Objeto: ${obj.title}`);
}
load();




function* fNextCredentialGen(number) {




  for (let value of number) {

    yield value;

  }


};


/* var arr = arreglo;
for (let i =0; i=arr.length -1; i++){
yield arr[i];

}*/
const AllThemPDFs = [];
for (let i = 0; i < 38; i++) {
  AllThemPDFs.push(i + 1);
  //console.log(`Es ${i} y luego ${i+1}`);
}
//console.log(AllThemPDFs);
const it = fNextCredentialGen(AllThemPDFs);

let PDFCurrent = `a (${it.next().value})`;
//console.log(it.next()); { value: 1, done: false }
console.log(PDFCurrent); //returnea 1
console.log(PDFCurrent);
/*console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);*/