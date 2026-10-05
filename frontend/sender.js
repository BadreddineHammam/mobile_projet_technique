let id_category_1 = document.getElementById("id_category");
let form_category_1 = document.getElementById("form_category");

function show_all()
{
   let container = document.getElementById("result_final");
    fetch('../backend/api.php')
    .then(response => response.json() ) 
    .then(data_1 => {
        container.innerHTML = '' ;
        data_1.data.forEach( element => {
           let container_mini = document.createElement("tr");
           console.log(data_1);
           container_mini.innerHTML = `
           <td>${element.id}</td>
           <td>${element.name}</td>
           <td>${element.category}</td>
           `
           ;
           container.appendChild(container_mini);
        });
        
      
    });

}


form_category_1.addEventListener('submit' , (e) => {

 e.preventDefault();

 let name_1 = document.getElementById("name").value;
 let category_1 = document.getElementById("category").value;

 let Data_11 = 
 {
    name: name_1 ,
    category : category_1
 };

 fetch('../backend/api.php' , 
 {
    method : 'POST' ,
    headers : {'Content-Type': 'application/json'},
    body  : JSON.stringify(Data_11)
 })
 .then(response => response.json())
 .then(data_1 => 
    {
        console.log("the data that sended => " , data_1);
        form_category_1.reset();
        show_all()
    })
    .catch(error => 
        {
           console.log("error dyalna " , error) ;
        });
});
document.addEventListener('DOMContentLoaded' ,show_all);