/// <reference path="../../../typings/googlemaps/google.maps.d.ts" />

import {Component,AfterViewInit} from '@angular/core';

import {MyBootstrapModal} from "../../shared/myLib/BootstrapModal/BootstrapModal";
import {ModalDialogInstance} from "../../shared/myLib/BootstrapModal/ModalDialogInstance";
import {ISendActionListener} from "../sendActionToClients/sendActionToClients";
import Marker = google.maps.Marker;




@Component({
  selector: 'modal-content-map',
  templateUrl:  './Map.html',

})
export class CustMap implements  AfterViewInit,ISendActionListener {




  mapData: any;
  constructor(private dialog:ModalDialogInstance, private modal:MyBootstrapModal ) {

    this.mapData = dialog.config.forAny;
   // this.onPageLoadedx();
  }



    mapEle;
  map;
  lat_lng;
  latlngbounds;
  drawingManager;
  rectangles=[];
  circles=[];

  ngAfterViewInit()
  {

        this.mapEle = document.getElementById('map');

      var mapProp = {
        zoom: 30,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
          // maxZoom: 15
      };

        this.map = new google.maps.Map(this.mapEle, mapProp );

    //var image = {
    //  url: 'img/tedata2.jpg',
    //  size: new google.maps.Size(71, 71),
    //  origin: new google.maps.Point(0, 0),
    //  anchor: new google.maps.Point(17, 34),
    //  scaledSize: new google.maps.Size(25, 25)
    //};
      this.lat_lng = new Array();
      this.latlngbounds = new google.maps.LatLngBounds();



      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        this.mapEle.classList.add('show-map');
      });

    this.map.setCenter(this.latlngbounds.getCenter());
    this.map.fitBounds(this.latlngbounds);

      this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [

          google.maps.drawing.OverlayType.CIRCLE,
          google.maps.drawing.OverlayType.RECTANGLE
        ]
      },
      markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
      circleOptions: {
        // fillColor: '#ffff00',
        fillOpacity: .5,
        strokeWeight: 5,
        clickable: false,
        editable: true,
        zIndex: 1
      }
    } as any);



    var that=this;
    google.maps.event.addListener(this.drawingManager, 'rectanglecomplete', function(rectangle) {
      that.rectangles.push(rectangle)
     // var myLatlng = new google.maps.LatLng(30.05519,  30.95801);

    // var xx= rectangle.getBounds().contains(myLatlng)
 //  var xxx=   that.rectangles[0].getBounds().contains(myLatlng)
     // "{ "device_database_id": 1, "latitude": "30.05519", "longitude": "30.95801" }"
      //this.drawingManager.setDrawingMode(null);


    })
    google.maps.event.addListener(this.drawingManager, 'circlecomplete', function(circle) {
      that.circles.push(circle)
      // var myLatlng = new google.maps.LatLng(30.05519,  30.95801);
      //
      // var xx= circle.getBounds().contains(myLatlng)
      //this.drawingManager.setDrawingMode(null);


    })
    this.drawingManager.setMap(this.map);


    //***********ROUTING****************//
    var x=true;
      if(x==true)
      {
        return;
      }
    //Initialize the Path Array
    var path = new google.maps.MVCArray();

    //Initialize the Direction Service
    var service = new google.maps.DirectionsService();

    //Set the Path Stroke Color
    var poly = new google.maps.Polyline({ map: this.map, strokeColor: '#4986E7' });

    //Loop and Draw Path Route between the Points on MAP
    for (var i = 0; i < this.lat_lng.length; i++) {
      if ((i + 1) < this.lat_lng.length) {
        var src = this.lat_lng[i];
        var des = this.lat_lng[i + 1];
        path.push(src);
        poly.setPath(path);
        service.route({
          origin: src,
          destination: des,
          travelMode: (google.maps as any).DirectionsTravelMode.DRIVING
        }, function (result, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            for (var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
              path.push(result.routes[0].overview_path[i]);
            }
          }
        });
      }
    }



  }

//{device_info:data,customer_map_info:result}
  tack_new_customer_map_info(json_object:any) {

    var myLatlng = new google.maps.LatLng(json_object.customer_map_info.latitude, json_object.customer_map_info.longitude);

    this.lat_lng.push(myLatlng);
    let infoWindow = new google.maps.InfoWindow({
      content: `<h5>${JSON.stringify(json_object.device_info)}</h5>`
    });

    let marker:Marker;
    if(json_object.device_info && json_object.device_info != null)  {

       marker = new google.maps.Marker({
        position: myLatlng,
        map: this.map,
        title: json_object.device_info.customer_id,
        animation: google.maps.Animation.DROP,
        draggable: false,
        json_object: json_object.device_info.customer_id
        // icon:image
      } as any);
    }
    else {
      marker = new google.maps.Marker({
        position: myLatlng,
        map: this.map,
        //title: json_object.device_info.customer_id,
        animation: google.maps.Animation.DROP,
        draggable: false,
       // json_object: json_object.device_info.customer_id
        // icon:image
      });
    }

    this.latlngbounds.extend((marker as any).position );

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });

   // marker.addListener('dragend',function(event) {
      // console.log(  marker.Bus_Route_Id);
      //  document.getElementById('lat').value = event.latLng.lat();
      // document.getElementById('lng').value = event.latLng.lng();
    //});
    
    this.map.setCenter(this.latlngbounds.getCenter());
    this.map.fitBounds(this.latlngbounds);
  }

  apply_the_filter()
  {
    this.notify_new_shapes();
    this.dialog.close();
   // var isWithinRectangle = rectangle.getBounds().contains(point);
   // this.drawingManager
    //var ne = rectangle.getBounds().getNorthEast();
   // var sw = rectangle.getBounds().getSouthWest();
  }


  clear_shapes()
  {
    for (var i=0; i < this.rectangles.length; i++)
    {
      this.rectangles[i].setMap(null);
    }

    for (var i=0; i < this.circles.length; i++)
    {
      this.circles[i].setMap(null);
    }
    this.rectangles = [];
    this.circles=[];
  }



  listeners:Array<IshapesListener>  = Array<IshapesListener>();

  addListener(listener:IshapesListener ) {
    this.listeners.push(listener);
  }


  notify_new_shapes() {
    for(var i=0;i<this.listeners.length;i++)

      this.listeners[i].tack_shapes(this.rectangles,this.circles);

  }

}

export interface IshapesListener {
  tack_shapes(rectangles:any,circles:any);
}