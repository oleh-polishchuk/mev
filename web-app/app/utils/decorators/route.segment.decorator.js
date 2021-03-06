/**
 * Route Segment Decorator
 * @namespace Decorators
 */
(function () {

    'use strict';

    angular
        .module('app')
        .config(RouteSegmentDecorator);

    function RouteSegmentDecorator($provide) {
        $provide.decorator('$routeSegment', function ($delegate) {

            $delegate.reload = function () {
                let $routeSegment = this;
                $routeSegment.chain[$routeSegment.chain.length - 1].reload();
            };

            return $delegate;
        })
    }

})();
