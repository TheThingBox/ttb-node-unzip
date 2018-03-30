module.exports = function(RED) {
  "use strict";
  var decompress = require("decompress");

  function UnzipNode(n) {
    RED.nodes.createNode(this, n);
    this.destpath = n.destpath;
    var node = this;

    this.on("input", function(msg) {
      decompress(msg.payload, msg.destpath || node.destpath).then(files => {
        node.send(msg);
      });
    });
  }
  RED.nodes.registerType("unzip", UnzipNode);
}
