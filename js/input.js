function addSet() {
    let hogwarts = document.querySelector('#hogwarts');
    let set = document.createElement('div');
    let label = document.createElement('input');
    let duration = document.createElement('input');
    set.className = "set";
    label.className = "lbl";
    duration.className = "duration";
    set.appendChild(label);
    set.appendChild(duration);
    hogwarts.appendChild(set);
    set.addEventListener('keyup', e => {
        if (e.key === "Enter") {
            addSet();
        }
    });
}
addSet();
