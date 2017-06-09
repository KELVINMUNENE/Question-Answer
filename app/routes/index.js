import Ember from 'ember';

var question = [{
  id: 1,
  Author: "Kelvin Munene",
  Question: "How Can install gitbash in Parrot Linux?",
  Additional: "whenever i try to install the CLI dissapers from the screen",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}, {
  id: 2,
  Author: "Maureen Kendi",
  Question: "How can i shutdown the watchman server?",
  Additional: "Everytime i  try to run a command it tells me watchman needs your help or connection error,recconecting to watchman",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
}, {
  id: 3,
  Author: "John Nyagah",
  Question: "My github cannot create Repos",
  Additional: "it keeps telling me Data full i have 34000 repos",
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
}];

export default Ember.Route.extend({
  model() {
    return question;
  },
});
