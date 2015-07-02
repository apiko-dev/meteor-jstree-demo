globalDep = new Tracker.Dependency();

Template.reactiveData.onRendered(function () {
  this.$('.tree').jstree({
    core: {
      data: function (node, cb) {
        globalDep.depend();
        if(node.id === '#') {
          var rootNode = [{
            text : 'Root node',
            id : '1',
            children : true
          }];
          cb(rootNode);
        }
        else {
          var nodes = ReactiveDataSource.find().fetch();
          cb(nodes);
        }
      }
    }
  });
});