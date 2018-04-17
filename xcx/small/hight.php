<?php
header('content-type:text/html;charset=utf-8');

//接收数据
$hight = $_POST['hight'];

$weight = $_POST['weight'];

 

//连接PDO

    $dsn = "mysql:host=localhost;dbname=small";
    $db = new PDO($dsn, 'root', 'root');
    $db->query("set names utf8");

 
   

//公式判断

  $a = ($hight-105)*2;

  $b = $weight*0.1;
 
  $c = $a-$b;

  $d = $a+$b;
 

  if ($c>$weight){
    // echo "体重过轻";
       $sql = "select * from weight where status = 1";
       $res = $db->query($sql);
       $data = $res->fetchAll(PDO::FETCH_ASSOC);
       
      echo json_encode($data);
 
  }else if ($d<$weight){
  	 // echo "体重超标";
  	  $sql1 = "select * from weight where status = '2'";
  	  $res = $db->query($sql1);
  	   
      $data = $res->fetchAll(PDO::FETCH_ASSOC);
 
      echo json_encode($data);
  
  }else if($c<$weight and $weight<$d){
 
    // echo "体重标准";
      $sql2 = "select * from weight where status = '3'";
      $res = $db->query($sql2);
      $data = $res->fetchAll(PDO::FETCH_ASSOC);
      echo json_encode($data);
  }
  

 