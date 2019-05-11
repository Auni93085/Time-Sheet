var firebaseConfig = {
    apiKey: "AIzaSyBj7iqxJ9e-63XBDbGxJlsUb2eV7ZIrN00",
    authDomain: "group-timesheet-98f22.firebaseapp.com",
    databaseURL: "https://group-timesheet-98f22.firebaseio.com",
    projectId: "group-timesheet-98f22",
    storageBucket: "group-timesheet-98f22.appspot.com",
    messagingSenderId: "700843509552",
    appId: "1:700843509552:web:9389862141e7da5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



var database = firebase.database();

var name="";
var role="";
var startDate;
var monthlyRate;
var monthsWorked;
var totalBilled;


// "<tr></tr>"

$("#submit").on('click', function(event) {

event.preventDefault();

name=$("#empName").val().trim()
role=$("#role").val().trim()
startDate=$("#startDate").val()
monthlyRate=$("#monthlyRate").val()

database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    monthyRate: monthlyRate,

})

})

database.ref().on("child_added", function (snapshot) {
    console.log(snapshot)
    console.log(snapshot.val())
})

