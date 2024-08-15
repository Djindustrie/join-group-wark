/**
 * Diese Funktion dient zum rendern des Edit Overlays der Aufgaben
 * @param {*} i 
 */
function openEditTaskOverlay(i){
    let editTaskOverlayContent = document.getElementById('editTaskOverlayContent');
    editTaskOverlayContent.classList.remove('edit-task-overlay-content');
    editTaskOverlayContent.classList.add('edit-task-overlay-edit');
    editTaskOverlayContent.innerHTML='';
    editTaskOverlayContent.innerHTML=/*html*/`
            <form class="form-edit-overlay" onsubmit="saveTasksChanges(${i})">
                    <div class="close-button-top">
                        <svg onclick="closeDetailsOverlay()" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.001 12.5001L17.244 17.7431M6.758 17.7431L12.001 12.5001L6.758 17.7431ZM17.244 7.25708L12 12.5001L17.244 7.25708ZM12 12.5001L6.758 7.25708L12 12.5001Z" stroke="#2A3647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="task-title">
                    <label for="editTaskOverlayTitle-${i}">Title</label>
                    <input required type="text"id="editTaskOverlayTitle-${i}" value="${tasks[i]['title']}">
                    </div>
                    <div class="description-title">
                    <label for="editTaskOverlayDescription-${i}">Description</label>
                    <textarea required type="text"id="editTaskOverlayDescription-${i}" >${tasks[i]['description']}</textarea>
                    </div>
                    <div class="due-date">
                        <label for="editOverlayDueDate-${i}">Due date</label>
                        <input required type="date" id="editOverlayDueDate-${i}" value="${tasks[i]['dueDate']}">
                    </div>
                    <div>
                    <div class="prio-content-parent" id="prioContent">
                                <label>Priority:</label>
                                <div class="prio-content">
                                    <a id='urgentButtonOverlay' class="urgentPrio" href="#" onclick="selectPrio(${i},'urgent')">Urgent
                                        <svg id="svgUrgentPrio"  width="21" height="16" viewBox="0 0 21 16" 
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.6528 15.2547C19.4182 15.2551 19.1896 15.1803 19.0007 15.0412L10.7487 8.958L2.49663 15.0412C2.38078 15.1267 2.24919 15.1887 2.10939 15.2234C1.96959 15.2582 1.82431 15.2651 1.68184 15.2437C1.53937 15.2223 1.40251 15.1732 1.27906 15.099C1.15562 15.0247 1.04801 14.927 0.96238 14.8112C0.876751 14.6954 0.814779 14.5639 0.780002 14.4243C0.745226 14.2846 0.738325 14.1394 0.759696 13.997C0.802855 13.7095 0.958545 13.4509 1.19252 13.2781L10.0966 6.70761C10.2853 6.56802 10.5139 6.49268 10.7487 6.49268C10.9835 6.49268 11.212 6.56802 11.4007 6.70761L20.3048 13.2781C20.4908 13.415 20.6286 13.6071 20.6988 13.827C20.7689 14.0469 20.7678 14.2833 20.6955 14.5025C20.6232 14.7216 20.4834 14.9124 20.2962 15.0475C20.1089 15.1826 19.8837 15.2551 19.6528 15.2547Z"
                                                fill="#currentColor" />
                                            <path
                                                d="M19.6528 9.50568C19.4182 9.50609 19.1896 9.43124 19.0007 9.29214L10.7487 3.20898L2.49663 9.29214C2.26266 9.46495 1.96957 9.5378 1.68184 9.49468C1.39412 9.45155 1.13532 9.29597 0.962385 9.06218C0.789449 8.82838 0.716541 8.53551 0.7597 8.24799C0.802859 7.96048 0.95855 7.70187 1.19252 7.52906L10.0966 0.958588C10.2853 0.818997 10.5139 0.743652 10.7487 0.743652C10.9835 0.743652 11.212 0.818997 11.4007 0.958588L20.3048 7.52906C20.4908 7.66598 20.6286 7.85809 20.6988 8.07797C20.769 8.29785 20.7678 8.53426 20.6955 8.75344C20.6232 8.97262 20.4834 9.16338 20.2962 9.29847C20.1089 9.43356 19.8837 9.50608 19.6528 9.50568Z"
                                                fill="#currentColor" />
                                        </svg>
                                    </a>
                                    <a id='mediumButtonOverlay' class="mediumPrio" href="#" onclick="selectPrio(${i},'medium')">Medium
                                        <svg  id="svgMediumPrio" width="21" height="8" viewBox="0 0 21 8" 
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.1526 7.72528H1.34443C1.05378 7.72528 0.775033 7.60898 0.569514 7.40197C0.363995 7.19495 0.248535 6.91419 0.248535 6.62143C0.248535 6.32867 0.363995 6.0479 0.569514 5.84089C0.775033 5.63388 1.05378 5.51758 1.34443 5.51758H19.1526C19.4433 5.51758 19.722 5.63388 19.9276 5.84089C20.1331 6.0479 20.2485 6.32867 20.2485 6.62143C20.2485 6.91419 20.1331 7.19495 19.9276 7.40197C19.722 7.60898 19.4433 7.72528 19.1526 7.72528Z"
                                                fill="#currentColor" />
                                            <path
                                                d="M19.1526 2.48211H1.34443C1.05378 2.48211 0.775033 2.36581 0.569514 2.1588C0.363995 1.95179 0.248535 1.67102 0.248535 1.37826C0.248535 1.0855 0.363995 0.804736 0.569514 0.597724C0.775033 0.390712 1.05378 0.274414 1.34443 0.274414L19.1526 0.274414C19.4433 0.274414 19.722 0.390712 19.9276 0.597724C20.1331 0.804736 20.2485 1.0855 20.2485 1.37826C20.2485 1.67102 20.1331 1.95179 19.9276 2.1588C19.722 2.36581 19.4433 2.48211 19.1526 2.48211Z"
                                                fill="#currentColor" />
                                        </svg>
                                    </a>
                                    <a id='lowButtonOverlay' class="lowPrio" href="#" onclick="selectPrio(${i},'low')">Low
                                        <svg  id="svgLowPrio"  width="21" height="16" viewBox="0 0 21 16" 
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.2485 9.50589C10.0139 9.5063 9.7854 9.43145 9.59655 9.29238L0.693448 2.72264C0.57761 2.63708 0.47977 2.52957 0.405515 2.40623C0.33126 2.28289 0.282043 2.14614 0.260675 2.00379C0.217521 1.71631 0.290421 1.42347 0.463337 1.1897C0.636253 0.955928 0.895022 0.800371 1.18272 0.757248C1.47041 0.714126 1.76347 0.786972 1.99741 0.95976L10.2485 7.04224L18.4997 0.95976C18.6155 0.874204 18.7471 0.812285 18.8869 0.777538C19.0266 0.742791 19.1719 0.735896 19.3144 0.757248C19.4568 0.7786 19.5937 0.82778 19.7171 0.901981C19.8405 0.976181 19.9481 1.07395 20.0337 1.1897C20.1194 1.30545 20.1813 1.43692 20.2161 1.57661C20.2509 1.71629 20.2578 1.86145 20.2364 2.00379C20.215 2.14614 20.1658 2.28289 20.0916 2.40623C20.0173 2.52957 19.9195 2.63708 19.8036 2.72264L10.9005 9.29238C10.7117 9.43145 10.4831 9.5063 10.2485 9.50589Z"
                                                fill="#currentColor" />
                                            <path
                                                d="M10.2485 15.2544C10.0139 15.2548 9.7854 15.18 9.59655 15.0409L0.693448 8.47117C0.459502 8.29839 0.30383 8.03981 0.260675 7.75233C0.217521 7.46485 0.290421 7.17201 0.463337 6.93824C0.636253 6.70446 0.895021 6.54891 1.18272 6.50578C1.47041 6.46266 1.76347 6.53551 1.99741 6.7083L10.2485 12.7908L18.4997 6.7083C18.7336 6.53551 19.0267 6.46266 19.3144 6.50578C19.602 6.54891 19.8608 6.70446 20.0337 6.93824C20.2066 7.17201 20.2795 7.46485 20.2364 7.75233C20.1932 8.03981 20.0376 8.29839 19.8036 8.47117L10.9005 15.0409C10.7117 15.18 10.4831 15.2548 10.2485 15.2544Z"
                                                fill="#currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                    </div>
                    <div class="assign-to" id="assignDropdown">
                                <label>Assigned to</label>
                            <div onclick="rollContactsListEdit(${i})" class="assigned-to-input-and-button">
                                    <!-- <input class="assign-to-input" id="assignedPersons"
                                        value="Select Contacts to assign"> -->
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_210222_6030" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="24" height="24">
                                            <rect width="24" height="24" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_210222_6030)">
                                            <path
                                                d="M11.3 14.3L8.69998 11.7C8.38331 11.3833 8.31248 11.0208 8.48748 10.6125C8.66248 10.2042 8.97498 10 9.42498 10H14.575C15.025 10 15.3375 10.2042 15.5125 10.6125C15.6875 11.0208 15.6166 11.3833 15.3 11.7L12.7 14.3C12.6 14.4 12.4916 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8666 14.6 11.7416 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z"
                                                fill="#2A3647" />
                                        </g>
                                    </svg>
                            </div>
                                <div id="showAssignedPersonInitial-${i}" class="show-assigned-persons-initials"></div>
                                <div class="d-none assign-contacts-list" id="edit-assignContactsList"></div>
                    </div>
                    <div class="subtask">
                                <label>Subtasks</label>
                            <div class="subtask-container">
                                    <input placeholder=" Add new task" class="subtask-input" id="subtaskInput-${i}"
                                    type="text" />
                                <div class="subtask-add-button">
                                    <img onclick="editAddSubtask(${i})" src="../assets/svg/addButton.svg" alt="">
                                </div>
                            </div>
                            <div class="subtask-list" id="editOverlaySubtaskList"></div>
                    </div>
                    <div class="ok-button">
                        <button type="submit">
                            OK
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_207792_3987" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                            <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_207792_3987)">
                            <path d="M9.55057 15.65L18.0256 7.175C18.2256 6.975 18.4631 6.875 18.7381 6.875C19.0131 6.875 19.2506 6.975 19.4506 7.175C19.6506 7.375 19.7506 7.6125 19.7506 7.8875C19.7506 8.1625 19.6506 8.4 19.4506 8.6L10.2506 17.8C10.0506 18 9.81724 18.1 9.55057 18.1C9.28391 18.1 9.05057 18 8.85057 17.8L4.55057 13.5C4.35057 13.3 4.25474 13.0625 4.26307 12.7875C4.27141 12.5125 4.37557 12.275 4.57557 12.075C4.77557 11.875 5.01307 11.775 5.28807 11.775C5.56307 11.775 5.80057 11.875 6.00057 12.075L9.55057 15.65Z" fill="white"/>
                            </g>
                            </svg>
                        </button>
                    </div>
                </form>
        
                  
              
    `;
    colorOfPriority(i);
    renderAllAvaillableSubtasks(i);
    editOvShowAssignedPersons(i);
}

