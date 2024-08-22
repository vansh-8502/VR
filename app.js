document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const role = document.getElementById('role').value;
    if (role === 'admin') {
        window.location.href = 'admin.html';
    } else if (role === 'manager') {
        window.location.href = 'manager.html';
    } else if (role === 'member') {
        window.location.href = 'member.html';
    }
});
