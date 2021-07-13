const json = [{ "id": 1, "first_name": "Hermie", "last_name": "Wetherburn", "email": "hwetherburn0@i2i.jp", "gender": "Female", "job_title": "Help Desk Operator", "company_name": "Gleichner and Sons", "department": "Product Management", "avatar": "https://robohash.org/modilaboreillum.png?size=50x50&set=set1" },
{ "id": 2, "first_name": "Ailsun", "last_name": "Kinvig", "email": "akinvig1@exblog.jp", "gender": "Male", "job_title": "Cost Accountant", "company_name": "Littel-Abbott", "department": "Services", "avatar": "https://robohash.org/utveritatisbeatae.png?size=50x50&set=set1" },
{ "id": 3, "first_name": "Hannah", "last_name": "Tole", "email": "htole2@slashdot.org", "gender": "Female", "job_title": "Marketing Manager", "company_name": "Zieme and Sons", "department": "Marketing", "avatar": "https://robohash.org/accusamusquasqui.png?size=50x50&set=set1" },
{ "id": 4, "first_name": "Hilliard", "last_name": "Ellam", "email": "hellam3@mapy.cz", "gender": "Male", "job_title": "Accountant II", "company_name": "Davis, Jakubowski and Olson", "department": "Training", "avatar": "https://robohash.org/earumcumquenon.png?size=50x50&set=set1" },
{ "id": 5, "first_name": "Addia", "last_name": "Selbach", "email": "aselbach4@stumbleupon.com", "gender": "Male", "job_title": "Financial Analyst", "company_name": "Aufderhar-Labadie", "department": "Sales", "avatar": "https://robohash.org/nonrepellatex.png?size=50x50&set=set1" },
{ "id": 6, "first_name": "Norry", "last_name": "Swedeland", "email": "nswedeland5@wiley.com", "gender": "Female", "job_title": "Marketing Assistant", "company_name": "O'Conner Group", "department": "Marketing", "avatar": "https://robohash.org/voluptatemnihildeserunt.png?size=50x50&set=set1" },
{ "id": 7, "first_name": "Tallulah", "last_name": "Erwin", "email": "terwin6@storify.com", "gender": "Male", "job_title": "Senior Financial Analyst", "company_name": "Heidenreich-Mayer", "department": "Accounting", "avatar": "https://robohash.org/quasietrerum.png?size=50x50&set=set1" },
{ "id": 8, "first_name": "Kellie", "last_name": "Ellesworthe", "email": "kellesworthe7@omniture.com", "gender": "Male", "job_title": "Geological Engineer", "company_name": "Schroeder LLC", "department": "Business Development", "avatar": "https://robohash.org/etlaborequis.png?size=50x50&set=set1" },
{ "id": 9, "first_name": "Cthrine", "last_name": "Lomath", "email": "clomath8@i2i.jp", "gender": "Male", "job_title": "Account Executive", "company_name": "Kuhlman and Sons", "department": "Engineering", "avatar": "https://robohash.org/optioinventorevoluptatem.png?size=50x50&set=set1" },
{ "id": 10, "first_name": "Garry", "last_name": "Jupe", "email": "gjupe9@paginegialle.it", "gender": "Male", "job_title": "Help Desk Technician", "company_name": "Carter and Sons", "department": "Research and Development", "avatar": "https://robohash.org/placeatistefugiat.png?size=50x50&set=set1" },
{ "id": 11, "first_name": "Coretta", "last_name": "Caswill", "email": "ccaswilla@hc360.com", "gender": "Male", "job_title": "Web Designer III", "company_name": "Emmerich Group", "department": "Training", "avatar": "https://robohash.org/eumdelectusmaiores.png?size=50x50&set=set1" },
{ "id": 12, "first_name": "Lian", "last_name": "Saunders", "email": "lsaundersb@aol.com", "gender": "Female", "job_title": "Project Manager", "company_name": "Fay-Frami", "department": "Business Development", "avatar": "https://robohash.org/fugiatconsequunturlabore.png?size=50x50&set=set1" },
{ "id": 13, "first_name": "Talbot", "last_name": "Lutton", "email": "tluttonc@webmd.com", "gender": "Female", "job_title": "Database Administrator III", "company_name": "Krajcik Inc", "department": "Support", "avatar": "https://robohash.org/etomnisrem.png?size=50x50&set=set1" },
{ "id": 14, "first_name": "Alexei", "last_name": "McDoual", "email": "amcdouald@harvard.edu", "gender": "Female", "job_title": "Legal Assistant", "company_name": "Murphy Inc", "department": "Engineering", "avatar": "https://robohash.org/voluptatumquiaut.png?size=50x50&set=set1" },
{ "id": 15, "first_name": "Mason", "last_name": "Pagen", "email": "mpagene@360.cn", "gender": "Male", "job_title": "Web Developer II", "company_name": "Dickinson and Sons", "department": "Sales", "avatar": "https://robohash.org/doloresvoluptasdistinctio.png?size=50x50&set=set1" }]

const tables = document.querySelector('.tables')
//// CARA PERTAMA

// let f_nama = []
// let l_nama = []
// let kelamin = []
// let mail = []
// let job = []
// let company = []
// let departemen = []
// let avatar = []

// for (let data of json) {
//     f_nama.push(data.first_name)
//     l_nama.push(data.last_name)
//     kelamin.push(data.gender)
//     mail.push(data.email)
//     job.push(data.job_title)
//     company.push(data.company_name)
//     departemen.push(data.department)
//     avatar.push(avatar)
// }
// tables.forEach((el, idx) => {
//     el.innerHTML =
//         `<table class='table table-striped table-hover table-bordered bordered-primary'>
//              <thead class='table-dark'>        
//                  <tr>
//                      <th scope="col">Data Diri</th>
//                      <th scope="col">Keterangan</th>
//                      <th scope="col-2">Avatar</th>

