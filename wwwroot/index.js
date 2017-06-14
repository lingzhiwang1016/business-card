var app = angular.module('Card',[]);
app.controller('CardController',($scope,$http)=>{
	$http.get("api/card/me").then((res)=>{
//		console.log(res.data.data);
		var obj = res.data.data;
		//$scope.name = obj.name;
		//$scope.title= obj.title;
		//$scope.address=obj.address;
		//$scope.phone=obj.phone;
		//$scope.qq = obj.qq;
		//$scope.email=obj.email;
		//$scope.description = obj.description;
                //可以直接复制对象,调用angular的extend方法,将res.data.data复制给$scope,这种比较简单,不用像上面一样多次复制
                angular.extend($scope,obj);
	},(err)=>{
		console.log(err);
	});
	
	$scope.onSubmit = function () {
		var obj1={}
		obj1.name=$scope.name;
		obj1.title=$scope.title;
		obj1.address=$scope.address;
		obj1.phone=$scope.phone;
		obj1.qq=$scope.qq;
		obj1.email=$scope.email;
		obj1.description=$scope.description;
		
		$http({
			method: 'post',
			url:'/api/card/me',
			data: obj1
		}).then(function(res){
			alert(res.data.msg)
			location.href="/";
		},function(err){
			console.log(err)
		})
		
//		$http.post("api/card/me",{"name":"tom"}).then((res)=>{
//			console.log("res")
//		},(err)=>{
//			console.log(err)
//		})
	}
})

