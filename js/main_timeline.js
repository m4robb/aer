// GLOBAL //
var fadeSpeed = 500,playgl=true;
var audio_output

function init_endpiece(){
		var audPop = Popcorn("#video")
.code({
	start: 15,
	end: 21,
	onStart: function( options ) {
  $('#video-wrap').fadeOut(1000, function(){    
  cassini_audio.volume=0.1  
  build_sky()
  })
    }		
	})
}
function init_timeline() {

	var aud = Popcorn("#audio")	
	audio_output = document.getElementById( "audio" );
	video = document.getElementById( "video" );
	videow= document.getElementById( "video-wrap" );
	
	
	
	
	
	
	vidTimeline();
	
	function popText(_start, _end, _string, _target) {	
			aud.text({
			start: _start,
			end: _end,
			text: _string,
			target: _target
		});	
		
	}
		
	//popText(10, 20, "This is some text that should show up second.", "panel-1");
	//popText(1, 10, "the beginning", "panel-2");
//	popText(21, 40, "This will appear last.", "panel-3");

//aud.play();

//}, false);



function vidTimeline() {
	
	var html;
	
	function setHTML(vidTitle) {		
		html += '<source src="video/'+vidTitle+'.webm"  type="video/webm" />';		
	}


	var audPop = Popcorn("#audio")
.code({
	start: 1,
	end: 15,
	onStart: function( options ) {
      cassini_audio.volume=0.03
      
     // $('#webgl_hider').fadeIn(1000, function(){
       //playgl=false
			//});
    }		
	})
.code({
	start: 3,
	end: 10,
	onStart: function( options ) {
		

 // $('#sky_map').fadeIn(1000)
//move_map()
			video.volume=0
	    video.src="video/walk_to_building.webm"	
			video.load();
			$('#video').fadeIn(1000, function(){
				video.play();
			});
			
},
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  })
		}				
	})	
.code({
	start: 14,
	end: 24,
	onStart: function( options ) {
			video.src="video/telescope_move_red.webm"
					
			video.load();
			$('#video').fadeIn(1500, function(){
				video.play();
			});
    },
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  }) 
		     	}
	})
	
.code({
	start: 27,
	end: 42,
	onStart: function( options ) {
			video.src="video/door_opening.webm"
			video.load();
			$('#video').fadeIn(1500, function(){
				video.play();
			});
    },
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  }) 
		     	}
	})	

.code({
	start: 45,
	end: 65,
	onStart: function( options ) {
			video.src="video/world_moves_edit.webm"	
			$('#video').fadeIn(1500, function(){
			video.play();
			
				
			});
    },
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  }) 
		     	}
	})

.code({
	start: 67,
	end: 76,
	onStart: function( options ) {
			video.src="video/sunrise_02.webm"	
			$('#video').fadeIn(1500, function(){
			video.play();
			
				
			});
    },
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  }) 
		     	}
	})		

.code({
	start: 79,
	end: 88,
	onStart: function( options ) {
			video.src="video/sunrise_01.webm"	
			$('#video').fadeIn(1500, function(){
			video.play();
			
				
			});
    },
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  }) 
		     	}
	})			

.code({
	start: 90,
	end: 110,
	onStart: function( options ) {
			video.src="video/sun_pan.webm"	
			$('#video').fadeIn(1500, function(){
			video.play();
			
				
			});
    },
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  }) 
		     	}
	})

.code({
	start: 112,
	end: 127,
	onStart: function( options ) {
			video.src="video/walk_through_canyon.webm"	
			$('#video').fadeIn(1500, function(){
			video.play();
			
				
			});
    },
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  }) 
		     	}
	})	

.code({
	start: 130,
	end: 138,
	onStart: function( options ) {
			video.src="video/pan_bridge.webm"	
			$('#video').fadeIn(1500, function(){
			video.play();
			
				
			});
    },
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  }) 
		     	}
	})

.code({
	start: 140,
	end: 153,
	onStart: function( options ) {
			video.src="video/mirror_landscape.webm"	
			$('#video').fadeIn(1500, function(){
			video.play();
			
				
			});
    },
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  }) 
		     	}
	})

.code({
	start: 156,
	end: 169,
	onStart: function( options ) {
			video.src="video/telescope_point_up.webm"	
			$('#video').fadeIn(1500, function(){
			video.play();
			
				
			});
    },
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  }) 
		     	}
	})	


.code({
	start: 172,
	end: 180,
	onStart: function( options ) {
			video.src="video/sun_and_smog.webm"	
			$('#video').fadeIn(1500, function(){
			video.play();
			
				
			});
    },
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  }) 
		     	}
	})	

									
.code({
	start: 183,
	end: 190,
	onStart: function( options ) {
			video.src="video/moon.webm"
					
			video.load();
			$('#video').fadeIn(1000, function(){
				video.play();
			});
    },
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  }) 
		     	}
	})

.code({
	start: 190,
	end: 325,
	onStart: function( options ) {
			video.src="video/VLA.webm"
					
			video.load();
			$('#video').fadeIn(1000, function(){
				init_endpiece()
				video.play();
			});
    },
	    onEnd: function( options ) {
		    $("#video").fadeOut(2000, function(){
		  	video.pause();
		  }) 
		     	}
	})
		
.code({
	start: 199.8,
	end: 325,
	onStart: function( options ) {
audio_output.volume = 0
    }
	})			
	
}
}