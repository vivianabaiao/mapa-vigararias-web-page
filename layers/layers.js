var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VigarariadoTejo_1 = new ol.format.GeoJSON();
var features_VigarariadoTejo_1 = format_VigarariadoTejo_1.readFeatures(json_VigarariadoTejo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VigarariadoTejo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VigarariadoTejo_1.addFeatures(features_VigarariadoTejo_1);
var lyr_VigarariadoTejo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VigarariadoTejo_1, 
                style: style_VigarariadoTejo_1,
                popuplayertitle: 'Vigararia do Tejo',
                interactive: true,
                title: '<img src="styles/legend/VigarariadoTejo_1.png" /> Vigararia do Tejo'
            });
var format_UnidadesPastoraisTejo_2 = new ol.format.GeoJSON();
var features_UnidadesPastoraisTejo_2 = format_UnidadesPastoraisTejo_2.readFeatures(json_UnidadesPastoraisTejo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesPastoraisTejo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesPastoraisTejo_2.addFeatures(features_UnidadesPastoraisTejo_2);
var lyr_UnidadesPastoraisTejo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesPastoraisTejo_2, 
                style: style_UnidadesPastoraisTejo_2,
                popuplayertitle: 'Unidades Pastorais Tejo',
                interactive: true,
                title: '<img src="styles/legend/UnidadesPastoraisTejo_2.png" /> Unidades Pastorais Tejo'
            });
var format_palmelasesimbra_v2_3 = new ol.format.GeoJSON();
var features_palmelasesimbra_v2_3 = format_palmelasesimbra_v2_3.readFeatures(json_palmelasesimbra_v2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_palmelasesimbra_v2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_palmelasesimbra_v2_3.addFeatures(features_palmelasesimbra_v2_3);
var lyr_palmelasesimbra_v2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_palmelasesimbra_v2_3, 
                style: style_palmelasesimbra_v2_3,
                popuplayertitle: 'palmela-sesimbra_v2',
                interactive: true,
                title: '<img src="styles/legend/palmelasesimbra_v2_3.png" /> palmela-sesimbra_v2'
            });
var format_seixal_v2_4 = new ol.format.GeoJSON();
var features_seixal_v2_4 = format_seixal_v2_4.readFeatures(json_seixal_v2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seixal_v2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seixal_v2_4.addFeatures(features_seixal_v2_4);
var lyr_seixal_v2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_seixal_v2_4, 
                style: style_seixal_v2_4,
                popuplayertitle: 'seixal_v2',
                interactive: true,
                title: '<img src="styles/legend/seixal_v2_4.png" /> seixal_v2'
            });
var format_caparica_v2_5 = new ol.format.GeoJSON();
var features_caparica_v2_5 = format_caparica_v2_5.readFeatures(json_caparica_v2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caparica_v2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caparica_v2_5.addFeatures(features_caparica_v2_5);
var lyr_caparica_v2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caparica_v2_5, 
                style: style_caparica_v2_5,
                popuplayertitle: 'caparica_v2',
                interactive: true,
                title: '<img src="styles/legend/caparica_v2_5.png" /> caparica_v2'
            });
var format_setubal_v2_6 = new ol.format.GeoJSON();
var features_setubal_v2_6 = format_setubal_v2_6.readFeatures(json_setubal_v2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_setubal_v2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_setubal_v2_6.addFeatures(features_setubal_v2_6);
var lyr_setubal_v2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_setubal_v2_6, 
                style: style_setubal_v2_6,
                popuplayertitle: 'setubal_v2',
                interactive: true,
                title: '<img src="styles/legend/setubal_v2_6.png" /> setubal_v2'
            });
var group_VigarariasVerso2 = new ol.layer.Group({
                                layers: [lyr_palmelasesimbra_v2_3,lyr_seixal_v2_4,lyr_caparica_v2_5,lyr_setubal_v2_6,],
                                fold: 'open',
                                title: 'Vigararias Versão 2'});
var group_VigarariasNovas = new ol.layer.Group({
                                layers: [lyr_VigarariadoTejo_1,lyr_UnidadesPastoraisTejo_2,],
                                fold: 'open',
                                title: 'Vigararias Novas'});

lyr_OpenStreetMap_0.setVisible(true);lyr_VigarariadoTejo_1.setVisible(true);lyr_UnidadesPastoraisTejo_2.setVisible(true);lyr_palmelasesimbra_v2_3.setVisible(true);lyr_seixal_v2_4.setVisible(true);lyr_caparica_v2_5.setVisible(true);lyr_setubal_v2_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_VigarariasNovas,group_VigarariasVerso2];
lyr_VigarariadoTejo_1.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', 'UniPast': 'UniPast', });
lyr_UnidadesPastoraisTejo_2.set('fieldAliases', {'fid': 'fid', 'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', 'UniPast': 'UniPast', 'auxiliary_storage_symbol_alpha': 'auxiliary_storage_symbol_alpha', });
lyr_palmelasesimbra_v2_3.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_seixal_v2_4.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_caparica_v2_5.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_setubal_v2_6.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Viagararia': 'Viagararia', 'UnPast': 'UnPast', });
lyr_VigarariadoTejo_1.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', 'UniPast': 'TextEdit', });
lyr_UnidadesPastoraisTejo_2.set('fieldImages', {'fid': 'TextEdit', 'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', 'UniPast': 'TextEdit', 'auxiliary_storage_symbol_alpha': 'TextEdit', });
lyr_palmelasesimbra_v2_3.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_seixal_v2_4.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_caparica_v2_5.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_setubal_v2_6.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Viagararia': 'TextEdit', 'UnPast': '', });
lyr_VigarariadoTejo_1.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', 'UniPast': 'no label', });
lyr_UnidadesPastoraisTejo_2.set('fieldLabels', {'fid': 'no label', 'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', 'UniPast': 'no label', 'auxiliary_storage_symbol_alpha': 'no label', });
lyr_palmelasesimbra_v2_3.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_seixal_v2_4.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_caparica_v2_5.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_setubal_v2_6.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Viagararia': 'no label', 'UnPast': 'no label', });
lyr_setubal_v2_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});