/**
 * Diese Funktion dient dazu im Overlay neue subtasks hinzufügen zu können.
 * @param {*} i 
 */
function editAddSubtask(i){
    let subtask = document.getElementById(`subtaskInput-${i}`).value.trim();
    if (subtask) {
        tasks[i]['subtaskList'].push(subtask);
        document.getElementById(`subtaskInput-${i}`).value = "";
    }
    renderAllAvaillableSubtasks(i);
}

/**
 * Diese Funktion dient dazu, dass alle Subtasks der Task gerendert werden
 * @param {*} i 
 */
function renderAllAvaillableSubtasks(i){
    let subtaskListDiv= document.getElementById('editOverlaySubtaskList');
    subtaskListDiv.innerHTML='';
    for(j=0; j<tasks[i]['subtaskList'].length; j++){
        subtaskListDiv.innerHTML +=`
        <ul class="edit-one-subtask" id="oneSubtask-${j}" class="oneSubtask" onmouseover="editSubtaskHoverEffekt(${j})" onmouseout= "editSubtaskNoHoverEffekt(${j})">
            <li class="" id="editSubtaskListText-${i}-${j}">${tasks[i]['subtaskList'][j]}</li>
            <input class="d-none" value="${tasks[i]['subtaskList'][j]}" id="editInput-${j}">
            <div class="d-none editAndTrash" id="editEditAndTrash-${j}">
                <img src="../assets/img/editTask.png" id="leftImage-${j}" onclick="editEditSubtask(${i},${j})">
                |
                <img src="../assets/img/deleteTask.png" id="rightImage-${i}" onclick="editOverlayDeleteSubtask(${i},${j})">
            </div>
        </ul>
        `;
    }
}
/**
 * Diese Funktion soll den onmouseover effekt wieder mit onmouseout rückgängig machen.(Bei den Subtasks)
 * @param {*} i 
 */
