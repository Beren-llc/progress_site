const userPic = document.querySelector(".user__profile--image");
const containerApp = document.querySelector(".app__container");
const userProgressesContainer = document.querySelector(".users__progresses");

const userProgressList = [
  { learning: 50, projects: 90 },
  { learning: 40, projects: 20 },
  { learning: 70, projects: 10 },
  { learning: 50, projects: 30 },
  { learning: 60, projects: 40 },
];

const displayUserProgress = function (users) {
  userProgressesContainer.innerHTML = "";
  users.forEach((user) => {
    const learning = user.learning;
    const projects = user.projects;

    const html = `
    <div class="user__progress">
        <div>
            <img src="user.jpg" alt="" class="img-fluid rounded-circle user__profile--image" style="height: 35px; width: 35px" />
        </div>
        <div class="progress mt-3" style="height: 5px">
            <div class="progress-bar bg-success" role="progressbar" style="width: ${learning}%; height: 5px" ></div>
            <div class="progress-bar bg-warning" role="progressbar" style="width: ${projects}%; height: 5px" ></div>
        </div>
    </div>`;

    userProgressesContainer.innerHTML("afterbegin", html);
  });
};

// displayUserProgress(userProgressList);
