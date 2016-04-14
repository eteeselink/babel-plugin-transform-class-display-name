module.exports = function (babel) {
  var t = babel.types;
  return {
    inherits: require("babel-plugin-syntax-class-properties"),
    visitor: {
      ClassDeclaration(path) {
        var prop = t.classProperty(t.identifier("displayName"), t.stringLiteral(path.node.id.name), null, null);
        prop.static = true;
        path.node.body.body.push(prop);
      }
    }
  };
}
