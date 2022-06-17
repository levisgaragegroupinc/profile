// let projectListArray;
// const projectRemoveListArray = [0, 1, 3, 5, 6, 7, 9, 10, 14, 19, 23];

// const projectSection = document.querySelector("#project-section");

// const getReposGitHub = () => {
//   let requestUrl = "https://api.github.com/users/levisgaragegroupinc/repos";

//   const date = new Date();
//   const n = date.toLocaleDateString();

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       projectListArray = data;
//       let datetime = data[0].updated_at;
//       console.log(projectListArray);
//       console.log(data[0].html_url);
//       console.log(data[0].updated_at);
//       console.log(data[0].name);
//       console.log(moment(datetime).utc().format("MM/DD/YYYY"));

//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.createElement("li");
//         listItem.textContent = data[i].url;
//         projectSection.appendChild(listItem);
//       }
//     });
// };

// getReposGitHub();

// const getReposTeamMembersGitHub = () => {
//   let requestUrl =
//     "https://api.github.com/repos/levisgaragegroupinc/knickknacks/contributors";

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       console.log(data[0].login);
//       console.log(data[1].login);
//       console.log(data[1].html_url);
//       console.log(data[1].avatar_url);
//     });
// };

// getReposTeamMembersGitHub();
