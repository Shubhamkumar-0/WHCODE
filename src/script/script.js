document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('semesters');
    selectElement.addEventListener('change', openSemesterPage);
});

function openSemesterPage() {
    const selectElement = document.getElementById('semesters');
    const selectedValue = selectElement.value;

    switch (selectedValue) {
        case 'semester1':
            window.location.href = './semester/semester1.html'; // Change this to the actual URL of your Semester 1 page
            break;
        case 'semester2':
            window.location.href = './semester/semester2.html'; // Change this to the actual URL of your Semester 2 page
            break;
        case 'semester3':
            window.location.href = './semester/semester3.html'; // Change this to the actual URL of your Semester 3 page
            break;
        case 'semester4':
            window.location.href = './semester/semester4.html'; // Change this to the actual URL of your Semester 4 page
            break;
        case 'semester5':
            window.location.href = './semester/semester5.html'; // Change this to the actual URL of your Semester 5 page
            break;
        case 'semester6':
            window.location.href = './semester/semester6.html'; // Change this to the actual URL of your Semester 6 page
            break;
        case 'semester7':
            window.location.href = './semester/semester7.html'; // Change this to the actual URL of your Semester 7 page
            break;
        case 'semester8':
            window.location.href = './semester/semester8.html'; // Change this to the actual URL of your Semester 8 page
            break;
        default:
            // Do nothing if no valid semester is selected
            break;
    }
}