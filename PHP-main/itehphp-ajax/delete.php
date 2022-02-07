<?php 

	include 'model.php';
	$model = new Model();
	$id = $_REQUEST['id'];
	$delete = $model->delete($id);

	if ($delete) {
		echo "<script>alert('Successfully deleted');</script>";
		echo "<script>window.location.href = 'records.php';</script>";
	}

 ?>