function editSubtaskNoHoverEffekt(j){
    let trashAndEdit = document.getElementById(`editEditAndTrash-${j}`);
    trashAndEdit.classList.add('d-none');
}

/**
 * Diese Funktion soll den onmouseover effekt hinzufügen.(Bei den Subtasks)
 * @param {*} i 
 */
function editSubtaskHoverEffekt(j){
    let trashAndEdit = document.getElementById(`editEditAndTrash-${j}`);
    trashAndEdit.classList.remove('d-none');
}
/**
 * Mit dieser Funktion soll man die Subtask an genau der entsprechenden stelle ändern können.
 * @param {*} i 
 */
function editEditSubtask(i ,j ){
    let subtaskListText = document.getElementById(`editSubtaskListText-${i}-${j}`);
    subtaskListText.classList.add('d-none');
    let editInput = document.getElementById(`editInput-${j}`);
    editInput.classList.remove('d-none');
    let editAndTrash = document.getElementById(`editEditAndTrash-${j}`);
    editAndTrash.innerHTML='';
    editAndTrash.innerHTML= `
    <img src="../assets/img/deleteTask.png" id="leftImage-${j}" onclick="editOverlayDeleteSubtask(${j},${i})">
    |
    <img src="../assets/img/checkTask.png" id="rightImage-${j}" onclick="saveChangedSubtask(${j},${i})">
    `
}

