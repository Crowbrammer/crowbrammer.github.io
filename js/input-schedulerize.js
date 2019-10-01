function schedulerize() {
    // Assume all fields are filled (error checking later)
    // Assume duration is in minutes

    // Get all the things
    let labels = document.querySelectorAll('.lbl');
    let durations = document.querySelectorAll('.duration');
    let sets = [];
    let schedule = [];
    
    // Get make start and end times out of each
    for (let i = 0; i < labels.length; i++) {
        // I could probably go straight into making the event
        // Get the current time
        sets.push({label: labels[i].value, duration: labels[i].value});
        if (i === 0) {
            schedule.push({label: labels[0].value, start: Date.now(), end: Date.now() + parseInt(durations[0].value) * 60 * 1000});
        } else {
            schedule.push({label: labels[i].value, start: schedule[i-1].end, end: schedule[i-1].end + parseInt(durations[i].value) * 60 * 1000});
        }
    }

    for (let i = 0; i < schedule.length; i++) {
        schedule[i].start = new Date(schedule[i].start).toLocaleTimeString();
        schedule[i].end   = new Date(schedule[i].end).toLocaleTimeString();
    }

    // Make a list of things with start and end times
    let sched = document.querySelector('#schedule');
    schedule.forEach(event => {
        let evt      = document.createElement('div');
        let label    = document.createElement('p');
        let start    = document.createElement('p');
        let end      = document.createElement('p');
        evt.className     = "event";
        label.textContent = event.label;
        start.textContent = event.start;
        end.textContent   = event.end;
        evt.appendChild(label);
        evt.appendChild(start);
        evt.appendChild(end);
        sched.appendChild(evt);
    });

    // Make the original list disappear
    document.querySelector('#hogwarts').hidden = true;

    // Button stuff
    document.querySelector("#schedulerize").hidden = true;
    document.querySelector('#inputize').hidden = false;
}

document.querySelector('#schedulerize').addEventListener('click', schedulerize);
document.querySelector('#inputize').addEventListener('click', () => {
    // Make the inputs visible
    document.querySelector("#hogwarts").hidden = false;

    // Clear the schedule
    document.querySelectorAll('#schedule .event').forEach(event => {
        event.remove();
    });

    // Make the schedule button invisible 
    document.querySelector("#schedulerize").hidden = false;
    document.querySelector("#inputize").hidden = true;
});