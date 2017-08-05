var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  // Pour s'assurer que l'e-mail est unique
  email: { type: String, required: true, unique: true },
  //(!) Un utilisateur peur créer plusieurs message (donc un array) c'est pour cela qu'il est intéressant d'avoir de quoi identifier chaque message indépendament  
  // ref -> pour dire qu'il fait référence à un autre model - il fait lui donner le nom de se model
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

/* -> surchage avec la référence Message

Message
  firstName
  lastName
  email
  messages
    user
      content
      user

*/

// npm install -save mongoose-unique-validator - nous permet grace à la methode plugin de s'assurer que nos valeurs sont unique
schema.plugin(mongooseUniqueValidator);


//Il parait que mongo crée automiquement une collection users à partir de -> User dans notre base
module.exports = mongoose.model('User', schema);