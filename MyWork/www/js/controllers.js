angular.module('starter.controllers', [])

.controller('LoanAccountCtrl', function($scope) {})
.controller('InverstmentAccountCtrl', function($scope) {})
.controller('TransactionRecordCtrl', function($scope) {
	$scope.datas=[{
		periods:'6/12',
		principal:1000,
		interest:120,
		date:'2015-12-30',
		time:'18:23:24',
		status:'已还款'
	},{
		periods:'6/12',
		principal:1000,
		interest:120,
		date:'2015-12-30',
		time:'18:23:24',
		status:'已还款'
	},{
		periods:'6/12',
		principal:1000,
		interest:120,
		date:'2015-12-30',
		time:'18:23:24',
		status:'已还款'
	},{
		periods:'6/12',
		principal:1000,
		interest:120,
		date:'2015-12-30',
		time:'18:23:24',
		status:'已还款'
	},{
		periods:'6/12',
		principal:1000,
		interest:120,
		date:'2015-12-30',
		time:'18:23:24',
		status:'已还款'
	},{
		periods:'6/12',
		principal:1000,
		interest:120,
		date:'2015-12-30',
		time:'18:23:24',
		status:'已还款'
	},{
		periods:'6/12',
		principal:1000,
		interest:120,
		date:'2015-12-30',
		time:'18:23:24',
		status:'已还款'
	},{
		periods:'6/12',
		principal:1000,
		interest:120,
		date:'2015-12-30',
		time:'18:23:24',
		status:'已还款'
	}]
})
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
