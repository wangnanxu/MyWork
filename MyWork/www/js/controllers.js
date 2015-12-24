angular.module('starter.controllers', [])

.controller('LoanAccountCtrl', function($scope) {
		$scope.labelschart = ["complete", "uncomplete"];
		$scope.datachart = [25, 75];
		$scope.lists=[];
		var str=[{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		},{
			index:0,
			title:'地铁**项目',
			money:1000,
			interest:120,
			date:2015-12-30
		}]
		AssmbleArr();
		function AssmbleArr(){
			var count=9;
			var length=str.length;
			
			var page=Math.floor((length-1)/count)+1;
			var list=[];
			for(var i=0;i<page;i++){
				var arr=[];
				var startindex=count*i;
				var endindex=0;
				if(startindex+count<length){
					endindex=startindex+count;
				}else{
					endindex=length;
				}
				for(var j=startindex;j<endindex;j++){
					arr.push(str[j])
				}
				list.push(arr);
			}
			$scope.lists=list;
		}
	})
	.controller('InverstmentAccountCtrl', function($scope) {
		$scope.labelschart = ["complete", "","","uncomplete"];
		$scope.datachart = [25,0,0,75];
		$scope.onClick = function(points, evt) {
			console.log(points, evt);
		};
	})
	.controller('TransactionRecordCtrl', function($scope) {
		$scope.datas = [{
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: '已还款'
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: '已还款'
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: '已还款'
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: '已还款'
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: '已还款'
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: '已还款'
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: '已还款'
		}, {
			periods: '6/12',
			principal: 1000,
			interest: 120,
			date: '2015-12-30',
			time: '18:23:24',
			status: '已还款'
		}]
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