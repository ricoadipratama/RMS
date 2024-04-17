ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32647").setExtent([464387.154224, 395858.553726, 464689.084676, 396074.176255]);
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
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_2.png" /> Batas Desa'
            });
var format_ZonaRadiasi55Meter_3 = new ol.format.GeoJSON();
var features_ZonaRadiasi55Meter_3 = format_ZonaRadiasi55Meter_3.readFeatures(json_ZonaRadiasi55Meter_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_ZonaRadiasi55Meter_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaRadiasi55Meter_3.addFeatures(features_ZonaRadiasi55Meter_3);
var lyr_ZonaRadiasi55Meter_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaRadiasi55Meter_3, 
                style: style_ZonaRadiasi55Meter_3,
                popuplayertitle: "Zona Radiasi 55 Meter",
                interactive: true,
                title: '<img src="styles/legend/ZonaRadiasi55Meter_3.png" /> Zona Radiasi 55 Meter'
            });
var format_ZonaRadiasi45Meter_4 = new ol.format.GeoJSON();
var features_ZonaRadiasi45Meter_4 = format_ZonaRadiasi45Meter_4.readFeatures(json_ZonaRadiasi45Meter_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_ZonaRadiasi45Meter_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaRadiasi45Meter_4.addFeatures(features_ZonaRadiasi45Meter_4);
var lyr_ZonaRadiasi45Meter_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaRadiasi45Meter_4, 
                style: style_ZonaRadiasi45Meter_4,
                popuplayertitle: "Zona Radiasi 45 Meter",
                interactive: true,
                title: '<img src="styles/legend/ZonaRadiasi45Meter_4.png" /> Zona Radiasi 45 Meter'
            });
var format_ZonaRadiasi20Meter_5 = new ol.format.GeoJSON();
var features_ZonaRadiasi20Meter_5 = format_ZonaRadiasi20Meter_5.readFeatures(json_ZonaRadiasi20Meter_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_ZonaRadiasi20Meter_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaRadiasi20Meter_5.addFeatures(features_ZonaRadiasi20Meter_5);
var lyr_ZonaRadiasi20Meter_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaRadiasi20Meter_5, 
                style: style_ZonaRadiasi20Meter_5,
                popuplayertitle: "Zona Radiasi 20 Meter",
                interactive: true,
                title: '<img src="styles/legend/ZonaRadiasi20Meter_5.png" /> Zona Radiasi 20 Meter'
            });
var format_MenaraBTS_6 = new ol.format.GeoJSON();
var features_MenaraBTS_6 = format_MenaraBTS_6.readFeatures(json_MenaraBTS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_MenaraBTS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MenaraBTS_6.addFeatures(features_MenaraBTS_6);cluster_MenaraBTS_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_MenaraBTS_6
});
var lyr_MenaraBTS_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MenaraBTS_6, 
                style: style_MenaraBTS_6,
                popuplayertitle: "Menara BTS",
                interactive: true,
                title: '<img src="styles/legend/MenaraBTS_6.png" /> Menara BTS'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Permukiman_1.setVisible(true);lyr_BatasDesa_2.setVisible(true);lyr_ZonaRadiasi55Meter_3.setVisible(true);lyr_ZonaRadiasi45Meter_4.setVisible(true);lyr_ZonaRadiasi20Meter_5.setVisible(true);lyr_MenaraBTS_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Permukiman_1,lyr_BatasDesa_2,lyr_ZonaRadiasi55Meter_3,lyr_ZonaRadiasi45Meter_4,lyr_ZonaRadiasi20Meter_5,lyr_MenaraBTS_6];
lyr_Permukiman_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', });
lyr_BatasDesa_2.set('fieldAliases', {'kelurahan': 'kelurahan', });
lyr_ZonaRadiasi55Meter_3.set('fieldAliases', {});
lyr_ZonaRadiasi45Meter_4.set('fieldAliases', {});
lyr_ZonaRadiasi20Meter_5.set('fieldAliases', {});
lyr_MenaraBTS_6.set('fieldAliases', {'name_site': 'name_site', 'lokasi': 'lokasi', 'menara': 'menara', 'operator': 'operator', 'height': 'height', 'pendirian': 'pendirian', 'type_site': 'type_site', 'lahan': 'lahan', 'thn_survey': 'thn_survey', });
lyr_Permukiman_1.set('fieldImages', {'NAMOBJ': '', });
lyr_BatasDesa_2.set('fieldImages', {'kelurahan': 'TextEdit', });
lyr_ZonaRadiasi55Meter_3.set('fieldImages', {});
lyr_ZonaRadiasi45Meter_4.set('fieldImages', {});
lyr_ZonaRadiasi20Meter_5.set('fieldImages', {});
lyr_MenaraBTS_6.set('fieldImages', {'name_site': 'TextEdit', 'lokasi': 'TextEdit', 'menara': 'TextEdit', 'operator': 'TextEdit', 'height': 'TextEdit', 'pendirian': 'TextEdit', 'type_site': 'TextEdit', 'lahan': 'TextEdit', 'thn_survey': 'TextEdit', });
lyr_Permukiman_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', });
lyr_BatasDesa_2.set('fieldLabels', {'kelurahan': 'inline label - always visible', });
lyr_ZonaRadiasi55Meter_3.set('fieldLabels', {});
lyr_ZonaRadiasi45Meter_4.set('fieldLabels', {});
lyr_ZonaRadiasi20Meter_5.set('fieldLabels', {});
lyr_MenaraBTS_6.set('fieldLabels', {'name_site': 'inline label - always visible', 'lokasi': 'inline label - always visible', 'menara': 'inline label - always visible', 'operator': 'inline label - always visible', 'height': 'inline label - always visible', 'pendirian': 'inline label - always visible', 'type_site': 'inline label - always visible', 'lahan': 'inline label - always visible', 'thn_survey': 'inline label - always visible', });
lyr_MenaraBTS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});