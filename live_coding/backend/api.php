<?php
header('Content_Type . application/json');
$file = __DIR__ . "/file.json" ;
$all_data = file_exists($file) ? json_decode(file_get_contents($file),true) : [] ;
$data_received = file_get_contents(('php://input'),true) ;

if($_SERVER['REQUEST_METHOD'] === 'GET')
{
 echo json_decode([
  'message' => "seccess" ,
  'data'=> $all_data 
 ]);
}
else if($_SERVER['REQUEST_METHOD'] === 'POST')
{

    $data_received["id"] = time();
    $all_data[] = $data_received ;

    file_put_contents(($file) ,json_encode($all_data,JSON_PRETTY_PRINT));

    echo json_decode(
        [
            "message" => "succses" , 
            "data" => $all_data 
        ]
    )
}
else
{
    echo json_decode(
        [
            "message" => "error" 
        ]
    )
}
?>