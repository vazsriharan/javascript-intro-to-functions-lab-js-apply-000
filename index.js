var uppercase, lowercase;

function shout(string){
return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  uppercase = string.toUpperCase()
  string = uppercase;
  console.log(uppercase);
}
function logWhisper(string){
  lowercase = string.toLowerCase()
  string = lowercase;
  console.log(lowercase);
}
function sayHiToGrandma(string){
  
}


describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })