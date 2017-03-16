var app = angular.module('myApp1', []);

app.controller('studentinfo',function($scope)
{
$scope.names = [
    { "Profile" : "", "NAME" : "RAJA.S", "ROLL NO" : "13CS090" , "E-MAIL" : "abc@...com" ,"CLASS" : "1", "SECTION" : "A"},
    
    { "Profile" : "", "NAME" : "RAMYA.S", "ROLL NO" : "13CS048" , "E-MAIL" : "abc@...com" ,"CLASS" : "2", "SECTION" : "A"},
    
    { "Profile" : "", "NAME" : "SOBANA.P", "ROLL NO" : "13CS050" , "E-MAIL" : "abc@...com" ,"CLASS" : "3", "SECTION" : "B"},
    
    { "Profile" : "", "NAME" : "YASHINI", "ROLL NO" : "13CS010" , "E-MAIL" : " abc@...com" ,"CLASS" : "4", "SECTION" : "B"},
    
    { "Profile" : "", "NAME" : "VIGNESH", "ROLL NO" : "13CS123" , "E-MAIL" : "abc@...com" ,"CLASS" : "5", "SECTION" : "C"},
];
});

var app = angular.module('myApp2', []);

app.controller('studentmarks',function($scope)
{
$scope.names = [
    { "S.NO" : "1", "NAME" : "RAJA.S", "ROLL NO" : "13CS090" , "TAMIL" : "78" ,"ENGLISH" : "80", "MATHS" : "90","SCIENCE":"78","SOCIAL SCIENCE":"80","ACTION":"Edit/Save"},
    
    { "S.NO" : "2", "NAME" : "RAMYA.S", "ROLL NO" : "13CS048" , "TAMIL" : "80" ,"ENGLISH" : "79", "MATHS" : "92","SCIENCE":"80","SOCIAL SCIENCE":"80","ACTION":"Edit/save"},
    
    { "S.NO" : "3", "NAME" : "SOBANA.P", "ROLL NO" : "13CS050" , "TAMIL" : "90" ,"ENGLISH" : "87", "MATHS" : "93","SCIENCE":"80","SOCIAL SCIENCE":"86","ACTION":"Edit/save"},
    
    { "S.NO" : "4", "NAME" : "YASHINI", "ROLL NO" : "13CS010" , "TAMIL" : " 70" ,"ENGLISH" : "90", "MATHS" : "94","SCIENCE":"86","SOCIAL SCIENCE":"86","ACTION":"Edit/save"},
    
    { "S.NO" : "5", "NAME" : "VIGNESH", "ROLL NO" : "13CS123" , "TAMIL" : "72" ,"ENGLISH" : "80", "MATHS" : "98","SCIENCE":"86","SOCIAL SCIENCE":"86","ACTION":"Edit/save"},
];
});

var app = angular.module('myApp3', []);

app.controller('viewparent',function($scope)
{
$scope.names = [
    { "Profile" : "", "NAME" : "RAJA.S", "ROLL NO" : "13CS090" , "E-MAIL" : "abc@...com" , "ACTION":"View Prent"},
    
    { "Profile" : "", "NAME" : "RAMYA.S", "ROLL NO" : "13CS048" , "E-MAIL" : "abc@...com" ,"ACTION":"View Parent"},
    
    { "Profile" : "", "NAME" : "SOBANA.P", "ROLL NO" : "13CS050" , "E-MAIL" : "abc@...com" ,"ACTION":"View Parent"},
    
    { "Profile" : "", "NAME" : "YASHINI", "ROLL NO" : "13CS010" , "E-MAIL" : " abc@...com" ,"ACTION":"View Parent"},
    
    { "Profile" : "", "NAME" : "VIGNESH", "ROLL NO" : "13CS123" , "E-MAIL" : "abc@...com" ,"ACTION":"View Parent"},
];
});

var app = angular.module('myApp', []);

app.controller('books',function($scope)
{
$scope.names = [
    { "Book ID" : "BID00001", "ISBN" : "81-219-2041", "Subject" : "Programming in C#" , "Availability" : "Available" ,"Author" : "Vignesh Mohanraj", "Edition" : "1st", "Add Date" : "2017-01-24"},
    
    { "Book ID" : "BID00002", "ISBN" : "82-209-2030", "Subject" : "Harry Potter" , "Availability" : "Unavailable" ,"Author" : "William", "Edition" : "3rd", "Add Date" : "2017-03-24"},
    
    { "Book ID" : "BID00003", "ISBN" : "88-209-1999", "Subject" : "The Lord of War" , "Availability" : "Available" ,"Author" : "Geetha", "Edition" : "6th", "Add Date" : "2017-01-26"},
    
    { "Book ID" : "BID00004", "ISBN" : "80-222-3352", "Subject" : "Accountancy" , "Availability" : "UnAvailable" ,"Author" : "Ravi", "Edition" : "9th", "Add Date" : "2015-01-16"},
    
    { "Book ID" : "BID00005", "ISBN" : "69-325-5528", "Subject" : "Grammer" , "Availability" : "Available" ,"Author" : "Siranjeevi raja", "Edition" : "3rd", "Add Date" : "2018-06-18"},
];
});




var app = angular.module('myApp5', []);

app.controller('examduty',function($scope)
{
$scope.names = [
   
    { "DATE" : "13/4/2017", "EXAM" : "TAMIL", "HALL NO" : "121" , "SESSION" : "AN" ,"SET REMINDER":"SET"},
    { "DATE" : "14/4/2017", "EXAM" : "ENGLISH", "HALL NO" : "123" , "SESSION" : "AN" ,"SET REMINDER":"SET"},
    { "DATE" : "15/4/2017", "EXAM" : "MATHS", "HALL NO" : "125" , "SESSION" : "AN" ,"SET REMINDER":"SET"},
    { "DATE" : "16/4/2017", "EXAM" : "SCIENCE", "HALL NO" : "124" , "SESSION" : "AN" ,"SET REMINDER":"SET"},
    { "DATE" : "17/4/2017", "EXAM" : "SOCIAL SCIENCE", "HALL NO" : "123" , "SESSION" : "AN" ,"SET REMINDER":"SET"},
    
    
];
});

var app = angular.module('myApp4', []);

app.controller('exams',function($scope)
{
$scope.names = [
   
    { "SUB-CODE" : "1", "SUBJECT" : "TAMIL", "DATE" : "13/04/2017" , "SESSION" : "AN" ,},
    { "SUB-CODE" : "2", "SUBJECT" : "ENGLISH", "DATE" : "14/04/2017" , "SESSION" : "AN" ,},
    { "SUB-CODE" : "3", "SUBJECT" : "MATHS", "DATE" : "15/04/2017" , "SESSION" : "AN" ,},
    { "SUB-CODE" : "4", "SUBJECT" : "SCIENCE", "DATE" : "16/04/2017" , "SESSION" : "AN" ,},
    { "SUB-CODE" : "5", "SUBJECT" : "SOCIAL SCIENCE", "DATE" : "17/04/2017" , "SESSION" : "AN" ,},
    
    
];
});

