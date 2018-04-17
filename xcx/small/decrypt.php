<?php

include_once "wxBizDataCrypt.php";



$appid = 'wx95a40afdca5c3276';
$sessionKey = $_GET['session'];

$encryptedData=$_GET['encryptedData'];

$iv = $_GET['iv'];

$pc = new WXBizDataCrypt($appid, $sessionKey);
$errCode = $pc->decryptData($encryptedData, $iv, $data );

if ($errCode == 0) {
    print($data . "\n");
} else {
    print($errCode . "\n");
}
