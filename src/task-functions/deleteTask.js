// // import React from "react";
// import Swal from "sweetalert2";

// function deleteTask() {
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
//         icon: "info",
//         title: "Task deleted"
//     });
// }

// export default deleteTask;


const deleteTask = (tasks, index) => {
    return tasks.filter((_, idx) => idx !== index);  // Remove the task by filtering it out
};

export default deleteTask;

