// Using JavaScript intervals create simple clock which will display current time (in HH:MM:SS format).

setInterval(() => {
    console.clear()

    let currentTime = new Date()

    console.log(`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`)
}, 1000);

