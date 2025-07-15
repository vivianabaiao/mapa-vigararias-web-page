var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_setubal_v2_1 = new ol.format.GeoJSON();
var features_setubal_v2_1 = format_setubal_v2_1.readFeatures(json_setubal_v2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_setubal_v2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_setubal_v2_1.addFeatures(features_setubal_v2_1);
var lyr_setubal_v2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_setubal_v2_1, 
                style: style_setubal_v2_1,
                popuplayertitle: 'setubal_v2',
                interactive: true,
                title: '<img src="styles/legend/setubal_v2_1.png" /> setubal_v2'
            });
var format_seixal_v2_2 = new ol.format.GeoJSON();
var features_seixal_v2_2 = format_seixal_v2_2.readFeatures(json_seixal_v2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seixal_v2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seixal_v2_2.addFeatures(features_seixal_v2_2);
var lyr_seixal_v2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_seixal_v2_2, 
                style: style_seixal_v2_2,
                popuplayertitle: 'seixal_v2',
                interactive: true,
                title: '<img src="styles/legend/seixal_v2_2.png" /> seixal_v2'
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
var format_montijo_v2_4 = new ol.format.GeoJSON();
var features_montijo_v2_4 = format_montijo_v2_4.readFeatures(json_montijo_v2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_montijo_v2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_montijo_v2_4.addFeatures(features_montijo_v2_4);
var lyr_montijo_v2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_montijo_v2_4, 
                style: style_montijo_v2_4,
                popuplayertitle: 'montijo_v2',
                interactive: true,
                title: '<img src="styles/legend/montijo_v2_4.png" /> montijo_v2'
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
var format_barreiromoita_v2_6 = new ol.format.GeoJSON();
var features_barreiromoita_v2_6 = format_barreiromoita_v2_6.readFeatures(json_barreiromoita_v2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barreiromoita_v2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barreiromoita_v2_6.addFeatures(features_barreiromoita_v2_6);
var lyr_barreiromoita_v2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barreiromoita_v2_6, 
                style: style_barreiromoita_v2_6,
                popuplayertitle: 'barreiro-moita_v2',
                interactive: true,
                title: '<img src="styles/legend/barreiromoita_v2_6.png" /> barreiro-moita_v2'
            });
var format_almada_v2_7 = new ol.format.GeoJSON();
var features_almada_v2_7 = format_almada_v2_7.readFeatures(json_almada_v2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_almada_v2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_almada_v2_7.addFeatures(features_almada_v2_7);
var lyr_almada_v2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_almada_v2_7, 
                style: style_almada_v2_7,
                popuplayertitle: 'almada_v2',
                interactive: true,
                title: '<img src="styles/legend/almada_v2_7.png" /> almada_v2'
            });
var format_setubal_8 = new ol.format.GeoJSON();
var features_setubal_8 = format_setubal_8.readFeatures(json_setubal_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_setubal_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_setubal_8.addFeatures(features_setubal_8);
var lyr_setubal_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_setubal_8, 
                style: style_setubal_8,
                popuplayertitle: 'setubal',
                interactive: true,
                title: '<img src="styles/legend/setubal_8.png" /> setubal'
            });
var format_seixal_9 = new ol.format.GeoJSON();
var features_seixal_9 = format_seixal_9.readFeatures(json_seixal_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seixal_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seixal_9.addFeatures(features_seixal_9);
var lyr_seixal_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_seixal_9, 
                style: style_seixal_9,
                popuplayertitle: 'seixal',
                interactive: true,
                title: '<img src="styles/legend/seixal_9.png" /> seixal'
            });
var format_palmelasesimbra_10 = new ol.format.GeoJSON();
var features_palmelasesimbra_10 = format_palmelasesimbra_10.readFeatures(json_palmelasesimbra_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_palmelasesimbra_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_palmelasesimbra_10.addFeatures(features_palmelasesimbra_10);
var lyr_palmelasesimbra_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_palmelasesimbra_10, 
                style: style_palmelasesimbra_10,
                popuplayertitle: 'palmela-sesimbra',
                interactive: true,
                title: '<img src="styles/legend/palmelasesimbra_10.png" /> palmela-sesimbra'
            });
