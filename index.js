const note = 'Ab';
console.log(note.length);

const midiMessage = {
  velocity: 127,
  noteNumber: 60,
  type: 'note-on'
};

console.log(midiMessage.velocity);
console.log(midiMessage.noteNumber);
console.log(midiMessage.type);
console.log(midiMessage.type.length);

console.log(midiMessage["t" + "ype"]["length"]);


