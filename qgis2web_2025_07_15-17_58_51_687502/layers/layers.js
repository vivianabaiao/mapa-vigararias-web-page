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
var format_caopsetubalmunicipios2024_1 = new ol.format.GeoJSON();
var features_caopsetubalmunicipios2024_1 = format_caopsetubalmunicipios2024_1.readFeatures(json_caopsetubalmunicipios2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caopsetubalmunicipios2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caopsetubalmunicipios2024_1.addFeatures(features_caopsetubalmunicipios2024_1);
var lyr_caopsetubalmunicipios2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caopsetubalmunicipios2024_1, 
                style: style_caopsetubalmunicipios2024_1,
                popuplayertitle: 'caop-setubal-municipios-2024',
                interactive: true,
                title: '<img src="styles/legend/caopsetubalmunicipios2024_1.png" /> caop-setubal-municipios-2024'
            });
var format_caopsetubalfreguesias2024_2 = new ol.format.GeoJSON();
var features_caopsetubalfreguesias2024_2 = format_caopsetubalfreguesias2024_2.readFeatures(json_caopsetubalfreguesias2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caopsetubalfreguesias2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caopsetubalfreguesias2024_2.addFeatures(features_caopsetubalfreguesias2024_2);
var lyr_caopsetubalfreguesias2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caopsetubalfreguesias2024_2, 
                style: style_caopsetubalfreguesias2024_2,
                popuplayertitle: 'caop-setubal-freguesias-2024',
                interactive: true,
                title: '<img src="styles/legend/caopsetubalfreguesias2024_2.png" /> caop-setubal-freguesias-2024'
            });
var format_setubal_v2_3 = new ol.format.GeoJSON();
var features_setubal_v2_3 = format_setubal_v2_3.readFeatures(json_setubal_v2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_setubal_v2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_setubal_v2_3.addFeatures(features_setubal_v2_3);
var lyr_setubal_v2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_setubal_v2_3, 
                style: style_setubal_v2_3,
                popuplayertitle: 'setubal_v2',
                interactive: true,
                title: '<img src="styles/legend/setubal_v2_3.png" /> setubal_v2'
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
var format_palmelasesimbra_v2_5 = new ol.format.GeoJSON();
var features_palmelasesimbra_v2_5 = format_palmelasesimbra_v2_5.readFeatures(json_palmelasesimbra_v2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_palmelasesimbra_v2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_palmelasesimbra_v2_5.addFeatures(features_palmelasesimbra_v2_5);
var lyr_palmelasesimbra_v2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_palmelasesimbra_v2_5, 
                style: style_palmelasesimbra_v2_5,
                popuplayertitle: 'palmela-sesimbra_v2',
                interactive: true,
                title: '<img src="styles/legend/palmelasesimbra_v2_5.png" /> palmela-sesimbra_v2'
            });
var format_montijo_v2_6 = new ol.format.GeoJSON();
var features_montijo_v2_6 = format_montijo_v2_6.readFeatures(json_montijo_v2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_montijo_v2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_montijo_v2_6.addFeatures(features_montijo_v2_6);
var lyr_montijo_v2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_montijo_v2_6, 
                style: style_montijo_v2_6,
                popuplayertitle: 'montijo_v2',
                interactive: true,
                title: '<img src="styles/legend/montijo_v2_6.png" /> montijo_v2'
            });
var format_caparica_v2_7 = new ol.format.GeoJSON();
var features_caparica_v2_7 = format_caparica_v2_7.readFeatures(json_caparica_v2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caparica_v2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caparica_v2_7.addFeatures(features_caparica_v2_7);
var lyr_caparica_v2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caparica_v2_7, 
                style: style_caparica_v2_7,
                popuplayertitle: 'caparica_v2',
                interactive: true,
                title: '<img src="styles/legend/caparica_v2_7.png" /> caparica_v2'
            });
var format_barreiromoita_v2_8 = new ol.format.GeoJSON();
var features_barreiromoita_v2_8 = format_barreiromoita_v2_8.readFeatures(json_barreiromoita_v2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barreiromoita_v2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barreiromoita_v2_8.addFeatures(features_barreiromoita_v2_8);
var lyr_barreiromoita_v2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barreiromoita_v2_8, 
                style: style_barreiromoita_v2_8,
                popuplayertitle: 'barreiro-moita_v2',
                interactive: true,
                title: '<img src="styles/legend/barreiromoita_v2_8.png" /> barreiro-moita_v2'
            });
