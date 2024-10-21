function generateMarkSheet() {
    const english = parseInt(document.getElementById('english').value) || 0;
    const urdu = parseInt(document.getElementById('urdu').value) || 0;
    const physics = parseInt(document.getElementById('physics').value) || 0;
    const computer = parseInt(document.getElementById('computer').value) || 0;
    const maths = parseInt(document.getElementById('maths').value) || 0;

    const totalMarks = english + urdu + physics + computer + maths;
    const percentage = (totalMarks / 500) * 100;

    document.getElementById('engMarks').textContent = english;
    document.getElementById('urdMarks').textContent = urdu;
    document.getElementById('phyMarks').textContent = physics;
    document.getElementById('compMarks').textContent = computer;
    document.getElementById('mathMarks').textContent = maths;
    document.getElementById('totalMarks').textContent = totalMarks;
    document.getElementById('percentage').textContent = percentage.toFixed(2);

    document.getElementById('markSheet').style.display = 'block';
}

function printMarkSheet() {
    const markSheet = document.getElementById('markSheet').innerHTML;
    const newWindow = window.open('', '', 'height=500,width=800');
    newWindow.document.write('<html><head><title>Mark Sheet</title>');
    newWindow.document.write('</head><body>');
    newWindow.document.write(markSheet);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
}
