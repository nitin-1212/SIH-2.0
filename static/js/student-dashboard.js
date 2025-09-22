// Sidebar toggle for mobile
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', ()=>{sidebar.classList.toggle('active');});

// Example: Dynamic student data (future backend can populate this)
const studentData = {
  name: "Rahul Sharma",
  stream: "BCA 2nd Year - Computer Science",
  roll_no: "10234",
  contact: "9876543210",
  father_name: "Mr. Suresh Sharma",
  father_contact: "9876501234",
  attendance: 85,
  pending_fees: 12000,
  performance: "Good",
  exams: [
    {exam:"Maths", date:"25 Sep 2025", time:"10:00 AM"},
    {exam:"DBMS", date:"27 Sep 2025", time:"2:00 PM"}
  ]
};

// Populate dashboard dynamically
document.getElementById('welcomeMsg').innerText = `Welcome, ${studentData.name} 👋`;
document.getElementById('studentName').innerText = studentData.name;
document.getElementById('studentStream').innerText = studentData.stream;
document.getElementById('studentRoll').innerText = `Roll No: ${studentData.roll_no}`;
document.getElementById('studentContact').innerText = studentData.contact;
document.getElementById('fatherName').innerText = studentData.father_name;
document.getElementById('fatherContact').innerText = studentData.father_contact;
document.getElementById('attendanceCard').innerText = studentData.attendance + "%";
document.getElementById('feesCard').innerText = "₹" + studentData.pending_fees;
document.getElementById('performanceCard').innerText = studentData.performance;

// Attendance bar
document.getElementById('attendanceBar').style.width = studentData.attendance + "%";
document.getElementById('attendancePercent').innerText = studentData.attendance + "%";

// Populate exam table
const examTable = document.getElementById('examTable');
studentData.exams.forEach(exam => {
  const row = examTable.insertRow();
  row.insertCell(0).innerText = exam.exam;
  row.insertCell(1).innerText = exam.date;
  row.insertCell(2).innerText = exam.time;
});