var format_montijo_11 = new ol.format.GeoJSON();
var features_montijo_11 = format_montijo_11.readFeatures(json_montijo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_montijo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_montijo_11.addFeatures(features_montijo_11);
var lyr_montijo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_montijo_11, 
                style: style_montijo_11,
                popuplayertitle: 'montijo',
                interactive: true,
                title: '<img src="styles/legend/montijo_11.png" /> montijo'
            });
var format_caparica_12 = new ol.format.GeoJSON();
var features_caparica_12 = format_caparica_12.readFeatures(json_caparica_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caparica_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caparica_12.addFeatures(features_caparica_12);
var lyr_caparica_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caparica_12, 
                style: style_caparica_12,
                popuplayertitle: 'caparica',
                interactive: true,
                title: '<img src="styles/legend/caparica_12.png" /> caparica'
            });
var format_barreiromoita_13 = new ol.format.GeoJSON();
var features_barreiromoita_13 = format_barreiromoita_13.readFeatures(json_barreiromoita_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barreiromoita_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barreiromoita_13.addFeatures(features_barreiromoita_13);
var lyr_barreiromoita_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barreiromoita_13, 
                style: style_barreiromoita_13,
                popuplayertitle: 'barreiro-moita',
                interactive: true,
                title: '<img src="styles/legend/barreiromoita_13.png" /> barreiro-moita'
            });
var format_almada_14 = new ol.format.GeoJSON();
var features_almada_14 = format_almada_14.readFeatures(json_almada_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_almada_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_almada_14.addFeatures(features_almada_14);
var lyr_almada_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_almada_14, 
                style: style_almada_14,
                popuplayertitle: 'almada',
                interactive: true,
                title: '<img src="styles/legend/almada_14.png" /> almada'
            });
var format_VigarariadoSado_15 = new ol.format.GeoJSON();
var features_VigarariadoSado_15 = format_VigarariadoSado_15.readFeatures(json_VigarariadoSado_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VigarariadoSado_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VigarariadoSado_15.addFeatures(features_VigarariadoSado_15);
var lyr_VigarariadoSado_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VigarariadoSado_15, 
                style: style_VigarariadoSado_15,
                popuplayertitle: 'Vigararia do Sado',
                interactive: true,
                title: '<img src="styles/legend/VigarariadoSado_15.png" /> Vigararia do Sado'
            });
var format_VigarariadoAtlntico_16 = new ol.format.GeoJSON();
var features_VigarariadoAtlntico_16 = format_VigarariadoAtlntico_16.readFeatures(json_VigarariadoAtlntico_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VigarariadoAtlntico_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VigarariadoAtlntico_16.addFeatures(features_VigarariadoAtlntico_16);
var lyr_VigarariadoAtlntico_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VigarariadoAtlntico_16, 
                style: style_VigarariadoAtlntico_16,
                popuplayertitle: 'Vigararia do Atlântico',
                interactive: true,
                title: '<img src="styles/legend/VigarariadoAtlntico_16.png" /> Vigararia do Atlântico'
            });
var format_VigarariadoTejo_17 = new ol.format.GeoJSON();
var features_VigarariadoTejo_17 = format_VigarariadoTejo_17.readFeatures(json_VigarariadoTejo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VigarariadoTejo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VigarariadoTejo_17.addFeatures(features_VigarariadoTejo_17);
var lyr_VigarariadoTejo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VigarariadoTejo_17, 
                style: style_VigarariadoTejo_17,
                popuplayertitle: 'Vigararia do Tejo',
                interactive: true,
                title: '<img src="styles/legend/VigarariadoTejo_17.png" /> Vigararia do Tejo'
            });
var format_areasmilitares_18 = new ol.format.GeoJSON();
var features_areasmilitares_18 = format_areasmilitares_18.readFeatures(json_areasmilitares_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areasmilitares_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areasmilitares_18.addFeatures(features_areasmilitares_18);
var lyr_areasmilitares_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areasmilitares_18, 
                style: style_areasmilitares_18,
                popuplayertitle: 'areas-militares',
                interactive: true,
                title: '<img src="styles/legend/areasmilitares_18.png" /> areas-militares'
            });
