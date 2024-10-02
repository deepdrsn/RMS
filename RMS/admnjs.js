function validateForm() {
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    return true;
}
