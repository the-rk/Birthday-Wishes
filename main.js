var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg',function(Img) {
        block_imge_object = Img;
        block_imge_object.scaleToWidth(700);
        block_imge_object.scaleToHeight(510);
        block_imge_object.set({
            top:0,
            left:0
        });
        canvas.add(block_imge_object);
    });
	
}

function playSound(){
	x.play();
}
