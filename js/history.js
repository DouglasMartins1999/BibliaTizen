let vHistory = [];

if (localStorage.getItem("history") === null) {
    setHistory();
}

function setHistory() {
    localStorage.setItem("history", JSON.stringify(vHistory));
}

function fetchHistory() {
    vHistory = localStorage.getItem("history")
    vHistory = JSON.parse(vHistory || "[]");
}

function addHistoryEntry() {
    const entry = [ book, chapter, version ].join(".");
    const index = vHistory.indexOf(entry)

    if(index !== -1) {
        vHistory.splice(index, 1);
    }

    vHistory.unshift(entry);
    setHistory();
}

fetchHistory();