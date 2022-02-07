<?php

include 'model.php';
$model = new Model();
$requestObj = $_POST['vrstaSorta'];
$rows = $model->sort($requestObj);

echo json_encode($rows);

exit;
