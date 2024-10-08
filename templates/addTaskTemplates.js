/**
 * This function should generate the Contact Item.
 * @param {*} index 
 * @param {*} contact 
 * @param {*} isChecked 
 * @returns 
 */
function generateContactItemHTML(index, contact, isChecked) {
    return /*html*/`
        <div class="one-person-div" onclick="addAssignedPersons(${index})" id="onePersonDiv-${index}">
            <div class="one-person-div-left">
                <div class="assigned-person-initials" style="background-color:${contact.color}; color:white">
                    ${profileInitials(index)}
                </div>
                <div>${contact.name}</div>
            </div>
            <input id="inputCheckbox-${index}" class="assign-checkbox" type="checkbox" ${isChecked}>
            <label for="inputCheckbox-${index}"></label>
        </div>`;
}

/**
 * This function should generate the edit and trash button.
 * @param {*} index 
 * @returns 
 */
function generateEditAndTrashHTML(index) {
    return /*html*/`
        <img src="../assets/img/deleteTask.png" id="leftImage-${index}" onclick="deleteSubtask(${index})" class="deleteSubtask">
        |
        <img src="../assets/img/checkTask.png" id="rightImage-${index}" onclick="saveChangedSubtask(${index})" class="saveSubtask">
    `;
}

/**
 * This function should generate the subtasks.
 * @param {*} index 
 * @param {*} subtaskText 
 * @returns 
 */
function generateSubtaskHTML(index, subtaskText) {
    return /*html*/`
        <ul class="oneSubtask" id="oneSubtask-${index}" onmouseover="subtaskHoverEffekt(${index})" onmouseout="subtaskNoHoverEffekt(${index})">
            <li class="" id="subtaskListText-${index}">${subtaskText}</li>
            <input class="d-none editInput" value="${subtaskText}" id="editInput-${index}">
            <div class="d-none editAndTrash" id="editAndTrash-${index}">
                <img src="../assets/img/editTask.png" id="leftImage-${index}" onclick="editSubtask(${index})" class="editSubtask">
                |
                <img src="../assets/img/deleteTask.png" id="rightImage-${index}" onclick="deleteSubtask(${index})" class="deleteSubtask">
            </div>
        </ul>
    `;
}

/**
 * This function should create a task popup.
 * @returns 
 */
function createTaskPopupTemplate() {
    return /*html*/`
        <span>Task added to board</span>
        <svg class="pop-up-added-svg" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9575 5.73855L22.9575 26.1929C22.9569 26.7955 22.7173 27.3732 22.2912 27.7993C21.8651 28.2253 21.2874 28.465 20.6848 28.4656L16.1394 28.4656C15.5368 28.465 14.9591 28.2253 14.533 27.7993C14.1069 27.3732 13.8673 26.7955 13.8667 26.1929L13.8667 5.73855C13.8673 5.13597 14.1069 4.55825 14.533 4.13217C14.9591 3.70608 15.5368 3.46644 16.1394 3.46584L20.6848 3.46584C21.2874 3.46644 21.8651 3.70608 22.2912 4.13217C22.7173 4.55825 22.9569 5.13597 22.9575 5.73855ZM16.1394 26.1929L20.6848 26.1929L20.6848 5.73855L16.1394 5.73855L16.1394 26.1929ZM16.1394 5.73855L16.1394 26.1929C16.1388 26.7955 15.8992 27.3731 15.4731 27.7992C15.047 28.2253 14.4693 28.4649 13.8667 28.4655L9.32128 28.4655C8.71871 28.4649 8.14099 28.2253 7.7149 27.7992C7.28882 27.3731 7.04918 26.7954 7.04858 26.1928L7.04858 5.73852C7.04918 5.13595 7.28882 4.55823 7.7149 4.13214C8.14099 3.70606 8.71871 3.46642 9.32128 3.46582L13.8667 3.46582C14.4693 3.46642 15.047 3.70606 15.4731 4.13214C15.8992 4.55823 16.1388 5.13597 16.1394 5.73855ZM9.32128 26.1928L13.8667 26.1929L13.8667 5.73855L9.32128 5.73852L9.32128 26.1928ZM9.32128 5.73852L9.32128 26.1928C9.32068 26.7954 9.08104 27.3731 8.65496 27.7992C8.22887 28.2253 7.65115 28.4649 7.04858 28.4656L2.50317 28.4656C1.9006 28.4649 1.32288 28.2253 0.896793 27.7992C0.470708 27.3731 0.23107 26.7954 0.230469 26.1928L0.230468 5.73852C0.231069 5.13595 0.470707 4.55823 0.896792 4.13214C1.32288 3.70606 1.9006 3.46642 2.50317 3.46582L7.04858 3.46582C7.65115 3.46642 8.22887 3.70606 8.65496 4.13214C9.08104 4.55823 9.32068 5.13595 9.32128 5.73852ZM2.50317 26.1928L7.04858 26.1928L7.04858 5.73852L2.50317 5.73852L2.50317 26.1928Z" fill="white"/>
            <path d="M29.7756 5.7388L29.7756 26.1931C29.775 26.7957 29.5354 27.3734 29.1093 27.7995C28.6832 28.2256 28.1055 28.4652 27.5029 28.4658L22.9575 28.4658C22.3549 28.4652 21.7772 28.2256 21.3511 27.7995C20.925 27.3734 20.6854 26.7955 20.6848 26.1929L20.6848 5.73855C20.6854 5.13597 20.925 4.5585 21.3511 4.13242C21.7772 3.70633 22.3549 3.4667 22.9575 3.46609L27.5029 3.46609C28.1055 3.4667 28.6832 3.70633 29.1093 4.13242C29.5354 4.5585 29.775 5.13622 29.7756 5.7388ZM22.9575 26.1929L27.5029 26.1931L27.5029 5.7388L22.9575 5.73855L22.9575 26.1929Z" fill="white"/>
        </svg>
    `;
}

/**
 * This function should render the div for assigned Persons.
 * @param {*} color 
 * @param {*} initials 
 * @returns 
 */
function assignedPersonTemplate(color, initials) {
    return /*html*/`
        <div style="background-color:${color}; color:white" class="selected-person-initals-div">
            ${initials}
        </div>
    `;
}

/**
 * This function should show how much more people are assigned.
 * @param {*} extraCount 
 * @returns 
 */
function additionalPersonsTemplate(extraCount) {
    return /*html*/`
        <div style="background-color:white; color:black" class="selected-person-initals-div">
            +${extraCount}
        </div>
    `;
}