/**
 * Durch Aktivierung dieser Funktion können Änderungen an Unteraufgaben gespeichert werden.
 * @param {*} i 
 */
function saveChangedSubtask(j,i){
    let editInput = document.getElementById(`editInput-${j}`).value.trim();
    tasks[i]['subtaskList'].splice(j,1, editInput);
    renderAllAvaillableSubtasks(i);
}

/**
 * Diese Funktion dient zum Löschen von subtasks.
 * @param {*} i 
 */
function editOverlayDeleteSubtask(i,j){
    let index = tasks[i]['checkedSubtasks'].indexOf(tasks[i]['subtaskList'][j]);
    if(index !=-1){
        tasks[i]['checkedSubtasks'].splice(index,1);
    }
    tasks[i]['subtaskList'].splice(j,1);
    renderAllAvaillableSubtasks(i);
}

/**Diese Funktion soll den Wert für die Wichtigkeit abspeichern */
function selectPrio(i,x){
    let urgent = document.getElementById('urgentButtonOverlay');
    let medium = document.getElementById('mediumButtonOverlay');
    let low = document.getElementById('lowButtonOverlay');
    let urgentSVG = document.getElementById('svgUrgentPrio');
    let mediumSVG = document.getElementById('svgMediumPrio');
    let lowSVG = document.getElementById('svgLowPrio');
    if(x =='urgent'){
        urgentSVG.classList.add('svg-prio-click');
        urgentSVG.classList.remove('svgUrgentPrio');
        mediumSVG.classList.remove('svg-prio-click');
        mediumSVG.classList.add('svgMediumPrio');
        lowSVG.classList.remove('svg-prio-click');
        lowSVG.classList.add('svgLowPrio');
        urgent.classList.add('urgentPrio_click');
        urgent.classList.remove('urgentPrio');
        medium.classList.add('mediumPrio');
        medium.classList.remove('mediumPrio_click');
        low.classList.add('lowPrio');
        low.classList.remove('lowPrio_click');
    }else if(x =='medium'){
        urgentSVG.classList.remove('svg-prio-click');
        urgentSVG.classList.add('svgUrgentPrio');
        mediumSVG.classList.add('svg-prio-click');
        mediumSVG.classList.remove('svgMediumPrio');
        lowSVG.classList.remove('svg-prio-click');
        lowSVG.classList.add('svgLowPrio');
        urgent.classList.add('urgentPrio');
        urgent.classList.remove('urgentPrio_click');
        medium.classList.add('mediumPrio_click');
        medium.classList.remove('mediumPrio');
        low.classList.add('lowPrio');
        low.classList.remove('lowPrio_click');
    }else if(x =='low'){
        urgentSVG.classList.remove('svg-prio-click');
        urgentSVG.classList.add('svgUrgentPrio');
        mediumSVG.classList.remove('svg-prio-click');
        mediumSVG.classList.add('svgMediumPrio');
        lowSVG.classList.add('svg-prio-click');
        lowSVG.classList.remove('svgLowPrio');
        urgent.classList.add('urgentPrio');
        urgent.classList.remove('urgentPrio_click');
        medium.classList.add('mediumPrio');
        medium.classList.remove('mediumPrio_click');
        low.classList.add('lowPrio_click');
        low.classList.remove('lowPrio');
    }
    tasks[i]['priority'] = x;
}

