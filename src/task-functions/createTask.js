// // import React from "react";
// import Swal from "sweetalert2";

// function createTask() {
//     const Toast = Swal.mixin({
//         toast: true,
//         position: "bottom-end",
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//             toast.onmouseenter = Swal.stopTimer;
//             toast.onmouseleave = Swal.resumeTimer;
//         }
//     });
//     Toast.fire({
//         icon: "success",
//         title: "Task created"
//     });
// }

// export default createTask;


const createTask = (tasks, taskText) => {
    return [...tasks, { text: taskText, checked: false }];  // Add the new task to the array
};

export default createTask;

