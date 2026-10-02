let name_1 = document.getElementById("name");
let categorie_1 = document.getElementById("categorie");
let form_1 = document.getElementById("form_1");

function show_data()
{
    let container = document.getElementById("resulte_120");
    
    fetch("../backend/api.php")
    .then(response => response.json())
    .then(data_1 => {
      let mini_container = document.createElement('tr');
      data_1.data.forEach(element => {
        mini_container.innerHTML = `
         <td class="border border-black px-9 py-3">${element.id}</td>
         <td class="border border-black px-9 py-3">${element.name}</td>
         <td class="border border-black px-9 py-3">${element.category}</td>
        ` ;
      });
      container.appendChild(mini_container);
    })
    .catch(error => {
      console.log("error &&&&&&&&&&&&&&&&&&&&&&&" ,error);
    })
};

form_1.addEventListener('submit',(e)=>{
 e.preventDefault();
 let data_11 = [
  name1 = name_1 ,
  category = categorie_1
 ];

 fetch("../backend/api.php" ,{
  method: "POST" ,
  Header: 'Content_Type: application/json' ,
  body: JSON.stringify(data_11)
})
 .then(res=>res.json())
 .then(data=>{
    console.log("the data is ", data);
    show_data();
 })
 .catch(error =>{
    console.log("the error sending data is ",error);
 })

});

document.addEventListener('DOMContentLoaded',show_data());