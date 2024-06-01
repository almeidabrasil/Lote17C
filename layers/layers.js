ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-46.640761, -11.272238, -46.478193, -11.184243]);
var wms_layers = [];


        var lyr_GOOGLESATELLITE_0 = new ol.layer.Tile({
            'title': 'GOOGLE SATELLITE',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GEOFT_UNIDADE_CONSERVACAO_2 = new ol.format.GeoJSON();
var features_GEOFT_UNIDADE_CONSERVACAO_2 = format_GEOFT_UNIDADE_CONSERVACAO_2.readFeatures(json_GEOFT_UNIDADE_CONSERVACAO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GEOFT_UNIDADE_CONSERVACAO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOFT_UNIDADE_CONSERVACAO_2.addFeatures(features_GEOFT_UNIDADE_CONSERVACAO_2);
var lyr_GEOFT_UNIDADE_CONSERVACAO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOFT_UNIDADE_CONSERVACAO_2, 
                style: style_GEOFT_UNIDADE_CONSERVACAO_2,
                popuplayertitle: "GEOFT_UNIDADE_CONSERVACAO",
                interactive: true,
                    title: '<img src="styles/legend/GEOFT_UNIDADE_CONSERVACAO_2.png" /> GEOFT_UNIDADE_CONSERVACAO'
                });
var format_Rodovias_3 = new ol.format.GeoJSON();
var features_Rodovias_3 = format_Rodovias_3.readFeatures(json_Rodovias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Rodovias_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rodovias_3.addFeatures(features_Rodovias_3);
var lyr_Rodovias_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rodovias_3, 
                style: style_Rodovias_3,
                popuplayertitle: "Rodovias",
                interactive: true,
                    title: '<img src="styles/legend/Rodovias_3.png" /> Rodovias'
                });
var format_Imvel_SIGEF_13012023_4 = new ol.format.GeoJSON();
var features_Imvel_SIGEF_13012023_4 = format_Imvel_SIGEF_13012023_4.readFeatures(json_Imvel_SIGEF_13012023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Imvel_SIGEF_13012023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Imvel_SIGEF_13012023_4.addFeatures(features_Imvel_SIGEF_13012023_4);
var lyr_Imvel_SIGEF_13012023_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Imvel_SIGEF_13012023_4, 
                style: style_Imvel_SIGEF_13012023_4,
                popuplayertitle: "Imóvel_SIGEF_13/01/2023",
                interactive: true,
                    title: '<img src="styles/legend/Imvel_SIGEF_13012023_4.png" /> Imóvel_SIGEF_13/01/2023'
                });
var format_Imvel_SNCI_13012023_5 = new ol.format.GeoJSON();
var features_Imvel_SNCI_13012023_5 = format_Imvel_SNCI_13012023_5.readFeatures(json_Imvel_SNCI_13012023_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Imvel_SNCI_13012023_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Imvel_SNCI_13012023_5.addFeatures(features_Imvel_SNCI_13012023_5);
var lyr_Imvel_SNCI_13012023_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Imvel_SNCI_13012023_5, 
                style: style_Imvel_SNCI_13012023_5,
                popuplayertitle: "Imóvel_SNCI_13/01/2023",
                interactive: true,
                    title: '<img src="styles/legend/Imvel_SNCI_13012023_5.png" /> Imóvel_SNCI_13/01/2023'
                });
var format_Alertas_MapBiomas_6 = new ol.format.GeoJSON();
var features_Alertas_MapBiomas_6 = format_Alertas_MapBiomas_6.readFeatures(json_Alertas_MapBiomas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Alertas_MapBiomas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alertas_MapBiomas_6.addFeatures(features_Alertas_MapBiomas_6);
var lyr_Alertas_MapBiomas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alertas_MapBiomas_6, 
                style: style_Alertas_MapBiomas_6,
                popuplayertitle: "Alertas_MapBiomas",
                interactive: true,
                    title: '<img src="styles/legend/Alertas_MapBiomas_6.png" /> Alertas_MapBiomas'
                });
