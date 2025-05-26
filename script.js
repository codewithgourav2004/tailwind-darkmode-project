document.getElementById("name").textContent = dashboardData.name;
document.getElementById("bio").textContent = dashboardData.bio;
document.getElementById("contact").textContent = dashboardData.contact;

const experienceList = document.getElementById("experience-list");
dashboardData.experience.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  experienceList.appendChild(li);
});

const skillsList = document.getElementById("skills-list");
dashboardData.skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  li.className = "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm";
  skillsList.appendChild(li);
});

const goalsList = document.getElementById("goals-list");
dashboardData.goals.forEach(goal => {
  const li = document.createElement("li");
  li.textContent = goal;
  goalsList.appendChild(li);
});
