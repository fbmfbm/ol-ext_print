import React, {useEffect, useState} from 'react'
import Map from 'ol/Map';
import View from 'ol/View';
import Image from 'ol/layer/Image'
import Geoportail from 'ol-ext/layer/Geoportail'
import GeoImage from 'ol-ext/layer/GeoImage'
import Timeline from 'ol-ext/control/Timeline'
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

import TimeLine from 'ol-ext/control/Timeline'
import "ol/ol.css"
import "ol-ext/dist/ol-ext.css"
import "./MapPanel.css"



const HistoMap = ()=>{

    const [map, setMap] = useState(null)


    const buildMap = ()=>{

        Geoportail.capabilities["ORTHOIMAGERY.ORTHOPHOTOS2006-2010"] = {"server":"https://wxs.ign.fr/geoportail/wmts","layer":"ORTHOIMAGERY.ORTHOPHOTOS2006-2010","title":"Photographies aériennes 2006-2010","format":"image/jpeg","style":"normal","queryable":false,"tilematrix":"PM","minZoom":0,"maxZoom":18,"bbox":[-179.5,-75,179.5,75],"desc":"Prises de vues aériennes des territoires disponibles à la fin des années 2006 à 2010","originators":{"IGN":{"href":"http://www.ign.fr","attribution":"Institut national de l'information géographique et forestière","logo":"https://wxs.ign.fr/static/logos/IGN/IGN.gif","minZoom":0,"maxZoom":18,"constraint":[{"minZoom":0,"maxZoom":18,"bbox":[-179.5,-75,179.5,75]}]},"CG06":{"href":"http://www.cg06.fr","attribution":"Département Alpes Maritimes (06) en partenariat avec : Groupement Orthophoto 06 (NCA, Ville de Cannes, CARF, CASA,CG06, CA de Grasse) ","logo":"https://wxs.ign.fr/static/logos/CG06/CG06.gif","minZoom":0,"maxZoom":18,"constraint":[{"minZoom":0,"maxZoom":18,"bbox":[-179.5,-75,179.5,75]}]},"CG45":{"href":"http://www.loiret.com","attribution":"Le conseil général du Loiret","logo":"https://wxs.ign.fr/static/logos/CG45/CG45.gif","minZoom":0,"maxZoom":18,"constraint":[{"minZoom":0,"maxZoom":18,"bbox":[-179.5,-75,179.5,75]}]},"CRAIG":{"href":"http://www.craig.fr","attribution":"Centre Régional Auvergnat de l'Information Géographique (CRAIG)","logo":"https://wxs.ign.fr/static/logos/CRAIG/CRAIG.gif","minZoom":0,"maxZoom":18,"constraint":[{"minZoom":0,"maxZoom":18,"bbox":[-179.5,-75,179.5,75]}]},"RGD_SAVOIE":{"href":"http://www.rgd.fr","attribution":"Régie de Gestion de Données des Pays de Savoie (RGD 73-74)","logo":"https://wxs.ign.fr/static/logos/RGD_SAVOIE/RGD_SAVOIE.gif","minZoom":0,"maxZoom":18,"constraint":[{"minZoom":0,"maxZoom":18,"bbox":[-179.5,-75,179.5,75]}]}}};
        Geoportail.capabilities["ORTHOIMAGERY.ORTHOPHOTOS.1965-1980"] = {"server":"https://wxs.ign.fr/geoportail/wmts","layer":"ORTHOIMAGERY.ORTHOPHOTOS.1965-1980","title":"BDOrtho Historique 1965-1980","format":"image/png","style":"BDORTHOHISTORIQUE","queryable":false,"tilematrix":"PM","minZoom":0,"maxZoom":18,"bbox":[-2.2752295,47.083138,2.619632,49.01929],"desc":"<![CDATA[Couverture en photographies aériennes de la France des années 1965 à 1980. Cette couverture a été réalisée à partir des photographies aériennes historiques numérisées par l'IGN. Elle est disponible sur la France métropolitaine, les départements et régions d'Outre-Mer (la Guyane n'est que partiellement couverte) et les collectivités d'Outre-Mer sauf la Polynésie française.\nLes photographies sont orthorectifiées, c'est-à-dire corrigées des déformations dues à la prise de vue et au relief du terrain, et assemblées pour fournir une visualisation continue superposable avec le Référentiel à Grande Echelle (RGE®) ou les cartes.]]>","originators":{"IGN":{"href":"http://www.ign.fr","attribution":"Institut national de l'information géographique et forestière","logo":"https://wxs.ign.fr/static/logos/IGN/IGN.gif","minZoom":3,"maxZoom":18,"constraint":[{"minZoom":3,"maxZoom":18,"bbox":[-2.2752295,47.083138,2.619632,49.01929]}]}}};
        Geoportail.capabilities["ORTHOIMAGERY.ORTHOPHOTOS.1950-1965"] = {"server":"https://wxs.ign.fr/geoportail/wmts","layer":"ORTHOIMAGERY.ORTHOPHOTOS.1950-1965","title":"Photographies aériennes historiques 1950-1965","format":"image/png","style":"BDORTHOHISTORIQUE","queryable":false,"tilematrix":"PM","minZoom":0,"maxZoom":18,"bbox":[-67.72138,-21.401262,55.84643,51.094486],"desc":"<![CDATA[Couverture en photographies aériennes de la France des années 50, telle qu'elle se présentait avant les grands aménagements des années 60. Cette couverture a été réalisée à partir des photographies aériennes historiques numérisées par l'IGN. Elle est disponible sur la France métropolitaine, les départements et régions d'Outre-Mer (la Guyane n'est que partiellement couverte) et les collectivités d'Outre-Mer sauf la Polynésie française.\nLes photographies sont orthorectifiées, c'est-à-dire corrigées des déformations dues à la prise de vue et au relief du terrain, et assemblées pour fournir une visualisation continue superposable avec le Référentiel à Grande Echelle (RGE®) ou les cartes.]]>","originators":{"IGN":{"href":"http://www.ign.fr","attribution":"Institut national de l'information géographique et forestière","logo":"https://wxs.ign.fr/static/logos/IGN/IGN.gif","minZoom":0,"maxZoom":18,"constraint":[{"minZoom":0,"maxZoom":18,"bbox":[-179.5,-75,179.5,75]}]}}};
      
        let histo = [
            new Geoportail({ 
              name: (new Date()).getFullYear().toString(),
              title: (new Date()).getFullYear().toString(),
              layer: 'ORTHOIMAGERY.ORTHOPHOTOS' 
            }),
            new Geoportail({ 
              name: '2008',
              title: '2006-2010',
              key: 'h1osiyvfm7c4wu976jv6gpum',
              layer: 'ORTHOIMAGERY.ORTHOPHOTOS2006-2010' 
            }),
            new Geoportail({ 
              name: '1970',
              title: '1965-1980',
              key: 'h1osiyvfm7c4wu976jv6gpum',
              layer: 'ORTHOIMAGERY.ORTHOPHOTOS.1965-1980' 
            }),
            new Geoportail({ 
              name: '1960',
              title: '1950-1965',
              key: 'h1osiyvfm7c4wu976jv6gpum',
              layer: 'ORTHOIMAGERY.ORTHOPHOTOS.1950-1965' 
            })
          ];



    let tline = new Timeline({
        className: 'ol-pointer ol-zoomhover',
        features: histo,
        minDate: new Date('1923'),
        maxDate: new Date(),
        getFeatureDate: function(l) { return l.get('name'); },
        getHTML: function(l) { return l.get('name'); }
      });


      tline.on('scroll', function(e) {
        var layer, dmin = Infinity;
        histo.forEach(function(l, i) {
          var d = new Date(l.get('name'));
          var dt = Math.abs(e.date-d);
          if (dt < dmin) {
            layer = l;
            dmin = dt;
          }
          if (i!==0) l.setVisible(false);
        });
        layer.setVisible(true);
        //$('.date').text(layer.get('title') || layer.get('name'));
      });
      tline.on('select', function(e) {
        tline.setDate(e.feature);
      });


    let baseMap = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
          }),

        ],
        view: new View({
          center: [	273338.81, 6269594.37],
          zoom: 12
        })
      });

   histo.forEach(function(layer) {baseMap.addLayer(layer); });

    baseMap.addControl(tline)
    setMap(baseMap)

    }

    useEffect(() => {
        buildMap()
    }, [])



    return(
        <div style={{ "width":"100%" }}>
            <h1>Navigation Historique</h1>
            <div id="map"></div>
        </div>
    )
}

export default HistoMap