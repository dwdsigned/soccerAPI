// fetch('https://api.github.com/users/dwdsigned/repos')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Request failed');
//     }
//     return response.json();
//   })
//   .then(repositories => {
//     let projectSection = document.getElementById("Projects");
//     let projectList = projectSection.querySelector("ul");

//     for (let i = 0; i < repositories.length; i++) {
//       let project = document.createElement("li");
//       project.textContent = repositories[i].name;
//       projectList.appendChild(project);
//     }
//   })
//   .catch(error => {
//     console.error('An error occurred:', error);
//   });

// **********************************************************
// Below is the example Fetch block (without edit?)
  // fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Request failed');
  //   }
  //   return response.json(); // Parse the response as JSON
  // })
  // .then(data => {
  //   console.log(data); // Do something with the data
  // })
  // .catch(error => {
  //   console.error('An error occurred:', error);
  // });










// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// // Use below this line
// // ****************************************************************************
// // Fetches Soccer Teams
// fetch(`https://v3.football.api-sports.io/teams/${i}.png`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "v3.football.api-sports.io",
// 		"x-rapidapi-key": "a0b0fa5f2dmsh0c1b1e6e338d2b0p1949bejsn2c77eb85b3eb"
// 	}
// })
// .then(response => {
//     if (!response.ok) {
//       throw new Error('Request failed');
//     }
//     return response.json();
//   })
// .then(response => {
// 	// console.log("teams json", response.json());
// 	console.log(response);
// 	// console.log(Object.keys(response));
// 	// console.log(JSON.parse(JSON.stringify(response)));
// 	// return response.json();


//     let teamSection = document.getElementById("Teams");
//     let teamList = teamSection.querySelector("ul");

//     for (let i = 0; i < response.length; i++) {
//       let team = document.createElement("img");
//       team.src = `https://v3.football.api-sports.io/teams/${i}.png`;
//       teamList.appendChild(team);
//     }




// })
// .catch(err => {
// 	console.log(err);
// });


// Fetches Soccer Leagues
// fetch("https://v3.football.api-sports.io/leagues", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "v3.football.api-sports.io",
// 		"x-rapidapi-key": "a0b0fa5f2dmsh0c1b1e6e338d2b0p1949bejsn2c77eb85b3eb"
// 	}
// })
// .then(response => {
// 	console.log("leagues", response);
// })
// .catch(err => {
// 	console.log(err);
// });


// console.log("hello there");



// const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead?h2h=33-34';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'a0b0fa5f2dmsh0c1b1e6e338d2b0p1949bejsn2c77eb85b3eb',
// 		'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }







// Use below this line
// ****************************************************************************
// Fetches Soccer Teams
// fetch(`https://v3.football.api-sports.io/teams/${i}.png`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "v3.football.api-sports.io",
// 		"x-rapidapi-key": "a0b0fa5f2dmsh0c1b1e6e338d2b0p1949bejsn2c77eb85b3eb"
// 	}
// })
// .then(response => {
//     if (!response.ok) {
//       throw new Error('Request failed');
//     }
//     return response.json();
//   })
// .then(response => {
// })
// .catch(err => {
// 	console.log(err);
// });


















// // let teamID = 1;
// let url = `https://media.api-sports.io/football/teams/${teamID}.png`


// fetch(url, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "v3.football.api-sports.io",
// 		"x-rapidapi-key": "a0b0fa5f2dmsh0c1b1e6e338d2b0p1949bejsn2c77eb85b3eb"
// 	}
// })
// .then(response => {
//     if (!response.ok) {
//       throw new Error('Request failed');
//     }
//     return response.json();
//   })
// .then(response => {
// 	let teamSection = document.getElementById("Teams");
//  	let teamList = teamSection.querySelector("ul");
// console.log(response);
// 		for (let i = 1; i < 100; teamID++) {		
// 		let team = document.createElement("img");
// 		console.log("team html", team);
// 		team.src = `https://v3.football.api-sports.io/teams/${i}.png`;
// 		teamList.appendChild(team);
// 		}
// })
// .catch(err => {
// 	console.log(err);
// })











//  let teamSection = document.getElementById("Teams");
//  let teamList = teamSection.querySelector("ul");

//     // async function asyncTeam() {
// 		for (let i = 0; i < response.length; i++) {
// 		let url = `https://v3.football.api-sports.io/teams/${i}.png`
		
// 		}



//       let team = document.createElement("img");
//       team.src = `https://v3.football.api-sports.io/teams/${i}.png`;
//       teamList.appendChild(team);


//    };

//	asyncTeam();


// let teamID = 1;

// fetch(`https://v3.football.api-sports.io/teams?id=${teamID}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "v3.football.api-sports.io",
// 		"x-rapidapi-key": "a0b0fa5f2dmsh0c1b1e6e338d2b0p1949bejsn2c77eb85b3eb"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

// !@#$%^&*()_)(*&^%$#@!@#$%^&*()_)(*&^%$#@!@#$%^&*()_)(*&^%$#@!@#$%^&*()_+_)(*&^%$#@!@#$%^&*()_+_)(*&^%$#@!@#$%^&*()_+_)(*&^%$#@!~!@#$%^&*()_+_)(*&^%$#@!@#$%^&*())

let teamID = 1;
let url = `https://media.api-sports.io/football/teams/${teamID}.png`;

fetch(url, {
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "a0b0fa5f2dmsh0c1b1e6e338d2b0p1949bejsn2c77eb85b3eb"
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Request failed');
  }
  return response.blob();
})
.then(blob => {
  let teamSection = document.getElementById("Teams");
  let teamList = teamSection.querySelector("ul");
  if (!teamList) {
    console.error("No <ul> found in #Teams");
    return;
  }
  for (let i = 1; i < 100; i++) {
    let team = document.createElement("img");
    team.src = URL.createObjectURL(blob);
    teamList.appendChild(team);
  }
})
.catch(err => {
  console.log(err);
});

// !@#$%^&*()_)(*&^%$#@!@#$%^&*()_)(*&^%$#@!@#$%^&*()_)(*&^%$#@!@#$%^&*()_+_)(*&^%$#@!@#$%^&*()_+_)(*&^%$#@!@#$%^&*()_+_)(*&^%$#@!~!@#$%^&*()_+_)(*&^%$#@!@#$%^&*())

let leagueID = 1;
let leagueURL = `https://media.api-sports.io/football/leagues/${leagueID}.png`;

fetch(leagueURL, {
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "a0b0fa5f2dmsh0c1b1e6e338d2b0p1949bejsn2c77eb85b3eb"
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Request failed');
  }
  return response.blob();
})
.then(blob => {
  let leagueSection = document.getElementById("Leagues");
  let leagueList = leagueSection.querySelector("ul");
  if (!leagueList) {
    console.error("No <ul> found in #Leagues");
    return;
  }
  for (let i = 1; i < 100; i++) {
    let league = document.createElement("img");
    league.src = URL.createObjectURL(blob);
    leagueList.appendChild(league);
  }
})
.catch(err => {
  console.log(err);
});


// fetch("https://v3.football.api-sports.io/teams?id=33", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "v3.football.api-sports.io",
// 		"x-rapidapi-key": "a0b0fa5f2dmsh0c1b1e6e338d2b0p1949bejsn2c77eb85b3eb"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });
