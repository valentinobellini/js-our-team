//array di oggetti contenenti tutte le informazioni sui team mambers
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

 
//seleziona elemento ouput
const listTeam = document.querySelector(".team-container");

//inizializza la variabile per accumulare il markup html
let items = ""

//cicla attraverso ogni membro del team
for (let i = 0; i < teamMembers.length; i++) {
  let currenteMember = teamMembers[i];

  items += createTeamMember(currenteMember);
}

//stampa html generato in pagina
listTeam.innerHTML = items;











//FUNZIONI

//funzione per generare un elemento team member
function createTeamMember(memberObject) {

  //estrapola i valori delle varie proprieta dell'oggetto con sintassi destrutturata
  const { name, role, email, img } = memberObject;

  //costruisci markup html per un team member
  let item = `
  <div class="team-card">
    <div class="card-image">
      <img src="./${img}" />
    </div>
    <div class="card-text">
      <h3>${name}</h3>
      <p>${role}</p>
      <p>${email}</p>
    </div>
  </div>
  `

  //restituisci markup html generato
  return item
}