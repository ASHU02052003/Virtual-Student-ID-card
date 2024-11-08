document.getElementById('generateCard').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const studentId = document.getElementById('studentId').value;
    const department = document.getElementById('department').value;
    const email = document.getElementById('email').value;
    const photoInput = document.getElementById('uploadPhoto');
    if (!name && !studentId && !department  &&  !email && !photoInput.files.length) {
        alert('Please fill all fields and upload a photo.');
        return;
    }
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayId').textContent = studentId;
    document.getElementById('displayDepartment').textContent = department;
    document.getElementById('displayEmail').textContent = email;

    // Display uploaded photo
    const reader = new FileReader();
    reader.onload = function(e) {
        const idPhotoDiv = document.getElementById('idPhoto');
        idPhotoDiv.innerHTML = `<img src="${e.target.result}" alt="Student Photo">`;
    };
    reader.readAsDataURL(photoInput.files[0]);
});
