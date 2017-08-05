var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  content: { type: String, required: true },
  // Mongoose nous assiste pour générer automatiquement des Id (de type string)
  // (1) ref -> pour dire qu'il fait référence à un autre model - il fait lui donner le nom de se model
  user: { type: Schema.Types.ObjectId, ref: 'User' } 
});

//Il parait que mongo génère automiquement Message -> messages dans notre base
module.exports = mongoose.model('Message', schema);

/*(1) -> surchage avec la référence User
Message
  content
  user
    firstName
    lastName
    email
    messages

*/