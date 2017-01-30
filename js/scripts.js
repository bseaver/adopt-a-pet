  ////////////////////
 // Back End Section
////////////////////
petTypes = [
  ["cat"],
  ["dog"]
]

pets = [
  ["1", "Spot", "3", "dog", "sampleDog.jpg", "40 pounds", "Medium spotted dog originally from Africa.  Avoid exposure to chickens.", "A picture of Spot"],
  ["2", "Fluffy", "9", "cat", "samplePig.jpg", "10 pounds", "Loves sitting in the window watching you chickens", "A picture of Fluffy"]
]

  /////////////////////
 // Front End Section
/////////////////////
var petTemplate, petTemplateId = "#samplePet";

function displayAllPets() {
  $(petTemplateId).html("");

  pets.forEach(function (petData){
    var nextPet = petTemplate;
    var petDataReplacements = [
      ["sampleName", 1],
      ["sampleAge", 2],
      ["sampleType", 3],
      ["samplePic", 4],
      ["sampleWeight", 5],
      ["sampleDescription", 6],
      ["samplePicAlt", 7]
    ];

    petDataReplacements.forEach(function(replacementData) {
      nextPet = nextPet.replace(replacementData[0], petData[replacementData[1]])
    });

    $(petTemplateId).append(nextPet);
  });
}


$(document).ready(function() {
  // Get template for pets
  petTemplate = $(petTemplateId).html();

  // Display all pets
  displayAllPets();

}); // End document ready
