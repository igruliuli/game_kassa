(function ($) {
    var fixHelper = function (e, ui) {
        ui.children().each(function () {
            $(this).width($(this).width());
        });
        return ui;
    };

    $.fn.SortableListView = function (action, config) {
        var widget = this;
        var grid = $(this);

        var initialIndex = [];
        $('.sortable-item', grid).each(function () {
            initialIndex.push($(this).data('key'));
        });

        grid.sortable({
            items: '.sortable-item',
            axis: false,
            handle: '.sortable-handle',
            update: function () {
                var items = {};
                var i = 0;
                $('.sortable-item', grid).each(function () {
                    var currentKey = $(this).data('key');
                    if (initialIndex[i] != currentKey) {
                        items[currentKey] = initialIndex[i];
                        initialIndex[i] = currentKey;
                    }
                    ++i;
                });

                $.ajax({
                    'url': action,
                    'type': 'post',
                    'data': {'items': JSON.stringify(items)},
                    'success': function () {
                        widget.trigger('sortableSuccess');
                    },
                    'error': function (request, status, error) {
                        alert(status + ' ' + error);
                    }
                });
            },
            helper: fixHelper
        }).disableSelection();
    };
})(jQuery);
