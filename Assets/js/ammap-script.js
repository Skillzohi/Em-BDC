var map;
$(window).load(function(){
    function callMapInfoWindow(countryCode){
        console.log(countryCode);
        console.log($('#'+countryCode).html());
//$('.info-window').attr('display', 'none');
//$('#'+countryCode).attr('display', 'block');
        return $('#'+countryCode).html();
    }
    var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
    var enocsmallMap = true;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        enocsmallMap = false;
    }
    map = AmCharts.makeChart( "chartdiv", {
        "type": "map",
        "theme": "light",
        "projection": "miller",
        "imagesSettings": {
            "rollOverColor": "#ce1443",
            "rollOverScale": 2,
            "selectedScale": 2,
            "selectedColor": "#ce1443",
            "color": "#ce1443"
        },
        "dataProvider": {
            "map": "worldLow",
            "images": [
                {
                    "svgPath" : targetSVG,
                    "zoomLevel": 5,
                    "title": "United Arab Emirates",
                    "description": callMapInfoWindow('AE'),
                    "latitude":23.424076,
                    "longitude": 53.847818
                },
                {
                    "svgPath" : targetSVG,
                    "zoomLevel": 5,
                    "title": "Kingdom of Saudi Arabia",
                    "description": callMapInfoWindow('SA'),
                    "latitude":23.885942,
                    "longitude": 45.079162
                },
                {
                    "svgPath" : targetSVG,
                    "zoomLevel": 5,
                    "title": "Djibouti",
                    "description": callMapInfoWindow('DJ'),
                    "latitude": 11.825138,
                    "longitude": 42.590275
                },
                {
                    "svgPath" : targetSVG,
                    "zoomLevel": 5,
                    "title": "Tanzania",
                    "description": callMapInfoWindow('TZ'),
                    "latitude":-6.461827,
                    "longitude": 34.954740
                },
                {
                    "svgPath" : targetSVG,
                    "zoomLevel": 5,
                    "title": "Morocco",
                    "description": callMapInfoWindow('MA'),
                    "latitude":31.791702,
                    "longitude": -7.092620
                },
                {
                    "svgPath" : targetSVG,
                    "zoomLevel": 5,
                    "title": "United Kingdom",
                    "description": callMapInfoWindow('GB'),
                    "latitude":55.378051,
                    "longitude": -3.435973
                },
                {
                    "svgPath" : targetSVG,
                    "zoomLevel": 5,
                    "title": "South Korea",
                    "description": callMapInfoWindow('KR'),
                    "latitude":37.663998,
                    "longitude": 127.978458
                },
                {
                    "svgPath" : targetSVG,
                    "zoomLevel": 5,
                    "title": "Turkmenistan",
                    "description": callMapInfoWindow('TM'),
                    "latitude":38.969719,
                    "longitude": 59.556278
                },
                {
                    "svgPath" : targetSVG,
                    "zoomLevel": 5,
                    "title": "Malaysia",
                    "description": callMapInfoWindow('MY'),
                    "latitude":3.689875,
                    "longitude": 101.994992
                }
            ]
        },
        "areasSettings": {
            "autoZoom": true,
            "unlistedAreasColor": "#72d8d2",
            "rollOverOutlineColor": "#c5f0ed",
            "color": "#72d8d2",
            "alpha": 1,
            "unlistedAreasAlpha": 1,
            "balloonText": "[[title]]"
        },
        "smallMap": {
            top:166,
            right : 40,
            "backgroundColor" : "#ffffff",
            "backgroundAlpha": 0.5,
            "mapColor" : "#71d8d1",
            "borderColor" : "#c8f1ed",
            "enabled" : enocsmallMap
        },
        "export": {
            "enabled": false,
            "position": "bottom-right"
        },
        "zoomControl": {
            top: 166,
            left: 70
        },
        backgroundZoomsToTop: true
    } );


// add events to recalculate map position when the map is moved or zoomed
    map.addListener( "positionChanged", updateCustomMarkers );
    map.addListener("descriptionClosed", function(event) {
        map.zoomTo(1.1 );
        $('#chartdiv .map-marker').removeClass('active');

        map.selectObject(map)

    });
    map.addListener("clickMapObject", function(event) {
        /*alert(202);*/

        $('#chartdiv .map-marker').removeClass('active');
        var code = event.mapObject.title;
        if(typeof code !='undefined' && $('#chartdiv [code='+code.replace(/\s+/g, '')+']')){
            $('#chartdiv [code="'+code.replace(/\s+/g, '')+'"]').addClass('active');
        }
    });
    function updateCustomMarkers( event ) {
// get map object
        var map = event.chart;

// go through all of the images
        for ( var x in map.dataProvider.images ) {
// get MapImage object
            var image = map.dataProvider.images[ x ];

// check if it has corresponding HTML element
            if ( 'undefined' == typeof image.externalElement )
                image.externalElement = createCustomMarker( image );

// reposition the element accoridng to coordinates
            var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
            image.externalElement.style.top = xy.y + 'px';
            image.externalElement.style.left = xy.x + 'px';
        }
    }
    function createCustomMarker( image ) {
// create holder
        var holder = document.createElement( 'div' );
        holder.className = 'map-marker';
        holder.title = image.title;
        var countryTitle = image.title;
        var countryCode = image.title;
        if(typeof countryCode !="undefined" && countryCode!=''){
            holder.setAttribute('code', countryCode.replace(/\s+/g, ''))
        }


        holder.style.position = 'absolute';
// maybe add a link to it?
        if ( undefined != image.url ) {
            holder.onclick = function() {
                window.location.href = image.url;
            };
            holder.className += ' map-clickable';
        }
        /*// create dot
         var dot = document.createElement( 'div' );
         dot.className = 'dot';
         holder.appendChild( dot );
         // create pulse
         var pulse = document.createElement( 'div' );
         pulse.className = 'pulse';
         holder.appendChild( pulse );*/

// append the marker to the map container
        image.chart.chartDiv.appendChild( holder );


        return holder;
    }

});
$(document).ready(function(){
    setTimeout(function(){
        $('#chartdiv div.amcharts-main-div').addClass('parent-container');
    }, 100)
});