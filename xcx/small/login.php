<?php
header('content-type:text/html;charset=utf-8');

$appid = 'wx95a40afdca5c3276';
$appsecret = '4727be8a919b91b841f9d169b3a54e8d';

$url = 'https://api.weixin.qq.com/sns/jscode2session?appid='.$appid.'&secret='.$appsecret.'&js_code='.$_GET['code'].'&grant_type=authorization_code';

$content = file_get_contents($url);

$content = json_decode($content);

echo $content->session_key;