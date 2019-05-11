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



  function addEmp() {

    var row = $('<tr>');
    var tdname = $('<td id="name">').text(snapshot.val().name);
    var tdrole = $('<td id="role">').text(snapshot.val().role);
    var tdStart = $('<td id="startDate">').text(snapshot.val().startDate);
    var tdRate = $('<td id="monthlyRate">').text(snapshot.val().monthlyRate);
    var tdMonths = $('<td id="monthsWorked">');
    var tdTotal = $('<td id="totalBilled">');
    $("tbody").append(row);
    row.append(tdname);
    row.append(tdrole);
    row.append(tdStart);
    row.append(tdRate);
    row.append(tdMonths);
    row.append(tdTotal);

    // $("#name").text(snapshot.val().name);
    // $("#role").text(snapshot.val().role);
    // $("#startDate").text(snapshot.val().startDate);
    // $("#monthlyRate").text(snapshot.val().monthlyRate);
  
  }
  addEmp();
  
})
