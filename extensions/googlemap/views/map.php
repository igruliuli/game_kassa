<?php if (!$this->context->isAjax): ?>
    <div style="width: <?= $this->context->width . $this->context->widthUnits?>;
        height: <?= $this->context->height . $this->context->heightUnits?>">
        <div id="map_canvas" style="width:100%; height:100%"></div>
    </div>
<?php endif; ?>
<script>
    var map;
    var bounds;

    function ajaxMap(){
        <?php if ($this->context->markerFitBounds): ?>
        window.bounds = new google.maps.LatLngBounds();
        <?php elseif (is_array($this->context->center)): ?>
        window.map.setCenter(new google.maps.LatLng(<?= $this->context->center[0] ?>, <?= $this->context->center[1] ?>));
        <?php else: ?>
        window.geocoder.geocode({
            "address": "<?= $this->context->center ?>"
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                window.map.setCenter(results[0].geometry.location);
            }
        });
        <?php endif; ?>

        <?php if (!empty($this->context->markers) && is_array($this->context->markers)): ?>
        var markers = [];
        var markers_array = <?= \yii\helpers\Json::encode($this->context->markers) ?>;
        console.log(markers_array);
        for(var i = 0;i<markers_array.length;i++){
            var id = 0;if(typeof markers_array[i].id == "number")id = markers_array[i].id;
            var marker = new google.maps.Marker({map: window.map, id:id, draggable: <?php echo $this->context->markerDraggable ? 'true' : 'false'; ?>});
            if(typeof markers_array[i].position == "object")
                marker.setPosition(new google.maps.LatLng(markers_array[i].position[0],markers_array[i].position[1]));
            else if(typeof markers_array[i].position == "string"){
                window.geocoder.geocode({
                    "address": markers_array[i].position
                }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK)marker.setPosition(results[0].geometry.location);
                });
            }
            <?php if ($this->context->onMarkerDragEnd !== null): ?>
                marker.addListener('dragend', <?php echo $this->context->onMarkerDragEnd; ?>);
            <?php endif; ?>
            <?php if ($this->context->onClickMarker !== null): ?>
            google.maps.event.addListener(marker, 'click', function() {
                onClickMarkerCallback(this.id,this,window.map,window.infowindow);
            });
            <?php endif; ?>
            markers.push(marker);
        }
        <?php endif; ?>
    }
    <?php if ($this->context->onClickMarker !== null): ?>
    function onClickMarkerCallback(id, marker,map, infowindow){
        var func = <?= $this->context->onClickMarker ?>;
        func(id, marker,map, infowindow);
    }
    <?php endif; ?>
    <?php if (!$this->context->isAjax): ?>
    function initialize() {
        window.geocoder = new google.maps.Geocoder();
        window.map = new google.maps.Map(document.getElementById("map_canvas"),
            {
                zoom: <?= $this->context->zoom ?>,
                mapTypeId: google.maps.MapTypeId.<?= $this->context->mapType ?>,
                center: new google.maps.LatLng(0, 0)
            }
        );
        var mcOption = <?= ($this->context->markerClustererOptions == null)?'[]':\yii\helpers\Json::encode($this->context->markerClustererOptions)?>;
        console.log(mcOption);
        window.infowindow = new google.maps.InfoWindow({
            content: ''
        });

        <?php if ($this->context->onDragEnd !== null): ?>
        window.map.addListener('dragend',<?= $this->context->onDragEnd?>);
        <?php endif; ?>
        <?php if ($this->context->onZoomChanged !== null): ?>
        google.maps.event.addListener(window.map, 'zoom_changed', function () {
            onZoomChangedCallback(window.map);
        });
        function onZoomChangedCallback(map) {
            var func = <?php echo $this->context->onZoomChanged?>;
            func(map);
        }
        <?php endif; ?>

        ajaxMap();
    }
    function loadScript() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://maps.googleapis.com/maps/api/js?key=<?= $this->context->apiKey ?>&sensor=<?= $this->context->sensor ?>&callback=initialize";
        document.body.appendChild(script);
    }
    window.onload = loadScript;
    <?php else: ?>
    ajaxMap();
    <?php endif; ?>
</script>
