// <%= name %>-model.js - A just a generic object literal model

let <%= name %>Model = {
  text: {type: String, required: true, index: true},
  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
};

export default <%= name %>Model;