var format_areasnaointegradas_19 = new ol.format.GeoJSON();
var features_areasnaointegradas_19 = format_areasnaointegradas_19.readFeatures(json_areasnaointegradas_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
 /* START CUSTOM */
function createHatchFill() {
    const canvas = document.createElement('canvas');
    canvas.width = 8;
    canvas.height = 8;
    const context = canvas.getContext('2d');

    context.strokeStyle = 'rgba(128, 128, 128, 0.8)';
    context.lineWidth = 1;

    // Diagonal hatch from bottom-left to top-right
    context.beginPath();
    context.moveTo(0, 8);
    context.lineTo(8, 0);
    context.stroke();

    return new ol.style.Fill({
        color: context.createPattern(canvas, 'repeat')
    });
}
var fill_areasnaointegradas_19 = createHatchFill();
/* END OF CUSTOM */
var jsonSource_areasnaointegradas_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areasnaointegradas_19.addFeatures(features_areasnaointegradas_19);
var lyr_areasnaointegradas_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areasnaointegradas_19, 
                style: style_areasnaointegradas_19,
                popuplayertitle: 'areas-nao-integradas',
                interactive: true,
                title: '<img src="styles/legend/areasnaointegradas_19.png" /> areas-nao-integradas'
            });
var group_PropostadeVigarariasNovas = new ol.layer.Group({
                                layers: [lyr_VigarariadoSado_15,lyr_VigarariadoAtlntico_16,lyr_VigarariadoTejo_17,],
                                fold: 'open',
                                title: 'Proposta de Vigararias Novas'});
var group_VigarariasLimitesAtuais = new ol.layer.Group({
                                layers: [lyr_setubal_8,lyr_seixal_9,lyr_palmelasesimbra_10,lyr_montijo_11,lyr_caparica_12,lyr_barreiromoita_13,lyr_almada_14,],
                                fold: 'open',
                                title: 'Vigararias Limites Atuais'});
var group_VigarariasPropostadeLimitesParoquiais = new ol.layer.Group({
                                layers: [lyr_setubal_v2_1,lyr_seixal_v2_2,lyr_palmelasesimbra_v2_3,lyr_montijo_v2_4,lyr_caparica_v2_5,lyr_barreiromoita_v2_6,lyr_almada_v2_7,],
                                fold: 'open',
                                title: 'Vigararias Proposta de Limites Paroquiais'});
var group_CAOP = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'CAOP'});

