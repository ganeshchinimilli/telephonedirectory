
var app = angular.module("app", []);
app.controller("myCtrl", function ($scope) {
    $scope.data = [
        { name: "ganesh", phnum: "9615212999" },
        { name: "gun", phnum: "9949253096" },
        { name: "raj", phnum: "9989672406" },


    ];

    $scope.newName = "";
    $scope.newphnum = "";
    $scope.one = function () {
        return {
            name: $scope.newName,
            phnum: $scope.newphnum
        }
    }

    $scope.validate = function () {
        console.log($scope.newName)
        console.log($scope.newphnum)
        if ($scope.newName== ""||$scope.newphnum== ""||$scope.newphnum.length!=10)
        {console.log("hello2");
            return false;
            }
        else{
            console.log("hello3");
            return true;
        }
    }

    $scope.addItem = function () {
        if ($scope.validate()== true) 
        {
            console.log("hellomain")
            for (var i = 0; i < $scope.data.length; i++) 
            {

                if (($scope.data[i].name == $scope.one().name) ||
                    ($scope.data[i].phnum == $scope.one().phnum))
                     {
                    $scope.error = "data already existed";

                    return false;
                }
            }
            $scope.data.push($scope.one());
            $scope.error="";

            $scope.newName = "";
            $scope.newphnum = "";
          

        }
        else {
            $scope.error = "please fill the fields";
       
        }




    }
    
    $scope.removeItem = function (i) {
        $scope.data.splice(i, 1)
    }

    $scope.update= function (id) {
 console.log(id);
 $scope.newName=$scope.data[id].name;
 
 $scope.newphnum=$scope.data[id].phnum;
 $scope.removeItem(id);
         
       
      
    }
}
)