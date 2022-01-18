const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter a username']
    },
    password: {
      type: String,
      required: [true, 'Provide a strong password']
    },
    isSeller: Boolean,
    plants: [{ type: Schema.Types.ObjectId, ref: 'Plant' }],
    description: {
      type: String,
      maxlenght: 200
    }
  },
  {
    timestamps: true
  }
);

const User = model('User', userSchema);
module.exports = User;