/**
 * Diese Funktion dient dazu, dass beim laden des edit Overlays bereits eine Farbe bei der bereits bekannten prio ist.
 * @param {*} i 
 */
function colorOfPriority(i){
    let prio = tasks[i]['priority'];
    let urgent = document.getElementById('urgentButtonOverlay');
    let medium = document.getElementById('mediumButtonOverlay');
    let low = document.getElementById('lowButtonOverlay');
    if(prio){
    if(prio == "urgent"){
        urgent.classList.add('urgentPrio_click');
        urgent.classList.remove('urgentPrio');
        medium.classList.add('svgMediumPrio');
        low.classList.add('svgLowPrio');
    }else if(prio =="medium"){
        medium.classList.add('mediumPrio_click');
        medium.classList.remove('mediumPrio');
        urgent.classList.add('svgUrgentPrio');
        low.classList.add('svgLowPrio');
    }else if(prio == "low"){
        low.classList.add('lowPrio_click');
        low.classList.remove('svglowPrio');
        medium.classList.add('svgMediumPrio');
        urgent.classList.add('svgUrgentPrio');
    }}else{}
}

/**
 * In dieser Funktion soll der Titel geändert und gespeichert werden.
 * @param {*} i 
 */
function changeTitle(i){
 let editTaskOverlayTitle = document.getElementById(`editTaskOverlayTitle-${i}`).value.trim();
 tasks[i]['title'] =  editTaskOverlayTitle;
}

/**
 * In dieser Funktion soll die Description geändert werden können.
 * @param {*} i 
 */
function changeDescription(i){
    let editTaskOverlayDescription = document.getElementById(`editTaskOverlayDescription-${i}`).value.trim();
    tasks[i]['description'] = editTaskOverlayDescription;
}

/**
 * In dieser Funktion soll das Datum geändert werden.
 * @param {*} i 
 */
