let c = document.getElementById('canva');
        let ctx = c.getContext('2d');
        let color = document.getElementById('color');
        let ismouseclicked = false;

        color.addEventListener('change',()=>
            {
            console.log(color.value);
        });

        c.addEventListener('mousedown',(event)=>
        {
            console.log(event);
            ctx.beginPath();
            ismouseclicked = true;
        });

        c.addEventListener('mouseup',()=>
            {
            ismouseclicked = false;
        });

        c.addEventListener('mousemove',(event)=>
        {
            if (ismouseclicked)
                {
                console.log('mouse move event');
                ctx.lineTo(event.offsetX, event.offsetY);
                ctx.moveTo(event.offsetX, event.offsetY);
                ctx.stroke();
                ctx.lineCap ='round';
                ctx.lineWidth = 3;
                ctx.strokeStyle = color.value;
            }
        });

        const downloadButton = document.getElementById('downloadButton');
        downloadButton.addEventListener('click',()=>
        {
            let dataURL = c.toDataURL('image/jpg');
            let link = document.createElement('a');
            link.href = dataURL;
            link.download ='my-diagram.jpg';
            link.click();
        });