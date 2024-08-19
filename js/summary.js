let tasks = [];
const BASE_URL = "https://join-2-b992b-default-rtdb.europe-west1.firebasedatabase.app/";

async function initSummary() {
    let tasksData = await getAllTasks("tasks");
    let tasksArray = Object.keys(tasksData);
    
    let statusCounts = {
        todo: 0,
        done: 0,
        inProgress: 0,
        awaitFeedback: 0
    };

    let priorityCounts = {
        urgent: 0,
        low: 0,
        medium: 0
    };

    for (let j = 0; j < tasksArray.length; j++) {
        let task = tasksData[tasksArray[j]];
        tasks.push({ id: tasksArray[j], ...task });
        switch (task.status) {
            case "todo":
                statusCounts.todo++;
                break;
            case "done":
                statusCounts.done++;
                break;
            case "inProgress":
                statusCounts.inProgress++;
                break;
            case "awaitFeedback":
                statusCounts.awaitFeedback++;
                break;
        }

        if (task.priority === "urgent") {
            priorityCounts.urgent++;
        }
        if (task.priority === "low") {
            priorityCounts.low++;
        }
        if (task.priority === "medium") {
            priorityCounts.medium++;
        }
    }

    document.getElementById('taskCount').textContent = tasksArray.length;
    document.getElementById('todoCount').textContent = statusCounts.todo;
    document.getElementById('doneCount').textContent = statusCounts.done;
    document.getElementById('inProgressCount').textContent = statusCounts.inProgress;
    document.getElementById('awaitingFeedbackCount').textContent = statusCounts.awaitFeedback;

    let displayedPriorityCount = 0;
    let priorityIcon = "../assets/img/Vector.png"; 

    if (priorityCounts.urgent > 0) {
        displayedPriorityCount = priorityCounts.urgent;
        priorityIcon = "../assets/img/Prio alta.png"; 
        document.getElementById('priority').textContent = "Urgent";
    } else if (priorityCounts.medium > 0) {
        displayedPriorityCount = priorityCounts.medium;
        priorityIcon = "../assets/img/Prio media.png"; 
        document.getElementById('priority').textContent = "Medium";
    } else if (priorityCounts.low > 0) {
        displayedPriorityCount = priorityCounts.low;
        priorityIcon = "../assets/img/Prio baja.png"; 
        document.getElementById('priority').textContent = "Low";
    }
    else{
        priorityIcon = "../assets/img/mail.png"; 
        document.getElementById('priority').textContent = "None";
    }

    document.getElementById('urgentCount').textContent = displayedPriorityCount;
    document.getElementById('prioIcon').src = priorityIcon; 

    let today = new Date();
    let day = today.getDate().toString().padStart(2, '0'); 
    let month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    let year = today.getFullYear(); 
    let formattedDate = `${month}/${day}/${year}`; 
    document.getElementById('date').textContent = formattedDate;
    setDaytimeGreeting();
}

async function getAllTasks(path) {
    let response = await fetch(BASE_URL + path + ".json");
    return response.json();
}

function setDaytimeGreeting() {
    let now = new Date();
    let hours = now.getHours();
    let daytime;

    if (hours >= 0 && hours < 10) {
        daytime = "Guten Morgen";
    } else if (hours >= 10 && hours < 20) {
        daytime = "Guten Tag";
    } else {
        daytime = "Guten Abend";
    }

    document.getElementById('welcomeUser').textContent = daytime;
}