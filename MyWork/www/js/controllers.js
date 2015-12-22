angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

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
