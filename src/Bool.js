UIL.Bool = function(obj){

    UIL.Proto.call( this, obj );

    this.value = obj.value || false;

    this.c[2] = UIL.element('UIL', 'path','position:absolute; left:100px; top:2px; pointer-events:auto; cursor:pointer; border:solid 1px rgba(0,0,0,0.2);',{width:14, height:14, d:'M 0 0 L 0 14 14 14 14 0 0 0 Z', 'stroke-width':1, stroke:'none', fill:'rgba(0,0,0,0.2)' });
    this.c[3] = UIL.element('UIL', 'path','position:absolute; left:100px; top:2px; pointer-events:none;',{width:16, height:16, d:'M 3 9 L 5 12 13 4', 'stroke-width':2, stroke:'#e2e2e2', fill:'none', 'stroke-linecap':'butt' });

    if(!this.value) this.c[3].style.display = 'none';

    this.f[0] = function(e){
        if(this.value){
            this.value = false;
            this.c[3].style.display = 'none';
            UIL.setSVG(this.c[2], 'fill','rgba(0,0,0,0.2)');
        } else {
            this.value = true;
            this.c[3].style.display = 'block';
            UIL.setSVG(this.c[2], 'fill','rgba(0,0,0,0.4)');
        }
        this.callback( this.value );
    }.bind(this);

    this.c[2].onclick = this.f[0];

    this.init();
}

UIL.Bool.prototype = Object.create( UIL.Proto.prototype );
UIL.Bool.prototype.constructor = UIL.Bool;