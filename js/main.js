// document selector
// const search = document.getElementById('search');
// const searchList = document.getElementById('search-list');

// search
//  display test

// async function displayInfo(){
//     const testText = document.getElementById('info');
//     const res = await fetch('data/breeds.json')
//     const test = await res.json();

// console.log(test)
    
// }
// displayInfo()


// initSelect()

// function initSelect(){
//     select = $('#selections').select2({
//         "ajax" : {
//             "url" : "https://api.thecatapi.com/v1/breeds",
//             "type" : "GET",
//             "dataSrc" : "",
//             "dataType" : "json",
//         },
//         "select": [{
//             "data" : "name"
//             },
//             {"data" : "origin"

//             },
//     ]
//     });
    
// }



// $('#selections').select2({
//     ajax: {
//         url: "http://api.thecatapi.com/v1/breeds",
//         data: function(breeds) {
//             var query = {
//                 search: breeds.origin,
//                 type: "public"
//             }
//             return query;
//         }
//     }
// });


// $('#selections').select2({
//     ajax: {
//         url: "http://api.thecatapi.com/v1/breeds",
//         processResults: function(data) {
//             return{
//                 results: data.name
//             }
//         }
//     }
// });


// $('#selections').select2({
//     placeholder: "Select an option here"
// })

/* problem di select tag html, waktu dicoba console log dengan posisi script main.js di atas, 
hasilnya 'null' tapi kalau script main.jsnya di bawah, dia dapet element nya*/
let selectTest = document.getElementById('selections')
console.log(selectTest);


// var selector = document.getElementById("selections");
// console.log($(selector).select2())

