var width = window.innerWidth;
var height = window.innerHeight;
function download_image(uri,name){
	var link=document.createElement('a');
	link.download = name;
	link.href=uri;document.body.appendChild(link);
    link.click();
        document.body.removeChild(link);
        delete link;
      }

   
	  
	    document.getElementById('savejpeg').addEventListener('click',function() {
          var dataURL = stage.toDataURL();
          download_image(dataURL, 'stage.jpeg');
        },
        false
      );
	        document.getElementById('savepng').addEventListener('click',function() {
          var dataURL = stage.toDataURL();
          download_image(dataURL, 'stage.PNG');
        },
        false
      );



      var stage = new Konva.Stage({
        container: 'container',
        width: 800,
        height: 600,
      });

      
	var layer = new Konva.Layer();
	stage.getContainer().style.border='5px solid black';

//Draw circle and transformation
 document.getElementById('cir').addEventListener('click',function(){
      var tr7 = new Konva.Transformer();
	  var circle = new Konva.Circle({
        x: 650 ,
        y: 275 ,
        radius: 70,
        fill: '#869BDB',
        stroke: 'black',
        strokeWidth: 4,
		draggable:true
      });
	  	  
      // add the shape to the layer
      layer.add(circle);
	  // add the layer to the stage
      stage.add(layer);
	   layer.add(tr7);
	  tr7.nodes([circle]);
	  layer.draw();
	  circle.on('transformstart', function () {
        console.log('transform start');
      });
	  circle.on('transformend', function () {
        console.log('transform end');
      });
	  
 },false
 );
  var tr7 = new Konva.Transformer();
	  var circle = new Konva.Circle({
        x: 650 ,
        y: 275 ,
        radius: 70,
        fill: '#C3EDED',
        stroke: 'black',
        strokeWidth: 4,
		draggable:true
      });
	  	  
      // add the shape to the layer
      layer.add(circle);
	  // add the layer to the stage
      stage.add(layer);
	   layer.add(tr7);
	  tr7.nodes([circle]);
	  layer.draw();
	  circle.on('transformstart', function () {
        console.log('transform start');
      });
	  circle.on('transformend', function () {
        console.log('transform end');
      });
	  	  
//Draw square and transformation  
document.getElementById('sq').addEventListener('click',function(){
 
	  var tr6 = new Konva.Transformer();
	  var square = new Konva.Rect({
	  x:250,
	  y:85,
	  width: 100,
	  height:100,
	  fill:'#869BDB',
	  stroke:'black',
	  strokeWidth:4,
		draggable:true
	  });
	  layer.add(square);
	  stage.add(layer);
	   layer.add(tr6);
	  tr6.nodes([square]);
	  layer.draw();
	  square.on('transformstart', function () {
        console.log('transform start');
      });
	  square.on('transformend', function () {
        console.log('transform end');
      });
},false);
  var tr6 = new Konva.Transformer();
	  var square = new Konva.Rect({
	  x:250,
	  y:85,
	  width: 100,
	  height:100,
	  fill:'#C3EDED',
	  stroke:'black',
	  strokeWidth:4,
		draggable:true
	  });
	  layer.add(square);
	  stage.add(layer);
	   layer.add(tr6);
	  tr6.nodes([square]);
	  layer.draw();
	  square.on('transformstart', function () {
        console.log('transform start');
      });
	  square.on('transformend', function () {
        console.log('transform end');
      });


//draw ellipse and transformation
document.getElementById('ell').addEventListener('click',function(){
 
	  var tr5 = new Konva.Transformer();
	  var oval = new Konva.Ellipse({
	  x: 200,
	  y: 250,
	  radiusX: 100,
	  radiusY:50,
	  fill: '#869BDB',
	  stroke:'black',
	  strokeWidth:4,
	  draggable:true
	  });
	  layer.add(oval);
	  stage.add(layer);
	   layer.add(tr5);
	  tr5.nodes([oval]);
	  layer.draw();
	  oval.on('transformstart', function () {
        console.log('transform start');
      });
	  oval.on('transformend', function () {
        console.log('transform end');
      });
},false);
	
	  var tr5 = new Konva.Transformer();
	  var oval = new Konva.Ellipse({
	  x: 200,
	  y: 250,
	  radiusX: 100,
	  radiusY:50,
	  fill: '#C3EDED',
	  stroke:'black',
	  strokeWidth:4,
	  draggable:true
	  });
	  layer.add(oval);
	  stage.add(layer);
	   layer.add(tr5);
	  tr5.nodes([oval]);
	  layer.draw();
	  oval.on('transformstart', function () {
        console.log('transform start');
      });
	  oval.on('transformend', function () {
        console.log('transform end');
      });  
	  
//draw line and transformation
document.getElementById('lin').addEventListener('click',function(){
 
	  var tr4 = new Konva.Transformer();
	  var line = new Konva.Line({
	  points:[240,350,320,500],
	  stroke:'black',
	  strokeWidth: 5,
	  draggable:true
	 });
	 layer.add(line);
	 stage.add(layer);
	  layer.add(tr4);
	  tr4.nodes([line]);
	  layer.draw();
	  line.on('transformstart', function () {
        console.log('transform start');
      });
	  line.on('transformend', function () {
        console.log('transform end');
      });
	 
},false);
	 var tr4 = new Konva.Transformer();
	  var line = new Konva.Line({
	  points:[240,350,320,500],
	  stroke:'black',
	  strokeWidth: 5,
	  draggable:true
	 });
	 layer.add(line);
	 stage.add(layer);
	  layer.add(tr4);
	  tr4.nodes([line]);
	  layer.draw();
	  line.on('transformstart', function () {
        console.log('transform start');
      });
	  line.on('transformend', function () {
        console.log('transform end');
      });
	 