//                  </tr>
//              </thead>
//              <tbody>
//                  <tr>
//                      <th scope="row">First Name</th>
//                      <td>${f_nama[idx]}</td>
//                      <td rowspan=7><img src="${avatar[idx]}"></td>
//                  </tr>
//                      <th scope="row">Last Name</th>
//                      <td>${l_nama[idx]}</td>
//                  </tr>
//                  <tr>
//                      <th scope="row">Gender</th>
//                      <td>${kelamin[idx]}</td>
//                  </tr>
//                  <tr>
//                      <th scope="row">Email</th>
//                      <td>${mail[idx]}</td>
//                  </tr>
//                  <tr>
//                      <th scope="row">Job Title</th>
//                      <td>${job[idx]}</td>
//                  </tr>
//                  <tr>
//                      <th scope="row">Company</th>
//                      <td>${company[idx]}</td>
//                  </tr>
//                  <tr>
//                      <th scope="row">Departmen</th>
//                      <td>${departemen[idx]}</td>
//                  </tr>
//              </tbod>
//      </table >`
// })

// CARA KE DUA

// const tableHTML = json.map((el) => {
//     return `<table class='table table-striped table-hover table-bordered bordered-primary'>
//         <thead class='table-dark'>        
//             <tr>
//                 <th scope="col">Data Diri</th>
//                 <th scope="col">Keterangan</th>
//                 <th scope="col-2">Avatar</th>

//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <th scope="row">First Name</th>
//                 <td>${el.first_name}</td>
//                 <td rowspan=7><img src="${el.avatar}"></td>
//             </tr>
//                 <th scope="row">Last Name</th>
//                 <td>${el.last_name}</td>
//             </tr>
//             <tr>
//                 <th scope="row">Gender</th>
//                 <td>${el.gender}</td>
//             </tr>
//             <tr>
//                 <th scope="row">Email</th>
//                 <td>${el.email}</td>
//             </tr>
//             <tr>
//                 <th scope="row">Job Title</th>
//                 <td>${el.job_title}</td>
//             </tr>
//             <tr>
//                 <th scope="row">Company</th>
//                 <td>${el.company_name}</td>
//             </tr>
//             <tr>
//                 <th scope="row">Departmen</th>
//                 <td>${el.department}</td>
//             </tr>
//         </tbod>
//     </table >`
// })

// tables.innerHTML = tableHTML.join(' ')

// CARA KETIGA
let str = ""
json.forEach((el) => {
    str += `<table class='table table-striped table-hover table-bordered bordered-primary'>
    <thead class='table-dark'>        
        <tr>
            <th scope="col">Data Diri</th>
            <th scope="col">Keterangan</th>
            <th scope="col-2">Avatar</th>

        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">First Name</th>
            <td>${el.first_name}</td>
            <td rowspan=7><img src="${el.avatar}"></td>
        </tr>
            <th scope="row">Last Name</th>
            <td>${el.last_name}</td>
        </tr>
        <tr>
            <th scope="row">Gender</th>
            <td>${el.gender}</td>
        </tr>
        <tr>
            <th scope="row">Email</th>
            <td>${el.email}</td>
        </tr>
        <tr>
            <th scope="row">Job Title</th>
            <td>${el.job_title}</td>
        </tr>
        <tr>
            <th scope="row">Company</th>
            <td>${el.company_name}</td>
        </tr>
        <tr>
            <th scope="row">Departmen</th>
            <td>${el.department}</td>
        </tr>
    </tbod>
</table>`
})

tables.innerHTML = str


// let data = ['w', 'e', 'l', 'c', 'o']
// let arr = []
// function _reverse(nama) {
//     for (let i = (nama.length) - 1; i >= 0; i--) {
//         arr.push(nama[i])
//     }
//     return arr
// }

// console.log(_reverse(data))


// json.forEach((el) => {
//     tables.innerHTML += `<table class='table table-striped table-hover table-bordered bordered-primary'>
//     <thead class='table-dark'>        
//         <tr>
//             <th scope="col">Data Diri</th>
//             <th scope="col">Keterangan</th>
//             <th scope="col-2">Avatar</th>

//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <th scope="row">First Name</th>
//             <td>${el.first_name}</td>
//             <td rowspan=7><img src="${el.avatar}"></td>
//         </tr>
//             <th scope="row">Last Name</th>
//             <td>${el.last_name}</td>
//         </tr>
//         <tr>
//             <th scope="row">Gender</th>
//             <td>${el.gender}</td>
//         </tr>
//         <tr>
//             <th scope="row">Email</th>
//             <td>${el.email}</td>
//         </tr>
//         <tr>
//             <th scope="row">Job Title</th>
//             <td>${el.job_title}</td>
//         </tr>
//         <tr>
//             <th scope="row">Company</th>
//             <td>${el.company_name}</td>
//         </tr>
//         <tr>
//             <th scope="row">Departmen</th>
//             <td>${el.department}</td>
//         </tr>
//     </tbod>
// </table >`
// })

// let arr = [['java', 'hiu', 'bali'], ['css', 'babon', 'kalimantan'], ['html', 'babi', 'papua']];
// let baru = ''
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         console.log(arr[i])
//     }
// }

// function _reverse(nama) {
//     let ary = []
//     for (let i = (nama.length) - 1; i >= 0; i--) {
//         ary.push(nama[i])
//     }
//     return ary
// }










