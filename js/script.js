const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

 
//selezione elemento uuput temporaneo
const listTeam = document.querySelector(".team-container");



let items = ""

// output temporaneo con li in ul 
for (let i = 0; i < teamMembers.length; i++) {
  let membroIesimo = teamMembers[i];

  items += generaTeamMember(membroIesimo);
}


listTeam.innerHTML = items;




//funzione per generare un team member
function generaTeamMember(oggetto) {
  //estrapoliamo i valori delle varie proprieta dell'oggetto con sintassi destrutturata
  const { name, role, img } = oggetto;

  let item = `
  <div class="team-card">
    <div class="card-image">
      <img src="./${img}" />
    </div>
    <div class="card-text">
      <h3>${name}</h3>
      <p>${role}</p>
    </div>
  </div>
  `
  return item
}