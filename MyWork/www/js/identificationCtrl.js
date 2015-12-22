accountModule
.controller('IdentificationCtrl',['$scope','$state',function($scope,$state){
	$scope.Exit=Exit;
	function Exit(){
		$state.go('tab.dash');
	}
}])