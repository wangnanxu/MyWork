angular.module('starter.controllers', [])

.controller('LoanAccountCtrl', function($scope) {})
.controller('InverstmentAccountCtrl', function($scope) {})
.controller('AccountCtrl', ['$scope','$state',function($scope,$state) {
		$scope.GoBasicInfoPage=GoBasicInfoPage;
		$scope.GoIdentifacationPage=GoIdentifacationPage;
		function GoBasicInfoPage(){
			$state.go('basicInfo');
		}
		function GoIdentifacationPage(){
			$state.go('identification');
		}
}]);
