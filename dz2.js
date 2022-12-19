var peoplelist = [
    {
     name:"Jivo",
     years:26,
    },
     {
     name:"Štef",
     years:32,
     },
     {
     name:"Joža",
     years:47,
     },
     {
     names:"Francek",
     years:69,
     },
     {
     names:"Ante",
     years:19
    }
];
function addYears(people) {
    for (var i = 0; i < people.length; i++) {
      people[i].years = people[i].years + 1;
    }
    return people;
  }
addYears(peoplelist);
console.log(peoplelist)
