angular.module('starter.controllers', [])

.controller('LoanAccountCtrl', function($scope) {
		$scope.labelschart = ["complete", "uncomplete"];
		$scope.datachart = [25, 75];
		$scope.lists = [];
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
		AssmbleArr();

		function AssmbleArr() {
			var count = 9;
			var length = str.length;

			var page = Math.floor((length - 1) / count) + 1;
			var list = [];
			for (var i = 0; i < page; i++) {
				var arr = [];
				var startindex = count * i;
				var endindex = 0;
				if (startindex + count < length) {
					endindex = startindex + count;
				} else {
					endindex = length;
				}
				for (var j = startindex; j < endindex; j++) {
					arr.push(str[j])
				}
				list.push(arr);
			}
			$scope.lists = list;
		}
	})
	.controller('InverstmentAccountCtrl', function($scope, $timeout) {
		$scope.labelschart = ["complete", "", "", "uncomplete"];
		$scope.datachart = [25, 0, 0, 75];
		$scope.onClick = function(points, evt) {
			console.log(points, evt);
		};
		$scope.lists=[];
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
		$timeout(function() {
			LineChart();
			DoughnutChart();
		}, 0)
		AssmbleArr();
		function AssmbleArr() {
			var count = 5;
			var length = str.length;

			var page = Math.floor((length - 1) / count) + 1;
			var list = [];
			for (var i = 0; i < page; i++) {
				var arr = [];
				var startindex = count * i;
				var endindex = 0;
				if (startindex + count < length) {
					endindex = startindex + count;
				} else {
					endindex = length;
				}
				for (var j = startindex; j < endindex; j++) {
					arr.push(str[j])
				}
				list.push(arr);
			}
			$scope.lists = list;
		}
		function LineChart() {

			var ctx = document.getElementById('sales-volume-chart').getContext("2d")

			var data = {

				labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"],

				datasets: [{

					label: "",

					fillColor: "rgba(220,220,220,0.2)",

					strokeColor: "#387ef5", // "rgba(0,102,51,1)",

					pointColor: "rgba(220,220,220,1)",

					pointStrokeColor: "#387ef5", //"#339933",

					pointHighlightFill: "#387ef5", //"#339933",

					pointHighlightStroke: "rgba(220,220,220,1)",

					data: [5, 6, 11, 12, 11, 13, 15, 16, 16, 17, 19, 21]

				}]

			};

			// var salesVolumeChart = new Chart(ctx).Line(data);

			var salesVolumeChart = new Chart(ctx).Line(data, {

				// 小提示的圆角

				// tooltipCornerRadius: 0,

				// 折线的曲线过渡，0是直线，默认0.4是曲线

				bezierCurveTension: 0,

				// bezierCurveTension: 0.4,

				// 关闭曲线功能

				bezierCurve: false,

				// 背景表格显示

				// scaleShowGridLines : false,

				// 点击的小提示

				tooltipTemplate: "<%if (label){%><%=label%> ：<%}%><%= value %>%",

				//自定义背景小方格、y轴每个格子的单位、起始坐标

				scaleOverride: true,

				scaleSteps: 4.5,

				// scaleStepWidth: Math.ceil(Math.max.apply(null,data.datasets[0].data) / 0.1),

				scaleStepWidth: 5,

				scaleStartValue: 0

			});

		}

		function DoughnutChart() {
			var ctx = document.getElementById('scile-chart').getContext("2d")
			var data = [{
				value: 25,
				color: "#0191da"
			}, {
				value: 75,
				color: "#5fa600"
			}]
			var doughuntChart = new Chart(ctx).Doughnut(data, {
				 responsive: false
			});
		}
	})
	.controller('TransactionRecordCtrl', function($scope,$state) {
		$scope.lists=[];
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
		AssmbleArr();

		function AssmbleArr() {
			var count = 9;
			var length = str.length;

			var page = Math.floor((length - 1) / count) + 1;
			var list = [];
			for (var i = 0; i < page; i++) {
				$scope.hasValue=true;
				var arr = [];
				var startindex = count * i;
				var endindex = 0;
				if (startindex + count < length) {
					endindex = startindex + count;
				} else {
					endindex = length;
				}
				for (var j = startindex; j < endindex; j++) {
					arr.push(str[j])
				}
				list.push(arr);
			}
			$scope.lists = list;
		}
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