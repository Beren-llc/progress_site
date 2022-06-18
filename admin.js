/////////////////////////////////////
// tasks perfomance variables
const assignedTasks = document.querySelector(".progress-bar__asigned");
const completeTasks = document.querySelector(".progress-bar__completed");
const activeTasks = document.querySelector(".progress-bar__active");

let tasks = [90, 50, 70]; //[0] -> assigned, [1] -> completed, [2] -> active tasks

function calcTasksPercentage(tasks) {
  const totalTasks = tasks.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  // console.log(totalTasks);

  // assigned tasks
  const assignedPercentage = Math.trunc((tasks[0] / totalTasks) * 100);
  assignedTasks.ariaValueNow = `${assignedPercentage}`;
  assignedTasks.style.width =
    assignedTasks.textContent = `${assignedPercentage}%`;

  // completed tasks
  const completedPercentage = Math.trunc((tasks[1] / totalTasks) * 100);
  completeTasks.ariaValueNow = `${completedPercentage}`;
  completeTasks.style.width =
    completeTasks.textContent = `${completedPercentage}%`;

  // active tasks
  const activePercentage = Math.trunc((tasks[2] / totalTasks) * 100);
  activeTasks.ariaValueNow = `${activePercentage}`;
  activeTasks.style.width = activeTasks.textContent = `${activePercentage}%`;
}

calcTasksPercentage(tasks);

////////////////////////////////////////////////
// user progresses
const userProgressContainer = document.querySelector(".users__progresses");

const users = [
  {
    moduleName: "Javascript",
    moduleLectures: 320,
    currentLecture: 190,
  },
  {
    moduleName: "React",
    moduleLectures: 320,
    currentLecture: 250,
  },
  {
    moduleName: "TypeScript",
    moduleLectures: 320,
    currentLecture: 70,
  },
  {
    moduleName: "NodeJs",
    moduleLectures: 320,
    currentLecture: 300,
  },
];

function displayUserProgresses(users) {
  userProgressContainer.innerHTML = "";
  users.forEach((user) => {
    const percentage = Math.trunc(
      (user.currentLecture / user.moduleLectures) * 100
    );
    const html = `
    <div class="user__progress my-2 border-bottom">
      <div>
        <a href="#" style="text-decoration: none;"><img src="user.jpg" alt="" class="img-fluid rounded-circle user__profile--image" style="height: 35px; width: 35px"/></a>
      </div>

      <div class="progress mt-2" style="height: 15px">
        <div class="progress-bar bg-success" role="progressbar"style="width: ${percentage}%; height: 15px" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100">${percentage}%</div>
      </div>
      <p class="mx-5 mt-0 px-5 text-center text-success">${user.moduleName}</p>
    </div>`;

    userProgressContainer.insertAdjacentHTML("beforeend", html);
  });
}

displayUserProgresses(users);