var format_almada_v2_9 = new ol.format.GeoJSON();
var features_almada_v2_9 = format_almada_v2_9.readFeatures(json_almada_v2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_almada_v2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_almada_v2_9.addFeatures(features_almada_v2_9);
var lyr_almada_v2_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_almada_v2_9, 
                style: style_almada_v2_9,
                popuplayertitle: 'almada_v2',
                interactive: true,
                title: '<img src="styles/legend/almada_v2_9.png" /> almada_v2'
            });
var format_setubal_10 = new ol.format.GeoJSON();
var features_setubal_10 = format_setubal_10.readFeatures(json_setubal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_setubal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_setubal_10.addFeatures(features_setubal_10);
var lyr_setubal_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_setubal_10, 
                style: style_setubal_10,
                popuplayertitle: 'setubal',
                interactive: true,
                title: '<img src="styles/legend/setubal_10.png" /> setubal'
            });
var format_seixal_11 = new ol.format.GeoJSON();
var features_seixal_11 = format_seixal_11.readFeatures(json_seixal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seixal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seixal_11.addFeatures(features_seixal_11);
var lyr_seixal_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_seixal_11, 
                style: style_seixal_11,
                popuplayertitle: 'seixal',
                interactive: true,
                title: '<img src="styles/legend/seixal_11.png" /> seixal'
            });
var format_palmelasesimbra_12 = new ol.format.GeoJSON();
var features_palmelasesimbra_12 = format_palmelasesimbra_12.readFeatures(json_palmelasesimbra_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_palmelasesimbra_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_palmelasesimbra_12.addFeatures(features_palmelasesimbra_12);
var lyr_palmelasesimbra_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_palmelasesimbra_12, 
                style: style_palmelasesimbra_12,
                popuplayertitle: 'palmela-sesimbra',
                interactive: true,
                title: '<img src="styles/legend/palmelasesimbra_12.png" /> palmela-sesimbra'
            });
var format_montijo_13 = new ol.format.GeoJSON();
var features_montijo_13 = format_montijo_13.readFeatures(json_montijo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_montijo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_montijo_13.addFeatures(features_montijo_13);
var lyr_montijo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_montijo_13, 
                style: style_montijo_13,
                popuplayertitle: 'montijo',
                interactive: true,
                title: '<img src="styles/legend/montijo_13.png" /> montijo'
            });
var format_caparica_14 = new ol.format.GeoJSON();
var features_caparica_14 = format_caparica_14.readFeatures(json_caparica_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caparica_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caparica_14.addFeatures(features_caparica_14);
var lyr_caparica_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caparica_14, 
                style: style_caparica_14,
                popuplayertitle: 'caparica',
                interactive: true,
                title: '<img src="styles/legend/caparica_14.png" /> caparica'
            });
var format_barreiromoita_15 = new ol.format.GeoJSON();
var features_barreiromoita_15 = format_barreiromoita_15.readFeatures(json_barreiromoita_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barreiromoita_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barreiromoita_15.addFeatures(features_barreiromoita_15);
var lyr_barreiromoita_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barreiromoita_15, 
                style: style_barreiromoita_15,
                popuplayertitle: 'barreiro-moita',
                interactive: true,
                title: '<img src="styles/legend/barreiromoita_15.png" /> barreiro-moita'
            });
var format_almada_16 = new ol.format.GeoJSON();
var features_almada_16 = format_almada_16.readFeatures(json_almada_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_almada_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_almada_16.addFeatures(features_almada_16);
var lyr_almada_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_almada_16, 
                style: style_almada_16,
                popuplayertitle: 'almada',
                interactive: true,
                title: '<img src="styles/legend/almada_16.png" /> almada'
            });
