  ////////////////////
 // Back End Section
////////////////////
petTypes = [
  ["cat"],
  ["dog"]
]

pets = [
  ["1", "Spot", "3", "dog", "", "40 pounds", "Medium spotted dog originally from Africa.  Avoid exposure to chickens."],
  ["2", "Fluffy", "9", "cat", "", "10 pounds", "Loves sitting in the window watching you chickens"]
]

  /////////////////////
 // Front End Section
/////////////////////
var petTemplate;

function displayAllPets() {
  $("#petList").html("");

  pets.forEach(function (petData){
    var nextPet = petTemplate;
    var petDataReplacements = [
      ["sampleName", 1],
      ["sampleAge", 2],
      ["sampleType", 3],
      ["sampleWeight", 5],
      ["sampleDescription", 6]
    ];

    petDataReplacements.forEach(function(replacementData) {
      nextPet = nextPet.replace(replacementData[0], petData[replacementData[1]])
    });

    $("#petList").append(nextPet);
  });
}


$(document).ready(function() {
  // Get template for pets
  petTemplate = $("#petList").html();

  // Display all pets
  displayAllPets();

}); // End document ready
