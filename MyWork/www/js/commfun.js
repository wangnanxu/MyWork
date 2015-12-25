var commModule = angular.module('CommModule', [])
	.factory('CommServ', [function() {
		var server = {
			AssmbleArray: AssmbleArray,
			LineChart:LineChart,
			DoughnutChart:DoughnutChart
		}
		return server;
		/*
		 * 组装每页数据
		 * @totalarr总数据条数
		 * @count每页数据条数
		 */
		function AssmbleArray(totalarr, count) {
			if (totalarr == null) {
				return;
			}
			var length = totalarr.length;

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
					arr.push(totalarr[j])
				}
				list.push(arr);
			}
			return list;
		}
		/*
		 * 绘制线性图
		 * @dataarr描点
		 */
		function LineChart(dataarr){
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

					data: dataarr
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
		/*
		 * 
		 */
		function DoughnutChart(dataarr) {
			var ctx = document.getElementById('scile-chart').getContext("2d")
			var doughuntChart = new Chart(ctx).Doughnut(dataarr, {
				 responsive: false
			});
		}
	}])