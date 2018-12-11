var myCenter1=new google.maps.LatLng(33.766800,-118.189450); 
	function initialize()
		{
			var mapProp = {
				center:myCenter1,
				zoom:12,                                
				mapTypeId:google.maps.MapTypeId.ROADMAP, 
				styles:
					[
						{
							"featureType": "water",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#c2c3bc"
								},
								{
									"lightness": 17
								}
							]
						},
						{
							"featureType": "landscape",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#d3d4cc"
								},
								{
									"lightness": 20
								}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#e9eae2"
								},
								{
									"lightness": 17
								}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "geometry.stroke",
							"stylers": [
								{
									"color": "#e9eae2"
								},
								{
									"lightness": 29
								},
								{
									"weight": 0.2
								}
							]
						},
						{
							"featureType": "road.arterial",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#e9eae2"
								},
								{
									"lightness": 18
								}
							]
						},
						{
							"featureType": "road.local",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#e9eae2"
								},
								{
									"lightness": 16
								}
							]
						},
						{
							"featureType": "poi",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#d3d4cd"
								},
								{
									"lightness": 21
								}
							]
						},
						{
							"featureType": "poi.park",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#d3d4cd"
								},
								{
									"lightness": 21
								}
							]
						},
						{
							"elementType": "labels.text.stroke",
							"stylers": [
								{
									"visibility": "on"
								},
								{
									"color": "#ffffff"
								},
								{
									"lightness": 16
								}
							]
						},
						{
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"saturation": 36
								},
								{
									"color": "#333333"
								},
								{
									"lightness": 40
								}
							]
						},
						{
							"elementType": "labels.icon",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "transit",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#f2f2f2"
								},
								{
									"lightness": 19
								}
							]
						},
						{
							"featureType": "administrative",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#fefefe"
								},
								{
									"lightness": 20
								}
							]
						},
						{
							"featureType": "administrative",
							"elementType": "geometry.stroke",
							"stylers": [
								{
									"color": "#fefefe"
								},
								{
									"lightness": 17
								},
								{
									"weight": 1.2
								}
							]
						}
					]
										  };
                    var map=new google.maps.Map(document.getElementById("map"),mapProp);
					var marker1=new google.maps.Marker({     
						position:myCenter1,
						});
					marker1.setMap(map);   
		}
google.maps.event.addDomListener(window, 'load', initialize);