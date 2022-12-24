/*carouselPrevious
carouselNext

*/
window.addEventListener("load", cargadoDOMindex);
/*const carouselNext = document.getElementById('carouselNext');
const carouselPrevious = document.getElementById('carouselPrevious');
carouselPrevious.onclick = carouselpatch();
carouselNext.onclick = carouselpatch();*/

async function cargadoDOMindex() {

    /*let iFromWhileOnload = 0;
    var intervalId = window.setInterval(function () {
        // call your function here

        if (iFromWhileOnload > 30) {
            clearInterval(intervalId);
        } else {
            cargarBadges();
        }
        ++iFromWhileOnload;
    }, 5321);*/

    /*
    do {
        setTimeout()
        
        ++iFromWhileOnload;
        
    } while (  iFromWhileOnload < 30);*/




}
//setTimeout(functionRef, delay, param1, param2)

function cargarBadges() {

    console.log('cargarBadges llamada');

    // document.getElementById('phpbadge').classList.add("active");
    const baseRoute = './Users/Santiago/credenciales/NextU/';
    const badgesObject = {
        phpOOP: {
            alt: `PHP OOP`,
            route: `PHP_OOP.png`,
        },
        css3: {
            alt: `CSS 3`,
            route: `CSS3.png`,
        },
        html5: {
            alt: `HTML 5`,
            route: `HTML5.png`,
        },
        javascript: {
            alt: `JavaScript`,
            route: `JavaScript.png`,
        },
        jQuery: {
            alt: `jQuery`,
            route: `jQuery_por_ejemplos.png`,
        },
        jQueryUI: {
            alt: `jQuery UI`,
            route: `jQuery_UI_-_Web.png`,
        },
        XML: {
            alt: `XML`,
            route: `XML.png`,
        },

    }
    const howmanybadges = 6; //first element is 0


    //console.log( Math.floor(Math.random() * 7));

    //console.log(badgesObject[Object.keys(badgesObject)[0]].route);
    var badge1Math = Math.floor(Math.random() * howmanybadges);
    //console.log(badge1Math);
    var badge1 = [badgesObject[Object.keys(badgesObject)[badge1Math]].route, badgesObject[Object.keys(badgesObject)[badge1Math]].alt];
    // console.log('1');
    // console.log(badge1);

    var badge2Math = Math.floor(Math.random() * howmanybadges);
    //console.log(badge2Math);

    badge2Math = badge1Math;
    // console.log(badge2Math);
    if (badge2Math === badge1Math) {
        badge2Math = ++badge2Math;
        console.log(badge2Math);
        var badge2 = [badgesObject[Object.keys(badgesObject)[badge2Math]].route, badgesObject[Object.keys(badgesObject)[badge2Math]].alt];
        console.log(badge2);
        // console.log('2');
        // console.log(badge2);



    } else {

        badge2 = [badgesObject[Object.keys(badgesObject)[badge2Math]].route, badgesObject[Object.keys(badgesObject)[badge2Math]].alt];
        // console.log('a');
        // console.log(badge2);

    }

    var badge3Math;

    var iFromWhile = 0;



    do {
        badge3Math = Math.floor(Math.random() * howmanybadges);
        ++iFromWhile;
    } while ((badge3Math === badge2Math || badge3Math === badge1Math) && iFromWhile < 10);

    if (badge3Math === badge2Math || badge3Math === badge1Math) {
        badge1Math = 2;
        badge2Math = 3;
        badge3Math = 4;

        badge1 = [badgesObject[Object.keys(badgesObject)[badge1Math]].route, badgesObject[Object.keys(badgesObject)[badge1Math]].alt];

        badge2 = [badgesObject[Object.keys(badgesObject)[badge2Math]].route, badgesObject[Object.keys(badgesObject)[badge2Math]].alt];
        // console.log('3');
        // console.log(badge1);
        //  console.log('4');
        // console.log(badge2);
    }

    var badge3 = [badgesObject[Object.keys(badgesObject)[badge3Math]].route, badgesObject[Object.keys(badgesObject)[badge3Math]].alt];
    // console.log(badge1);
    // console.log(badge2);
    // console.log(badge3);

    // console.log('5');
    // console.log(badge3);


    //button.setAttribute("name", "helloButton");
    if (!document.getElementById('carousel-item-3').classList.contains("active")) {
        document.getElementById('carouselIMG3').setAttribute("src", `${baseRoute}${badge3[0]}`);
        document.getElementById('carouselIMG3').setAttribute("alt", `${badge3[1]}`);

    }
    if (!document.getElementById('carousel-item-2').classList.contains("active")) {
        document.getElementById('carouselIMG2').setAttribute("src", `${baseRoute}${badge2[0]}`);
        document.getElementById('carouselIMG1').setAttribute("alt", `${badge2[1]}`);
    }
    if (!document.getElementById('carousel-item-1').classList.contains("active")) {
        document.getElementById('carouselIMG1').setAttribute("src", `${baseRoute}${badge1[0]}`);
        document.getElementById('carouselIMG1').setAttribute("alt", `${badge1[1]}`);

    }


    //console.log(`${baseRoute}${badge3[0]}`)
    //console.log(`${badge3[1]}`);

}