var format_CAR_SIGCAT_TO_areaImovel_19_05_2024_7 = new ol.format.GeoJSON();
var features_CAR_SIGCAT_TO_areaImovel_19_05_2024_7 = format_CAR_SIGCAT_TO_areaImovel_19_05_2024_7.readFeatures(json_CAR_SIGCAT_TO_areaImovel_19_05_2024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CAR_SIGCAT_TO_areaImovel_19_05_2024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAR_SIGCAT_TO_areaImovel_19_05_2024_7.addFeatures(features_CAR_SIGCAT_TO_areaImovel_19_05_2024_7);
var lyr_CAR_SIGCAT_TO_areaImovel_19_05_2024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAR_SIGCAT_TO_areaImovel_19_05_2024_7, 
                style: style_CAR_SIGCAT_TO_areaImovel_19_05_2024_7,
                popuplayertitle: "CAR_SIGCAT_TO_areaImovel_19_05_2024",
                interactive: true,
                    title: '<img src="styles/legend/CAR_SIGCAT_TO_areaImovel_19_05_2024_7.png" /> CAR_SIGCAT_TO_areaImovel_19_05_2024'
                });
var format_Lote17C_8 = new ol.format.GeoJSON();
var features_Lote17C_8 = format_Lote17C_8.readFeatures(json_Lote17C_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Lote17C_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote17C_8.addFeatures(features_Lote17C_8);
var lyr_Lote17C_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote17C_8, 
                style: style_Lote17C_8,
                popuplayertitle: "Lote17C",
                interactive: true,
                    title: '<img src="styles/legend/Lote17C_8.png" /> Lote17C'
                });
var group_GEOCONSULTEGEOMTICA = new ol.layer.Group({
                                layers: [lyr_GEOFT_UNIDADE_CONSERVACAO_2,lyr_Rodovias_3,lyr_Imvel_SIGEF_13012023_4,lyr_Imvel_SNCI_13012023_5,lyr_Alertas_MapBiomas_6,lyr_CAR_SIGCAT_TO_areaImovel_19_05_2024_7,lyr_Lote17C_8,],
                                fold: "open",
                                title: "GEOCONSULTE - GEOMÁTICA"});

