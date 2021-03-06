// Generated by CoffeeScript 1.12.7
(function() {
  var Base, Project,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Base = require('./base');

  Project = (function(superClass) {
    extend(Project, superClass);

    function Project(number, client) {
      this.number = number;
      this.client = client;
    }

    Project.prototype.info = function(cb) {
      return this.client.getAccept("/projects/" + this.number, 'inertia-preview', function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error("Project info error"));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Project.prototype.update = function(obj, cb) {
      return this.client.patchAccept("/projects/" + this.number, 'inertia-preview', obj, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error("Project update error"));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Project.prototype["delete"] = function(cb) {
      return this.client.delAccept("/projects/" + this.number, 'inertia-preview', {}, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 204) {
          return cb(new Error("Project delete error"));
        } else {
          return cb(null, b, h);
        }
      });
    };

    return Project;

  })(Base);

  module.exports = Project;

}).call(this);
