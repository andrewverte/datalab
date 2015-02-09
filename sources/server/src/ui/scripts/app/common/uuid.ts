// FIXME: either replace the uuid generation bit below or get the correct license to use for
// StackOverflow content (cc-by license?)

/**
 * Generates a v4 UUID
 * Source: http://stackoverflow.com/a/8809472
 */
v4 (): string {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
}
