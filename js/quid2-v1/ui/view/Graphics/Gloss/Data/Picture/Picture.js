goog.provide('quid2.ui.view.Graphics.Gloss.Data.Picture.Picture');
goog.require('quid2');

quid2.ui.view.Graphics.Gloss.Data.Picture.Picture = function(area,obj) {

  var canvas = $('<canvas width="500" height="500" style="border:solid black 1px\"/>');
  area.empty().append(canvas);

  var q = quid2;

  // Copyright (c)2011, Chris Smith <cdsmith@gmail.com>
  // MIT license -- gloss-web package
  function displayInCanvas (c, pic)
{
    //if (ctx == null) ctx = c.getContext("2d");
    if (! c.getContext) {
      area.text("Sorry, this browser doesn't support the display of this kind of graphics. Why not upgrading to a more recent browser?");
      return;
    };

    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,500,500);
    ctx.save();
    ctx.translate(250, 250);
    ctx.scale(1, -1);
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    ctx.lineWidth = 0;
    ctx.font = "100px Times Roman";
    display(ctx, pic, 1, 0, 0, 1, 0, 0);
    ctx.restore();
}

function display(ctx, pic, a, b, c, d, e, f)
{
    if (pic == null)
    {
        // do nothing
    }
    else if (pic instanceof Array)
    {
        var i;
        for (i = 0; i < pic.length; i++)
        {
            display(ctx, pic[i], a, b, c, d, e, f);
        }
    }
    else if (pic.t == "c")
    {
        ctx.save();
        ctx.transform(a, b, c, d, e, f);
        ctx.beginPath();
        ctx.arc(0, 0, pic.r, 0, 2 * Math.PI);
        ctx.restore();
        ctx.stroke();
    }
    else if (pic.t == "p")
    {
        if (pic.p.length > 0)
        {
            ctx.save();
            ctx.transform(a, b, c, d, e, f);
            ctx.beginPath();
            ctx.moveTo(pic.p[0].x, pic.p[0].y);
            var i;
            for (i = 1; i < pic.p.length; i++)
            {
                ctx.lineTo(pic.p[i].x, pic.p[i].y);
            }
            ctx.restore();
            ctx.fill();
        }
    }
    else if (pic.t == "l")
    {
        if (pic.p.length > 0)
        {
            ctx.save();
            ctx.transform(a, b, c, d, e, f);
            ctx.beginPath();
            ctx.moveTo(pic.p[0].x, pic.p[0].y);
            var i;
            for (i = 1; i < pic.p.length; i++)
            {
                ctx.lineTo(pic.p[i].x, pic.p[i].y);
            }
            ctx.restore();
            ctx.stroke();
        }
    }
    else if (pic.t == 'h')
    {
        if (pic.w == 0)
        {
            pic.t = 'c';
            display(ctx, pic, a, b, c, d, e, f);
        }
        else
        {
            ctx.save();
            ctx.transform(a, b, c, d, e, f);
            ctx.lineWidth = pic.w;
            ctx.beginPath();
            ctx.arc(0, 0, pic.r, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.restore();
        }
    }
    else if (pic.t == 't')
    {
        ctx.save();
        ctx.transform(a, b, c, d, e, f);
        ctx.scale(1,-1);
        ctx.fillText(pic.c, 0, 0);
        ctx.restore();
    }
    else if (pic.t == 'z')
    {
        var str = "rgba("
            + pic.r + "," + pic.g + "," + pic.b + "," + pic.a + ")";
        ctx.save();
        ctx.strokeStyle = str;
        ctx.fillStyle = str;
        display(ctx, pic.p, a, b, c, d, e, f);
        ctx.restore();
    }
    else if (pic.t == 'x')
    {
        display(ctx, pic.p,
            a, b, c, d,
            a * pic.x + c * pic.y + e,
            b * pic.x + d * pic.y + f);
    }
    else if (pic.t == 'r')
    {
        var th = Math.PI * pic.r / 180;
        display(ctx, pic.p,
             a * Math.cos(th) + c * Math.sin(th),
             b * Math.cos(th) + d * Math.sin(th),
            -a * Math.sin(th) + c * Math.cos(th),
            -b * Math.sin(th) + d * Math.cos(th),
            e, f);
    }
    else if (pic.t == 's')
    {
        display(ctx, pic.p,
            pic.x * a, pic.x * b,
            pic.y * c, pic.y * d,
            e, f);
    }
    else if (pic.t == 'b')
    {
        ctx.save();
        ctx.transform(a, b, c, d, e, f);
        var img = new Image(pic.c);
        ctx.drawImage(img,
            -img.naturalWidth / 2, -pic.naturalHeight / 2,
            pic.naturalWidth, pic.naturalHeight);
        ctx.restore();
    }
}

  function color(v) {return Math.round(v.value*255);}

  function codePath(path) {return path.value.map(function(p){return {x:p.value[0].value,y:p.value[1].value};});}

  function code(obj) {
    function blank() {return null;}

    function polygon(path) {
      return {t:"p",p:codePath(path)};
    };

    function line(path) {
      return {t:"l",p:codePath(path)};
    }
    function circle(r) {return {t:"c",r:r.value};}
    function thickCircle(r,w) {return {t:"h",r:r.value,w:w.value};}
    function text(t) {return {t:"t",c:t.value};}
    function bitmap(w,h,bytes) {throw "Bitmap is unsupported";}
    function color (cl,p) {
      var m = cl.match(["r","g","b","a"]);
      return {t:"z",r:color(m.r),g:color(m.g),b:color(m.b),a:color(m.a),p:code(p)};}
    function translate(x,y,p) {
      return {t:"x",x:x.value,y:y.value,p:code(p)};
    }
    function rotate(r,p) {
      return {t:"r",r:r.value,p:code(p)};
    }
    function scale(x,y,p) {
      return {t:"s",x:x.value,y:y.value,p:code(p)};
    }
    function pictures(pics) {
      return pics.value.map(code);
    }
    return obj.match(blank,polygon,line,circle,thickCircle,text,bitmap,color,translate,rotate,scale,pictures);
  };

  var picture = code(obj);
  displayInCanvas(canvas.get(0),picture);
};
