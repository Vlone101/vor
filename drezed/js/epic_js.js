"use strict";
window.addEventListener('load', function () {
    var nodeList = document.querySelectorAll('.b-epic-block');

    nodeList.forEach(function (item, position) {
        item.event = 'keyup';
        item.addEventListener(item.event, function (e) {
            epic_change(e, position);
        });
    });

});

function epic_change(e, position) {
    console.log("Fuck you");
    console.log(e);
    if (e.keyCode == 13) {


        var nodeList = document.querySelectorAll('.b-epic-block');

        var element = nodeList[position];

        var node = element.childNodes.item(1);

        var node = node.childNodes.item(1);

        var description = node.value;

        element.innerHTML = '<div class="b-epic-block__epic-box"> <h1>Epic ' + ++position +
            '</h1> <p>' + description + ' </p> </div>';

        element.className = 'b-epic-block epic-active';
        console.log('good');
    }
}