lyr_GOOGLESATELLITE_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GEOFT_UNIDADE_CONSERVACAO_2.setVisible(true);lyr_Rodovias_3.setVisible(true);lyr_Imvel_SIGEF_13012023_4.setVisible(true);lyr_Imvel_SNCI_13012023_5.setVisible(true);lyr_Alertas_MapBiomas_6.setVisible(true);lyr_CAR_SIGCAT_TO_areaImovel_19_05_2024_7.setVisible(true);lyr_Lote17C_8.setVisible(true);
var layersList = [lyr_GOOGLESATELLITE_0,lyr_OpenStreetMap_1,group_GEOCONSULTEGEOMTICA];
lyr_GEOFT_UNIDADE_CONSERVACAO_2.set('fieldAliases', {'fid': 'fid', 'id_uc0': 'id_uc0', 'nome_uc1': 'nome_uc1', 'id_wcmc2': 'id_wcmc2', 'categori3': 'categori3', 'grupo4': 'grupo4', 'esfera5': 'esfera5', 'ano_cria6': 'ano_cria6', 'gid7': 'gid7', 'qualidad8': 'qualidad8', 'ato_lega9': 'ato_lega9', 'dt_ultim10': 'dt_ultim10', 'codigo_u11': 'codigo_u11', 'nome_org12': 'nome_org12', });
lyr_Rodovias_3.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id_trecho_': 'id_trecho_', 'vl_br': 'vl_br', 'sg_uf': 'sg_uf', 'nm_tipo_tr': 'nm_tipo_tr', 'sg_tipo_tr': 'sg_tipo_tr', 'desc_coinc': 'desc_coinc', 'vl_codigo': 'vl_codigo', 'ds_local_i': 'ds_local_i', 'ds_local_f': 'ds_local_f', 'vl_km_inic': 'vl_km_inic', 'vl_km_fina': 'vl_km_fina', 'vl_extensa': 'vl_extensa', 'ds_sup_fed': 'ds_sup_fed', 'ds_obra': 'ds_obra', 'ul': 'ul', 'ds_coinc': 'ds_coinc', 'ds_tipo_ad': 'ds_tipo_ad', 'ds_ato_leg': 'ds_ato_leg', 'est_coinc': 'est_coinc', 'sup_est_co': 'sup_est_co', 'ds_jurisdi': 'ds_jurisdi', 'ds_superfi': 'ds_superfi', 'ds_legenda': 'ds_legenda', 'sg_legenda': 'sg_legenda', 'leg_multim': 'leg_multim', 'versao_snv': 'versao_snv', 'id_versao': 'id_versao', 'marcador': 'marcador', 'st_length_': 'st_length_', });
lyr_Imvel_SIGEF_13012023_4.set('fieldAliases', {'fid': 'fid', 'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'municipio_': 'municipio_', 'uf_id': 'uf_id', 'Nome_Title': 'Nome_Title', 'Area_QGIS': 'Area_QGIS', });
lyr_Imvel_SNCI_13012023_5.set('fieldAliases', {'fid': 'fid', 'num_proces': 'num_proces', 'sr': 'sr', 'num_certif': 'num_certif', 'data_certi': 'data_certi', 'qtd_area_p': 'qtd_area_p', 'cod_profis': 'cod_profis', 'cod_imovel': 'cod_imovel', 'nome_imove': 'nome_imove', 'uf_municip': 'uf_municip', });
lyr_Alertas_MapBiomas_6.set('fieldAliases', {'CODEALERTA': 'CODEALERTA', 'FONTE': 'FONTE', 'BIOMA': 'BIOMA', 'ESTADO': 'ESTADO', 'MUNICIPIO': 'MUNICIPIO', 'AREAHA': 'AREAHA', 'ANODETEC': 'ANODETEC', 'DATADETEC': 'DATADETEC', 'DTIMGANT': 'DTIMGANT', 'DTIMGDEP': 'DTIMGDEP', 'DTPUBLI': 'DTPUBLI', 'VPRESSAO': 'VPRESSAO', });
lyr_CAR_SIGCAT_TO_areaImovel_19_05_2024_7.set('fieldAliases', {'numero_car': 'numero_car', 'nom_imovel': 'nom_imovel', 'status': 'status', 'carfederal': 'carfederal', 'municipio': 'municipio', 'cod_ibge': 'cod_ibge', 'ha_imovel': 'ha_imovel', 'mf_imovel': 'mf_imovel', 'cadastro': 'cadastro', 'tipo_area': 'tipo_area', });
lyr_Lote17C_8.set('fieldAliases', {'numero_car': 'numero_car', 'nom_imovel': 'nom_imovel', 'status': 'status', 'carfederal': 'carfederal', 'municipio': 'municipio', 'cod_ibge': 'cod_ibge', 'ha_imovel': 'ha_imovel', 'mf_imovel': 'mf_imovel', 'cadastro': 'cadastro', 'tipo_area': 'tipo_area', });
lyr_GEOFT_UNIDADE_CONSERVACAO_2.set('fieldImages', {'fid': 'TextEdit', 'id_uc0': 'TextEdit', 'nome_uc1': 'TextEdit', 'id_wcmc2': 'TextEdit', 'categori3': 'TextEdit', 'grupo4': 'TextEdit', 'esfera5': 'TextEdit', 'ano_cria6': 'TextEdit', 'gid7': 'TextEdit', 'qualidad8': 'TextEdit', 'ato_lega9': 'TextEdit', 'dt_ultim10': 'TextEdit', 'codigo_u11': 'TextEdit', 'nome_org12': 'TextEdit', });
lyr_Rodovias_3.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id_trecho_': 'TextEdit', 'vl_br': 'TextEdit', 'sg_uf': 'TextEdit', 'nm_tipo_tr': 'TextEdit', 'sg_tipo_tr': 'TextEdit', 'desc_coinc': 'TextEdit', 'vl_codigo': 'TextEdit', 'ds_local_i': 'TextEdit', 'ds_local_f': 'TextEdit', 'vl_km_inic': 'TextEdit', 'vl_km_fina': 'TextEdit', 'vl_extensa': 'TextEdit', 'ds_sup_fed': 'TextEdit', 'ds_obra': 'TextEdit', 'ul': 'TextEdit', 'ds_coinc': 'TextEdit', 'ds_tipo_ad': 'TextEdit', 'ds_ato_leg': 'TextEdit', 'est_coinc': 'TextEdit', 'sup_est_co': 'TextEdit', 'ds_jurisdi': 'TextEdit', 'ds_superfi': 'TextEdit', 'ds_legenda': 'TextEdit', 'sg_legenda': 'TextEdit', 'leg_multim': 'TextEdit', 'versao_snv': 'TextEdit', 'id_versao': 'TextEdit', 'marcador': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_Imvel_SIGEF_13012023_4.set('fieldImages', {'fid': 'TextEdit', 'parcela_co': 'TextEdit', 'rt': 'TextEdit', 'art': 'TextEdit', 'situacao_i': 'TextEdit', 'codigo_imo': 'TextEdit', 'data_submi': 'DateTime', 'data_aprov': 'DateTime', 'status': 'TextEdit', 'nome_area': 'TextEdit', 'registro_m': 'TextEdit', 'registro_d': 'DateTime', 'municipio_': 'Range', 'uf_id': 'Range', 'Nome_Title': 'TextEdit', 'Area_QGIS': 'TextEdit', });
lyr_Imvel_SNCI_13012023_5.set('fieldImages', {'fid': 'TextEdit', 'num_proces': 'TextEdit', 'sr': 'TextEdit', 'num_certif': 'TextEdit', 'data_certi': 'DateTime', 'qtd_area_p': 'TextEdit', 'cod_profis': 'TextEdit', 'cod_imovel': 'TextEdit', 'nome_imove': 'TextEdit', 'uf_municip': 'TextEdit', });
lyr_Alertas_MapBiomas_6.set('fieldImages', {'CODEALERTA': 'TextEdit', 'FONTE': 'TextEdit', 'BIOMA': 'TextEdit', 'ESTADO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'AREAHA': 'TextEdit', 'ANODETEC': 'TextEdit', 'DATADETEC': 'DateTime', 'DTIMGANT': 'DateTime', 'DTIMGDEP': 'DateTime', 'DTPUBLI': 'DateTime', 'VPRESSAO': 'TextEdit', });
lyr_CAR_SIGCAT_TO_areaImovel_19_05_2024_7.set('fieldImages', {'numero_car': 'TextEdit', 'nom_imovel': 'TextEdit', 'status': 'TextEdit', 'carfederal': 'TextEdit', 'municipio': 'TextEdit', 'cod_ibge': 'Range', 'ha_imovel': 'TextEdit', 'mf_imovel': 'TextEdit', 'cadastro': 'DateTime', 'tipo_area': 'TextEdit', });
lyr_Lote17C_8.set('fieldImages', {'numero_car': '', 'nom_imovel': '', 'status': 'TextEdit', 'carfederal': '', 'municipio': '', 'cod_ibge': '', 'ha_imovel': '', 'mf_imovel': '', 'cadastro': '', 'tipo_area': '', });
lyr_GEOFT_UNIDADE_CONSERVACAO_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'id_uc0': 'inline label - visible with data', 'nome_uc1': 'inline label - visible with data', 'id_wcmc2': 'no label', 'categori3': 'inline label - visible with data', 'grupo4': 'inline label - visible with data', 'esfera5': 'inline label - visible with data', 'ano_cria6': 'inline label - visible with data', 'gid7': 'no label', 'qualidad8': 'no label', 'ato_lega9': 'no label', 'dt_ultim10': 'no label', 'codigo_u11': 'no label', 'nome_org12': 'inline label - visible with data', });
lyr_Rodovias_3.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id_trecho_': 'no label', 'vl_br': 'no label', 'sg_uf': 'no label', 'nm_tipo_tr': 'no label', 'sg_tipo_tr': 'no label', 'desc_coinc': 'no label', 'vl_codigo': 'no label', 'ds_local_i': 'no label', 'ds_local_f': 'no label', 'vl_km_inic': 'no label', 'vl_km_fina': 'no label', 'vl_extensa': 'no label', 'ds_sup_fed': 'no label', 'ds_obra': 'no label', 'ul': 'no label', 'ds_coinc': 'no label', 'ds_tipo_ad': 'no label', 'ds_ato_leg': 'no label', 'est_coinc': 'no label', 'sup_est_co': 'no label', 'ds_jurisdi': 'no label', 'ds_superfi': 'no label', 'ds_legenda': 'no label', 'sg_legenda': 'no label', 'leg_multim': 'no label', 'versao_snv': 'no label', 'id_versao': 'no label', 'marcador': 'no label', 'st_length_': 'no label', });
lyr_Imvel_SIGEF_13012023_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'parcela_co': 'inline label - visible with data', 'rt': 'inline label - visible with data', 'art': 'inline label - visible with data', 'situacao_i': 'inline label - visible with data', 'codigo_imo': 'inline label - visible with data', 'data_submi': 'inline label - visible with data', 'data_aprov': 'inline label - visible with data', 'status': 'inline label - visible with data', 'nome_area': 'inline label - visible with data', 'registro_m': 'inline label - visible with data', 'registro_d': 'inline label - visible with data', 'municipio_': 'inline label - visible with data', 'uf_id': 'inline label - visible with data', 'Nome_Title': 'inline label - visible with data', 'Area_QGIS': 'inline label - visible with data', });
lyr_Imvel_SNCI_13012023_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'num_proces': 'inline label - visible with data', 'sr': 'inline label - visible with data', 'num_certif': 'inline label - visible with data', 'data_certi': 'inline label - visible with data', 'qtd_area_p': 'inline label - visible with data', 'cod_profis': 'inline label - visible with data', 'cod_imovel': 'inline label - visible with data', 'nome_imove': 'inline label - visible with data', 'uf_municip': 'inline label - visible with data', });
lyr_Alertas_MapBiomas_6.set('fieldLabels', {'CODEALERTA': 'inline label - visible with data', 'FONTE': 'inline label - visible with data', 'BIOMA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'AREAHA': 'inline label - visible with data', 'ANODETEC': 'inline label - visible with data', 'DATADETEC': 'inline label - visible with data', 'DTIMGANT': 'inline label - visible with data', 'DTIMGDEP': 'inline label - visible with data', 'DTPUBLI': 'inline label - visible with data', 'VPRESSAO': 'inline label - visible with data', });
lyr_CAR_SIGCAT_TO_areaImovel_19_05_2024_7.set('fieldLabels', {'numero_car': 'inline label - visible with data', 'nom_imovel': 'inline label - visible with data', 'status': 'inline label - visible with data', 'carfederal': 'inline label - visible with data', 'municipio': 'inline label - visible with data', 'cod_ibge': 'no label', 'ha_imovel': 'inline label - visible with data', 'mf_imovel': 'no label', 'cadastro': 'inline label - visible with data', 'tipo_area': 'inline label - visible with data', });
lyr_Lote17C_8.set('fieldLabels', {'numero_car': 'inline label - visible with data', 'nom_imovel': 'inline label - visible with data', 'status': 'inline label - visible with data', 'carfederal': 'inline label - visible with data', 'municipio': 'inline label - visible with data', 'cod_ibge': 'inline label - visible with data', 'ha_imovel': 'inline label - visible with data', 'mf_imovel': 'inline label - visible with data', 'cadastro': 'inline label - visible with data', 'tipo_area': 'inline label - visible with data', });
lyr_Lote17C_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});