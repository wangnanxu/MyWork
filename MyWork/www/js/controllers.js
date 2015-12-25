angular.module('starter.controllers', [])

.controller('LoanAccountCtrl', function($scope,CommServ) {
		$scope.labelschart = ["complete", "uncomplete"];
		$scope.datachart = [25, 75];
		
		var str = [{
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}, {
			index: 0,
			title: '地铁**项目',
			money: 1000,
			interest: 120,
			date: 2015 - 12 - 30
		}]
		$scope.lists =CommServ.AssmbleArray(str,9);
	})
	.controller('InverstmentAccountCtrl', function($scope, $timeout,CommServ) {
		$scope.labelschart = ["complete", "", "", "uncomplete"];
		$scope.datachart = [25, 0, 0, 75];
		$scope.onClick = function(points, evt) {
			console.log(points, evt);
		};
		var str= [{
			name:'刘德华',
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015.12.30',
			precent:'65%'
		}, {
				name:'张学友',
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015.12.30',
			precent:'25%'
		}, {
				name:'刘德华',
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015.12.30',
			precent:'45%'
		}, {
				name:'张学友',
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015.12.30',
			precent:'65%'
		}, {
				name:'刘德华',
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015.12.30',
			precent:'15%'
		}, {
				name:'张学友',
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015.12.30',
			precent:'65%'
		}, {
				name:'刘德华',
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015.12.30',
			precent:'70%'
		}, {
				name:'张学友',
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015.12.30',
			precent:'10%'
		}]
		$scope.lists =CommServ.AssmbleArray(str,5);
		var data=[5, 6, 11, 12, 11, 13, 15, 16, 16, 17, 19, 21];
		var datanut = [{
				value: 25,
				color: "#0191da"
			}, {
				value: 75,
				color: "#5fa600"
			}]
		$timeout(function() {
			CommServ.LineChart(data);
			CommServ.DoughnutChart(datanut);
		}, 0)
	})
	.controller('TransactionRecordCtrl', function($scope,$state,CommServ) {
		$scope.Exit=Exit;
		$scope.hasValue=false;
		function Exit(){
			$state.go('tab.loanAccount');
		}
		var str= [{
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: 0
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: 1
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: 0
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: 0
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: 0
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: 1
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: 0
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: 0
		}]
		$scope.lists =CommServ.AssmbleArray(str,9);
	})
	.controller('AccountCtrl', ['$scope', '$state', function($scope, $state) {
		$scope.GoBasicInfoPage = GoBasicInfoPage;
		$scope.GoIdentifacationPage = GoIdentifacationPage;

		function GoBasicInfoPage() {
			$state.go('basicInfo');
		}

		function GoIdentifacationPage() {
			$state.go('identification');
		}
	}]);