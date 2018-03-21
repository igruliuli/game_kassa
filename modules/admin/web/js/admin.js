$(function() {
    $('.report-image .remove-image').click(function() {
        var container = $(this).parent('.report-image');
        var id = container.data('image-id');

        if (confirm("Are you sure?")) {
            $.ajax({
                url: '/admin/report/remove-attachment?id=' + id,
                method: 'post'
            }).done(function() {
                container.remove();
            });
        }
    });

    if ($('#datetimepicker').length) {
        $('#datetimepicker').datetimepicker({
            locale: 'en',
            format: 'DD-MM-YYYY HH:mm'
        });
    }

    if ($('#programitem-time').length) {
        $('#programitem-time').datetimepicker({
            format: 'HH:mm'
        });
    }

    if ($('#lecturer-time').length) {
        $('#lecturer-time').datetimepicker({
            format: 'HH:mm'
        });
    }
});