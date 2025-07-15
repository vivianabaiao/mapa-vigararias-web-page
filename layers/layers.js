var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_setubal_1 = new ol.format.GeoJSON();
var features_setubal_1 = format_setubal_1.readFeatures(json_setubal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_setubal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_setubal_1.addFeatures(features_setubal_1);
var lyr_setubal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_setubal_1, 
                style: style_setubal_1,
                popuplayertitle: 'setubal',
                interactive: true,
                title: '<img src="styles/legend/setubal_1.png" /> setubal'
            });
var format_seixal_2 = new ol.format.GeoJSON();
var features_seixal_2 = format_seixal_2.readFeatures(json_seixal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seixal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seixal_2.addFeatures(features_seixal_2);
var lyr_seixal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_seixal_2, 
                style: style_seixal_2,
                popuplayertitle: 'seixal',
                interactive: true,
                title: '<img src="styles/legend/seixal_2.png" /> seixal'
            });
var format_palmelasesimbra_3 = new ol.format.GeoJSON();
var features_palmelasesimbra_3 = format_palmelasesimbra_3.readFeatures(json_palmelasesimbra_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_palmelasesimbra_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_palmelasesimbra_3.addFeatures(features_palmelasesimbra_3);
var lyr_palmelasesimbra_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_palmelasesimbra_3, 
                style: style_palmelasesimbra_3,
                popuplayertitle: 'palmela-sesimbra',
                interactive: true,
                title: '<img src="styles/legend/palmelasesimbra_3.png" /> palmela-sesimbra'
            });
var format_montijo_4 = new ol.format.GeoJSON();
var features_montijo_4 = format_montijo_4.readFeatures(json_montijo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_montijo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_montijo_4.addFeatures(features_montijo_4);
var lyr_montijo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_montijo_4, 
                style: style_montijo_4,
                popuplayertitle: 'montijo',
                interactive: true,
                title: '<img src="styles/legend/montijo_4.png" /> montijo'
            });
var format_caparica_5 = new ol.format.GeoJSON();
var features_caparica_5 = format_caparica_5.readFeatures(json_caparica_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caparica_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caparica_5.addFeatures(features_caparica_5);
var lyr_caparica_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caparica_5, 
                style: style_caparica_5,
                popuplayertitle: 'caparica',
                interactive: true,
                title: '<img src="styles/legend/caparica_5.png" /> caparica'
            });
var format_barreiromoita_6 = new ol.format.GeoJSON();
var features_barreiromoita_6 = format_barreiromoita_6.readFeatures(json_barreiromoita_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barreiromoita_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barreiromoita_6.addFeatures(features_barreiromoita_6);
var lyr_barreiromoita_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barreiromoita_6, 
                style: style_barreiromoita_6,
                popuplayertitle: 'barreiro-moita',
                interactive: true,
                title: '<img src="styles/legend/barreiromoita_6.png" /> barreiro-moita'
            });
var format_almada_7 = new ol.format.GeoJSON();
var features_almada_7 = format_almada_7.readFeatures(json_almada_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_almada_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_almada_7.addFeatures(features_almada_7);
var lyr_almada_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_almada_7, 
                style: style_almada_7,
                popuplayertitle: 'almada',
                interactive: true,
                title: '<img src="styles/legend/almada_7.png" /> almada'
            });
var format_areasmilitares_8 = new ol.format.GeoJSON();
var features_areasmilitares_8 = format_areasmilitares_8.readFeatures(json_areasmilitares_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areasmilitares_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areasmilitares_8.addFeatures(features_areasmilitares_8);
var lyr_areasmilitares_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areasmilitares_8, 
                style: style_areasmilitares_8,
                popuplayertitle: 'areas-militares',
                interactive: true,
                title: '<img src="styles/legend/areasmilitares_8.png" /> areas-militares'
            });
var format_areasnaointegradas_9 = new ol.format.GeoJSON();
var features_areasnaointegradas_9 = format_areasnaointegradas_9.readFeatures(json_areasnaointegradas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areasnaointegradas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areasnaointegradas_9.addFeatures(features_areasnaointegradas_9);
var lyr_areasnaointegradas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areasnaointegradas_9, 
                style: style_areasnaointegradas_9,
                popuplayertitle: 'areas-nao-integradas',
                interactive: true,
                title: '<img src="styles/legend/areasnaointegradas_9.png" /> areas-nao-integradas'
            });
var group_PropostadeVigarariasNovas = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Proposta de Vigararias Novas'});
var group_VigarariasLimitesAtuais = new ol.layer.Group({
                                layers: [lyr_setubal_1,lyr_seixal_2,lyr_palmelasesimbra_3,lyr_montijo_4,lyr_caparica_5,lyr_barreiromoita_6,lyr_almada_7,],
                                fold: 'open',
                                title: 'Vigararias Limites Atuais'});
var group_VigarariasPropostadeLimites = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Vigararias Proposta de Limites'});
var group_CAOP = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'CAOP'});

lyr_OpenStreetMap_0.setVisible(true);lyr_setubal_1.setVisible(true);lyr_seixal_2.setVisible(true);lyr_palmelasesimbra_3.setVisible(true);lyr_montijo_4.setVisible(true);lyr_caparica_5.setVisible(true);lyr_barreiromoita_6.setVisible(true);lyr_almada_7.setVisible(true);lyr_areasmilitares_8.setVisible(true);lyr_areasnaointegradas_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_VigarariasLimitesAtuais,lyr_areasmilitares_8,lyr_areasnaointegradas_9];
lyr_setubal_1.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Viagararia': 'Viagararia', });
lyr_seixal_2.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_palmelasesimbra_3.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_montijo_4.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_caparica_5.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_barreiromoita_6.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', });
lyr_almada_7.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_areasmilitares_8.set('fieldAliases', {'id': 'id', });
lyr_areasnaointegradas_9.set('fieldAliases', {'id': 'id', });
lyr_setubal_1.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Viagararia': 'TextEdit', });
lyr_seixal_2.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_palmelasesimbra_3.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_montijo_4.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_caparica_5.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': '', });
lyr_barreiromoita_6.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', });
lyr_almada_7.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_areasmilitares_8.set('fieldImages', {'id': 'TextEdit', });
lyr_areasnaointegradas_9.set('fieldImages', {'id': '', });
lyr_setubal_1.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Viagararia': 'no label', });
lyr_seixal_2.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_palmelasesimbra_3.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_montijo_4.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_caparica_5.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_barreiromoita_6.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', });
lyr_almada_7.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_areasmilitares_8.set('fieldLabels', {'id': 'no label', });
lyr_areasnaointegradas_9.set('fieldLabels', {'id': 'no label', });
lyr_areasnaointegradas_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});