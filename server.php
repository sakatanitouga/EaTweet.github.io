<?php
/////////////////////////////////////////////////////////////////////////////////////////
// Eatweetのホーム画面表示の際のレシピの表示
// ・入力：　
// ・出力：レシピのデータベースを上から順番に文字列としておくる[[url,料理名,up主の名前,画像ファイルのurl],[...],[...]]
/////////////////////////////////////////////////////////////////////////////////////////
    /*
    require('Eatweet_mysql.php');
    //データベースから読み込み
    $mysql = new Eatweet_mysql('LAA1214279-eatweet','mysql148.phy.lolipop.lan','LAA1214279','touga213');
    $result = $mysql ->select_table("customer_info");
    $mysql ->db_close();
    echo json_encode($result);
    */
    $response['result'] = -1;
    $response['msg'] = '入力内容にエラーがあります';
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>
