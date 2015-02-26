/*
 * Copyright 2014 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * Directive for rendering a cell-level toolbar
 */
/// <reference path="../../../../../../../../externs/ts/angularjs/angular.d.ts" />
/// <amd-dependency path="app/components/actionemitter/ActionEmitter" />
import logging = require('app/common/Logging');
import constants = require('app/common/Constants');
import _app = require('app/App');


var log = logging.getLogger(constants.scopes.cellToolbar);

interface CellToolbarScope extends ng.IScope {
  actionEmitter: app.IActionEmitter;
  cell: app.notebook.Cell;
  worksheetId: string;
}

class CellToolbarController {
  _actionEmitter: app.IActionEmitter;
  _scope: CellToolbarScope;

  static $inject = ['$scope', constants.actionEmitter.name];
  constructor (scope: CellToolbarScope, actionEmitter: app.IActionEmitter) {
    this._scope = scope;

    this._scope.actionEmitter = actionEmitter;

    this._scope.foo = () => { // FIXME
      console.warn('scope.foo()!: ', arguments);
    }
  }
}

/**
 * Creates a directive definition.
 */
function cellToolbarDirective (): ng.IDirective {
  return {
    restrict: 'E',
    scope: {
      worksheetId: '=',
      cell: '='
    },
    templateUrl: constants.scriptPaths.app + '/components/celltoolbar/celltoolbar.html',
    replace: true,
    controller: CellToolbarController
  }
}

_app.registrar.directive(constants.cellToolbar.directiveName, cellToolbarDirective);
log.debug('Registered cell toolbar directive');