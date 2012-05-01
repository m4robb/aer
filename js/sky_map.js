      var map;
      var _global_map_lon, _global_map_lat ;

      function init_sky_view(){
   
	      if (GBrowserIsCompatible()) {
              map = new GMap2(document.getElementById("sky_map"), {
              mapTypes: G_SKY_MAP_TYPES
              });
              map.setCenter(new GLatLng(0.0, 0.0), 3);
              map.addControl(new GLargeMapControl());
               
              var p = new GMercatorProjection(10);
              var mt = map.getMapTypes();

              navigator.geolocation.getCurrentPosition(function (loc) {
                map.panTo(new GLatLng(loc.coords.latitude, ra2lon(loc.coords.longitude)), 3);
                _global_map_lat = loc.coords.latitude;
                _global_map_lon = loc.coords.longitude;
                map.setZoom(2);
               document.getElementById("sky_map").style.display="none"
               document.getElementById("sky_map").style.left="0px"
              }, function () {
                console.log("error, couldn't get locations");
              });
            }
         
          }
   
    
      function ra2lon(ra) {
        var lon = 180 - ra;
        return lon;
      }
      
     function move_map(){
     	_global_map_lon+= .001
     	console.log(_global_map_lon)
	    map.panTo(new GLatLng(_global_map_lat, ra2lon(_global_map_lon)));
	    requestAnimationFrame( move_map );
	   }

      function Pan(lat, long) {
      	
        map.panTo(new GLatLng(lat, ra2lon(long)));
      }
      
      function rePan(lat, long) {
      	_global_map_lon = long
      	_global_map_lat = lat;
        map.panTo(new GLatLng(lat, ra2lon(long)));
      }