Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

function displayTime() {

        let a = new Date()
        let hour = a.getHours()
        let minut = a.getMinutes()
        let second = a.getSeconds()
        let ls = 0
        if (second < 10) {
            ls = "0".toString()
        }
        else {
            ls = second
        }
        console.log(hour + ":" + minut + ":" + ls);
        // console.log("ls", ls);
    }
    setInterval(displayTime, 1000);
