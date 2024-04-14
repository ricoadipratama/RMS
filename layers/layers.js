ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32647").setExtent([462165.633521, 399739.600433, 465386.225016, 402039.574066]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Permukiman_1 = new ol.format.GeoJSON();
var features_Permukiman_1 = format_Permukiman_1.readFeatures(json_Permukiman_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Permukiman_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permukiman_1.addFeatures(features_Permukiman_1);
var lyr_Permukiman_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Permukiman_1, 
                style: style_Permukiman_1,
                popuplayertitle: "Permukiman",
                interactive: true,
                title: '<img src="styles/legend/Permukiman_1.png" /> Permukiman'
            });
var format_BatasDesa_2 = new ol.format.GeoJSON();
var features_BatasDesa_2 = format_BatasDesa_2.readFeatures(json_BatasDesa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_BatasDesa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_2.addFeatures(features_BatasDesa_2);
var lyr_BatasDesa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_2, 
                style: style_BatasDesa_2,
                popuplayertitle: "Batas Desa",
                interactive: false,
                title: '<img src="styles/legend/BatasDesa_2.png" /> Batas Desa'
            });
var format_ZonaRadiasi50Meter_3 = new ol.format.GeoJSON();
var features_ZonaRadiasi50Meter_3 = format_ZonaRadiasi50Meter_3.readFeatures(json_ZonaRadiasi50Meter_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_ZonaRadiasi50Meter_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaRadiasi50Meter_3.addFeatures(features_ZonaRadiasi50Meter_3);
var lyr_ZonaRadiasi50Meter_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaRadiasi50Meter_3, 
                style: style_ZonaRadiasi50Meter_3,
                popuplayertitle: "Zona Radiasi 50 Meter",
                interactive: true,
                title: '<img src="styles/legend/ZonaRadiasi50Meter_3.png" /> Zona Radiasi 50 Meter'
            });
var format_ZonaRadiasi20Meter_4 = new ol.format.GeoJSON();
var features_ZonaRadiasi20Meter_4 = format_ZonaRadiasi20Meter_4.readFeatures(json_ZonaRadiasi20Meter_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_ZonaRadiasi20Meter_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaRadiasi20Meter_4.addFeatures(features_ZonaRadiasi20Meter_4);
var lyr_ZonaRadiasi20Meter_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaRadiasi20Meter_4, 
                style: style_ZonaRadiasi20Meter_4,
                popuplayertitle: "Zona Radiasi 20 Meter",
                interactive: true,
                title: '<img src="styles/legend/ZonaRadiasi20Meter_4.png" /> Zona Radiasi 20 Meter'
            });
var format_MenaraBTS_5 = new ol.format.GeoJSON();
var features_MenaraBTS_5 = format_MenaraBTS_5.readFeatures(json_MenaraBTS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_MenaraBTS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MenaraBTS_5.addFeatures(features_MenaraBTS_5);cluster_MenaraBTS_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_MenaraBTS_5
});
var lyr_MenaraBTS_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MenaraBTS_5, 
                style: style_MenaraBTS_5,
                popuplayertitle: "Menara BTS",
                interactive: true,
                title: '<img src="styles/legend/MenaraBTS_5.png" /> Menara BTS'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Permukiman_1.setVisible(true);lyr_BatasDesa_2.setVisible(true);lyr_ZonaRadiasi50Meter_3.setVisible(true);lyr_ZonaRadiasi20Meter_4.setVisible(true);lyr_MenaraBTS_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Permukiman_1,lyr_BatasDesa_2,lyr_ZonaRadiasi50Meter_3,lyr_ZonaRadiasi20Meter_4,lyr_MenaraBTS_5];
lyr_Permukiman_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', });
lyr_BatasDesa_2.set('fieldAliases', {'kelurahan': 'kelurahan', });
lyr_ZonaRadiasi50Meter_3.set('fieldAliases', {});
lyr_ZonaRadiasi20Meter_4.set('fieldAliases', {});
lyr_MenaraBTS_5.set('fieldAliases', {'name_site': 'name_site', 'lokasi': 'lokasi', 'menara': 'menara', 'operator': 'operator', 'height': 'height', 'pendirian': 'pendirian', 'type_site': 'type_site', 'lahan': 'lahan', 'thn_survey': 'thn_survey', });
lyr_Permukiman_1.set('fieldImages', {'NAMOBJ': '', });
lyr_BatasDesa_2.set('fieldImages', {'kelurahan': 'TextEdit', });
lyr_ZonaRadiasi50Meter_3.set('fieldImages', {});
lyr_ZonaRadiasi20Meter_4.set('fieldImages', {});
lyr_MenaraBTS_5.set('fieldImages', {'name_site': 'TextEdit', 'lokasi': 'TextEdit', 'menara': 'TextEdit', 'operator': 'TextEdit', 'height': 'TextEdit', 'pendirian': 'TextEdit', 'type_site': 'TextEdit', 'lahan': 'TextEdit', 'thn_survey': 'TextEdit', });
lyr_Permukiman_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', });
lyr_BatasDesa_2.set('fieldLabels', {'kelurahan': 'inline label - always visible', });
lyr_ZonaRadiasi50Meter_3.set('fieldLabels', {});
lyr_ZonaRadiasi20Meter_4.set('fieldLabels', {});
lyr_MenaraBTS_5.set('fieldLabels', {'name_site': 'inline label - always visible', 'lokasi': 'inline label - always visible', 'menara': 'inline label - always visible', 'operator': 'inline label - always visible', 'height': 'inline label - always visible', 'pendirian': 'inline label - always visible', 'type_site': 'inline label - always visible', 'lahan': 'inline label - always visible', 'thn_survey': 'inline label - always visible', });
lyr_MenaraBTS_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});