"use strict";
//team array
const team = [
  {
    firstName: "Damilare",
    lastName: "Abiola",
    image: "images/dami.jpeg",
    favoriteFood: "Beans and Fried Plantain",
    complexion: "Black",
    skills: ["HTML", "CSS", "and JavaScript"],
    bestMovie: "Batman",
    age: 22,
  },
  {
    firstName: "Team",
    lastName: "Member2",
    image: "images/color2.jpg",
    favoriteFood: "Brown-Rice and meat",
    complexion: "white",
    skills: ["HTML", "and CSS"],
    bestMovie: "Men in Black",
    age: 24,
  },
  {
    firstName: "Team",
    lastName: "Member3",
    image: "images/color3.webp",
    favoriteFood: "pasta",
    complexion: "Brown",
    skills: ["HTML", "CSS", "and Python"],
    bestMovie: "Ohm Shanti Ohm",
    age: 10,
  },
  {
    firstName: "Team",
    lastName: "Member4",
    image: "images/color4.webp",
    favoriteFood: "Rice and Chicken",
    complexion: "Black",
    skills: ["HTML", "CSS", "and JavaScript"],
    bestMovie: "Mirrors",
    age: 10,
  },
  {
    firstName: "Team",
    lastName: "Member5",
    image: "images/color5.jpg",
    favoriteFood: "Avocado Ice-cream",
    complexion: "black",
    skills: ["HTML", "CSS", "and JavaScript"],
    bestMovie: "Mama",
    age: 10,
  },
  {
    firstName: "Team",
    lastName: "Member6",
    image: "images/color6.jpg",
    favoriteFood: "Beans(plain)",
    complexion: "white",
    skills: ["HTML", "CSS", "and JavaScript"],
    bestMovie: "Shatter",
    age: 10,
  },
];

//Function to convert a detail to a class
const detailToClass = (detail) => {
  return detail.match(/([a-z])([A-Z])/)
    ? detail.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    : detail;
};

//Function to convert a detail to a name that will be displayed on the page
const detailName = (data) => {
  return detailToClass(data).replace(/(^[a-z]?)/, (l) => l.toUpperCase());
};

//Declaration of variable assigned a numberical value to set unique ids
let idnumber = 1;
//root div
const membersContainer = document.querySelector(".bg-image");
// const fragment = document.createElement("div");

//loop to render all elements
team.forEach((ele) => {
  let {
    firstName,
    lastName,
    image,
    favoriteFood,
    complexion,
    skills,
    bestMovie,
    age,
  } = ele;

  //member id
  let memberid = "member" + idnumber;

  //card containing information about each member
  let teamMember = document.createElement("div");
  teamMember.setAttribute("class", "member-card");
  teamMember.setAttribute("id", memberid);

  //rendering photo of member
  let imageDiv = document.createElement("div");
  imageDiv.setAttribute("class", "image-div");
  imageDiv.style.backgroundImage = `url(${image})`;
  teamMember.appendChild(imageDiv);

  //rendering name of member
  let memberName = document.createElement("h3");
  memberName.setAttribute("class", "member-name");
  memberName.textContent = `${firstName} ${lastName}`;
  teamMember.appendChild(memberName);

  //rendering additional details
  let memberDetails = document.createElement("div");
  memberDetails.setAttribute("class", "member-details");

  //Array of additional details
  let details = [favoriteFood, complexion, skills, bestMovie, age];
  let detailsList = [
    "favoriteFood",
    "complexion",
    "skills",
    "bestMovie",
    "age",
  ];

  let detailIndex = 0;

  //loop to render all addition details
  details.forEach((element) => {
    let detailHeading = document.createElement("h4");
    detailHeading.setAttribute(
      "class",
      detailToClass(detailsList[detailIndex])
    );
    !Array.isArray(element)
      ? (detailHeading.textContent = `${detailName(
          detailsList[detailIndex]
        )}: ${element}`)
      : (detailHeading.textContent = `${detailName(
          detailsList[detailIndex]
        )}: ${element.join(", ")}`);
    memberDetails.appendChild(detailHeading);
    detailIndex += 1;
  });
  teamMember.appendChild(memberDetails);

  //rendereing alert button
  let memberButton = document.createElement("button");
  memberButton.textContent = "Click me";
  memberButton.addEventListener("click", (ev) =>
    alert(`${firstName} ${lastName}`)
  );
  teamMember.appendChild(memberButton);

  //DOM render
  membersContainer.appendChild(teamMember);

  //idnumber increament
  idnumber += 1;
});