function changeDueDate(i){
    let editOverlayDueDate = document.getElementById(`editOverlayDueDate-${i}`).value;
    tasks[i]['dueDate']= editOverlayDueDate;
}

/**
 * Diese Funktion dient dazu bei onclick die Liste der Kontakte mit den Initialien und der Checkbox zu rendern.
 */
function rollContactsListEdit(i){
    let assignContactsList = document.getElementById('edit-assignContactsList');
    assignContactsList.classList.toggle('d-none');
    assignContactsList.innerHTML='';
    for(j=0; j<contacts.length; j++){
        // let isChecked = tasks[i]['assigned'].includes(contacts[j]['name']) ? 'checked' : '';
        let isChecked = tasks[i]['assigned'].some(person => person.name === contacts[j]['name']) ? 'checked' : '';
        assignContactsList.innerHTML +=/*html*/`
        <div class="one-person-div">
            <!-- <div class="assigned-person-initials" style="background-color:${contacts[j]['color']}; color:white">${editOverlayProfileInitials(j)}</div> -->
            <input id="editInputCheckbox-${j}" class="assigen_checkbox" type="checkbox" onclick="editAddAssignedPersons(${j},${i})" ${isChecked}>
            <div>${contacts[j]['name']}</div>
        </div>`
    }
}

/**
 * Diese Funktion soll die Div Container für die Initalien der ausgewählten Personen rendern.
 * @param {*} i 
 */
function editOvShowAssignedPersons(i) {
    let showAssignedPersons = document.getElementById(`showAssignedPersonInitial-${i}`);
    showAssignedPersons.innerHTML='';
    for(j=0;j<tasks[i]['assigned'].length;j++){
        showAssignedPersons.innerHTML += `<div style="background-color:${tasks[i]['assigned'][j]['color']}; color:white" class="selected-person-initals-div">${editAssignedPersonsInitials(i, j)}</div>`;
}
} 

/**
 * Diese Funktion rendert die initalien der ausgewählten Personen
 * @param {*} i 
 * @param {*} j 
 * @returns 
 */
function editAssignedPersonsInitials(i,j){
    let names = tasks[i]['assigned'][j].name.split(" "),
      initialsAssignedPersons = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
        initialsAssignedPersons += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initialsAssignedPersons;
}

/**
 * In dieser Funktion werden Personen zur Task hinzugefügt.
 * @param {*} j 
 * @param {*} i 
 */
function editAddAssignedPersons(j, i){
    let inputCheckbox = document.getElementById(`editInputCheckbox-${j}`);
    let personName = contacts[j].name;
    if (inputCheckbox.checked) {
        // Prüfen, ob die Person bereits im Array vorhanden ist, bevor sie hinzugefügt wird
        if (!tasks[i]['assigned'].includes(person => person.name === personName)) {
            let newAssign = { name: contacts[j].name, color: contacts[j].color };
            tasks[i]['assigned'].push(newAssign);
        }
    } else {
        // Wenn die Checkbox nicht mehr ausgewählt ist, die Person aus dem Array entfernen
        tasks[i]['assigned'] = tasks[i]['assigned'].filter(person => person.name !== personName);
    }
    editOvShowAssignedPersons(i);
}

/**
 * Diese Funktion dient dazu, die Profilinitalien der Kontakte zu erstellen.
 * @param {*} i 
 * @returns 
 */
function editOverlayProfileInitials(i){
    let names = contacts[i]['name'].split(" "),
    initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}

/**
 * Dies ist die abschließende Speicherfunktion beim Edit-Overlay, die dafür sorgt, dass alle bisher geänderten Infos auch gespeichert werden.
 * @param {*} i 
 */
async function saveTasksChanges(i){
    changeTitle(i);
    changeDescription(i);
    changeDueDate(i);
    await putData(`/tasks/${tasks[i]['id']}`, tasks[i]);
    tasks=[];
    await loadTasks();
    todoBoard();
    inProgressBoard();
    awaitFeedbackBoard();
    doneBoard();
    openDetailedTaskOverlay(i);
}