cargarBadges();

function NextUaccordionUI(WhatToShide) {
    if (WhatToShide > 2) {
        return new Error('Wrong value assigned to function accordionUI');
    }
    const elementsofaccordion = {
        primerCertifcado: {
            div: 'primerCertifcado',
            li: 'LIprimerCertifcado'

        },
        NextUFrontend: {
            div: 'NextUFrontend',
            li: 'LINextUFrontend'
        },
        NextUotros: {
            div: 'NextUotros',
            li: 'LINextUotros'
        },
    }
    //console.log(elementsofaccordion[Object.keys(elementsofaccordion)[WhatToShide]].div);
    //page-item
    //divAccordion
    var gradiente = `: linear-gradient(90deg, rgba(27, 164, 216, 1) 0%, rgba(67, 127, 227, 1) 35%, rgba(151, 53, 252, 1) 100%) !important;`;
    for (let i = 0; i < 3; i++) {
        /*let LIs = [];
        LIs.push(elementsofaccordion[Object.keys(elementsofaccordion)[i]].li);*/
        //console.log(LIs);
        console.log(i);
        //document.getElementById(LIs[i]).classList.remove('active');
        document.getElementById(elementsofaccordion[Object.keys(elementsofaccordion)[i]].li).classList.remove('active');

        document.getElementById(elementsofaccordion[Object.keys(elementsofaccordion)[i]].div).classList.add('seesconde');
    }
    //let itemAccoirdion = document.getElementsByClassName('itemAccoirdion');


    //itemAccoirdion.classList.remove('active');
    document.getElementById(`${elementsofaccordion[Object.keys(elementsofaccordion)[WhatToShide]].li}`).setAttribute('class', 'active');

    //document.getElementsByClassName('divAccordion').setAttribute('class', 'seesconde');
    document.getElementById(`${elementsofaccordion[Object.keys(elementsofaccordion)[WhatToShide]].div}`).classList.remove('seesconde');

}



function PlatziaccordionUI(WhatToShide) {
    if (WhatToShide > 2) {
        return new Error('Wrong value assigned to function PlatziaccordionUI');
    }
    const elementsofaccordion = {
        DesWeb: {
            div: 'DesWeb',
            li: 'LIPlatziDesWeb'

        },
        PlatziSeguridad: {
            div: 'PlatziSeguridad',
            li: 'LIPlatziSeguridad'
        },
        PlatziData: {
            div: 'PlatziData',
            li: 'LIPlatziData'
        },
    }
    //console.log(elementsofaccordion[Object.keys(elementsofaccordion)[WhatToShide]].div);
    //page-item
    //divAccordion
    var gradiente = `: linear-gradient(90deg, rgba(27, 164, 216, 1) 0%, rgba(67, 127, 227, 1) 35%, rgba(151, 53, 252, 1) 100%) !important;`;
    for (let i = 0; i < 3; i++) {
        /*let LIs = [];
        LIs.push(elementsofaccordion[Object.keys(elementsofaccordion)[i]].li);*/
        //console.log(LIs);
        console.log(i);
        //document.getElementById(LIs[i]).classList.remove('active');
        document.getElementById(elementsofaccordion[Object.keys(elementsofaccordion)[i]].li).classList.remove('active');

        document.getElementById(elementsofaccordion[Object.keys(elementsofaccordion)[i]].div).classList.add('seesconde');
    }
    //let itemAccoirdion = document.getElementsByClassName('itemAccoirdion');


    //itemAccoirdion.classList.remove('active');
    document.getElementById(`${elementsofaccordion[Object.keys(elementsofaccordion)[WhatToShide]].li}`).setAttribute('class', 'active');

    //document.getElementsByClassName('divAccordion').setAttribute('class', 'seesconde');
    document.getElementById(`${elementsofaccordion[Object.keys(elementsofaccordion)[WhatToShide]].div}`).classList.remove('seesconde');

}






//console.log(` iFromWhile: ${iFromWhile}, badge3Math: ${badge3Math}, badge2Math: badge2Math: ${badge2Math}, ${badge1Math}`);
// 
/*  
if (badge1Math === 1 || badge2Math ===1){

        }
newobject = nodes['hello.com']['id3'];
console.log(badgesObject[Object.keys(badgesObject)[0]].route);

console.log(badgesObject[Object.keys(badgesObject)[0]].route);

console.log(badgesObject[Object.keys(badgesObject)[0]].route);

console.log(badgesObject[Object.keys(badgesObject)[0]].route);



*/

