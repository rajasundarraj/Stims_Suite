var app = angular.module('myApp', []);

app.controller('DetailController',['$scope',function($scope){
	
$scope.details = [
{
"Reg_No" : "13IT001",
"Name" : "Dhanushya.P",
"Department" : "B.TECH_IT",
"Photo" : "Photos/boy.png",
"color" :"#cdcdc0"

},
{
"Reg_No" : "13IT002",
"Name" : "Dharani.AR",
"Department" : "B.TECH_IT",
"Photo" : "Photos/girl.png",
"color":  "#DDBC95"
},
{
"Reg_No" : "13IT003",
"Name" : "Dharani.P",
"Department" : "B.TECH_IT",
"Photo" : "Photos/3.jpg",
"color" : "#cdcdc0"
},
{
"Reg_No" : "13IT004",
"Name" : "Dhivya.S",
"Department" : "B.TECH_IT",
"Photo" : "Photos/4.jpg",
"color": "#DDBC95"
},
{
"Reg_No" : "13IT005",
"Name" : "Guga Priya",
"Department" : "B.TECH_IT",
"Photo" : "Photos/5.jpg",
"color" : "#cdcdc0"
},
{
"Reg_No" : "13IT006",
"Name" : "Hema latha",
"Department" : "B.TECH_IT",
"Photo" : "Photos/6.jpg",
"color":  "#DDBC95"
},
{
"Reg_No" : "13IT007",
"Name" : "V.Jamuna",
"Department" : "B.TECH_IT",
"Photo" : "Photos/1.jpg",
"color": "#cdcdc0"
},
{
"Reg_No" : "13IT008",
"Name" : "Jeyamani",
"Department" : "B.TECH_IT",
"Photo" : "Photos/2.jpg",
"color": "#DDBC95"
},
{
"Reg_No" : "13IT009",
"Name" : "kalaivani",
"Department" : "B.TECH_IT",
"Photo" : "Photos/3.jpg",
"color": "#cdcdc0"
},
{
"Reg_No" : "13IT010",
"Name" : "kaviya",
"Department" : "B.TECH_IT",
"Photo" : "Photos/6.jpg",
"color": "#DDBC95"
},
{
"Reg_No" : "13IT011",
"Name" : "V.kiruthiga",
"Department" : "B.TECH_IT",
"Photo" : "Photos/6.jpg",
"color":"#cdcdc0"
},
{
"Reg_No" : "13IT012",
"Name" : "H.Kirthiga",
"Department" : "B.TECH_IT",
"Photo" : "Photos/6.jpg",
"color": "#DDBC95"
},
{
"Reg_No" : "13IT013",
"Name" : "Madhumitha",
"Department" : "B.TECH_IT",
"Photo" : "Photos/6.jpg",
"color": "#cdcdc0"
},
{
"Reg_No" : "13IT014",
"Name" : "Manimegalai",
"Department" : "B.TECH_IT",
"Photo" : "Photos/6.jpg",
"color": "#DDBC95"
},
{
"Reg_No" : "13IT015",
"Name" : "Mekala",
"Department" : "B.TECH_IT",
"Photo" : "Photos/6.jpg",
"color": "#cdcdc0"
},
];
$scope.Labour = [{"Labour":"Cleaner","Avatar":"Photos/sweeper_2.jpg","Total":"Total: 80"},
{"Labour":"Driver","Avatar":"Photos/driver_1.jpg","Total":"Total: 20"},
{"Labour":"Watchman","Avatar":"Photos/watchman_1.jpg","Total":"Total: 14"},
{"Labour":"Servant","Avatar":"Photos/servant.jpg","Total":"Total: 50"}];

$scope.CleanerDetails = [{"Name":"Vasu","Avatar":"Photos/sweeper_2.jpg","color": "#DDBC95"},

{"Name":"Ravi","Avatar":"Photos/sweeper_2.jpg"},

{"Name":"Shiva","Avatar":"Photos/sweeper_2.jpg","color": "#DDBC95"},

{"Name":"Krish","Avatar":"Photos/sweeper_2.jpg"}];


$scope.DriverDetails = [{"Name":"Dharani","Avatar":"Photos/driver_1.jpg","color": "#DDBC95"},

{"Name":"Dinesh","Avatar":"Photos/driver_1.jpg"},

{"Name":"Kavin","Avatar":"Photos/driver_1.jpg","color": "#DDBC95"},

{"Name":"Raja","Avatar":"Photos/driver_1.jpg"}];



$scope.WatchmanDetails = [{"Name":"Chandru","Avatar":"Photos/watchman_1.jpg","color": "#DDBC95"},

{"Name":"Diren","Avatar":"Photos/watchman_1.jpg"},

{"Name":"Raj","Avatar":"Photos/watchman_1.jpg","color": "#DDBC95"},

{"Name":"Renu","Avatar":"Photos/watchman_1.jpg"}];

$scope.ServantDetails = [{"Name":"Priya","Avatar":"Photos/servant.jpg","color": "#DDBC95"},

{"Name":"Ravi","Avatar":"Photos/servant.jpg"},

{"Name":"Watchman","Avatar":"Photos/servant.jpg","color": "#DDBC95"},

{"Name":"Servant","Avatar":"Photos/servant.jpg"}];


}]);

