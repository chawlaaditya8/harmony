angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('nl', {"Mark all as complete":"Markeer als afgewerkt","{{$count}} item left":["{{$count}} item te gaan","{{$count}} items te gaan"],"All":"Alle","Active":"Actief","Completed":"Afgewerkt","Clear completed ({{completedCount}})":"Wis afgewerkte taken ({{completedCount}})","Double-click to edit a todo":"Dubbelklik om een todo te bewerken","What needs to be done?":"Wat moet gedaan worden?"});
/* jshint +W100 */
}]);