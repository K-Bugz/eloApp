async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
if (document.querySelector('#logout')) {
    // console.log("I am working log out check")
    document.querySelector('#logout').addEventListener('click', logout);
}
// else {
//     console.log("not working due to logout")
// }