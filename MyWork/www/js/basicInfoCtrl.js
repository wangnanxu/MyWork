accountModule
.controller('BasicInfoCtrl',['$scope','$state',function($scope,$state){
	$scope.Exit=Exit;
	function Exit(){
		$state.go('tab.loanAccount');
	}
}])