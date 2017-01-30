  ////////////////////
 // Back End Section
////////////////////


var pets = [
  ["1", "Spot", "3", "dog", "sampleDog.jpg", "40 pounds", "Medium spotted dog originally from Africa.  Avoid exposure to chickens.", "A picture of Spot", "adopted"],
  ["2", "Fluffy", "9", "cat", "samplePig.jpg", "10 pounds", "Loves sitting in the window watching you chickens", "A picture of Fluffy", "available"]
];

  /////////////////////
 // Front End Section
/////////////////////
var petTemplate, petTemplateId = "#samplePet";

function displayAllPets(availabilitySelection) {
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

    var petAvailability = petData[8];
    if(availabilitySelection === "all" ||
      (availabilitySelection === petAvailability)
    ){
      $(petTemplateId).append(nextPet);
    }
  });
}


$(document).ready(function() {
  // Get template for pets
  petTemplate = $(petTemplateId).html();

  // Initial display of pets
  displayAllPets( $(".radio input:checked").val() );

  $(".radio input").click(function(){
    displayAllPets( $(this).val() );
  });
}); // End document ready