//draw polyline and transformation
document.getElementById('pl').addEventListener('click',function(){
 
	  var tr3 = new Konva.Transformer();
	  var polyline = new Konva.Line({
	  points:[450,350,450,350,500,350,500,400,550,400,550,450,600,450,600,450,600,500],
	  stroke:'gray',
	  strokeWidth:5,
	  draggable:true
	  });
	  layer.add(polyline);
	  stage.add(layer);
	   layer.add(tr3);
	  tr3.nodes([polyline]);
	  layer.draw();
	  polyline.on('transformstart', function () {
        console.log('transform start');
      });
	  polyline.on('transformend', function () {
        console.log('transform end');
      });
},false);

  var tr3 = new Konva.Transformer();
	  var polyline = new Konva.Line({
	  points:[450,350,450,350,500,350,500,400,550,400,550,450,600,450,600,450,600,500],
	  stroke:'gray',
	  strokeWidth:5,
	  draggable:true
	  });
	  layer.add(polyline);
	  stage.add(layer);
	   layer.add(tr3);
	  tr3.nodes([polyline]);
	  layer.draw();
	  polyline.on('transformstart', function () {
        console.log('transform start');
      });
	  polyline.on('transformend', function () {
        console.log('transform end');
      });

//draw polygon and transformation	
document.getElementById('pg').addEventListener('click',function(){
   
	  var tr2 = new Konva.Transformer();
	  var polygon = new Konva.Line({
	   points: [100,350,40,420,80,520,150,520,200,420],
        fill: '#869BDB',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
		draggable:true
      });
	  layer.add(polygon);
	  stage.add(layer);
	  layer.add(tr2);
	  tr2.nodes([polygon]);
	  layer.draw();
	  polygon.on('transformstart', function () {
        console.log('transform start');
      });
	  polygon.on('transformend', function () {
        console.log('transform end');
      });
	  
},false);
  var tr2 = new Konva.Transformer();
	  var polygon = new Konva.Line({
	   points: [100,350,40,420,80,520,150,520,200,420],
        fill: '#C3EDED',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
		draggable:true
      });
	  layer.add(polygon);
	  stage.add(layer);
	  layer.add(tr2);
	  tr2.nodes([polygon]);
	  layer.draw();
	  polygon.on('transformstart', function () {
        console.log('transform start');
      });
	  polygon.on('transformend', function () {
        console.log('transform end');
      });
	  	  

//draw triangle and transformation
document.getElementById('tri').addEventListener('click',function(){
 
	 
	  var tr1 = new Konva.Transformer();
	  var triangle = new Konva.Line({
	  points : [450,200,600,200,525,90],
	   fill: '#869BDB',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
		draggable:true,
      });
	  layer.add(triangle);
	  stage.add(layer);
	  layer.add(tr1);
	  tr1.nodes([triangle]);
	  layer.draw();
	  triangle.on('transformstart', function () {
        console.log('transform start');
      });
	   triangle.on('transformend', function () {
        console.log('transform end');
      });
},false);

	 
	  var tr1 = new Konva.Transformer();
	  var triangle = new Konva.Line({
	  points : [450,200,600,200,525,90],
	   fill: '#C3EDED',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
		draggable:true,
      });
	  layer.add(triangle);
	  stage.add(layer);
	  layer.add(tr1);
	  tr1.nodes([triangle]);
	  layer.draw();
	  triangle.on('transformstart', function () {
        console.log('transform start');
      });
	   triangle.on('transformend', function () {
        console.log('transform end');
      });	  
//draw rectangle and transformation
document.getElementById('rect').addEventListener('click', function(){
	
 var tr = new Konva.Transformer();
	  var rect1 = new Konva.Rect({
	  x:60,
	  y:120,
	  width:100,
	  height: 50,
	  fill: '#869BDB',
	  stroke:'black',
	  strokeWidth:4,
	  draggable:true,
	  });
	  layer.add(rect1);
	  stage.add(layer);
	  layer.add(tr);
	  tr.nodes([rect1]);
	  layer.draw();
	  rect1.on('transformstart', function () {
        console.log('transform start');
      });
	  rect1.on('transformend', function () {
        console.log('transform end');
      });
},false);	

	
 var tr = new Konva.Transformer();
	  var rect1 = new Konva.Rect({
	  x:50,
	  y:120,
	  width:100,
	  height: 50,
	  fill: '#C3EDED',
	  stroke:'black',
	  strokeWidth:4,
	  draggable:true,
	  });
	  layer.add(rect1);
	  stage.add(layer);
	  layer.add(tr);
	  tr.nodes([rect1]);
	  layer.draw();
	  rect1.on('transformstart', function () {
        console.log('transform start');
      });
	  rect1.on('transformend', function () {
        console.log('transform end');
      }); 