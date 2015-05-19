(function () {
    'use strict';

    angular
        .module()
            .filter('filterNoDependencies', filterNoDependencies);

    function filterNoDependencies() {
        return function(items) {
            var result = [];

            for (var i = 0; i < items.length; i++) {
                if (items[i].key === 'FOO_KEY') {
                    result.push(item[i]);
                }
            }

            return result;
        };
    }

})();
