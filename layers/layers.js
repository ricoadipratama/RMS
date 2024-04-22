ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32647").setExtent([462320.072067, 396007.935659, 463527.793878, 396938.765152]);
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
var format_Pendidikan_4 = new ol.format.GeoJSON();
var features_Pendidikan_4 = format_Pendidikan_4.readFeatures(json_Pendidikan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Pendidikan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_4.addFeatures(features_Pendidikan_4);cluster_Pendidikan_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Pendidikan_4
});
var lyr_Pendidikan_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Pendidikan_4, 
                style: style_Pendidikan_4,
                popuplayertitle: "Pendidikan",
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_4.png" /> Pendidikan'
            });
var format_Puskesmas_5 = new ol.format.GeoJSON();
var features_Puskesmas_5 = format_Puskesmas_5.readFeatures(json_Puskesmas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Puskesmas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_5.addFeatures(features_Puskesmas_5);cluster_Puskesmas_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Puskesmas_5
});
var lyr_Puskesmas_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Puskesmas_5, 
                style: style_Puskesmas_5,
                popuplayertitle: "Puskesmas",
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_5.png" /> Puskesmas'
            });
var format_RumahSakit_6 = new ol.format.GeoJSON();
var features_RumahSakit_6 = format_RumahSakit_6.readFeatures(json_RumahSakit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_RumahSakit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_6.addFeatures(features_RumahSakit_6);cluster_RumahSakit_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_RumahSakit_6
});
var lyr_RumahSakit_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RumahSakit_6, 
                style: style_RumahSakit_6,
                popuplayertitle: "Rumah Sakit",
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_6.png" /> Rumah Sakit'
            });
var format_MenaraBTS_7 = new ol.format.GeoJSON();
var features_MenaraBTS_7 = format_MenaraBTS_7.readFeatures(json_MenaraBTS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_MenaraBTS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MenaraBTS_7.addFeatures(features_MenaraBTS_7);cluster_MenaraBTS_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_MenaraBTS_7
});
var lyr_MenaraBTS_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MenaraBTS_7, 
                style: style_MenaraBTS_7,
                popuplayertitle: "Menara BTS",
                interactive: true,
                title: '<img src="styles/legend/MenaraBTS_7.png" /> Menara BTS'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Permukiman_1.setVisible(true);lyr_BatasDesa_2.setVisible(true);lyr_ZonaRadiasi55Meter_3.setVisible(true);lyr_Pendidikan_4.setVisible(true);lyr_Puskesmas_5.setVisible(true);lyr_RumahSakit_6.setVisible(true);lyr_MenaraBTS_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Permukiman_1,lyr_BatasDesa_2,lyr_ZonaRadiasi55Meter_3,lyr_Pendidikan_4,lyr_Puskesmas_5,lyr_RumahSakit_6,lyr_MenaraBTS_7];
lyr_Permukiman_1.set('fieldAliases', {'Nama': 'Nama', });
lyr_BatasDesa_2.set('fieldAliases', {'kelurahan': 'kelurahan', });
lyr_ZonaRadiasi55Meter_3.set('fieldAliases', {});
lyr_Pendidikan_4.set('fieldAliases', {'Nama': 'Nama', 'Tipe': 'Tipe', });
lyr_Puskesmas_5.set('fieldAliases', {'Nama': 'Nama', 'Tipe': 'Tipe', });
lyr_RumahSakit_6.set('fieldAliases', {'Nama': 'Nama', 'Tipe': 'Tipe', });
lyr_MenaraBTS_7.set('fieldAliases', {'lokasi': 'lokasi', 'menara': 'menara', 'operator': 'operator', 'tinggi': 'tinggi', 'pendirian': 'pendirian', 'tipe': 'tipe', 'lahan': 'lahan', 'thn_survey': 'thn_survey', });
lyr_Permukiman_1.set('fieldImages', {'Nama': '', });
lyr_BatasDesa_2.set('fieldImages', {'kelurahan': 'TextEdit', });
lyr_ZonaRadiasi55Meter_3.set('fieldImages', {});
lyr_Pendidikan_4.set('fieldImages', {'Nama': 'TextEdit', 'Tipe': 'TextEdit', });
lyr_Puskesmas_5.set('fieldImages', {'Nama': 'TextEdit', 'Tipe': 'TextEdit', });
lyr_RumahSakit_6.set('fieldImages', {'Nama': 'TextEdit', 'Tipe': 'TextEdit', });
lyr_MenaraBTS_7.set('fieldImages', {'lokasi': 'TextEdit', 'menara': 'TextEdit', 'operator': 'TextEdit', 'tinggi': 'TextEdit', 'pendirian': 'TextEdit', 'tipe': 'TextEdit', 'lahan': 'TextEdit', 'thn_survey': 'TextEdit', });
lyr_Permukiman_1.set('fieldLabels', {'Nama': 'inline label - always visible', });
lyr_BatasDesa_2.set('fieldLabels', {'kelurahan': 'no label', });
lyr_ZonaRadiasi55Meter_3.set('fieldLabels', {});
lyr_Pendidikan_4.set('fieldLabels', {'Nama': 'inline label - always visible', 'Tipe': 'inline label - always visible', });
lyr_Puskesmas_5.set('fieldLabels', {'Nama': 'inline label - always visible', 'Tipe': 'inline label - always visible', });
lyr_RumahSakit_6.set('fieldLabels', {'Nama': 'inline label - always visible', 'Tipe': 'inline label - always visible', });
lyr_MenaraBTS_7.set('fieldLabels', {'lokasi': 'inline label - always visible', 'menara': 'inline label - always visible', 'operator': 'inline label - always visible', 'tinggi': 'inline label - always visible', 'pendirian': 'inline label - always visible', 'tipe': 'inline label - always visible', 'lahan': 'inline label - always visible', 'thn_survey': 'inline label - always visible', });
lyr_MenaraBTS_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});