function OpenModalPlatzi(course) {
    let Course = course;

    const FullStackObj = {
        course1: {
            title: 'Curso de Prework: Configuración de Entorno de Desarrollo en Windows',
            completion: 100,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course2: {
            title: 'Curso de  Prework: Configuración de Entorno de Desarrollo en Linux',
            completion: 100,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course3: {
            title: 'Curso de Prework: Configuración de Entorno de Desarrollo en macOS',
            completion: 100,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course4: {
            title: 'Curso de Introducción a la Terminal y Línea de Comandos',
            completion: 100,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course5: {
            title: 'Curso Profesional de Git y GitHub',
            completion: 100,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course6: {
            title: 'Curso de Frontend Developer',
            completion: 100,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course7: {
            title: 'Curso Práctico de Frontend Developer',
            completion: 100,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course8: {
            title: 'Curso Básico de JavaScript',
            completion: 100,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course9: {
            title: 'Curso Práctico de JavaScript',
            completion: 100,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course10: {
            title: 'Curso de ECMAScript: Historia y Versiones de JavaScript',
            completion: 100,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course11: {
            title: 'Curso de Asincronismo con JavaScript',
            completion: 100,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course12: {
            title: 'Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript',
            completion: 100,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course13: {
            title: 'Curso de Webpack',
            completion: 54,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course14: {
            title: 'Curso Práctico de React.js',
            completion: 0,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course15: {
            title: 'Curso Práctico de Next.js',
            completion: 0,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course16: {
            title: 'Curso Profesional de Next.js',
            completion: 0,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course17: {
            title: 'Curso para Conseguir Trabajo como Frontend Developer',
            completion: 0,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course18: {
            title: 'Curso de Fundamentos de Bases de Datos',
            completion: 0,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course19: {
            title: 'Curso de Fundamentos de Node.js',
            completion: 0,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course20: {
            title: 'Curso de Backend con Node.js: API REST con Express.js',
            completion: 0,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course21: {
            title: 'Curso de Backend con Node.js: Base de Datos con PostgreSQL',
            completion: 0,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },
        course22: {
            title: 'Curso de Backend con Node.js: Autenticación con Passport.js y JWT',
            completion: 0,
            belongs: 'Full Stack Developer',
            howMany: 22,
        },


    }

    if (Course === 0) {
        document.getElementById('ModalTitle').innerText = `Cursos de ${FullStackObj[Object.keys(FullStackObj)[0]].belongs}`;
        let WhatIsWritten = `<h4>Cursos de la Ruta:</h4>`;
        for (let i = 0; i < FullStackObj[Object.keys(FullStackObj)[0]].howMany; i++) {
            /*let LIs = [];
            LIs.push(FullStackObj[Object.keys(FullStackObj)[i]].li);*/
            //console.log(LIs);
            //console.log(i);
            console.log(FullStackObj[Object.keys(FullStackObj)[0]].howMany);
            //document.getElementById(LIs[i]).classList.remove('active');
            WhatIsWritten = WhatIsWritten += `<h5>${FullStackObj[Object.keys(FullStackObj)[i]].title}</h5>
            <div class="progress">
              <div class="progress-bar" style="width:${FullStackObj[Object.keys(FullStackObj)[i]].completion}%">${FullStackObj[Object.keys(FullStackObj)[i]].completion}%</div>
            </div>`;

        }
        document.getElementById('courses').innerHTML = WhatIsWritten;

    } else {
        return alert('No hice los demás');
    }


    document.getElementById("abrirModal").click();

    /*
    PlatziData
    PlatziSeguridad
    PlatziDesWeb
    
    <h4>Cursos de la Ruta:</h4>
                  <h5>Curso 1</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width:100%">100%</div>
                  </div>
        */
    //ModalTitle
    //ModalP
    //ModalStrong

}

//NextCredential
//HTMLObject
//document.getElementById('NextCredential').addEventListener('click', fNextCredential() , false);




function* fNextCredentialGen() {


    let index = 1;
    while (index <= 26) {
        yield index++;

    }


    /* for (let value of number){
      
     yield value;
    }*/




};


/* var arr = arreglo;
for (let i =0; i=arr.length -1; i++){
yield arr[i];
 
}*/
//var AllThemPDFs = [];
//var it = fNextCredentialGen(AllThemPDFs);
var Gen = fNextCredentialGen();
function fNextCredential() {


    /*for (let i=0; i <38; i++){
      AllThemPDFs.push(i+1);
      //console.log(`Es ${i} y luego ${i+1}`);
    }*/
    //console.log(AllThemPDFs);


    //let PDFCurrent =`a (${it.next().value})`;
    //console.log(it.next()); { value: 1, done: false }
    //returnea 1

    //Summa(it)

    let GenValue = Gen.next().value;

    if (GenValue === 26) {
        document.getElementById('NextCredential').removeAttribute('onclick');
        document.getElementById('HTMLObject').setAttribute('data', `../../Users/Santiago/credenciales/AllOfThem/pdf/a (${GenValue}).pdf`);
        document.getElementById('NextCredential').setAttribute('onclick', `alert('Ya vio todas las credenciales');`);
        console.log(GenValue);

    } else {

        document.getElementById('HTMLObject').removeAttribute('data');
        document.getElementById('HTMLObject').setAttribute('data', `../../Users/Santiago/credenciales/AllOfThem/pdf/a (${GenValue}).pdf`);
        console.log(GenValue);
    }

}

