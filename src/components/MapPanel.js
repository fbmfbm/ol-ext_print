import React, {useEffect, useState} from 'react'
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import PrintDialog from 'ol-ext/control/PrintDialog';
import "ol/ol.css"
import "ol-ext/dist/ol-ext.css"
import "./MapPanel.css"


const MapPanel = ()=>{

    const [map, setMap] = useState(null)

    let printControl = new PrintDialog({
         lang: 'fr' ,
       
        });

     printControl.set("marginSize",{
            xlarge: 20,
            large: 10,
            none : 0,
            small: 5
        } )  

    printControl.setSize('A4');


    printControl.on(['print', 'error'], function(e) {
        // Print success
        if (e.image) {
            console.log('image')
            // Save image as file
            e.canvas.toBlob(function(blob) {
              var name = (e.print.legend ? 'legend.' : 'map.')+e.imageType.replace('image/','');
            }, e.imageType, e.quality);
        
        } else {
          console.warn('No canvas to export');
        }
    })


    console.log(printControl._labels)
    console.log(printControl.getContentElement())
    
        
    useEffect(() => {
        let baseMap = new Map({
            target: 'map',
            layers: [
              new TileLayer({
                source: new XYZ({
                  url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
              })
            ],
            view: new View({
              center: [	273338.81, 6269594.37],
              zoom: 12
            })
          });
         baseMap.addControl(printControl)
        setMap(baseMap)
    }, [])

    return (
        <div id="map"></div>
    )
}

export default MapPanel