lyr_OpenStreetMap_0.setVisible(true);lyr_setubal_v2_1.setVisible(false);lyr_seixal_v2_2.setVisible(false);lyr_palmelasesimbra_v2_3.setVisible(false);lyr_montijo_v2_4.setVisible(false);lyr_caparica_v2_5.setVisible(false);lyr_barreiromoita_v2_6.setVisible(false);lyr_almada_v2_7.setVisible(false);lyr_setubal_8.setVisible(true);lyr_seixal_9.setVisible(true);lyr_palmelasesimbra_10.setVisible(true);lyr_montijo_11.setVisible(true);lyr_caparica_12.setVisible(true);lyr_barreiromoita_13.setVisible(true);lyr_almada_14.setVisible(true);lyr_VigarariadoSado_15.setVisible(false);lyr_VigarariadoAtlntico_16.setVisible(false);lyr_VigarariadoTejo_17.setVisible(false);lyr_areasmilitares_18.setVisible(true);lyr_areasnaointegradas_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_VigarariasPropostadeLimitesParoquiais,group_VigarariasLimitesAtuais,group_PropostadeVigarariasNovas,lyr_areasmilitares_18,lyr_areasnaointegradas_19];
lyr_setubal_v2_1.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Viagararia': 'Viagararia', 'UnPast': 'UnPast', });
lyr_seixal_v2_2.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_palmelasesimbra_v2_3.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_montijo_v2_4.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', 'Un Past': 'Un Past', });
lyr_caparica_v2_5.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_barreiromoita_v2_6.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_almada_v2_7.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_setubal_8.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Viagararia': 'Viagararia', });
lyr_seixal_9.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_palmelasesimbra_10.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_montijo_11.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_caparica_12.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_barreiromoita_13.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', });
lyr_almada_14.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_VigarariadoSado_15.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', 'Paroquia_2': 'Paroquia_2', 'Document_1': 'Document_1', 'Observ_2': 'Observ_2', 'Viagararia': 'Viagararia', 'UnPast': 'UnPast', });
lyr_VigarariadoAtlntico_16.set('fieldAliases', {'fid': 'fid', 'viagaria': 'viagaria', 'area_ha': 'area_ha', 'perimetro_': 'perimetro_', 'unidade': 'unidade', });
lyr_VigarariadoTejo_17.set('fieldAliases', {'fid': 'fid', 'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', 'UniPast': 'UniPast', 'auxiliary_storage_symbol_alpha': 'auxiliary_storage_symbol_alpha', });
lyr_areasmilitares_18.set('fieldAliases', {'id': 'id', });
lyr_areasnaointegradas_19.set('fieldAliases', {'id': 'id', });
lyr_setubal_v2_1.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Viagararia': 'TextEdit', 'UnPast': 'TextEdit', });
lyr_seixal_v2_2.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_palmelasesimbra_v2_3.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_montijo_v2_4.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', 'Un Past': 'TextEdit', });
lyr_caparica_v2_5.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_barreiromoita_v2_6.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_almada_v2_7.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_setubal_8.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Viagararia': 'TextEdit', });
lyr_seixal_9.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_palmelasesimbra_10.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_montijo_11.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_caparica_12.set('fieldImages', {'Paroquia': '', 'Documentos': '', 'Observ': '', 'Vigararia': '', });
lyr_barreiromoita_13.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', });
lyr_almada_14.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_VigarariadoSado_15.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', 'Paroquia_2': 'TextEdit', 'Document_1': '', 'Observ_2': 'TextEdit', 'Viagararia': 'TextEdit', 'UnPast': 'TextEdit', });
lyr_VigarariadoAtlntico_16.set('fieldImages', {'fid': 'TextEdit', 'viagaria': 'TextEdit', 'area_ha': 'TextEdit', 'perimetro_': 'TextEdit', 'unidade': 'TextEdit', });
lyr_VigarariadoTejo_17.set('fieldImages', {'fid': 'TextEdit', 'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', 'UniPast': 'TextEdit', 'auxiliary_storage_symbol_alpha': 'TextEdit', });
lyr_areasmilitares_18.set('fieldImages', {'id': 'TextEdit', });
lyr_areasnaointegradas_19.set('fieldImages', {'id': 'TextEdit', });
lyr_setubal_v2_1.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Viagararia': 'no label', 'UnPast': 'no label', });
lyr_seixal_v2_2.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_palmelasesimbra_v2_3.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_montijo_v2_4.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', 'Un Past': 'no label', });
lyr_caparica_v2_5.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_barreiromoita_v2_6.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_almada_v2_7.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_setubal_8.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Viagararia': 'no label', });
lyr_seixal_9.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_palmelasesimbra_10.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_montijo_11.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_caparica_12.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_barreiromoita_13.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', });
lyr_almada_14.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_VigarariadoSado_15.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', 'Paroquia_2': 'no label', 'Document_1': 'no label', 'Observ_2': 'no label', 'Viagararia': 'no label', 'UnPast': 'no label', });
lyr_VigarariadoAtlntico_16.set('fieldLabels', {'fid': 'no label', 'viagaria': 'no label', 'area_ha': 'no label', 'perimetro_': 'no label', 'unidade': 'no label', });
lyr_VigarariadoTejo_17.set('fieldLabels', {'fid': 'no label', 'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', 'UniPast': 'no label', 'auxiliary_storage_symbol_alpha': 'no label', });
lyr_areasmilitares_18.set('fieldLabels', {'id': 'no label', });
lyr_areasnaointegradas_19.set('fieldLabels', {'id': 'no label', });
lyr_areasnaointegradas_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});