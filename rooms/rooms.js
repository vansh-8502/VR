document.addEventListener('DOMContentLoaded', function () {
    const roomDetailsContainer = document.getElementById('room-details');

    // Fetch room data from localStorage
    const rooms = JSON.parse(localStorage.getItem('rooms')) || [];

    if (rooms.length === 0) {
        roomDetailsContainer.innerHTML = '<p>No rooms available.</p>';
        return;
    }

    rooms.forEach(room => {
        const roomElement = document.createElement('div');
        roomElement.classList.add('room-card');
        roomElement.innerHTML = `
            <h3>${room.roomName}</h3>
            <p><strong>Seating Capacity:</strong> ${room.seatingCapacity}</p>
            <p><strong>Per Hour Cost:</strong> ${room.perHourCost} credits</p>
            <p><strong>Meeting Type:</strong> ${room.meetingType.charAt(0).toUpperCase() + room.meetingType.slice(1).replace('-', ' ')}</p>
            <p><strong>Amenities:</strong> ${room.amenities.length ? room.amenities.join(', ') : 'None'}</p>
        `;
        roomDetailsContainer.appendChild(roomElement);
    });
});