var format_VigarariadoSado_17 = new ol.format.GeoJSON();
var features_VigarariadoSado_17 = format_VigarariadoSado_17.readFeatures(json_VigarariadoSado_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VigarariadoSado_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VigarariadoSado_17.addFeatures(features_VigarariadoSado_17);
var lyr_VigarariadoSado_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VigarariadoSado_17, 
                style: style_VigarariadoSado_17,
                popuplayertitle: 'Vigararia do Sado',
                interactive: true,
                title: '<img src="styles/legend/VigarariadoSado_17.png" /> Vigararia do Sado'
            });
var format_VigarariadoAtlntico_18 = new ol.format.GeoJSON();
var features_VigarariadoAtlntico_18 = format_VigarariadoAtlntico_18.readFeatures(json_VigarariadoAtlntico_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VigarariadoAtlntico_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VigarariadoAtlntico_18.addFeatures(features_VigarariadoAtlntico_18);
var lyr_VigarariadoAtlntico_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VigarariadoAtlntico_18, 
                style: style_VigarariadoAtlntico_18,
                popuplayertitle: 'Vigararia do Atlântico',
                interactive: true,
                title: '<img src="styles/legend/VigarariadoAtlntico_18.png" /> Vigararia do Atlântico'
            });
var format_VigarariadoTejo_19 = new ol.format.GeoJSON();
var features_VigarariadoTejo_19 = format_VigarariadoTejo_19.readFeatures(json_VigarariadoTejo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VigarariadoTejo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VigarariadoTejo_19.addFeatures(features_VigarariadoTejo_19);
var lyr_VigarariadoTejo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VigarariadoTejo_19, 
                style: style_VigarariadoTejo_19,
                popuplayertitle: 'Vigararia do Tejo',
                interactive: true,
                title: '<img src="styles/legend/VigarariadoTejo_19.png" /> Vigararia do Tejo'
            });
var format_areasmilitares_20 = new ol.format.GeoJSON();
var features_areasmilitares_20 = format_areasmilitares_20.readFeatures(json_areasmilitares_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areasmilitares_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areasmilitares_20.addFeatures(features_areasmilitares_20);
var lyr_areasmilitares_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areasmilitares_20, 
                style: style_areasmilitares_20,
                popuplayertitle: 'areas-militares',
                interactive: true,
                title: '<img src="styles/legend/areasmilitares_20.png" /> areas-militares'
            });
var format_areasnaointegradas_21 = new ol.format.GeoJSON();
var features_areasnaointegradas_21 = format_areasnaointegradas_21.readFeatures(json_areasnaointegradas_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areasnaointegradas_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areasnaointegradas_21.addFeatures(features_areasnaointegradas_21);
var lyr_areasnaointegradas_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areasnaointegradas_21, 
                style: style_areasnaointegradas_21,
                popuplayertitle: 'areas-nao-integradas',
                interactive: true,
                title: '<img src="styles/legend/areasnaointegradas_21.png" /> areas-nao-integradas'
            });
var group_PropostadeVigarariasNovas = new ol.layer.Group({
                                layers: [lyr_VigarariadoSado_17,lyr_VigarariadoAtlntico_18,lyr_VigarariadoTejo_19,],
                                fold: 'open',
                                title: 'Proposta de Vigararias Novas'});
var group_VigarariasLimitesAtuais = new ol.layer.Group({
                                layers: [lyr_setubal_10,lyr_seixal_11,lyr_palmelasesimbra_12,lyr_montijo_13,lyr_caparica_14,lyr_barreiromoita_15,lyr_almada_16,],
                                fold: 'open',
                                title: 'Vigararias Limites Atuais'});
var group_VigarariasPropostadeLimites = new ol.layer.Group({
                                layers: [lyr_setubal_v2_3,lyr_seixal_v2_4,lyr_palmelasesimbra_v2_5,lyr_montijo_v2_6,lyr_caparica_v2_7,lyr_barreiromoita_v2_8,lyr_almada_v2_9,],
                                fold: 'open',
                                title: 'Vigararias Proposta de Limites'});
var group_CAOP = new ol.layer.Group({
                                layers: [lyr_caopsetubalmunicipios2024_1,lyr_caopsetubalfreguesias2024_2,],
                                fold: 'open',
                                title: 'CAOP'});

