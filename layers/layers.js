var wms_layers = [];

var format_GEO_50k_0 = new ol.format.GeoJSON();
var features_GEO_50k_0 = format_GEO_50k_0.readFeatures(json_GEO_50k_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEO_50k_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEO_50k_0.addFeatures(features_GEO_50k_0);
var lyr_GEO_50k_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEO_50k_0, 
                style: style_GEO_50k_0,
                interactive: true,
    title: 'GEO_50k<br />\
    <img src="styles/legend/GEO_50k_0_0.png" /> bb<br />\
    <img src="styles/legend/GEO_50k_0_1.png" /> Da<br />\
    <img src="styles/legend/GEO_50k_0_2.png" /> Dc<br />\
    <img src="styles/legend/GEO_50k_0_3.png" /> De<br />\
    <img src="styles/legend/GEO_50k_0_4.png" /> dg<br />\
    <img src="styles/legend/GEO_50k_0_5.png" /> g<br />\
    <img src="styles/legend/GEO_50k_0_6.png" /> K7<br />\
    <img src="styles/legend/GEO_50k_0_7.png" /> KM<br />\
    <img src="styles/legend/GEO_50k_0_8.png" /> Ks<br />\
    <img src="styles/legend/GEO_50k_0_9.png" /> lv<br />\
    <img src="styles/legend/GEO_50k_0_10.png" /> PA<br />\
    <img src="styles/legend/GEO_50k_0_11.png" /> PM<br />\
    <img src="styles/legend/GEO_50k_0_12.png" /> Pv<br />\
    <img src="styles/legend/GEO_50k_0_13.png" /> PZA<br />\
    <img src="styles/legend/GEO_50k_0_14.png" /> Qc<br />\
    <img src="styles/legend/GEO_50k_0_15.png" /> QL<br />\
    <img src="styles/legend/GEO_50k_0_16.png" /> QP<br />\
    <img src="styles/legend/GEO_50k_0_17.png" /> QST<br />\
    <img src="styles/legend/GEO_50k_0_18.png" /> Rio<br />\
    <img src="styles/legend/GEO_50k_0_19.png" /> Te<br />\
    <img src="styles/legend/GEO_50k_0_20.png" /> <br />'
        });

lyr_GEO_50k_0.setVisible(true);
var layersList = [lyr_GEO_50k_0];
lyr_GEO_50k_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'FORMA_': 'FORMA_', 'FORMA_ID': 'FORMA_ID', 'CQUITO_': 'CQUITO_', 'CQUITO_ID': 'CQUITO_ID', 'FORMACION': 'FORMACION', });
lyr_GEO_50k_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'FORMA_': 'TextEdit', 'FORMA_ID': 'TextEdit', 'CQUITO_': 'TextEdit', 'CQUITO_ID': 'TextEdit', 'FORMACION': 'TextEdit', });
lyr_GEO_50k_0.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'FORMA_': 'no label', 'FORMA_ID': 'no label', 'CQUITO_': 'no label', 'CQUITO_ID': 'no label', 'FORMACION': 'inline label', });
lyr_GEO_50k_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});