lyr_OpenStreetMap_0.setVisible(true);lyr_caopsetubalmunicipios2024_1.setVisible(false);lyr_caopsetubalfreguesias2024_2.setVisible(false);lyr_setubal_v2_3.setVisible(false);lyr_seixal_v2_4.setVisible(false);lyr_palmelasesimbra_v2_5.setVisible(false);lyr_montijo_v2_6.setVisible(false);lyr_caparica_v2_7.setVisible(false);lyr_barreiromoita_v2_8.setVisible(false);lyr_almada_v2_9.setVisible(false);lyr_setubal_10.setVisible(true);lyr_seixal_11.setVisible(true);lyr_palmelasesimbra_12.setVisible(true);lyr_montijo_13.setVisible(true);lyr_caparica_14.setVisible(true);lyr_barreiromoita_15.setVisible(true);lyr_almada_16.setVisible(true);lyr_VigarariadoSado_17.setVisible(false);lyr_VigarariadoAtlntico_18.setVisible(false);lyr_VigarariadoTejo_19.setVisible(false);lyr_areasmilitares_20.setVisible(true);lyr_areasnaointegradas_21.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_CAOP,group_VigarariasPropostadeLimites,group_VigarariasLimitesAtuais,group_PropostadeVigarariasNovas,lyr_areasmilitares_20,lyr_areasnaointegradas_21];
lyr_caopsetubalmunicipios2024_1.set('fieldAliases', {'fid': 'fid', 'dtmn': 'dtmn', 'municipio': 'municipio', 'distrito_i': 'distrito_i', 'nuts3': 'nuts3', 'nuts2': 'nuts2', 'nuts1': 'nuts1', 'area_ha': 'area_ha', 'perimetro_': 'perimetro_', 'n_freguesi': 'n_freguesi', });
lyr_caopsetubalfreguesias2024_2.set('fieldAliases', {'fid': 'fid', 'dtmnfr': 'dtmnfr', 'freguesia': 'freguesia', 'municipio': 'municipio', 'distrito_i': 'distrito_i', 'nuts3': 'nuts3', 'nuts2': 'nuts2', 'nuts1': 'nuts1', 'area_ha': 'area_ha', 'perimetro_': 'perimetro_', 'designacao': 'designacao', });
lyr_setubal_v2_3.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Viagararia': 'Viagararia', 'UnPast': 'UnPast', });
lyr_seixal_v2_4.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_palmelasesimbra_v2_5.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_montijo_v2_6.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', 'Un Past': 'Un Past', });
lyr_caparica_v2_7.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_barreiromoita_v2_8.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_almada_v2_9.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_setubal_10.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Viagararia': 'Viagararia', });
lyr_seixal_11.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_palmelasesimbra_12.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_montijo_13.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_caparica_14.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_barreiromoita_15.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', });
lyr_almada_16.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', });
lyr_VigarariadoSado_17.set('fieldAliases', {'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', 'Paroquia_2': 'Paroquia_2', 'Document_1': 'Document_1', 'Observ_2': 'Observ_2', 'Viagararia': 'Viagararia', 'UnPast': 'UnPast', });
lyr_VigarariadoAtlntico_18.set('fieldAliases', {'fid': 'fid', 'viagaria': 'viagaria', 'area_ha': 'area_ha', 'perimetro_': 'perimetro_', 'unidade': 'unidade', });
lyr_VigarariadoTejo_19.set('fieldAliases', {'fid': 'fid', 'Paroquia': 'Paroquia', 'Documentos': 'Documentos', 'Observ': 'Observ', 'Vigararia': 'Vigararia', 'UniPast': 'UniPast', 'auxiliary_storage_symbol_alpha': 'auxiliary_storage_symbol_alpha', });
lyr_areasmilitares_20.set('fieldAliases', {'id': 'id', });
lyr_areasnaointegradas_21.set('fieldAliases', {'id': 'id', });
lyr_caopsetubalmunicipios2024_1.set('fieldImages', {'fid': '', 'dtmn': '', 'municipio': '', 'distrito_i': '', 'nuts3': '', 'nuts2': '', 'nuts1': '', 'area_ha': '', 'perimetro_': '', 'n_freguesi': '', });
lyr_caopsetubalfreguesias2024_2.set('fieldImages', {'fid': '', 'dtmnfr': '', 'freguesia': '', 'municipio': '', 'distrito_i': '', 'nuts3': '', 'nuts2': '', 'nuts1': '', 'area_ha': '', 'perimetro_': '', 'designacao': '', });
lyr_setubal_v2_3.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Viagararia': 'TextEdit', 'UnPast': '', });
lyr_seixal_v2_4.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_palmelasesimbra_v2_5.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_montijo_v2_6.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', 'Un Past': 'TextEdit', });
lyr_caparica_v2_7.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_barreiromoita_v2_8.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_almada_v2_9.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_setubal_10.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Viagararia': 'TextEdit', });
lyr_seixal_11.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_palmelasesimbra_12.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_montijo_13.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_caparica_14.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': '', });
lyr_barreiromoita_15.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', });
lyr_almada_16.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', });
lyr_VigarariadoSado_17.set('fieldImages', {'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', 'Paroquia_2': 'TextEdit', 'Document_1': '', 'Observ_2': 'TextEdit', 'Viagararia': 'TextEdit', 'UnPast': 'TextEdit', });
lyr_VigarariadoAtlntico_18.set('fieldImages', {'fid': 'TextEdit', 'viagaria': 'TextEdit', 'area_ha': 'TextEdit', 'perimetro_': 'TextEdit', 'unidade': 'TextEdit', });
lyr_VigarariadoTejo_19.set('fieldImages', {'fid': 'TextEdit', 'Paroquia': 'TextEdit', 'Documentos': 'TextEdit', 'Observ': 'TextEdit', 'Vigararia': 'TextEdit', 'UniPast': 'TextEdit', 'auxiliary_storage_symbol_alpha': 'TextEdit', });
lyr_areasmilitares_20.set('fieldImages', {'id': 'TextEdit', });
lyr_areasnaointegradas_21.set('fieldImages', {'id': '', });
lyr_caopsetubalmunicipios2024_1.set('fieldLabels', {'fid': 'no label', 'dtmn': 'no label', 'municipio': 'no label', 'distrito_i': 'no label', 'nuts3': 'no label', 'nuts2': 'no label', 'nuts1': 'no label', 'area_ha': 'no label', 'perimetro_': 'no label', 'n_freguesi': 'no label', });
lyr_caopsetubalfreguesias2024_2.set('fieldLabels', {'fid': 'no label', 'dtmnfr': 'no label', 'freguesia': 'no label', 'municipio': 'no label', 'distrito_i': 'no label', 'nuts3': 'no label', 'nuts2': 'no label', 'nuts1': 'no label', 'area_ha': 'no label', 'perimetro_': 'no label', 'designacao': 'no label', });
lyr_setubal_v2_3.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Viagararia': 'no label', 'UnPast': 'no label', });
lyr_seixal_v2_4.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_palmelasesimbra_v2_5.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_montijo_v2_6.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', 'Un Past': 'no label', });
lyr_caparica_v2_7.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_barreiromoita_v2_8.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_almada_v2_9.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_setubal_10.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Viagararia': 'no label', });
lyr_seixal_11.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_palmelasesimbra_12.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_montijo_13.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_caparica_14.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_barreiromoita_15.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', });
lyr_almada_16.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', });
lyr_VigarariadoSado_17.set('fieldLabels', {'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', 'Paroquia_2': 'no label', 'Document_1': 'no label', 'Observ_2': 'no label', 'Viagararia': 'no label', 'UnPast': 'no label', });
lyr_VigarariadoAtlntico_18.set('fieldLabels', {'fid': 'no label', 'viagaria': 'no label', 'area_ha': 'no label', 'perimetro_': 'no label', 'unidade': 'no label', });
lyr_VigarariadoTejo_19.set('fieldLabels', {'fid': 'no label', 'Paroquia': 'no label', 'Documentos': 'no label', 'Observ': 'no label', 'Vigararia': 'no label', 'UniPast': 'no label', 'auxiliary_storage_symbol_alpha': 'no label', });
lyr_areasmilitares_20.set('fieldLabels', {'id': 'no label', });
lyr_areasnaointegradas_21.set('fieldLabels', {'id': 'no label', });
lyr_areasnaointegradas_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});