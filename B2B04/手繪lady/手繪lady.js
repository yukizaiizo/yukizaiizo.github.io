(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"手繪lady_atlas_1", frames: [[0,0,623,434],[0,436,278,280],[581,467,153,408],[625,0,180,465],[280,669,192,322],[0,718,231,138],[280,436,299,231],[474,877,312,103],[474,669,54,128]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7660,5107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiKAUjMAAAgpFMBEVAAAMAAAApFg");
	mask.setTransform(218.725,131.525);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.0571,0.0515);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,437.4,263), null);


(lib.手握筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_12
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(218.7,131.5,1,1,0,0,0,218.7,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手握筆, new cjs.Rectangle(0,0,437.5,263.1), null);


// stage content:
(lib.手繪lady = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_8
	this.instance = new lib.手握筆();
	this.instance.setTransform(392.05,348.05,1,1,0,0,0,218.7,131.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131).to({_off:false},0).wait(1).to({y:359.05},0).wait(1).to({x:402.05,y:367.5},0).wait(1).to({x:409.05,y:372.5},0).wait(1).to({x:406.05,y:384.5},0).wait(1).to({x:403.05,y:391.5},0).wait(1).to({x:399.05,y:408.5},0).wait(3));

	// 圖層_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_131 = new cjs.Graphics().p("AgRB6QgngFgcgaQgbgagJgmQgIgmAOgjQAPgjAhgVQAhgWAlACQAsABAjAhQAjAgAFAtQAEAkgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");
	var mask_graphics_132 = new cjs.Graphics().p("AglCsQgngFgcgaQgbgagJgmQgIgnAOgjQALgZAVgSQgDgdALgbQAPgjAhgVQAhgWAlACQAsABAjAhQAjAgAFAtQAEAlgTAiQgKASgPAOQADAigSAiQgTAigiARQgZANgbAAQgJAAgLgCg");
	var mask_graphics_133 = new cjs.Graphics().p("AgRDyQgngFgcgaQgbgagJgmQgIgnAOgjIAEgIQgWgZgIghQgIgmAOgjQALgaAVgSQgDgdALgbQAPgjAhgVQAhgWAlACQAsABAjAhQAjAgAFAtQAEAlgTAjQgKASgPAOQADAggRAgQAeAeAEApQAEAlgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");
	var mask_graphics_134 = new cjs.Graphics().p("AAqEGQgngFgbgaIgHgHQgMAAgOgCQgngFgcgaQgbgagJgmQgIgnAOgjIAEgIQgWgZgIggQgIgnAOgjQALgaAVgSQgDgdALgbQAPgjAhgVQAhgWAmACQArABAjAhQAjAgAFAtQAEAlgTAjQgKASgPAOQADAhgRAfIABAAIAOAAQAsABAjAhQAjAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_graphics_135 = new cjs.Graphics().p("AA+EzQgngFgbgaQgbgagJgmQgCgNgBgMIgBgBIgHgHQgMAAgOgCQgngFgcgaQgbgagJgmQgIgnAOgjIAEgIQgWgYgIghQgIgnAOgjQALgaAVgSQgDgdALgbQAPgjAhgVQAhgWAmACQArABAjAhQAjAgAFAtQAEAlgTAjQgKASgPAOQADAhgRAgIABAAIAOAAQAsABAjAgQAjAgAFAtIABANQAiAgAFAtQAEAlgTAjQgTAigiARQgZANgcAAQgJAAgLgCg");
	var mask_graphics_136 = new cjs.Graphics().p("AgRFbQgngFgcgaQgbgagJgmQgIgnAOgjQALgYATgSQgjgHgZgXQgbgagJgmQgIgnAOgiIAEgIQgWgZgIghQgIgnAOgjQALgaAVgSQgDgdALgbQAPgjAhgVQAhgWAmACQArABAjAhQAjAgAFAtQAEAlgTAjQgKASgPAOQADAhgRAgIABAAIAOAAQAsABAjAhQAjAgAFAsIABANQAiAgAFAtQAEAlgTAjQgTAigiARQgJAEgJADQgDALgGALQgTAigiARQgZANgcAAQgIAAgLgCg");
	var mask_graphics_137 = new cjs.Graphics().p("AgRGrQgngFgcgaQgbgagJgmQgIgnAOgjQAIgSAMgPQgTgXgHgeQgIgnAOgjQALgYATgSQgjgHgZgXQgbgagJglQgIgnAOgjIAEgIQgWgZgIghQgIgnAOgjQALgaAVgSQgDgdALgbQAPgjAhgVQAhgWAmACQArABAjAhQAjAgAFAtQAEAlgTAjQgKASgPAOQADAhgRAgIABAAIAOAAQAsABAjAhQAjAgAFAtIABANQAiAfAFAtQAEAlgTAjQgTAigiARQgJAEgJADQgDALgGALQgGALgJAKQAaAdAEAmQAEAlgTAjQgTAigiARQgZANgcAAQgIAAgLgCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(131).to({graphics:mask_graphics_131,x:312.7027,y:280.0484}).wait(1).to({graphics:mask_graphics_132,x:310.7027,y:285.0484}).wait(1).to({graphics:mask_graphics_133,x:310.7027,y:292.0484}).wait(1).to({graphics:mask_graphics_134,x:314.7027,y:294.0484}).wait(1).to({graphics:mask_graphics_135,x:316.7027,y:298.5484}).wait(1).to({graphics:mask_graphics_136,x:316.7027,y:302.5484}).wait(1).to({graphics:mask_graphics_137,x:316.7027,y:310.5484}).wait(3));

	// lady11
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(131).to({_off:false},0).wait(9));

	// 圖層_6
	this.instance_2 = new lib.手握筆();
	this.instance_2.setTransform(251.05,314.05,1,1,0,0,0,218.7,131.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(126).to({_off:false},0).wait(1).to({x:260.05,y:317.05},0).wait(1).to({x:258.05,y:329.05},0).wait(1).to({x:245.05,y:326.05},0).to({_off:true},1).wait(10));

	// 圖層_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_126 = new cjs.Graphics().p("AAABKQgZgBgVgRQgVgSgFgaQgCgMACgLQADgOAHgNQAOgWAagJQAZgJAYAKQAYAJANAYQAOAZgFAYQgFAZgVASQgVARgZAAIgBAAg");
	var mask_1_graphics_127 = new cjs.Graphics().p("AAiBPQgXgBgTgOQgNAFgOAAQgZgBgVgRQgVgSgFgaQgCgLACgMQADgOAHgNQAOgWAagJQAagJAYAKQAIAEAJAGIACgBQAagJAYAKQAYAJANAYQAOAZgFAYQgFAZgVASQgVARgZAAIgCAAg");
	var mask_1_graphics_128 = new cjs.Graphics().p("AAiCBQgZgBgUgRQgVgSgFgaQgCgMACgMQACgMAHgMIgHAAQgZgBgVgRQgVgRgFgaQgCgMACgMQADgOAHgNQAOgWAagJQAagJAYAKQAIAEAJAGIACgBQAagJAYAKQAYAJANAYQAOAZgFAZQgEAUgPAPQAGAGAEAIQAOAZgFAZQgFAZgVASQgVARgZAAIgCAAg");
	var mask_1_graphics_129 = new cjs.Graphics().p("AAnCBQgZgBgUgRQgIgHgGgIQgKADgKAAQgZgBgVgRQgVgSgFgaQgCgMACgMQADgNAHgNIAHgJQgFgJgCgLQgCgMACgMQADgOAHgNQAOgWAagJQAagJAYAKQAIAEAJAGIACgBQAagJAYAKQAYAJANAYQAOAZgFAZQgEAUgPAPQAGAGAEAIQAOAZgFAZQgFAZgVASQgVARgZAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(126).to({graphics:mask_1_graphics_126,x:165.6926,y:257.0568}).wait(1).to({graphics:mask_1_graphics_127,x:169.1926,y:257.5568}).wait(1).to({graphics:mask_1_graphics_128,x:169.1926,y:262.5568}).wait(1).to({graphics:mask_1_graphics_129,x:168.6926,y:262.5568}).wait(11));

	// lady10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(126).to({_off:false},0).wait(14));

	// 圖層_4
	this.instance_3 = new lib.手握筆();
	this.instance_3.setTransform(321.05,334,1,1,0,0,0,218.7,131.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(122).to({_off:false},0).wait(1).to({x:341.05},0).wait(1).to({x:365.05},0).to({_off:true},1).wait(15));

	// 圖層_3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_122 = new cjs.Graphics().p("AhNDCQg2gVgkgxQgkgxgEg6QgBgQABgPQACgXAHgXQAIgbAQgaQAhgyA4gZQA5gaA6AIQA7AJAvAoQAvApARA5QARA5gRA7QgRA8gtAoQgrAmg8ALQgTADgRAAQgoAAgkgPg");
	var mask_2_graphics_123 = new cjs.Graphics().p("AAHDqQgygUgjgtQgsABgogQQg2gVgkgxQgkgxgEg5QgBgQABgQQACgXAHgXQAIgbAQgaQAhgyA4gZQA5gaA7AIQA6AJAvAoQAQAOAMAPQASAAASACQA7AJAvAoQAvApARA5QARA4gRA8QgRA8gtAoQgrAmg8ALQgTADgSAAQgoAAgkgPg");
	var mask_2_graphics_124 = new cjs.Graphics().p("Ah1DqQgzgUgjgtQgsABgogQQg2gVgkgxQgkgxgEg5QgBgQABgQQACgXAHgXQAIgbAQgaQAhgyA4gZQA5gaA7AIQA7AJAvAoQAQAOAMAPQASAAASACQAgAFAeAPQAdghAqgTQA5gaA7AIQA7AJAvAoQAvApARA5QARA5gRA7QgRA8gtAoQgrAmg8ALQg8AKg1gWIgPgGQgJAKgKAJQgrAmg7ALQgTADgSAAQgoAAgkgPg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(122).to({graphics:mask_2_graphics_122,x:223.6875,y:271.029}).wait(1).to({graphics:mask_2_graphics_123,x:232.1875,y:275.029}).wait(1).to({graphics:mask_2_graphics_124,x:244.6875,y:275.029}).wait(16));

	// 下唇
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("AhhAjQgWgWgpggIgsgkQgIgIAAgGQA/gOALAWIAdADQAWAEAyAPQAuAOARADQAYAEAsgEIA8gGIAWgGQAYgDALASQAEAEgHAIIgWAVIgkAlQgdAYggAAQiSAAgogog");
	this.shape_1.setTransform(243.4083,274.6528);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(122).to({_off:false},0).wait(18));

	// 圖層_2
	this.instance_4 = new lib.手握筆();
	this.instance_4.setTransform(322.05,322.05,1,1,0,0,0,218.7,131.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(118).to({_off:false},0).wait(1).to({x:345.05,y:328.05},0).wait(1).to({x:358.05,y:335.05},0).to({_off:true},1).wait(19));

	// 圖層_1 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_118 = new cjs.Graphics().p("AhNDCQg2gVgkgxQgkgxgEg6QgBgQABgPQACgXAHgXQAIgbAQgaQAhgyA4gZQA5gaA6AIQA7AJAvAoQAvApARA5QARA5gRA7QgRA8gtAoQgrAmg8ALQgTADgRAAQgoAAgkgPg");
	var mask_3_graphics_119 = new cjs.Graphics().p("Ai7DMQg2gVgkgxQgkgxgEg6QgBgQABgPQACgXAHgXQAIgbAQgaQAhgyA4gZQA5gaA7AIQAiAFAeAQQARgOAWgJQA5gaA7AIQA7AJAvAoQAvApARA5QARA5gRA7QgRA8gtAoQgrAmg8ALQg8AKg1gWIgQgHQgmAeg0AJQgTADgSAAQgoAAgkgPg");
	var mask_3_graphics_120 = new cjs.Graphics().p("ABrDgQgngPgegeQgpABgngQIgQgHQgnAeg0AJQg8AKg1gWQg2gVgkgxQgkgxgEg6QgBgPABgQQACgXAHgXQAIgbAQgaQAhgyA4gZQA5gaA7AIQAiAFAeAQQASgOAWgJQA4gaA7AIQA7AJAvAoIAKAJQARAAARACQA7AJAvAoQAvApARA5QARA4gRA8QgRA8gtAoQgrAmg8ALQgTADgSAAQgoAAgkgPg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(118).to({graphics:mask_3_graphics_118,x:222.6875,y:266.029}).wait(1).to({graphics:mask_3_graphics_119,x:233.6875,y:265.029}).wait(1).to({graphics:mask_3_graphics_120,x:241.1875,y:267.029}).wait(20));

	// 上唇
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D60B2F").s().p("ACxBFIgWgLQgwgwgMAAQgmAEgVAAQgLAAgQgFQgPgFgLAAQgNAAg3AKIg1AKQggAPgogSQgCgDABgDQABgFAHgDQAwgUAmgUQBKgnAkAAQAGAAASAIQAUAHAJAAQAEAAAXgIQARgGARAHQAaALAhAmQAmAqAIAoQgGAGgKAAQgIAAgLgEg");
	this.shape_2.setTransform(243.3583,266.0226);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(118).to({_off:false},0).wait(22));

	// 圖層_29
	this.instance_5 = new lib.手握筆();
	this.instance_5.setTransform(372.05,417,1,1,0,0,0,218.7,131.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(109).to({_off:false},0).wait(1).to({x:352.05,y:428},0).wait(1).to({x:333.05,y:438},0).wait(1).to({x:312.05,y:448},0).wait(1).to({x:290.05,y:452},0).wait(1).to({x:269.05,y:458},0).wait(1).to({x:250.05,y:460},0).wait(1).to({x:236.05,y:461},0).to({_off:true},1).wait(23));

	// 圖層_28 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_109 = new cjs.Graphics().p("AgwCWQg3gSgdgtQgegsAFg4QAFg6AlgmQAlgnA5gHQA4gIAuAbQAsAbAVAyQAUAygNAxQgJAkgbAeQgaAdgkAOQgZAJgbAAQgZAAgagIg");
	var mask_4_graphics_110 = new cjs.Graphics().p("AiUC5Qg3gSgdgtQgegsAFg5QAFg5AlgmQAlgnA5gHQAsgHAmAQQAKgSAOgPQAkgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAxQgJAkgbAeQgaAdgkAOQgyATg2gSIgMgFQgJAQgNAPQgZAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_4_graphics_111 = new cjs.Graphics().p("AjzDwQg3gSgdgtQgegsAFg5QAFg6AlglQAlgnA5gHQAggFAcAHQAJgnAbgbQAlgnA5gHQArgHAmAQQAKgSAOgPQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAdQgaAdgkAOQgyATg2gSIgMgFQgJAQgNAPQgaAdgkAOQgsAQgwgMQgJAigaAdQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_4_graphics_112 = new cjs.Graphics().p("AlXEiQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgmA5gHQAmgGAhALQALgiAYgZQAlgnA5gHQAggFAcAHQAJgnAbgbQAkgnA5gHQAsgHAmAQQAKgSAOgPQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkANQgyATg2gSIgMgFQgJAQgNAPQgaAdgkAOQgsAQgxgMQgJAigaAdQgZAdgkAOQgyATg2gSIgBgBQgKAfgXAaQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_4_graphics_113 = new cjs.Graphics().p("AnKFFQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbIADACQALgZATgTQAlgnA5gHQAmgGAhALQALgiAYgZQAlgnA5gHQAfgFAcAHQAJgnAbgbQAlgnA5gHQAsgHAmAQQAKgSAOgPQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSIgMgFQgJAQgNAOQgaAdgkAOQgsAQgxgMQgJAigaAdQgaAdgkAOQgyATg1gSIgBgBQgKAfgXAaQgaAdgkAOQgyATg2gSQgUgHgQgKQgKAXgSAUQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_4_graphics_114 = new cjs.Graphics().p("AozFjQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA0gIArAXQAJgQAMgNQAlgmA5gHQA5gIAuAaIADACQALgYATgUQAlgnA5gHQAmgGAhALQALgiAXgZQAlgnA5gHQAggFAcAHQAJgnAbgbQAlgnA5gHQAsgHAmAQQAKgSAOgPQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSIgMgFQgJAQgNAPQgaAcgkAOQgsAQgxgMQgJAigaAdQgaAdgkAOQgyATg2gSIgBgBQgKAfgXAaQgaAdgjAOQgyATg2gSQgUgHgQgKQgKAXgSAUQgaAdgkAOQgyATg2gSQgNgFgLgFQgJANgLANQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_4_graphics_115 = new cjs.Graphics().p("AqNF8Qg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQApgGAkANIAJgLQAlgnA5gHQA0gIArAXQAJgQAMgNQAlgmA5gHQA5gIAuAbIADACQALgZATgUQAlgnA5gHQAlgGAhALQALgiAYgZQAlgnA5gHQAggFAcAHQAJgnAbgbQAlgnA5gHQAsgHAmAQQAKgSAOgPQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSIgMgFQgJAQgNAPQgaAdgkAOQgsAPgxgLQgJAhgaAdQgaAdgkAOQgyATg2gSIgBgBQgKAfgXAaQgaAdgkAOQgyATg1gSQgUgHgQgKQgKAXgSAUQgaAdgkAOQgyATg2gSQgNgFgLgFQgJANgLANQgaAdgkAOQgyATg2gSIgHgDIgHAJQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_4_graphics_116 = new cjs.Graphics().p("ApCF8QgTgHgQgJIgLAFQgyATg2gSQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbIADACQAVgIAXgDQApgGAkANIAJgLQAlgnA5gHQA0gIArAXQAJgQAMgNQAlgmA5gHQA5gIAuAbIADACQALgZATgUQAkgnA5gHQAmgGAhALQALgiAYgZQAlgnA5gHQAggFAcAHQAJgnAbgbQAlgnA5gHQAsgHAmAQQAKgSAOgPQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSIgMgFQgJAQgNAPQgaAdgkAOQgsAPgxgLQgJAhgaAdQgaAdgkAOQgyATg2gSIgBgBQgKAfgXAaQgaAdgkAOQgyATg2gSQgUgHgQgKQgJAXgSAUQgaAdgkAOQgyATg2gSQgNgFgLgFQgJANgLANQgaAdgkAOQgyATg2gSIgHgDIgHAJQgaAdgkAOQgZAJgbAAQgaAAgagIg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(109).to({graphics:mask_4_graphics_109,x:299.016,y:356.0477}).wait(1).to({graphics:mask_4_graphics_110,x:289.016,y:359.5477}).wait(1).to({graphics:mask_4_graphics_111,x:279.516,y:365.0477}).wait(1).to({graphics:mask_4_graphics_112,x:269.516,y:370.0477}).wait(1).to({graphics:mask_4_graphics_113,x:258.016,y:373.5477}).wait(1).to({graphics:mask_4_graphics_114,x:247.516,y:376.5477}).wait(1).to({graphics:mask_4_graphics_115,x:238.516,y:379.0477}).wait(1).to({graphics:mask_4_graphics_116,x:231.016,y:379.0477}).wait(24));

	// lady08
	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(153.35,351.75,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(109).to({_off:false},0).wait(31));

	// 圖層_27
	this.instance_7 = new lib.手握筆();
	this.instance_7.setTransform(359.05,359,1,1,0,0,0,218.7,131.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(97).to({_off:false},0).wait(1).to({y:382},0).wait(1).to({x:370.05,y:398},0).wait(1).to({x:390.05,y:408},0).wait(1).to({x:409.05,y:404},0).wait(1).to({x:432.05,y:397.75},0).wait(1).to({x:455.05,y:399.75},0).wait(1).to({x:475.05,y:407.75},0).wait(1).to({x:489.05,y:423.75},0).wait(1).to({x:501.05,y:444.75},0).wait(1).to({x:509.05,y:464.75},0).to({_off:true},1).wait(32));

	// 圖層_26 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_97 = new cjs.Graphics().p("AhQCJQgogXgVgsQgVgrAGgtQAGg0AngoQAogoA0gGQA0gHAwAdQAwAdATAxQATAxgQA1QgQA1grAfQglAagxACIgGAAQgsAAgkgVg");
	var mask_5_graphics_98 = new cjs.Graphics().p("Ag/EJQg2gSgegtQgdgsAFg5QAFg6AlgmQAKgKAMgIQgLgOgIgRQgVgsAFgtQAGg0AogoQAogoA0gHQAzgGAwAcQAxAdATAxQATAxgQA2QgQA2grAdQAPASAJAXQAVAygNAyQgKAkgaAeQgbAdgjAOQgaAKgaAAQgZAAgbgJg");
	var mask_5_graphics_99 = new cjs.Graphics().p("AghF8Qg3gSgdgtQgegsAFg5QAFgzAeglQgYgQgQgZQgegsAFg4QAFg6AlgmQALgLAMgIQgLgOgJgRQgVgsAGgtQAGg0AngoQAogoA0gHQA0gGAwAcQAwAdATAxQATAxgQA2QgQA2gqAeQAOASAKAXQAUAygNAxQgIAhgXAcQAkAZASAsQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAKgbAAQgZAAgagJg");
	var mask_5_graphics_100 = new cjs.Graphics().p("AAzHCQg2gSgdgtQgVgfgEgmQgeACgfgKQg3gSgdgtQgegsAFg5QAFgzAeglQgYgQgQgZQgegrAFg5QAFg6AlgmQALgLAMgIQgLgOgJgRQgVgsAGgtQAGg0AngoQAogoA0gHQA1gGAvAcQAwAdATAxQATAxgQA2QgQA2gqAeQAOASAKAXQAUAygNAyQgIAggXAcQAkAZASAsQAJAWACAVQAzgFArAZQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAKgbAAQgaAAgagJg");
	var mask_5_graphics_101 = new cjs.Graphics().p("AgwHCQg3gSgdgtQgVgfgEgmQgeACgfgKQg3gSgdgtQgegsAFg5QAFgzAeglQgYgQgQgZQgegrAFg5QAFg6AlgmQALgLAMgIQgLgOgJgRQgVgsAGgtQAGg0AngoQAogoA0gHQA1gGAwAcQAwAdATAxQATAxgQA2QgQA2gqAeQAOASAKAXQAUAygNAyQgIAggXAcQAkAZASAsQAJAWACAVQAygFArAZIAMAIQAjgeAygHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgZgIgUgOQgXAUgcALQgZAKgbAAQgZAAgagJg");
	var mask_5_graphics_102 = new cjs.Graphics().p("AieHCQg3gSgdgtQgVgfgEgmQgeACgfgKQg3gSgdgtQgegsAFg5QAFgzAeglQgYgQgQgZQgegrAFg5QAFg6AlgmQALgLAMgIQgLgOgJgRQgVgsAGgtQAGg0AngoQAogoA0gHQA1gGAwAcQAwAdATAxQATAxgQA2QgQA2gqAeQAOASAKAXQAUAygNAyQgIAggXAcQAkAZASAsQAJAWACAVQAzgFArAZIAMAIQAigeAygHQA5gIAuAbIAIAGQAHgKAIgJQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgXgIgSgMIgNAQQgaAdgkAOQgyATg2gSQgZgIgTgOQgXAUgcALQgZAKgbAAQgaAAgagJg");
	var mask_5_graphics_103 = new cjs.Graphics().p("AkMHCQg3gSgdgtQgVgfgEgmQgeACgfgKQg3gSgdgtQgegsAFg5QAFgzAeglQgYgQgQgZQgegrAFg5QAFg6AlgmQALgLAMgIQgLgOgJgRQgVgsAGgtQAGg0AngoQAogoA0gHQA1gGAwAcQAwAdATAxQATAxgQA2QgQA2gqAeQAOASAKAXQAUAygNAyQgIAggXAcQAkAZASAsQAJAWACAVQAzgFArAZIAMAIQAjgeAygHQA4gIAuAbIAIAGQAHgKAIgJQAlgnA5gHQA5gIAuAbQAQAKAMAMQAkgiA1gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgkgMgagYQgXAXgfAMQgyATg2gSQgXgIgSgMIgNAQQgaAdgkAOQgxATg2gSQgZgIgUgOQgXAUgcALQgZAKgbAAQgaAAgagJg");
	var mask_5_graphics_104 = new cjs.Graphics().p("Al6HCQg3gSgdgtQgVgfgEgmQgeACgfgKQg3gSgdgtQgegsAFg5QAFgzAeglQgYgQgQgZQgegrAFg5QAFg6AlgmQALgLAMgIQgLgOgJgRQgVgsAGgtQAGg0AngoQAogoA0gHQA1gGAwAcQAwAdATAxQATAxgQA2QgQA2gqAeQAOASAKAXQAUAygNAyQgIAggXAcQAkAZASAsQAJAWACAVQAzgFArAZIAMAIQAjgeAygHQA5gIAuAbIAIAGQAHgKAIgJQAkgnA5gHQA5gIAuAbQAQAKAMAMQAkgiA1gHQA5gIAuAbQAWAOARATQAggaAugGQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgsgPgcggQgUARgYAJQgyATg2gSQgkgMgagYQgXAXgfAMQgyATg2gSQgXgIgSgMIgMAQQgaAdgkAOQgyATg2gSQgZgIgUgOQgXAUgcALQgZAKgbAAQgaAAgagJg");
	var mask_5_graphics_105 = new cjs.Graphics().p("AI2H0Qg3gSgdgtQgSgbgFggQgfADgggLQgsgPgcggQgUARgYAJQgyATg2gSQgkgMgagYQgXAXgfAMQgyATg1gSQgXgIgSgMIgNAQQgaAdgkAOQgyATg2gSQgZgIgUgOQgXAUgcALQgyATg2gSQg3gSgdgtQgVgfgEgmQgeACgfgKQg3gSgdgtQgegsAFg5QAFgzAeglQgYgPgQgZQgegsAFg5QAFg6AlgmQALgLAMgIQgLgOgJgRQgVgsAGgtQAGg0AngoQAogoA0gHQA1gGAwAcQAwAdATAxQATAxgQA2QgQA2gqAeQAOASAKAXQAUAygNAyQgIAhgXAcQAkAYASAsQAJAWACAVQAzgFArAZIAMAIQAjgeAygHQA5gIAuAbIAIAGQAHgKAIgJQAlgnA5gHQA4gIAuAbQAQAKAMAMQAkgiA1gHQA5gIAuAbQAWAOARATQAggaAugGQA5gIAuAbQAsAbAVAyQAHARADAQQA0gFArAZQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAKgbAAQgaAAgagJg");
	var mask_5_graphics_106 = new cjs.Graphics().p("AKBJOQg3gSgdgtQgegsAFg5IABgIQgVgBgVgHQg3gSgdgtQgSgbgFggQgfADgggLQgsgPgcggQgUARgYAJQgyATg2gSQgkgMgagYQgXAXgeAMQgyATg2gSQgXgIgSgMIgNAQQgaAdgkAOQgyATg2gSQgZgIgUgOQgXAUgcALQgyATg2gSQg3gSgdgtQgVgfgEgmQgeACgfgKQg3gSgdgtQgegsAFg5QAFgyAeglQgYgQgQgZQgegsAFg5QAFg6AlgmQALgLAMgIQgLgOgJgRQgVgsAGgtQAGg0AngoQAogoA0gHQA1gGAwAcQAwAdATAxQATAxgQA2QgQA2gqAeQAOASAKAXQAUAygNAyQgIAhgXAcQAkAZASAsQAJAWACAUQAzgEArAYIAMAIQAjgeAygGQA5gIAuAaIAIAGQAHgKAIgJQAlgmA5gHQA5gIAtAbQAQAKAMAMQAkgiA1gHQA5gIAuAbQAWAOARASQAggZAugGQA5gIAuAbQAsAaAVAyQAHARADAQQA0gFArAZQAsAbAVAyQARApgGApQAoABAiAUQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAKgbAAQgaAAgagJg");
	var mask_5_graphics_107 = new cjs.Graphics().p("AKpKyQg3gSgdgtQgegsAFg5QACgXAIgVQgpgSgYglQgegsAFg5IABgIQgVgBgVgHQg3gSgdgtQgSgbgFggQgfADgggLQgsgPgcggQgUARgYAJQgyATg2gSQgkgMgZgYQgXAXgfAMQgyATg2gSQgXgIgSgMIgNAQQgaAdgkAOQgyATg2gSQgZgIgUgOQgXAUgcALQgyATg2gSQg3gSgdgtQgVgfgEgmQgeACgfgKQg3gSgdgtQgegrAFg5QAFgzAeglQgYgQgQgZQgegsAFg5QAFg6AlgmQALgLAMgIQgLgOgJgRQgVgsAGgtQAGg0AngoQAogoA0gHQA1gGAwAcQAwAdATAxQATAxgQA2QgQA2gqAeQAOASAKAXQAUAygNAyQgIAhgXAcQAkAZASAsQAJAWACAVQAzgFArAZIAMAIQAjgeAygHQA5gIAuAbIAIAGQAHgKAIgJQAlgnA5gHQA5gIAuAbQAQAKAMAMQAjgiA1gHQA5gIAuAbQAWAOARATQAggaAugGQA5gIAuAbQAsAbAVAyQAHARADAPQA0gEArAYQAsAbAVAyQARApgGApQAoABAiAUQAsAbAVAyQAUAygNAyIgFAQIANAHQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAKgbAAQgaAAgagJg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(97).to({graphics:mask_5_graphics_97,x:276.9336,y:286.9725}).wait(1).to({graphics:mask_5_graphics_98,x:275.4795,y:298.5025}).wait(1).to({graphics:mask_5_graphics_99,x:275.516,y:310.0025}).wait(1).to({graphics:mask_5_graphics_100,x:284.016,y:317.0025}).wait(1).to({graphics:mask_5_graphics_101,x:294.016,y:317.0025}).wait(1).to({graphics:mask_5_graphics_102,x:305.016,y:317.0025}).wait(1).to({graphics:mask_5_graphics_103,x:316.016,y:317.0025}).wait(1).to({graphics:mask_5_graphics_104,x:327.016,y:317.0025}).wait(1).to({graphics:mask_5_graphics_105,x:335.516,y:322.0025}).wait(1).to({graphics:mask_5_graphics_106,x:343.016,y:331.0025}).wait(1).to({graphics:mask_5_graphics_107,x:347.016,y:341.0025}).wait(33));

	// lady07
	this.instance_8 = new lib.CachedBmp_3();
	this.instance_8.setTransform(270.45,282.15,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(97).to({_off:false},0).wait(43));

	// 圖層_25
	this.instance_9 = new lib.手握筆();
	this.instance_9.setTransform(371.05,332,1,1,0,0,0,218.7,131.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(87).to({_off:false},0).wait(1).to({x:359.05,y:348},0).wait(1).to({x:342.05,y:365},0).wait(1).to({x:321.05,y:369.5},0).wait(1).to({x:303.05,y:358.5},0).wait(1).to({x:286.05,y:347.5},0).wait(1).to({x:272.05,y:329.5},0).wait(1).to({x:264.05,y:311.5},0).wait(1).to({x:258.05,y:293.5},0).to({_off:true},1).wait(44));

	// 圖層_24 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_87 = new cjs.Graphics().p("AgVCdQgzgIgjggQgkghgLgyQgKgxASgtQATgsArgcQArgcAwACQA4ADAsApQAsApAHA4QAFAvgYAtQgYAtgrAWQghARglAAQgLAAgMgCg");
	var mask_6_graphics_88 = new cjs.Graphics().p("AhVD9QgwgNgegjQgfgjgHgwQgGgxAUgqQAUgpAqgZQALgGALgFIgGgTQgKgyASgtQATgsArgcQAqgcAxACQA4ADAsApQAsApAHA4QAFAwgYAtQgYAsgrAWIgNAFIABACQALAfgDAgQgDAugeAnQgeAngsAPQgXAIgZAAQgVAAgWgGg");
	var mask_6_graphics_89 = new cjs.Graphics().p("AieFUQg3gSgdgtQgegsAFg5QAFg6AlgmQAkglA1gIIAAgDQgHgwAUgqQAVgqAqgZQAKgGALgFIgFgTQgLgyATgtQATgsAqgcQArgcAwACQA4ADAsApQAtApAGA4QAGAwgYAtQgZAtgrAWIgMAFIABACQAKAfgCAfQgEAugeAnQgeAngsAPQgMAEgMACQAGAggJAfQgJAkgbAeQgZAdgkAOQgZAKgbAAQgaAAgagJg");
	var mask_6_graphics_90 = new cjs.Graphics().p("Aj9GLQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQAggEAcAGQAJgmAbgcQAkgkA1gIIAAgDQgHgxAUgqQAVgqApgZQAKgGALgFIgFgTQgLgyATgtQATgsArgcQArgcAwACQA4ADAsApQAtApAGA4QAGAwgYAtQgZAtgrAWIgMAFIABACQAKAfgCAgQgEAtgeAnQgeAngsAPQgMAEgMACQAGAggJAfQgJAkgbAeQgaAdgkAOQgrARgxgNQgJAjgaAcQgaAdgkAOQgZAKgbAAQgaAAgagJg");
	var mask_6_graphics_91 = new cjs.Graphics().p("AlrGQQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAMAIALAJIAAAAQAlgnA5gHQAggEAcAGQAJgmAbgcQAjgkA1gIIAAgDQgHgxAUgqQAVgqAqgZQAKgGALgFIgFgTQgLgyATgtQATgsArgcQArgcAwACQA4ADAsApQAtApAGA4QAGAwgYAtQgZAtgrAWIgMAFIABACQAKAfgCAgQgEAtgeAnQgeAngsAPQgMAEgMACQAGAggJAfQgJAkgbAeQgaAdgkAOQgsARgxgNQgJAjgaAcQgZAdgkAOQgyATg2gSQghgLgXgUQgaAbgiANQgZAKgbAAQgaAAgagJg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AkWGQQg3gSgdgtQgPgXgGgaQggADghgLQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgmA5gHQA5gIAuAbQAsAaAVAyQAFAMADALQA1gGAsAaQAMAIALAJIAAAAQAlgnA5gHQAfgEAcAGQAJgmAbgcQAkgkA1gIIAAgDQgHgxAUgqQAVgqAqgZQAKgGALgFIgFgTQgLgyATgtQATgsArgcQArgcAwACQA4ADAsApQAtApAGA4QAGAwgYAtQgZAtgrAWIgMAFIABACQAKAfgCAgQgEAtgeAnQgeAngsAPQgMAEgMACQAGAggJAfQgJAkgbAeQgaAdgkAOQgsARgxgNQgJAjgaAcQgaAdgkAOQgxATg2gSQghgLgXgUQgaAbgiANQgZAKgbAAQgaAAgagJg");
	var mask_6_graphics_93 = new cjs.Graphics().p("AjLGQQg2gSgegtQgPgXgGgaQgfADgigLQg2gSgegtQgagnABgyQglgBgggSQgqgXgWgtQgXgsAGgvQAGgvAggkQAngtBAgHQBBgHAvAkQAwAkALBAQADAPAAAOQAoABAiAUQAtAaAUAyQAFAMADALQA2gGArAaQANAIALAJIAAAAQAlgnA4gHQAfgEAcAGQAKgmAbgcQAjgkA2gIIgBgDQgGgxAUgqQAUgqAqgZQALgGALgFIgGgTQgKgyASgtQATgsArgcQArgcAxACQA4ADAsApQAsApAHA4QAFAwgYAtQgYAtgrAWIgMAFIAAACQALAfgDAgQgDAtgeAnQgeAngsAPQgMAEgMACQAFAggIAfQgKAkgaAeQgbAdgjAOQgtARgwgNQgKAjgZAcQgbAdgjAOQgyATg3gSQgfgLgYgUQgZAbgiANQgaAKgbAAQgZAAgbgJg");
	var mask_6_graphics_94 = new cjs.Graphics().p("AiKGQQg3gSgdgtQgQgXgGgaQgfADghgLQg3gSgdgtQgbgnABgyQgkgBghgSQgpgXgXgtQgTgmABglQg0gJgiglQgngpgDg9QgCg+AjgsQAkgtA8gLQA9gLAxAeQAzAeASA4QAJAbgCAcQAlAFAfAXQAvAkAMBAQACAPABAOQAnABAjAUQAsAaAVAyQAEAMADALQA2gGAsAaQALAIALAJIAAAAQAlgnA5gHQAfgEAcAGQAKgmAbgcQAjgkA2gIIAAgDQgHgxAUgqQAVgqAqgZQAKgGALgFIgFgTQgLgyATgtQATgsArgcQArgcAwACQA4ADAsApQAtApAGA4QAGAwgYAtQgZAtgrAWIgMAFIABACQAKAfgCAgQgEAtgeAnQgeAngsAPQgMAEgMACQAFAggIAfQgJAkgbAeQgaAdgkAOQgtARgwgNQgKAjgZAcQgaAdgkAOQgyATg2gSQghgLgYgUQgYAbgiANQgaAKgaAAQgaAAgagJg");
	var mask_6_graphics_95 = new cjs.Graphics().p("AhxHQQg3gSgdgsQgPgXgGgaQggACghgLQg3gSgdgsQgbgoACgyQglgBghgSQgpgXgXgtQgTglACgnQg0gJgjgjQgngpgDg+QgBgmANggQgWgQgPgXQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgDAMgFALQAoAdAPAvQAJAbgBAcQAlAGAeAWQAvAkAMA/QADAPAAAPQAoAAAiAVQAsAaAVAyQAFAMADAMQA1gGArAaQAMAHALAKIAAgBQAlgmA5gIQAggEAcAGQAJgmAbgcQAkgkA1gJIAAgDQgHgvAUgqQAVgqAqgZQAKgHALgEIgFgUQgLgyATgsQATgtArgbQArgcAwACQA4ACAsApQAtApAGA4QAGAwgYAtQgZAugrAVIgMAGIABACQAKAfgCAeQgEAvgeAnQgeAmgsAPQgMAEgMACQAGAggJAfQgJAlgbAdQgaAegkANQgsARgxgMQgJAigaAcQgaAegkANQgyATg2gSQghgKgXgVQgaAbghANQgZAKgbAAQgaAAgagJg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(87).to({graphics:mask_6_graphics_87,x:290.9862,y:260.0028}).wait(1).to({graphics:mask_6_graphics_88,x:286.4966,y:270.0077}).wait(1).to({graphics:mask_6_graphics_89,x:280.015,y:279.0062}).wait(1).to({graphics:mask_6_graphics_90,x:270.515,y:284.5062}).wait(1).to({graphics:mask_6_graphics_91,x:259.515,y:285.0062}).wait(1).to({graphics:mask_6_graphics_92,x:251.015,y:285.0062}).wait(1).to({graphics:mask_6_graphics_93,x:243.4547,y:285.0062}).wait(1).to({graphics:mask_6_graphics_94,x:237.043,y:285.0062}).wait(1).to({graphics:mask_6_graphics_95,x:234.515,y:278.5727}).wait(45));

	// lady06
	this.instance_10 = new lib.CachedBmp_4();
	this.instance_10.setTransform(179.55,246.75,0.5,0.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(87).to({_off:false},0).wait(53));

	// 圖層_23
	this.instance_11 = new lib.手握筆();
	this.instance_11.setTransform(268.05,347,1,1,0,0,0,218.7,131.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(76).to({_off:false},0).wait(1).to({x:271.05,y:366},0).wait(1).to({y:387},0).wait(1).to({y:412},0).wait(1).to({x:266.05,y:433},0).wait(1).to({x:248.05,y:445},0).wait(1).to({x:228.05,y:456},0).wait(1).to({x:213.05,y:461},0).wait(1).to({x:193.05,y:474},0).wait(1).to({x:177.05,y:489},0).to({_off:true},1).wait(54));

	// 圖層_22 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_76 = new cjs.Graphics().p("AgtCYQgigKgbgZQgbgZgNghQgTguAMgyQANg0AmggQAmggA0gEQA0gEAqAaQAiAUAVAkQAVAjABAoQABAmgTAlQgSAlghAWQgdAUgkAGQgNACgMAAQgXAAgWgGg");
	var mask_7_graphics_77 = new cjs.Graphics().p("AgrD5Qg2gSgegsQgdgtAFg5QAEguAYgiQgSgTgKgaQgTguAMgzQANg0AmggQAmggA0gEQA0gEAqAaQAiAUAVAkQAVAjABAoQABAngTAlQgGAMgHAKQARATALAaQAVAzgNAxQgKAlgaAdQgbAegjANQgaAKgbAAQgYAAgbgJg");
	var mask_7_graphics_78 = new cjs.Graphics().p("AghFsQg2gSgegsQgdgtAFg5QAEg2AigmQgUgPgOgVQgdgtAFg4QAEguAYgiQgSgUgKgaQgTguAMgzQANg0AmggQAmggA0gEQA0gEAqAaQAiAUAVAkQAVAjABAoQABAngTAlQgGAMgHAKQARAUALAaQAVAzgNAwQgKAlgaAdQAgAZAQAnQAVAzgNAxQgKAlgaAdQgbAegjANQgaAKgbAAQgYAAgbgJg");
	var mask_7_graphics_79 = new cjs.Graphics().p("AgXHaQg2gSgegsQgdgtAFg5QAEgyAdgkQgRgOgMgSQgdgtAFg5QAEg2AiglQgUgPgOgVQgdgtAFg5QAEguAYgiQgSgUgKgaQgTguAMgzQANg0AmggQAmggA0gEQA0gEAqAaQAiAUAVAkQAVAjABAoQABAngTAlQgGAMgHAKQARAUALAaQAVAzgNAxQgKAlgaAdQAgAYAQAnQAVAzgNAxQgJAhgWAbQAcAYAPAkQAVAzgNAxQgKAlgaAdQgbAegjANQgaAKgbAAQgZAAgagJg");
	var mask_7_graphics_80 = new cjs.Graphics().p("AgrJIQg2gSgegsQgdgtAFg5QAFg5AlgnIALgKIgJgMQgdgtAFg5QAEgyAdgkQgRgOgMgSQgdgtAFg4QAEg2AigmQgUgPgOgVQgdgtAFg5QAEguAYgiQgSgUgKgaQgTguAMgzQANg0AmggQAmggA0gEQA0gEAqAaQAiAUAVAkQAVAjABAoQABAngTAlQgGAMgHAKQARAUALAaQAVAzgNAxQgKAlgaAdQAgAZAQAnQAVAzgNAwQgJAhgWAbQAcAYAPAkQAVAzgNAxQgKAlgaAdIgPAPQAOARAJAWQAVAzgNAxQgKAlgaAdQgbAegjANQgaAKgbAAQgYAAgbgJg");
	var mask_7_graphics_81 = new cjs.Graphics().p("AhxKnQg3gSgdgsQgegtAFg5QAFg5AlgnQAegeAqgLQgGgZACgcQAFg5AlgnIAMgKIgJgMQgegtAFg5QAFgyAdgkQgRgOgMgRQgegtAFg5QAFg2AigmQgUgPgOgVQgegtAFg5QAEguAZgiQgTgUgKgaQgSguAMgzQAMg0AmggQAmggA0gEQA0gEArAaQAhAUAVAkQAVAjABAoQABAngSAlQgGAMgHAKQARAUALAaQAUAzgNAxQgJAlgaAdQAgAZAQAnQAUAzgNAxQgIAhgWAbQAcAXAPAkQAUAzgNAxQgJAlgbAdIgOAPQAOARAJAWQAUAzgNAxQgJAlgbAdQgaAegkANIgMAEQAKAngKAmQgJAlgbAdQgaAegjANQgZAKgbAAQgaAAgagJg");
	var mask_7_graphics_82 = new cjs.Graphics().p("AjQLjQg3gSgdgsQgegtAFg5QAFg5AlgnQAlgmA5gIQAegEAbAGQAJgsAeggQAegeAqgLQgGgZACgcQAFg5AkgnIAMgKIgJgMQgdgtAEg5QAFgxAdgkQgRgOgMgSQgdgtAFg5QAFg2AhgmQgUgPgNgVQgegtAFg5QAEguAZgiQgTgUgKgaQgSguAMgzQAMg0AlggQAmggA1gEQA0gEArAaQAhAUAVAkQAVAjABAoQABAngSAlQgGAMgHAKQARAUALAaQAUAzgNAxQgJAlgaAdQAgAZAQAnQAUAzgNAxQgIAhgWAbQAcAYAPAkQAUAygNAxQgJAlgbAdIgOAPQAOARAJAWQAUAzgNAxQgJAlgbAdQgaAegkANIgMAEQAKAngKAmQgJAlgbAdQgaAegkANQgrARgugMIgCAGQgJAlgbAdQgaAegkANQgZAKgbAAQgaAAgagJg");
	var mask_7_graphics_83 = new cjs.Graphics().p("AklMGQg3gSgdgsQgegtAFg5QAFg5AlgnQAlgmA5gIQAegEAbAGQAIgOALgMQAlgmA5gIQAegEAbAGQAJgsAeggQAdgeAqgLQgGgZACgcQAFg5AlgnIAMgKIgJgMQgegtAFg5QAFgxAdgkQgRgOgMgSQgegtAFg5QAFg2AigmQgUgPgOgVQgegtAFg5QAEguAZgiQgTgUgKgaQgSguAMgzQAMg0AmggQAmggA1gEQA0gEArAaQAhAUAVAkQAVAjABAoQABAngSAlQgGAMgHAKQARAUALAaQAUAzgNAxQgJAlgaAdQAgAZAQAnQAUAzgNAxQgIAhgWAbQAcAYAPAkQAUAygNAxQgJAlgbAdIgOAPQAOARAJAWQAUAzgNAxQgJAlgbAdQgaAegkANIgMAEQAKAngKAmQgJAlgbAdQgaAegkANQgrARgvgMIgCAGQgJAlgbAdQgaAegjANQgrARgwgMQgHAMgKAKQgaAegkANQgZAKgbAAQgaAAgagJg");
	var mask_7_graphics_84 = new cjs.Graphics().p("AmEMpQg3gSgdgsQgegtAFg5QAFg5AlgnQAlgmA5gIQAogFAiALQAJgQANgOQAlgmA5gIQAegEAbAGQAIgOALgMQAlgmA5gIQAdgEAbAGQAJgsAeggQAegeAqgLQgGgZACgcQAFg5AlgnIAMgKIgJgMQgegtAFg4QAFgyAdgkQgRgOgMgSQgegtAFg5QAFg2AigmQgUgPgOgVQgegtAFg5QAEguAZgiQgTgUgKgaQgSguAMgzQAMg0AmggQAmggA1gEQA0gEArAaQAhAUAVAkQAVAjABAoQABAngSAlQgGAMgHAKQARAUALAaQAUAzgNAxQgJAlgaAdQAgAZAQAnQAUAzgNAxQgIAhgWAbQAcAYAPAkQAUAzgNAwQgJAlgbAdIgOAPQAOARAJAWQAUAzgNAxQgJAlgbAdQgaAegkANIgMAEQAKAngKAmQgJAlgbAdQgaAegkANQgrARgvgMIgCAGQgJAlgbAdQgaAegkANQgrARgvgMQgHAMgKAKQgaAegkANQgyATg2gSIgEgBQgIAPgMAMQgaAegkANQgZAKgbAAQgaAAgagJg");
	var mask_7_graphics_85 = new cjs.Graphics().p("AneN0Qg3gSgdgsQgegtAFg5QAFg5AlgnQAlgmA5gIQAXgDAVADIAAgIQAFg5AlgnQAlgmA5gIQAogFAiALQAJgQANgOQAlgmA5gIQAegEAbAGQAIgOALgMQAkgmA5gIQAegEAbAGQAJgsAeggQAegeAqgLQgGgZACgcQAFg5AlgnIAMgKIgJgMQgegsAFg5QAFgyAdgkQgRgOgMgSQgegtAFg5QAFg2AigmQgUgPgOgVQgegtAFg5QAEguAZgiQgTgUgKgaQgSguAMgzQAMg0AmggQAmggA1gEQA0gEArAaQAhAUAVAkQAVAjABAoQABAngSAlQgGAMgHAKQARAUALAaQAUAzgNAxQgJAlgaAdQAgAZAQAnQAUAzgNAxQgIAhgWAbQAcAYAPAkQAUAzgNAxQgJAlgbAcIgOAPQAOARAJAWQAUAzgNAxQgJAlgbAdQgaAegkANIgMAEQAKAngKAmQgJAlgbAdQgaAegkANQgrARgvgMIgCAGQgJAlgbAdQgaAegkANQgrARgwgMQgHAMgKAKQgaAegjANQgyATg2gSIgEgBQgIAPgMAMQgaAegkANQglAPgogHQAAARgFAQQgJAlgbAdQgaAegkANQgZAKgbAAQgaAAgagJg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(76).to({graphics:mask_7_graphics_76,x:182.9915,y:276.0644}).wait(1).to({graphics:mask_7_graphics_77,x:183.4912,y:286.0546}).wait(1).to({graphics:mask_7_graphics_78,x:184.4912,y:297.5546}).wait(1).to({graphics:mask_7_graphics_79,x:185.4912,y:308.5546}).wait(1).to({graphics:mask_7_graphics_80,x:185.4912,y:319.5546}).wait(1).to({graphics:mask_7_graphics_81,x:181.516,y:329.0546}).wait(1).to({graphics:mask_7_graphics_82,x:172.016,y:335.0546}).wait(1).to({graphics:mask_7_graphics_83,x:163.516,y:338.5546}).wait(1).to({graphics:mask_7_graphics_84,x:154.016,y:342.0546}).wait(1).to({graphics:mask_7_graphics_85,x:145.016,y:349.5546}).wait(55));

	// lady05
	this.instance_12 = new lib.CachedBmp_5();
	this.instance_12.setTransform(96.75,268.65,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(76).to({_off:false},0).wait(64));

	// 圖層_21
	this.instance_13 = new lib.手握筆();
	this.instance_13.setTransform(253.35,222.05,1,1,0,0,0,218.7,131.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(61).to({_off:false},0).wait(1).to({x:229.35,y:224.05},0).wait(1).to({x:209.35,y:232.05},0).wait(1).to({x:195.35,y:249.05},0).wait(1).to({x:188.35,y:273.05},0).wait(1).to({x:195.35,y:293.05},0).wait(1).to({x:208.35,y:311.05},0).wait(1).to({x:220.35,y:329.05},0).wait(1).to({x:204.35,y:343.05},0).wait(1).to({x:208.35,y:365.05},0).wait(1).to({x:225.35,y:380.05},0).wait(1).to({x:220.35,y:399.05},0).wait(1).to({x:223.35,y:421.05},0).wait(1).to({x:237.35,y:433.05},0).wait(1).to({x:252.35,y:453.05},0).to({_off:true},1).wait(64));

	// 圖層_20 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_61 = new cjs.Graphics().p("AgwCWQg3gSgdgtQgegsAFg4QAFg6AlgmQAlgnA5gHQA4gIAuAbQAsAbAVAyQAUAygNAxQgJAkgbAeQgaAdgkAOQgZAJgbAAQgZAAgagIg");
	var mask_8_graphics_62 = new cjs.Graphics().p("AijClQg3gSgdgtQgegsAFg5QAFg5AlgmQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAkgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAxQgJAkgbAeQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgZAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_8_graphics_63 = new cjs.Graphics().p("AkRC0Qg3gSgdgtQgegsAFg5QAFg5AlgmQAlgnA5gHQA5gIAuAbIANAJIAKgMQAlgnA5gHQA4gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAxQgJAkgbAeQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg1gSQgagJgUgOIgIAJQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_8_graphics_64 = new cjs.Graphics().p("AlrD/Qg3gSgdgtQgegsAFg5QAFg6AlglQAlgnA5gHQAXgEAVADIAAgHQAFg6AlgmQAlgnA5gHQA5gIAuAbIANAJIAKgMQAkgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAdQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSQgagJgTgOIgIAJQgaAdgkAOQglAOgogHQAAARgFARQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_8_graphics_65 = new cjs.Graphics().p("AmsFeQg3gSgdgtQgegsAFg5QAFg6AlgmQAkgmA3gIQgFgXACgYQAFg6AlgmQAlgnA5gHQAXgEAVADIAAgHQAFg6AlgmQAlgnA5gHQA5gIAtAbIANAJIAKgMQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSQgagJgUgOIgIAJQgaAdgjANQglAOgogHQAAARgFARQgJAkgbAeQgaAdgkAOQgPAFgQADQAJAkgKAlQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_8_graphics_66 = new cjs.Graphics().p("AmsHRQg3gSgdgtQgegsAFg5QAFg6AlgmIAGgGQgNgMgKgPQgegsAFg5QAFg6AlglQAkgmA3gIQgFgXACgZQAFg6AlgmQAlgnA5gHQAXgEAVADIAAgHQAFg6AlgmQAlgnA5gHQA5gIAtAbIANAJIAKgMQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSQgagJgUgOIgIAJQgaAdgjAOQglAOgogHQAAARgFARQgJAkgbAdQgaAdgkAOQgPAFgQADQAJAkgKAlQgJAkgbAeIgIAIQAXAXAOAhQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_8_graphics_67 = new cjs.Graphics().p("Ak+I1Qg3gSgdgtQgegsAFg5QACgSAFgQIgIgCQg3gSgdgtQgegsAFg5QAFg6AlgmIAGgGQgNgMgKgPQgegsAFg4QAFg6AlgmQAkgmA3gIQgFgXACgZQAFg6AlgmQAlgnA5gHQAXgEAVADIAAgHQAFg6AlgmQAlgnA5gHQA5gIAtAbIANAJIAKgMQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSQgagJgUgOIgIAJQgaAdgjAOQglAOgogHQAAARgFARQgJAkgbAeQgaAdgkAOQgPAFgQADQAJAkgKAkQgJAkgbAeIgIAIQAXAXAOAhQAUAygNAyIgCAHQAVAFATALQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_8_graphics_68 = new cjs.Graphics().p("AiOKQQgygHgkghQgjghgLgyQgFgXABgWQgUgBgUgHQg3gSgdgtQgegsAFg5QACgSAFgQIgIgCQg3gSgdgtQgegsAFg5QAFg6AlgmIAGgFQgNgNgKgOQgegsAFg5QAFg6AlgmQAkglA3gJQgFgXACgZQAFg6AlgmQAlgnA5gHQAXgDAVACIAAgHQAFg6AlgmQAlgnA5gHQA5gIAtAbIANAJIAKgMQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSQgagJgUgOIgIAJQgaAdgjAOQglAOgogGQAAAQgFARQgJAkgbAeQgaAdgkAOQgPAGgQACQAJAlgKAkQgJAkgbAdIgIAJQAXAWAOAhQAUAygNAyIgCAHQAVAFATALQAsAbAVAyQAOAkgCAjQA3ADAsApQArApAGA3QAGAwgYAtQgYAugrAVQggARglAAQgMAAgNgCg");
	var mask_8_graphics_69 = new cjs.Graphics().p("AilLXQgigKgbgZQgcgZgNghQgSguAMgzQAFgVAJgRQgKgTgFgWQgFgXABgWQgUgCgUgGQg3gSgdgtQgegsAFg5QACgSAFgQIgIgCQg3gSgdgtQgegsAFg5QAFg5AlgmIAGgGQgNgMgKgPQgegsAFg5QAFg6AlgmQAkgmA3gIQgFgXACgZQAFg6AlgmQAlgnA5gHQAXgEAVADIAAgHQAFg6AlgmQAlgnA5gHQA5gIAtAbIANAJIAKgMQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSQgagJgUgOIgIAJQgaAdgjAOQglAOgogHQAAARgFARQgJAkgbAeQgaAdgkAOQgPAFgQADQAJAlgKAkQgJAkgbAeIgIAIQAXAXAOAhQAUAxgNAyIgCAHQAVAFATALQAsAbAVAyQAOAjgCAkQA3ADAsApQArApAGA3QAGAwgYAtQASAiABAlQABAngSAlQgTAlgfAWQgdAUglAGQgNACgMAAQgXAAgWgGg");
	var mask_8_graphics_70 = new cjs.Graphics().p("AkgM4Qg3gSgdgsQgegtAFg5QAFg5AlgnQAigiAxgKQgLgoAKgrQAFgVAJgRQgKgTgFgWQgFgXABgWQgUgBgUgHQg3gSgdgtQgegsAFg5QACgSAFgQIgIgCQg3gSgdgtQgegrAFg5QAFg6AlgmIAGgFQgNgNgKgPQgegsAFg5QAFg6AlgmQAkgmA3gIQgFgXACgZQAFg6AlgmQAlgnA5gHQAXgDAVACIAAgHQAFg6AlgmQAlgnA5gHQA5gIAtAbIANAJIAKgMQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSQgagJgUgOIgIAJQgaAdgjAOQglAOgogGQAAAQgFARQgJAkgbAeQgaAdgkAOQgPAGgQACQAJAlgKAkQgJAkgbAeIgIAJQAXAWAOAhQAUAygNAyIgCAGQAVAFATALQAsAbAVAyQAOAkgCAjQA3ADAsApQArApAGA3QAGAwgYAtQASAiABAlQABAngSAlQgTAlgfAWQgaASghAHQANAqgLAqQgJAlgbAdQgaAegkANQgZAKgbAAQgaAAgagJg");
	var mask_8_graphics_71 = new cjs.Graphics().p("AioOXQg3gSgdgsQgegtAFg5IAEgVIgPgFQg3gSgdgsQgegtAFg5QAFg5AlgnQAigiAxgKQgLgoAKgrQAFgVAJgRQgKgTgFgWQgFgXABgWQgUgBgUgHQg3gSgdgtQgegsAFg5QACgSAFgQIgIgCQg3gRgdgtQgegsAFg5QAFg6AlgmIAGgFQgNgNgKgPQgegsAFg5QAFg6AlgmQAkgmA3gIQgFgXACgZQAFg6AlgmQAlgnA5gHQAXgDAVACIAAgHQAFg6AlgmQAlgnA5gHQA5gIAtAbIANAJIAKgMQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSQgagJgUgOIgIAJQgaAdgjAOQglAOgogGQAAAQgFARQgJAkgbAeQgaAdgkAOQgPAGgQACQAJAlgKAkQgJAkgbAeIgIAJQAXAWAOAhQAUAygNAyIgCAHQAVAFATALQAsAbAVAxQAOAkgCAjQA3ADAsApQArApAGA3QAGAwgYAtQASAiABAlQABAngSAlQgTAlgfAWQgaASghAHQANAogJAoQAYAFAWANQArAaAVAyQAUAzgNAxQgJAlgaAdQgaAegkANQgZAKgbAAQgaAAgagJg");
	var mask_8_graphics_72 = new cjs.Graphics().p("Ag6PiQg3gSgdgsQgagnABgwIgBgBQg3gSgdgsQgegtAFg5IAEgVIgPgFQg3gSgdgsQgegtAFg5QAFg5AlgnQAigiAxgKQgLgoAKgrQAFgVAJgRQgKgTgFgWQgFgXABgWQgUgBgUgHQg3gSgdgtQgegsAFg4QACgSAFgQIgIgCQg3gSgdgtQgegsAFg5QAFg6AlgmIAGgFQgNgNgKgPQgegsAFg5QAFg6AlgmQAkgmA3gIQgFgXACgZQAFg6AlgmQAlgnA5gHQAXgDAVACIAAgHQAFg6AlgmQAlgnA5gHQA5gIAtAbIANAJIAKgMQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSQgagJgUgOIgIAJQgaAdgjAOQglAOgogGQAAAQgFARQgJAkgbAeQgaAdgkAOQgPAGgQACQAJAlgKAkQgJAkgbAeIgIAJQAXAWAOAhQAUAygNAyIgCAHQAVAFATALQAsAbAVAyQAOAkgCAjQA3ADAsAoQArApAGA3QAGAwgYAtQASAiABAlQABAngSAlQgTAlgfAWQgaASghAHQANAogJAoQAYAFAWANQArAaAVAyQAMAeAAAdQARAFAQAKQAsAaAVAyQAUAzgNAxQgJAlgbAdQgaAegkANQgZAKgaAAQgaAAgagJg");
	var mask_8_graphics_73 = new cjs.Graphics().p("Ah2RLQg3gSgdgsQgegtAFg5QAFg5AlgnQAQgQATgKQgSgiABgnIgBgBQg3gSgdgsQgegtAFg5IAEgVIgPgFQg3gSgdgsQgegtAFg5QAFg5AlgnQAigiAxgKQgLgoAKgrQAFgVAJgRQgKgTgFgWQgFgXABgWQgUgBgUgHQg3gSgdgsQgegsAFg5QACgSAFgQIgIgCQg3gSgdgtQgegsAFg5QAFg6AlgmIAGgFQgNgNgKgPQgegsAFg5QAFg6AlgmQAkgmA3gIQgFgXACgZQAFg6AlgmQAlgnA5gHQAXgDAVACIAAgHQAFg6AlgmQAlgnA5gHQA5gIAtAbIANAJIAKgMQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSQgagJgUgOIgIAJQgaAdgjAOQglAOgogGQAAAQgFARQgJAkgbAeQgaAdgkAOQgPAGgQACQAJAlgKAkQgJAkgbAeIgIAJQAXAWAOAhQAUAygNAyIgCAHQAVAFATALQAsAbAVAyQAOAkgCAjQA3ADAsApQArApAGA2QAGAwgYAtQASAiABAlQABAngSAlQgTAlgfAWQgaASghAHQANAogJAoQAYAFAWANQArAaAVAyQAMAeAAAdQARAFAQAKQAsAaAVAyQAUAzgNAxQgJAlgbAdQgRATgUAMIAGANQAUAzgNAxQgJAlgbAdQgaAegjANQgZAKgbAAQgaAAgagJg");
	var mask_8_graphics_74 = new cjs.Graphics().p("AgcSgQg3gSgdgsQgegtAFg5IACgMQgqgTgZglQgegtAFg5QAFg5AlgnQAQgQATgKQgSgiABgnIgBgBQg3gSgdgsQgegtAFg5IAEgVIgPgFQg3gSgdgsQgegtAFg5QAFg5AlgnQAigiAxgKQgLgoAKgrQAFgVAJgRQgKgTgFgVQgFgXABgWQgUgBgUgHQg3gSgdgtQgegsAFg5QACgSAFgQIgIgCQg3gSgdgtQgegsAFg5QAFg6AlgmIAGgFQgNgNgKgPQgegsAFg5QAFg6AlgmQAkgmA3gIQgFgXACgZQAFg6AlgmQAlgnA5gHQAXgDAVACIAAgHQAFg6AlgmQAlgnA5gHQA5gIAtAbIANAJIAKgMQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSQgagJgUgOIgIAJQgaAdgjAOQglAOgogGQAAAQgFARQgJAkgbAeQgaAdgkAOQgPAGgQACQAJAlgKAkQgJAkgbAeIgIAJQAXAWAOAhQAUAygNAyIgCAHQAVAFATALQAsAbAVAyQAOAkgCAjQA3ADAsApQArApAGA3QAGAwgYAsQASAiABAlQABAngSAlQgTAlgfAWQgaASghAHQANAogJAoQAYAFAWANQArAaAVAyQAMAeAAAdQARAFAQAKQAsAaAVAyQAUAzgNAxQgJAlgbAdQgRATgUAMIAGANQARAsgHAqIAPAIQAsAaAVAyQAUAzgNAxQgJAlgbAdQgaAegkANQgZAKgbAAQgZAAgagJg");
	var mask_8_graphics_75 = new cjs.Graphics().p("ACDT1Qg3gSgdgsQgdgsAEg3QgYAAgagJQg3gSgdgsQgegtAFg5IACgMQgqgTgZglQgegtAFg5QAFg5AlgnQAQgQATgKQgSgiABgnIgBgBQg3gSgdgsQgegtAFg5IAEgVIgPgFQg3gSgdgsQgegtAFg5QAFg5AlgnQAigiAxgKQgLgoAKgqQAFgVAJgRQgKgTgFgWQgFgXABgWQgUgBgUgHQg3gSgdgtQgegsAFg5QACgSAFgQIgIgCQg3gSgdgtQgegsAFg5QAFg6AlgmIAGgFQgNgNgKgPQgegsAFg5QAFg6AlgmQAkgmA3gIQgFgXACgZQAFg6AlgmQAlgnA5gHQAXgDAVACIAAgHQAFg6AlgmQAlgnA5gHQA5gIAtAbIANAJIAKgMQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSQgagJgUgOIgIAJQgaAdgjAOQglAOgogGQAAAQgFARQgJAkgbAeQgaAdgkAOQgPAGgQACQAJAlgKAkQgJAkgbAeIgIAJQAXAWAOAhQAUAygNAyIgCAHQAVAFATALQAsAbAVAyQAOAkgCAjQA3ADAsApQArApAGA3QAGAwgYAtQASAiABAkQABAngSAlQgTAlgfAWQgaASghAHQANAogJAoQAYAFAWANQArAaAVAyQAMAeAAAdQARAFAQAKQAsAaAVAyQAUAzgNAxQgJAlgbAdQgRATgUAMIAGANQARAsgHAqIAPAIQAsAaAVAyQAPAlgDAkQAtgCAmAXQAsAaAVAyQAUAzgNAxQgJAlgbAdQgaAegkANQgZAKgbAAQgaAAgagJg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_8_graphics_61,x:181.016,y:161.0977}).wait(1).to({graphics:mask_8_graphics_62,x:169.516,y:162.5977}).wait(1).to({graphics:mask_8_graphics_63,x:158.516,y:164.0977}).wait(1).to({graphics:mask_8_graphics_64,x:149.516,y:171.5977}).wait(1).to({graphics:mask_8_graphics_65,x:143.016,y:181.0977}).wait(1).to({graphics:mask_8_graphics_66,x:143.016,y:192.5977}).wait(1).to({graphics:mask_8_graphics_67,x:143.016,y:202.5977}).wait(1).to({graphics:mask_8_graphics_68,x:143.016,y:211.0693}).wait(1).to({graphics:mask_8_graphics_69,x:143.016,y:218.5824}).wait(1).to({graphics:mask_8_graphics_70,x:143.016,y:228.5727}).wait(1).to({graphics:mask_8_graphics_71,x:143.016,y:238.0727}).wait(1).to({graphics:mask_8_graphics_72,x:143.016,y:245.5727}).wait(1).to({graphics:mask_8_graphics_73,x:143.016,y:256.0727}).wait(1).to({graphics:mask_8_graphics_74,x:143.016,y:264.5727}).wait(1).to({graphics:mask_8_graphics_75,x:143.016,y:273.0727}).wait(65));

	// lady04
	this.instance_14 = new lib.CachedBmp_6();
	this.instance_14.setTransform(99.25,158.25,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(61).to({_off:false},0).wait(79));

	// 圖層_19
	this.instance_15 = new lib.手握筆();
	this.instance_15.setTransform(285.05,220.1,1,1,0,0,0,218.7,131.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(47).to({_off:false},0).wait(1).to({x:280.05,y:242.1},0).wait(1).to({x:268.05,y:263.1},0).wait(1).to({x:250.05,y:270.1},0).wait(1).to({x:230.05,y:278.1},0).wait(1).to({x:217.05,y:296.1},0).wait(1).to({x:225.05,y:312.1},0).wait(1).to({x:240.05,y:327.1},0).wait(1).to({x:249.05,y:346.1},0).wait(1).to({x:244.05,y:370.1},0).wait(1).to({x:249.05,y:391.1},0).wait(1).to({x:245.05,y:406.1},0).wait(1).to({x:243.05,y:420.1},0).to({_off:true},1).wait(80));

	// 圖層_18 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_47 = new cjs.Graphics().p("AgwCWQg3gSgdgtQgegsAFg4QAFg6AlgmQAlgnA5gHQA4gIAuAbQAsAbAVAyQAUAygNAxQgJAkgbAeQgaAdgkAOQgZAJgbAAQgZAAgagIg");
	var mask_9_graphics_48 = new cjs.Graphics().p("AgwEEQg3gSgdgtQgegsAFg5QAFg6AlgmIABAAQgKgKgIgMQgegsAFg5QAFg6AlgmQAlgnA5gHQA4gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeIgDADQAUAUAMAeQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgZAAgagIg");
	var mask_9_graphics_49 = new cjs.Graphics().p("AhdFyQg3gSgdgtQgegsAFg5QAFg6AlgmQAbgcAkgMQgTgmAEgtQAFg6AlgmIABgBQgKgKgIgMQgegsAFg5QAFg6AlgmQAlgnA4gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeIgDADQAUAVAMAeQAUAygNAxQgJAkgbAeQgaAdgkAOIgDABIAEAKQAUAygNAyQgJAkgbAeQgaAdgkAOQgYAJgbAAQgaAAgagIg");
	var mask_9_graphics_50 = new cjs.Graphics().p("AioG9Qg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHIAOgCIAAgGQAFg6AlgmQAbgcAkgLQgTgmAEguQAFg6AkgmIABgBQgJgKgIgMQgegsAFg5QAFg6AkgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeIgDADQAUAVAMAeQAUAygNAyQgJAjgbAeQgaAdgkAOIgDABIAEAKQAUAygNAyQgJAkgbAeQgaAdgkAOQgXAIgYABQgBAQgEAQQgJAkgaAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_9_graphics_51 = new cjs.Graphics().p("AkRHbQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA0gIArAXQAJgQAMgNQAlgnA5gHIAOgCIAAgGQAFg6AkgmQAbgbAkgMQgTgmAEguQAFg6AlgmIABgBQgKgKgIgMQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeIgDADQAUAVAMAeQAUAygNAyQgJAkgbAdQgaAdgkAOIgDABIAEAKQAUAygNAyQgJAkgbAeQgaAdgkAOQgXAIgYABQgBAQgEAQQgJAkgbAeQgaAdgkAOQgxATg2gSQgNgFgLgFQgJANgLANQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_9_graphics_52 = new cjs.Graphics().p("AlmINQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQAXgEAUADQALgeAWgXQAlgnA5gHQA0gIArAXQAJgQAMgNQAlgnA4gHIAOgCIAAgGQAFg5AlgmQAbgcAkgMQgTgmAEguQAFg6AlgmIABgBQgKgKgIgMQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeIgDADQAUAVAMAeQAUAygNAyQgJAkgbAeQgaAdgkAOIgDABIAEAJQAUAygNAyQgJAkgbAeQgaAdgkAOQgXAIgYABQgBAQgEAQQgJAkgbAeQgaAdgkAOQgyATg2gSQgNgFgKgFQgJANgLANQgaAdgkAOQglAOgogHQgKAbgVAXQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_9_graphics_53 = new cjs.Graphics().p("AmEJsQg3gSgdgtQgegsAFg5QAFg6AlgmQANgNAOgKQgMghADgmQAFg6AlgmQAlgnA5gHQAXgEAUADQALgeAWgXQAlgnA5gHQA0gIArAXQAJgQAMgNQAkgmA5gHIAOgCIAAgGQAFg6AlgmQAbgcAkgMQgTgmAEguQAFg6AlgmIABgBQgKgKgIgMQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeIgDADQAUAVAMAeQAUAygNAyQgJAkgbAeQgaAdgkAOIgDABIAEAKQAUAygNAxQgJAkgbAeQgaAdgkAOQgXAIgYABQgBAQgEAQQgJAkgbAeQgaAdgkAOQgyATg2gSQgNgFgLgFQgJANgLANQgZAdgkAOQglAOgogHQgKAbgVAXQgOAPgQALQATAxgNAxQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_9_graphics_54 = new cjs.Graphics().p("AkLLGQg3gRgegtQgdgsAEg6IACgNIgNgDQg3gSgdgtQgegsAFg5QAFg6AlgmQANgNAOgKQgMghADgmQAFg6AlgmQAlgnA5gHQAXgDAUACQALgeAWgWQAlgnA5gHQA0gIArAXQAJgQAMgNQAkgnA5gHIAOgCIAAgGQAFg6AlgmQAbgcAkgMQgTgmAEguQAFg6AlgmIABgBQgKgKgIgMQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeIgDADQAUAWAMAdQAUAygNAyQgJAkgbAeQgaAdgkAOIgDABIAEAKQAUAygNAyQgJAkgbAeQgaAcgkAOQgXAIgYABQgBAQgEAQQgJAkgbAeQgaAdgkAOQgyATg2gSQgNgFgLgFQgJANgLANQgZAdgkAOQglAOgogHQgKAbgVAXQgOAPgQALQAQAqgHApQAYAFAVANQAsAbAVAyQAUAygNAyQgKAkgZAdQgaAdgjAOQgaAKgdAAQgYAAgagIg");
	var mask_9_graphics_55 = new cjs.Graphics().p("AhfMOQgigKgbgZQgcgZgNghQgIgUgCgVQgdACgfgKQg3gRgegtQgdgsAEg6IACgNIgNgDQg3gSgdgtQgegsAFg5QAFg6AlgmQANgNAOgKQgMghADgmQAFg6AlgmQAlgmA5gHQAXgDAUACQALgeAWgXQAlgnA5gHQA0gIArAXQAJgQAMgNQAkgnA5gHIAOgCIAAgGQAFg6AlgmQAbgcAkgMQgTgmAEguQAFg6AlgmIABgBQgKgKgIgMQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeIgDADQAUAWAMAdQAUAygNAyQgJAkgbAeQgaAdgkAOIgDABIAEAKQAUAygNAyQgJAkgbAeQgaAdgkAOQgXAIgYABQgBAQgEAPQgJAkgbAeQgaAdgkAOQgyATg2gSQgNgFgLgFQgJANgLANQgZAdgkAOQglAOgogHQgKAbgVAXQgOAPgQALQAQAqgHApQAYAFAVANQAsAbAVAyQAIAVADAVQA0gEAqAaQAhAUAVAkQAVAjABAoQABAngSAlQgTAlggAWQgdAUgkAGQgNACgMAAQgXAAgWgGg");
	var mask_9_graphics_56 = new cjs.Graphics().p("AhsN+Qg3gSgdgsQgegtAFg5QAFg5AlgnIALgKQgWgWgLgcQgIgUgCgVQgdACgfgKQg3gRgegtQgdgsAEg6IACgMIgNgEQg3gSgdgtQgegsAFg5QAFg6AlgmQANgNAOgJQgMgiADglQAFg6AlgmQAlgnA5gHQAXgDAUACQALgeAWgXQAlgnA5gHQA0gIArAXQAJgQAMgNQAkgnA5gHIAOgCIAAgGQAFg6AlgmQAbgcAkgLQgTgnAEguQAFg6AlgmIABAAQgKgLgIgMQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeIgDAEQAUAVAMAdQAUAygNAyQgJAkgbAeQgaAdgkAOIgDABIAEAKQAUAygNAyQgJAkgbAeQgaAdgkAOQgXAJgYABQgBAPgEAQQgJAkgbAeQgaAdgkAOQgyASg2gRQgNgEgLgGQgJANgLAMQgZAdgkAOQglAOgogGQgKAagVAXQgOAPgQAMQAQApgHApQAYAGAVAMQAsAbAVAyQAIAVADAVQA0gEAqAaQAhAUAVAkQAVAjABAoQABAngSAlQgOAcgXAUQAUAVAMAdQAUAzgNAxQgJAlgbAdQgaAegjANQgZAKgbAAQgaAAgagJg");
	var mask_9_graphics_57 = new cjs.Graphics().p("AhsPnQg3gSgdgsQgegtAFg5QAFg2AhglQgHgIgGgJQgegtAFg5QAFg5AlgnIALgKQgWgWgLgcQgIgUgCgVQgdACgfgKQg3gRgegtQgdgsAEg6IACgMIgNgEQg3gSgdgtQgegsAFg5QAFg6AlglQANgNAOgJQgMgiADgmQAFg6AlgmQAlgnA5gHQAXgDAUACQALgeAWgXQAlgnA5gHQA0gIArAXQAJgQAMgNQAkgnA5gHIAOgCIAAgGQAFg6AlgmQAbgcAkgLQgTgnAEguQAFg6AlgmIABAAQgKgLgIgMQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeIgDAEQAUAVAMAdQAUAygNAyQgJAkgbAeQgaAdgkAOIgDABIAEAKQAUAygNAyQgJAkgbAeQgaAdgkAOQgXAJgYABQgBAPgEAQQgJAkgbAeQgaAdgkAOQgyATg2gSQgNgEgLgGQgJANgLANQgZAdgkAOQglAOgogGQgKAagVAWQgOAPgQAMQAQApgHApQAYAGAVAMQAsAbAVAyQAIAVADAVQA0gEAqAaQAhAUAVAkQAVAjABAoQABAngSAlQgOAcgXAUQAUAVAMAdQAUAzgNAxQgJAkgaAdQARAUALAZQAUAzgNAxQgJAlgbAdQgaAegjANQgZAKgbAAQgaAAgagJg");
	var mask_9_graphics_58 = new cjs.Graphics().p("AhsQtQg3gSgdgsQgegtAFg5QADgeAMgaQgTgmAEguQAFg2AhglQgHgIgGgJQgegtAFg5QAFg5AlgnIALgKQgWgWgLgcQgIgUgCgVQgdACgfgKQg3gRgegtQgdgsAEg6IACgMIgNgEQg3gSgdgtQgegsAFg5QAFg5AlgmQANgNAOgJQgMgiADgmQAFg6AlgmQAlgnA5gHQAXgDAUACQALgeAWgXQAlgnA5gHQA0gIArAXQAJgQAMgNQAkgnA5gHIAOgCIAAgGQAFg6AlgmQAbgcAkgLQgTgnAEguQAFg6AlgmIABAAQgKgLgIgMQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeIgDAEQAUAVAMAdQAUAygNAyQgJAkgbAeQgaAdgkAOIgDABIAEAKQAUAygNAyQgJAkgbAeQgaAdgkAOQgXAJgYABQgBAPgEAQQgJAkgbAeQgaAdgkAOQgyATg2gSQgNgEgLgGQgJANgLANQgZAdgkAOQglAOgogGQgKAagVAXQgOAPgQAMQAQAogHApQAYAGAVAMQAsAbAVAyQAIAVADAVQA0gEAqAaQAhAUAVAkQAVAjABAoQABAngSAlQgOAcgXAUQAUAVAMAdQAUAzgNAxQgJAkgaAdQARAUALAZQAUAzgNAxQgEAQgHAPIAEAJQAUAzgNAxQgJAlgbAdQgaAegjANQgZAKgbAAQgaAAgagJg");
	var mask_9_graphics_59 = new cjs.Graphics().p("AiKRuQg3gSgdgsQgegtAFg5QAFgxAbgjQgEgWACgYQADgeAMgaQgTgmAEguQAFg2AhglQgHgIgGgJQgegtAFg5QAFg5AlgnIALgKQgWgWgLgcQgIgUgCgVQgdACgfgKQg3gRgegtQgdgsAEg6IACgMIgNgEQg3gSgdgtQgegrAFg5QAFg6AlgmQANgNAOgJQgMgiADgmQAFg6AlgmQAlgnA5gHQAXgDAUACQALgeAWgXQAlgnA5gHQA0gIArAXQAJgQAMgNQAkgnA5gHIAOgCIAAgGQAFg6AlgmQAbgcAkgLQgTgnAEguQAFg6AlgmIABAAQgKgLgIgMQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeIgDAEQAUAVAMAdQAUAygNAyQgJAkgbAeQgaAdgkAOIgDABIAEAKQAUAygNAyQgJAkgbAeQgaAdgkAOQgXAJgYABQgBAPgEAQQgJAkgbAeQgaAdgkAOQgyATg2gSQgNgEgLgGQgJANgLANQgZAdgkAOQglAOgogGQgKAagVAXQgOAPgQAMQAQApgHApQAYAGAVAMQAsAaAVAyQAIAVADAVQA0gEAqAaQAhAUAVAkQAVAjABAoQABAngSAlQgOAcgXAUQAUAVAMAdQAUAzgNAxQgJAkgaAdQARAUALAZQAUAzgNAxQgEAQgHAPIAEAJQAUAzgNAxQgIAggUAaQAIAkgKAkQgJAlgbAdQgaAegjANQgZAKgbAAQgaAAgagJg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_9_graphics_47,x:201.016,y:150.0977}).wait(1).to({graphics:mask_9_graphics_48,x:201.016,y:161.0977}).wait(1).to({graphics:mask_9_graphics_49,x:196.516,y:172.0977}).wait(1).to({graphics:mask_9_graphics_50,x:189.016,y:179.5977}).wait(1).to({graphics:mask_9_graphics_51,x:178.516,y:182.5977}).wait(1).to({graphics:mask_9_graphics_52,x:170.016,y:187.5977}).wait(1).to({graphics:mask_9_graphics_53,x:167.016,y:197.0977}).wait(1).to({graphics:mask_9_graphics_54,x:167.016,y:206.0807}).wait(1).to({graphics:mask_9_graphics_55,x:167.016,y:213.0824}).wait(1).to({graphics:mask_9_graphics_56,x:167.016,y:224.5727}).wait(1).to({graphics:mask_9_graphics_57,x:167.016,y:235.0727}).wait(1).to({graphics:mask_9_graphics_58,x:167.016,y:242.0727}).wait(1).to({graphics:mask_9_graphics_59,x:167.016,y:248.5727}).wait(81));

	// lady03
	this.instance_16 = new lib.CachedBmp_7();
	this.instance_16.setTransform(128,146.85,0.5,0.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(47).to({_off:false},0).wait(93));

	// 圖層_17
	this.instance_17 = new lib.手握筆();
	this.instance_17.setTransform(350.45,239.5,1,1,0,0,0,218.7,131.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(31).to({_off:false},0).wait(1).to({x:367.45,y:250.5},0).wait(1).to({x:385.1,y:263.1},0).wait(1).to({x:405.7,y:276.7},0).wait(1).to({x:411,y:242.7},0).wait(1).to({x:413,y:222.7},0).wait(1).to({y:202.7},0).wait(1).to({x:409,y:179.7},0).wait(1).to({x:393,y:161.7},0).wait(1).to({x:375,y:151.7},0).wait(1).to({x:356,y:141.7},0).wait(1).to({x:333},0).wait(1).to({x:312,y:146.7},0).wait(1).to({x:294,y:158.7},0).wait(1).to({x:277,y:174.7},0).to({_off:true},1).wait(94));

	// 圖層_16 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_31 = new cjs.Graphics().p("AgwCWQg3gSgdgtQgegsAFg4QAFg6AlgmQAlgnA5gHQA4gIAuAbQAsAbAVAyQAUAygNAxQgJAkgbAeQgaAdgkAOQgZAJgbAAQgZAAgagIg");
	var mask_10_graphics_32 = new cjs.Graphics().p("AAkDSQg2gSgdgtQgPgXgGgaQggACghgKQg3gSgdgtQgegrAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQArAbAVAyQAFALADAMQA1gGAsAaQAsAbAVAxQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_10_graphics_33 = new cjs.Graphics().p("ACDEOQg3gSgdgtQgQgYgGgcQgoAJgrgOQg3gSgdgtQgPgXgGgaQggACghgKQg3gSgdgsQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAFALADAMQA0gGAsAaQAsAbAVAyQAFANADANIAOgCQA5gIAuAbQAsAaAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_10_graphics_34 = new cjs.Graphics().p("ADnFKQg3gSgdgtQgRgZgGgeQgtAOgwgQQg2gSgdgtQgQgYgGgcQgpAJgrgOQg3gSgdgtQgPgXgGgZQggACghgKQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAFALADAMQA1gGAsAaQArAbAVAyQAFANADANIAOgCQA5gIAuAbQAsAbAVAxQAGAOADAOQALgDAMgBQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_10_graphics_35 = new cjs.Graphics().p("AChFKQg3gSgdgtQgRgZgGgeQgtAOgvgQQg3gSgdgtQgQgYgGgcQgpAJgrgOQg3gSgdgtQgPgXgGgZQggACghgKQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAFALADAMQA1gGAsAaQAsAbAVAyQAFANADANIAOgCQA4gIAuAbQAsAbAVAxQAGAOADAOQALgDAMgBIAFgBQAFg3AkglQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAxgNAyQgJAkgbAeQgaAdgkAOQgSAHgUACQgBALgDALQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_10_graphics_36 = new cjs.Graphics().p("AChFKQg3gSgdgtQgRgZgGgeQgtAOgvgQQg3gSgdgtQgQgYgGgcQgpAJgrgOQg3gSgdgtQgPgXgGgZQggACghgKQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAFALADAMQA1gGAsAaQAsAbAVAyQAFANADANIAOgCQA4gIAuAbQAsAbAVAxQAGAOADAOQALgDAMgBIAFgBQAFgzAgglQgHgIgGgJQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAjgaAdQARAUALAaQAUAxgNAyQgJAkgbAeQgaAdgkAOQgSAHgUACQgBALgDALQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_10_graphics_37 = new cjs.Graphics().p("ACSGuQg3gSgdgtQgRgZgGgeQgsAOgwgQQg3gSgdgtQgQgYgGgcQgpAJgrgOQg3gSgdgtQgPgXgGgaQggACghgKQg3gSgdgtQgegrAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAFALADAMQA1gGAsAaQAsAbAVAyQAFANADAMIAOgCQA4gHAuAaQAsAbAVAyQAGAOADAOQALgDAMgBIAFgBQAFg0AgglQgHgIgGgJQgegrAFg5QAFg6AlgmIANgMIAAgBQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgHAIgJAHQAJANAGAQQAUAygNAyQgJAigaAdQARAUALAaQAUAygNAyQgJAkgbAeQgaAdgkAOQgSAHgUACQgBALgDALQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_10_graphics_38 = new cjs.Graphics().p("ACSIhQg3gSgdgtQgRgZgGgeQgsAOgwgQQg3gSgdgtQgQgYgGgcQgpAJgrgOQg3gSgdgtQgPgXgGgaQggACghgKQg3gSgdgtQgegsAFg5QAFg5AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAFALADAMQA1gGAsAZQAsAbAVAyQAFANADANIAOgCQA4gIAuAbQAsAbAVAyQAGAOADAOQALgDAMgBIAFgBQAFg0AgglQgHgIgGgJQgegsAFg5QAFg5AlgmIANgMIAAgBQgegsAFg5QAFg3AiglQgUgQgOgVQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgaAdQAgAZAQAoQAUAygNAyQgJAkgbAeQgHAIgJAHQAJANAGAQQAUAxgNAyQgJAjgaAdQARAUALAaQAUAygNAyQgJAkgbAeQgaAdgkAOQgSAHgUACQgBALgDALQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_10_graphics_39 = new cjs.Graphics().p("ACSKFQg3gSgdgtQgRgZgGgeQgsAOgwgQQg3gSgdgtQgQgYgGgcQgpAJgrgOQg3gSgdgtQgPgXgGgaQggACghgKQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgmA5gHQA5gIAuAbQAsAaAVAyQAFALADAMQA1gGAsAaQAsAbAVAyQAFANADANIAOgCQA4gIAuAbQAsAbAVAyQAGAOADAOQALgDAMgBIAFgBQAFg0AgglQgHgIgGgJQgegsAFg5QAFg6AlgmIANgMIAAgBQgegrAFg5QAFg3AiglQgUgQgOgVQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAUAygNAyQgJAkgaAdQAgAZAQAoQAUAygNAyQgJAjgbAeQgHAIgJAHQAJANAGAQQAUAygNAyQgJAjgaAdQARAUALAaQAUAygNAyQgJAkgbAeQgaAdgkAOQgSAHgUACQgBALgDALQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_10_graphics_40 = new cjs.Graphics().p("ACSLLQg3gSgdgtQgRgZgGgeQgsAOgwgQQg3gSgdgtQgQgYgGgcQgpAJgrgOQg3gSgdgtQgPgXgGgaQggACghgKQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAFALADAMQA1gGAsAaQAsAbAVAyQAFANADANIAOgCQA4gIAuAbQAsAbAVAyQAGAOADAOQALgDAMgBIAFgBQAFg0AgglQgHgIgGgJQgegsAFg5QAFg6AlgmIANgMIAAgBQgegsAFg4QAFg3AiglQgUgQgOgVQgegsAFg5QACgWAGgSQgvgTgagoQgVgfgEgmQgZAAgagIQg2gSgdgtQgegsAFg5QAFg6AlgmQAkgnA5gHQA5gIAuAbQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAUAygNAyQgJAkgaAdQAgAZAQAoQAUAygNAxQgJAkgbAeQgHAIgJAHQAJANAGAQQAUAygNAyQgJAjgaAdQARAUALAaQAUAygNAyQgJAkgbAeQgaAdgkAOQgSAHgUACQgBALgDALQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_10_graphics_41 = new cjs.Graphics().p("ACSL4Qg3gSgdgtQgRgZgGgeQgsAOgwgQQg3gSgdgtQgQgYgGgcQgpAJgrgOQg3gSgdgtQgPgXgGgaQggACghgKQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAFALADAMQA1gGAsAaQAsAbAVAyQAFANADANIAOgCQA4gIAuAbQAsAbAVAyQAGAOADAOQALgDAMgBIAFgBQAFg0AgglQgHgIgGgJQgegsAFg5QAFg6AlgmIANgMIAAgBQgegsAFg5QAFg2AiglQgUgQgOgVQgegsAFg5QACgWAGgSQgvgTgagoQgVgfgEgmQgZAAgagIQg2gSgdgtQgKgPgGgQIgGADQgyATg2gSQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQArAbAVAyIACAEQASgIAWgCQA5gIAuAbQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAUAygNAyQgJAkgaAdQAgAZAQAoQAUAxgNAyQgJAkgbAeQgHAIgJAHQAJANAGAQQAUAygNAyQgJAjgaAdQARAUALAaQAUAygNAyQgJAkgbAeQgaAdgkAOQgSAHgUACQgBALgDALQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_10_graphics_42 = new cjs.Graphics().p("ACSMbQg3gSgdgtQgRgZgGgeQgsAOgwgQQg3gSgdgtQgQgYgGgcQgpAJgrgOQg3gSgdgtQgPgXgGgaQggACghgKQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAFALADAMQA1gGAsAaQAsAbAVAyQAFANADANIAOgCQA4gIAuAbQAsAbAVAyQAGAOADAOQALgDAMgBIAFgBQAFg0AgglQgHgIgGgJQgegsAFg5QAFg6AlgmIANgMIAAgBQgegsAFg5QAFg3AigkQgUgQgOgVQgegsAFg5QACgWAGgSQgvgTgagoQgVgfgEgmQgZAAgagIQg2gSgdgtQgKgPgGgQIgGADQgyATg2gSQg3gSgdgtIgHgKIgFACQgyATg2gSQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAlAWAUAnQATgIAVgCQA5gIAuAbQArAbAVAyIACAEQASgIAWgCQA5gIAuAbQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAUAygNAyQgJAkgaAdQAgAZAQAnQAUAygNAyQgJAkgbAeQgHAIgJAHQAJANAGAQQAUAygNAyQgJAjgaAdQARAUALAaQAUAygNAyQgJAkgbAeQgaAdgkAOQgSAHgUACQgBALgDALQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_10_graphics_43 = new cjs.Graphics().p("ADsMbQg3gSgdgtQgRgZgGgeQgtAOgwgQQg2gSgdgtQgQgYgGgcQgpAJgrgOQg3gSgdgtQgPgXgGgaQggACghgKQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAFALADAMQA1gGAsAaQArAbAVAyQAFANADANIAOgCQA5gIAuAbQAsAbAVAyQAGAOADAOQALgDAMgBIAFgBQAFg0AgglQgHgIgGgJQgegsAFg5QAFg6AlgmIANgMIAAgBQgegsAFg5QAFg3AigkQgUgQgOgVQgegsAFg5QACgWAGgSQgvgTgagoQgVgfgEgmQgZAAgagIQg3gSgdgtQgKgPgGgQIgGADQgxATg2gSQg3gSgdgtIgHgKIgFACQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAlAWAUAnQATgIAVgCQA4gIAuAbQAsAbAVAyIACAEQASgIAWgCQA5gIAuAbQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAUAygNAyQgJAkgaAdQAgAZAQAnQAUAygNAyQgJAkgbAeQgHAIgJAHQAJANAGAQQAUAygNAyQgJAjgaAdQARAUALAaQAUAygNAyQgJAkgbAeQgaAdgkAOQgSAHgUACQgBALgDALQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_10_graphics_44 = new cjs.Graphics().p("AFQMbQg3gSgdgtQgRgZgGgeQgtAOgwgQQg3gSgdgtQgQgYgGgcQgoAJgrgOQg3gSgdgtQgPgXgGgaQggACghgKQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAFALADAMQA0gGAsAaQAsAbAVAyQAFANADANIAOgCQA5gIAuAbQAsAbAVAyQAGAOADAOQALgDAMgBIAFgBQAFg0AgglQgHgIgGgJQgegsAFg5QAFg6AlgmIANgMIAAgBQgegsAFg5QAFg3AigkQgUgQgOgVQgegsAFg5QACgWAGgSQgvgTgagoQgVgfgEgmQgZAAgagIQg3gSgdgtQgKgPgGgQIgGADQgyATg2gSQg2gSgdgtIgHgKIgFACQgyATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSIgIgDQgJAVgRASQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQAqgGAkANQAKgXASgSQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA5gIAuAbQAlAWATAnQATgIAVgCQA5gIAuAbQAsAbAVAyIACAEQASgIAWgCQA5gIAuAbQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAUAygNAyQgJAkgaAdQAgAZAQAnQAUAygNAyQgJAkgbAeQgHAIgJAHQAJANAGAQQAUAygNAyQgJAjgaAdQARAUALAaQAUAygNAyQgJAkgbAeQgaAdgkAOQgSAHgUACQgBALgDALQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_10_graphics_45 = new cjs.Graphics().p("AGqMbQg3gSgdgtQgRgZgGgeQgtAOgwgQQg3gSgdgtQgQgYgGgcQgpAJgrgOQg2gSgdgtQgPgXgGgaQggACghgKQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQArAbAVAyQAFALADAMQA1gGAsAaQAsAbAVAyQAFANADANIAOgCQA5gIAuAbQAsAbAVAyQAGAOADAOQALgDAMgBIAFgBQAFg0AgglQgHgIgGgJQgegsAFg5QAFg6AlgmIANgMIAAgBQgegsAFg5QAFg3AigkQgUgQgOgVQgegsAFg5QACgWAGgSQgvgTgagoQgVgfgEgmQgZAAgagIQg3gSgdgtQgKgPgGgQIgGADQgyATg2gSQg3gSgdgtIgHgKIgFACQgxATg2gSQgegKgWgSIgMAOQgaAdgkAOQgyATg2gSIgIgDQgJAVgRASQgaAdgkAOQglAOgogHQACAbgHAbQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5QAFg6AlgmQAlgnA5gHQAXgEAVADQgBgNABgOQAFg6AlgmQAlgnA5gHQAqgGAkANQAKgXASgSQAlgnA5gHQA5gIAuAbQAKAGAJAIQAHgJAHgIQAlgnA5gHQA4gIAuAbQAlAWAUAnQATgIAVgCQA5gIAuAbQAsAbAVAyIACAEQASgIAWgCQA5gIAuAbQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAUAygNAyQgJAkgaAdQAgAZAQAnQAUAygNAyQgJAkgbAeQgHAIgJAHQAJANAGAQQAUAygNAyQgJAjgaAdQARAUALAaQAUAygNAyQgJAkgbAeQgaAdgkAOQgSAHgUACQgBALgDALQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_10_graphics_31,x:256.016,y:175.0977}).wait(1).to({graphics:mask_10_graphics_32,x:264.516,y:181.0977}).wait(1).to({graphics:mask_10_graphics_33,x:274.016,y:187.0977}).wait(1).to({graphics:mask_10_graphics_34,x:284.016,y:193.0977}).wait(1).to({graphics:mask_10_graphics_35,x:291.016,y:193.0977}).wait(1).to({graphics:mask_10_graphics_36,x:291.016,y:193.0977}).wait(1).to({graphics:mask_10_graphics_37,x:292.516,y:183.0977}).wait(1).to({graphics:mask_10_graphics_38,x:292.516,y:171.5977}).wait(1).to({graphics:mask_10_graphics_39,x:292.516,y:161.5977}).wait(1).to({graphics:mask_10_graphics_40,x:292.516,y:154.5977}).wait(1).to({graphics:mask_10_graphics_41,x:292.516,y:150.0977}).wait(1).to({graphics:mask_10_graphics_42,x:292.516,y:146.5977}).wait(1).to({graphics:mask_10_graphics_43,x:283.516,y:146.5977}).wait(1).to({graphics:mask_10_graphics_44,x:273.516,y:146.5977}).wait(1).to({graphics:mask_10_graphics_45,x:264.516,y:146.5977}).wait(95));

	// lady02
	this.instance_18 = new lib.CachedBmp_8();
	this.instance_18.setTransform(195.3,77.3,0.5,0.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(31).to({_off:false},0).wait(109));

	// 圖層_14
	this.instance_19 = new lib.手握筆();
	this.instance_19.setTransform(172.05,260.05,1,1,0,0,0,218.7,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:162.3,y:241.05},0).wait(1).to({x:158.3,y:219.1},0).wait(1).to({y:197.1},0).wait(1).to({x:165.3,y:177.1},0).wait(1).to({x:177.3,y:164.1},0).wait(1).to({x:194.3,y:155.1},0).wait(1).to({x:214.3},0).wait(1).to({x:232.3},0).wait(1).to({x:253.3,y:163.1},0).wait(1).to({x:266.3,y:174.3},0).wait(1).to({x:282.3,y:191.3},0).wait(1).to({x:294.3,y:206.3},0).wait(1).to({x:305.3,y:220.1},0).wait(1).to({x:317.3,y:241.1},0).wait(1).to({x:327.3,y:257.1},0).wait(1).to({x:341.3,y:274.1},0).wait(1).to({x:355.3,y:292.1},0).wait(1).to({x:369.3,y:309.1},0).wait(1).to({x:383.3,y:325.1},0).wait(1).to({x:402.3,y:341.1},0).wait(1).to({x:420.3,y:355.1},0).wait(1).to({x:433.3,y:361.1},0).wait(1).to({x:454.3,y:363.1},0).wait(1).to({x:463.3,y:343.1},0).wait(1).to({x:454.3,y:323.1},0).wait(1).to({x:441.3,y:305.1},0).wait(1).to({x:431.3,y:292.1},0).wait(1).to({x:422.3,y:278.15},0).wait(1).to({x:414.3,y:262.15},0).to({_off:true},1).wait(110));

	// 圖層_13 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AgwCWQg3gSgdgtQgegsAFg4QAFg6AlgmQAlgnA5gHQA4gIAuAbQAsAbAVAyQAUAygNAxQgJAkgbAeQgaAdgkAOQgZAJgbAAQgZAAgagIg");
	var mask_11_graphics_1 = new cjs.Graphics().p("AAGDrQg2gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegrAFg5QAFg6AlgmQAlgnA5gHQA5gIAtAbQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAxQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_2 = new cjs.Graphics().p("AAzFPQg2gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgVAGgSQgvgTgagoQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQArAbAVAyQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAmQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_3 = new cjs.Graphics().p("ABCG9Qg3gSgcgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegrAFg5QAEgvAagjQgVgPgOgWQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQArAbAVAyQAUAygNAyQgHAdgTAZQAgAZARApQAUAygNAyIgEAMQALAFALAGQAsAaAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_4 = new cjs.Graphics().p("ABCIrQg3gSgcgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEguAagjQgVgPgOgWQgegsAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQArAbAVAyQAUAygNAyQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAyQgHAdgTAZQAgAZARApQAUAxgNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_5 = new cjs.Graphics().p("ABCJ7Qg3gSgcgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEgvAagjQgVgPgOgVQgegsAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHQA4gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgWAYgcANQAEAdgIAcQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAyQgHAdgTAZQAgAYARApQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_6 = new cjs.Graphics().p("AAuKyQg2gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEgvAagjQgVgPgOgWQgegrAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHIAVgCQAKgkAYgaQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgaAKgcgBQgKAggYAaQgWAYgcANQAEAdgIAcQgJAkgbAeQgJAKgKAJQAKAQAIATQAUAygNAyQgHAcgSAZQAfAZARApQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_7 = new cjs.Graphics().p("AgrLQQg3gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEgvAagjQgVgPgOgWQgegsAFg4QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA4gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSIgBgBIgNARQgaAdgkAOQgaAKgcgBQgKAggYAaQgVAYgcANQAEAdgIAcQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAxQgHAdgTAZQAgAZARApQAUAygNAyIgEAMQALAFALAGQArAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgZAAgagIg");
	var mask_11_graphics_8 = new cjs.Graphics().p("AiKLVQg3gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEgvAagjQgVgPgOgWQgegsAFg4QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAGgKAIgJQAlgnA5gHQA5gIAuAbIAHAEQAhgbAvgGQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQgWgIgRgLQgVASgaAKQgyATg2gSIgBgBIgNARQgaAdgkAOQgZAKgcgBQgKAggYAaQgWAYgcANQAEAdgIAcQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAxQgHAdgTAZQAgAZARApQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQArAbAVAyQAUAygNAyQgJAkgbAeQgaAdgjAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AjuLVQg3gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEgvAagjQgVgPgOgWQgegsAFg4QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA4gHQA5gIAuAbIAHAEQAhgbAvgGQA5gIAuAbQAdARATAcQAWgLAbgDQA5gIAuAbQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg0gRgdgpIgPAHQgyATg2gSQgWgIgRgLQgVASgaAKQgyATg1gSIgBgBIgNARQgaAdgkAOQgaAKgcgBQgKAggYAaQgWAYgcANQAEAdgIAcQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAxQgHAdgTAZQAgAZARApQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_10 = new cjs.Graphics().p("Ak5LVQg3gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEgvAagjQgVgPgOgWQgegsAFg4QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAtAbIAHAEQAhgbAvgGQA5gIAuAbQAdARATAcQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtIgLgTQgbABgcgJQg0gRgdgpIgPAHQgyATg2gSQgWgIgRgLQgVASgaAKQgxATg2gSIgBgBIgNARQgaAdgkAOQgaAKgcgBQgKAggYAaQgWAYgcANQAEAdgIAcQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAxQgHAdgTAZQAgAZARApQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_11 = new cjs.Graphics().p("AmJLVQg3gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEgvAagjQgVgPgOgWQgegsAFg4QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAEQAhgbAugGQA5gIAuAbQAdARATAcQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgVgfgEgmQgZAAgagIQg3gSgdgtIgLgTQgbABgcgJQg0gRgdgpIgPAHQgyATg2gSQgVgIgRgLQgVASgaAKQgyATg2gSIgBgBIgNARQgaAdgkAOQgaAKgcgBQgKAggYAaQgWAYgcANQAEAdgIAcQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAxQgHAdgTAZQAgAZARApQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_12 = new cjs.Graphics().p("AnFLVQg3gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEgvAagjQgVgPgOgWQgegsAFg4QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAEQAhgbAvgGQA4gIAuAbQAdARATAcQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyASg2gRQg3gSgdgtQgWgigDgoIgLgDQg3gSgdgtQgVgfgEgmQgZAAgagIQg3gSgdgtIgLgTQgbABgcgJQg0gRgdgpIgPAHQgyATg1gSQgWgIgRgLQgVASgaAKQgyATg2gSIgBgBIgNARQgaAdgkAOQgaAKgcgBQgKAggYAaQgWAYgcANQAEAdgIAcQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAxQgHAdgTAZQAgAZARApQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AoGLVQg3gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEgvAagjQgVgPgOgWQgegsAFg4QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAEQAhgbAvgGQA5gIAtAbQAdARATAcQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQAUAxgNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IACgKIgXgFQg3gSgdgtQgWgigDgoIgLgDQg3gSgdgtQgVgfgEgmQgZAAgagIQg3gSgdgtIgLgTQgbABgcgJQg0gRgdgpIgOAHQgyATg2gSQgWgIgRgLQgVASgaAKQgyATg2gSIgBgBIgNARQgaAdgkAOQgaAKgcgBQgKAggYAaQgWAYgcANQAEAdgIAcQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAxQgHAdgTAZQAgAZARApQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_14 = new cjs.Graphics().p("ApHLVQg3gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEgvAagjQgVgPgOgWQgegsAFg4QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAEQAhgbAvgGQA5gIAuAbQAdARASAcQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARApgGAqQAcAEAaAPQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgKIgXgFQg3gSgdgtQgWgigDgoIgLgDQg3gSgdgtQgVgfgEgmQgZAAgagIQg3gSgdgtIgLgTQgbABgcgJQgzgRgdgpIgPAHQgyATg2gSQgWgIgRgLQgVASgaAKQgyATg2gSIgBgBIgNARQgaAdgkAOQgaAKgcgBQgKAggYAaQgWAYgcANQAEAdgIAcQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAxQgHAdgTAZQAgAZARApQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_15 = new cjs.Graphics().p("Ap5LVQg3gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEgvAagjQgVgPgOgWQgegsAFg4QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAEQAhgbAvgGQA5gIAuAbQAdARATAcQAWgLAagDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARApgGAqQAcAEAaAPQAsAbAVAyQARApgGApQAMAEAMAHQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IABgJQgxgTgbgpQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgKIgXgFQg3gSgdgtQgWgigDgoIgLgDQg3gSgdgtQgVgfgEgmQgZAAgagIQg3gSgdgtIgLgTQgbABgbgJQg0gRgdgpIgPAHQgyATg2gSQgWgIgRgLQgVASgaAKQgyATg2gSIgBgBIgNARQgaAdgkAOQgaAKgcgBQgKAggYAaQgWAYgcANQAEAdgIAcQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAxQgHAdgTAZQAgAZARApQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_16 = new cjs.Graphics().p("Aq/LVQg3gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEgvAagjQgVgPgOgWQgegsAFg4QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAEQAhgbAvgGQA5gIAuAbQAdARATAcQAWgLAbgDQA5gIAtAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARApgGAqQAcAEAaAPQAsAbAVAyQARApgGApQAMAEAMAHQAsAbAVAyQANAfgBAgQAiADAdARQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgbgoACgyQgQgCgPgFQg3gSgdgtQgegsAFg5IABgJQgxgTgbgpQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgKIgXgFQg3gSgdgtQgWgigDgoIgLgDQg3gSgdgtQgVgfgEgmQgZAAgagIQg3gSgcgtIgLgTQgbABgcgJQg0gRgdgpIgPAHQgyATg2gSQgWgIgRgLQgVASgaAKQgyATg2gSIgBgBIgNARQgaAdgkAOQgaAKgcgBQgKAggYAaQgWAYgcANQAEAdgIAcQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAxQgHAdgTAZQAgAZARApQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_17 = new cjs.Graphics().p("AOAMbQg3gSgdgtQgegsAFg5IACgNIgNgDQg3gSgdgtQgbgoACgyQgQgCgPgFQg3gSgdgtQgegsAFg5IABgJQgxgTgbgpQgegsAFg5IACgKIgXgGQg3gSgdgtQgegrAFg5IACgKIgXgGQg3gSgdgtQgWgigDgoIgLgDQg3gSgdgtQgVgfgEgmQgZAAgZgIQg3gSgdgtIgLgTQgbABgcgJQg0gRgdgpIgPAHQgyATg2gSQgWgIgRgLQgVASgaAKQgyATg2gSIgBgBIgNARQgaAdgkAOQgaAKgcgBQgKAggYAaQgWAYgcANQAEAdgIAcQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAyQgHAdgTAYQAgAZARApQAUAygNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEgvAagjQgVgPgOgWQgegrAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAEQAhgbAvgGQA5gIAuAbQAdARATAcQAWgLAbgDQA5gIAuAbQAoAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAaAVAyQARApgGApQAMAEAMAHQAsAbAVAyQANAfgBAgQAiADAdARQAsAbAVAyQARArgHAqQAYAFAVANQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_18 = new cjs.Graphics().p("APBN1Qg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgNIgNgDQg3gSgdgtQgbgoACgyQgQgCgPgFQg3gSgdgtQgegsAFg5IABgJQgxgTgbgpQgegsAFg5IACgKIgXgGQg3gRgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgWgigDgoIgLgDQg3gSgdgtQgUgfgEgmQgZAAgagIQg3gSgdgtIgLgTQgbABgcgJQg0gRgdgpIgPAHQgyATg2gSQgWgIgRgLQgVASgaAKQgyATg2gSIgBgBIgNARQgaAdgkAOQgaAKgcgBQgKAggYAaQgWAYgcANQAEAdgIAcQgJAkgbAeQgJAKgLAJQALAQAIATQAUAygNAyQgHAdgTAZQAgAZARApQAUAxgNAyIgEAMQALAFALAGQAsAbAVAyQAQAngFAnQASAFAQAKQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IABgGIgCAAQg3gSgdgtQgegsAFg5QACgWAGgSQgvgTgagoQgegsAFg5QAEguAagjQgVgPgOgWQgegsAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgPABgPQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAEQAhgbAvgGQA5gIAuAbQAdARATAcQAWgLAbgDQA5gIAuAbQApAZAVAsQAvgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARAogGApQAMAEAMAHQAsAbAVAyQANAfgBAgQAiADAdARQAsAbAVAyQARArgHAqQAYAFAVANQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgZAJgbAAQgaAAgagIg");
	var mask_11_graphics_19 = new cjs.Graphics().p("AQ5PMQg3gEgngiQgkgggMgxQgEgUAAgTQgbAAgcgJQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgMIgNgEQg3gSgdgtQgbgoACgyQgPgCgQgFQg3gSgdgtQgegsAFg5IABgJQgxgSgbgqQgegsAFg4IACgKIgXgGQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgWghgDgpIgLgDQg2gSgdgtQgVgfgEglQgZAAgagJQg3gSgdgtIgLgSQgbAAgcgJQgzgRgegpIgPAHQgyATg2gSQgWgHgRgMQgVASgaAKQgyATg2gSIgBAAIgNAQQgaAdgkAOQgaAKgcAAQgKAfgYAaQgVAYgdAOQAEAcgIAcQgJAkgbAeQgJALgLAIQALAQAIATQAUAygNAyQgHAdgTAZQAgAZARApQAUAygNAxIgEANQAMAEAKAGQAsAbAVAyQAQAogFAmQASAGAQAJQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IABgFIgCgBQg3gSgdgtQgegsAFg5QACgVAGgTQgugSgbgpQgegsAFg4QAFgvAZgiQgVgQgOgWQgegsAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgOABgQQAFg6AlgmQAlgnA5gHIAVgCQAKgjAZgbQAlgnA5gHQAmgFAhAKQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAFQAhgcAvgGQA5gIAuAbQAdASATAbQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQArAbAVAyQAJAVACAVQAugBAmAWQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQARAqgGAqQAdAEAZAPQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARApgGApQAMAEAMAHQAsAaAVAyQANAggBAfQAiADAdARQAsAbAVAyQASArgIArQAYAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQANAggBAgIAKAAQAyACApAgQAqAhANAvQAOAwgSAxQgTAygpAbQglAagvAAIgOgBg");
	var mask_11_graphics_20 = new cjs.Graphics().p("ASMQWQg9gGgngpQgmgpgDg8QgPABgPgBQg4gEgmgiQgkgggMgyQgFgUAAgTQgbABgcgKQg2gSgegsQgdgtAFg5IABgKIgXgGQg2gSgegsQgdgtAFg5IABgMIgNgEQg2gSgegsQgagoABgyQgPgCgQgGQg2gSgegsQgdgtAFg5IABgIQgxgTgcgoQgdgtAFg5IABgKIgXgGQg2gSgegsQgdgtAFg5IABgKIgXgGQg1gSgegsQgWgigDgoIgLgEQg2gSgegsQgVgfgDgmQgaAAgagJQg2gSgegsIgLgTQgbABgcgKQgzgRgdgoIgPAGQgyATg3gSQgVgHgSgLQgVASgZAJQgyATg3gSIAAAAIgNAQQgbAegjANQgbALgcgBQgKAggXAZQgWAZgcANQADAdgHAbQgKAlgaAdQgKALgLAJQALAPAIATQAVAzgNAxQgIAegTAZQAhAZAQAoQAVAzgNAxIgEANQALAFAKAGQAtAaAUAxQAQAogEAnQARAFAQAKQAtAaAUAyQAVAzgNAxQgKAlgaAdQgbAegjANQgyATg3gSQg2gSgegsQgdgtAFg5IAAgFIgCgBQg2gSgegsQgdgtAFg5QACgVAGgSQgvgTgbgnQgdgtAFg5QAEguAZgjQgUgPgPgWQgdgtAFg5QAFg5AlgnQAIgIAJgHIgFgHQgdgtAFg5QAFg5AlgnQAUgVAbgMQgBgPACgQQAFg5AlgnQAlgmA5gIIAUgBQAKgkAagbQAlgmA5gIQAlgFAhAKQAHgKAJgJQAlgmA5gIQA4gIAuAcIAHAEQAhgbAwgHQA4gIAuAcQAdARATAbQAXgKAbgEQA4gIAuAcQApAYAVAtQAwgDAoAYQAtAaAUAyQAJAWACAVQAtgCAmAXQAtAaAUAyQAKAYACAWQAXAGAUAMQAtAaAUAyQARArgGApQAdAFAZAPQAtAaAUAyQARArgGApQAdAFAZAPQAtAaAUAyQARAqgGAoQANAFALAHQAtAaAUAxQANAgAAAfQAhAEAdARQAtAaAUAyQASAsgHAqQAXAFAVANQAtAaAUAyQARArgGApQAdAFAZAPQAtAaAUAyQANAhAAAfIAKAAQAxACAqAhQApAgAOAwQAFARAAASQA4gHAtAaQAzAfASA3QAQAwgQA0QgRAzgpAeQgoAbgxAAIgTgBg");
	var mask_11_graphics_21 = new cjs.Graphics().p("ASfRIQgngXgVgrQgNgagDgbQgNAAgPgBQg9gGgngpQgmgqgDg8QgPACgPgBQg4gEgmgiQgkgggMgyQgFgUAAgTQgbAAgcgJQg2gSgegsQgdgtAFg5IABgKIgXgGQg2gSgegsQgdgtAFg5IABgMIgNgEQg2gSgegsQgagoABgzQgPgCgQgFQg2gSgegsQgdgtAFg4IABgJQgxgSgcgpQgdgtAFg5IABgKIgXgGQg2gSgegsQgcgtAFg5IABgKIgXgGQg2gSgegsQgWgigDgpIgLgDQg2gSgegsQgVgggDglQgZAAgbgJQg2gSgegsIgLgTQgbAAgcgJQgzgRgdgoIgPAGQgyATg3gSQgVgHgSgLQgVARgZAKQgyATg3gSIAAAAIgNAQQgbAegjANQgbAKgcAAQgKAfgXAaQgWAYgcAOQADAcgHAcQgKAlgaAdQgKALgLAJQALAPAIATQAVAzgNAxQgIAegTAZQAhAZAQAoQAVAzgNAxIgEANQALAEAKAHQAtAaAUAyQAQAngEAnQARAFAQAKQAtAaAUAyQAVAzgNAxQgKAlgaAdQgbAegjANQgyATg3gSQg2gSgegsQgdgtAFg5IAAgFIgCgBQg2gSgegsQgdgtAFg5QACgUAGgTQgvgSgbgoQgdgtAFg5QAEgvAZgiQgUgQgPgVQgdgtAFg5QAFg5AlgnQAIgIAJgHIgFgHQgdgtAFg5QAFg5AlgnQAUgWAbgLQgBgPACgQQAFg5AlgnQAlgmA5gIIAUgCQAKgjAagbQAlgmA5gIQAlgFAhAKQAHgKAJgJQAlgmA5gIQA4gIAuAcIAHAEQAhgcAwgGQA4gIAuAcQAdARATAbQAXgKAbgEQA4gIAuAcQApAYAVAtQAwgDAoAYQAtAaAUAyQAJAVACAVQAugBAmAXQAsAaAUAyQAKAXACAXQAXAFAUANQAtAaAUAyQARAqgGAqQAdAEAZAQQAtAaAUAyQARAqgGAqQAdAEAZAQQAtAaAUAyQARApgGApQANAFALAHQAtAaAUAyQANAgAAAfQAhADAdARQAtAaAUAyQASArgHArQAXAFAVANQAtAaAUAyQARAqgGAqQAdAEAZAQQAtAaAUAyQANAgAAAgIAKAAQAxACAqAhQApAgAOAwQAFARAAASQA4gIAtAbQAzAfASA3QAGAQABAQQAxgDAsAaQAxAdATAxQATAxgQA2QgQA2grAeQgmAbgwACIgIAAQgrAAglgWg");
	var mask_11_graphics_22 = new cjs.Graphics().p("AUBSHQg3gSgdgsQgKgPgGgPQgigEgdgRQgogXgVgsQgMgagDgaQgOAAgOgBQg9gGgngqQgngpgDg8QgOABgQgBQg3gEgngiQgkgggMgxQgEgUAAgTQgbAAgcgJQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgMIgNgEQg3gSgdgtQgbgoACgyQgQgCgPgFQg3gSgdgtQgegrAFg5IABgJQgxgSgbgqQgegsAFg5IACgKIgXgGQg2gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgWghgDgpIgLgDQg3gSgdgtQgVgfgEglQgZgBgagIQg3gSgdgtIgLgSQgbAAgcgJQg0gRgdgpIgPAHQgyATg2gSQgWgHgRgMQgVASgaAKQgyATg2gSIgBAAIgNAQQgaAdgkAOQgaAKgcAAQgKAfgYAaQgWAYgcAOQAEAcgIAcQgJAkgbAeQgJALgLAIQALAQAIATQAUAygNAyQgHAdgTAZQAgAZARApQAUAygNAyIgEANQALAEALAGQAsAbAVAyQAQAngFAnQASAGAQAIQAsAbAVAyQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IABgFIgCgBQg3gSgdgtQgegsAFg4QACgVAGgTQgvgTgagoQgegsAFg5QAEgvAagiQgVgQgOgWQgegsAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgOABgQQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAFQAhgcAvgGQA5gIAuAbQAdASATAbQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAVAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARApgGApQAMAEAMAHQAsAbAVAyQANAfgBAgQAiADAdARQAsAbAVAxQARArgHArQAYAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQANAggBAgIAKAAQAyACApAgQAqAhANAvQAFASABASQA3gIAuAbQAyAeATA4QAFAQACAQQAwgEAtAbQAwAdATAxIABAAQAhADAeASQAsAaAVAyQAUAzgNAxQgJAlgbAdQgaAegkANQgZAKgbAAQgaAAgagJg");
	var mask_11_graphics_23 = new cjs.Graphics().p("AVgS0Qg3gSgdgsQgIgMgFgNQgtANgwgQQg3gSgdgsQgKgPgGgPQgigEgdgRQgogXgVgsQgMgagDgaQgOAAgOgBQg9gGgngqQgngpgDg8QgOABgQgBQg3gEgngiQgkgggMgxQgEgUAAgTQgbAAgcgJQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgMIgNgEQg3gSgdgtQgbgoACgyQgQgCgPgFQg3gSgdgsQgegsAFg5IABgJQgwgSgbgqQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgWghgDgpIgLgDQg3gSgdgtQgVgfgEglQgZgBgagIQg3gSgdgtIgLgSQgbAAgcgJQg0gRgdgpIgPAHQgyATg2gSQgWgHgRgMQgVASgaAKQgyATg2gSIgBAAIgNAQQgaAdgkAOQgaAKgcAAQgKAfgYAaQgWAYgcAOQAEAcgIAcQgJAkgbAeQgJALgLAIQALAQAIATQAUAygNAyQgHAdgTAZQAgAZARApQAUAygNAyIgEANQALAEALAGQAsAbAVAyQAQAngFAnQASAGAQAJQAsAbAVAxQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IABgFIgCgBQg3gSgdgtQgegrAFg5QACgVAGgTQgvgTgagoQgegsAFg5QAEgvAagiQgVgQgOgWQgegsAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgOABgQQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAFQAhgcAvgGQA5gIAuAbQAdASATAbQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQAQAqgGAqQAcAEAaAPQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARApgGApQAMAEAMAHQAsAbAVAyQANAfgBAgQAiADAdARQAsAbAVAyQARAqgHArQAYAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQANAggBAgIAKAAQAyACApAgQAqAhANAvQAFASABASQA3gIAuAbQAyAeATA4QAFAQACAQQAwgEAtAbQAwAdATAxIABAAQAhADAeASQAsAaAUAxQALgDAMgCQA5gIAuAcQAsAaAVAyQAUAzgNAxQgJAlgbAdQgaAegkANQgZAKgbAAQgaAAgagJg");
	var mask_11_graphics_24 = new cjs.Graphics().p("AUGS0Qg3gSgdgsQgIgMgFgNQgtANgwgQQg3gSgdgsQgKgPgGgPQgigEgdgRQgogXgVgsQgMgagDgaQgOAAgOgBQg9gGgngqQgngpgDg8QgOABgQgBQg3gEgngiQgkgggMgxQgEgUAAgTQgbAAgcgJQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgMIgNgEQg3gSgdgtQgbgoACgyQgQgCgPgFQg3gSgcgsQgegsAFg5IABgJQgxgSgbgqQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgWghgDgpIgLgDQg3gSgdgtQgVgfgEglQgZgBgagIQg3gSgdgtIgLgSQgbAAgcgJQg0gRgdgpIgPAHQgyATg2gSQgWgHgRgMQgVASgaAKQgyATg2gSIgBAAIgNAQQgaAdgkAOQgaAKgcAAQgKAfgYAaQgWAYgcAOQAEAcgIAcQgJAkgbAeQgJALgLAIQALAQAIATQAUAygNAyQgHAdgTAZQAgAZARApQAUAygNAyIgEANQALAEALAGQAsAbAVAyQAQAngFAnQASAGAQAJQAsAbAVAxQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IABgFIgCgBQg3gSgdgtQgegrAFg5QACgVAGgTQgvgTgagoQgegsAFg5QAEgvAagiQgVgQgOgWQgegsAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgOABgQQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAFQAhgcAvgGQA5gIAuAbQAdASATAbQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQArAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARApgGApQAMAEAMAHQAsAbAVAyQANAfgBAgQAiADAdARQAsAbAVAyQARAqgHArQAYAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQANAggBAgIAKAAQAyACApAgQAqAhANAvQAFASABASQA3gIAuAbQAyAeATA4QAFAQACAQQAwgEAtAbQAwAdATAxIABAAQAhADAeASQAsAaAUAxQALgDAMgCQAcgEAZAFQALgfAWgYQAlgmA5gIQA5gIAuAcQAsAaAVAyQAUAzgNAxQgJAlgbAdQgaAegkANQgpAQgtgKQgLAcgVAXQgaAegkANQgZAKgbAAQgaAAgagJg");
	var mask_11_graphics_25 = new cjs.Graphics().p("AUGS0Qg3gSgdgsQgIgMgFgNQgtANgwgQQg3gSgdgsQgKgPgGgPQgigEgdgRQgogXgVgsQgMgagDgaQgOAAgOgBQg9gGgngqQgngpgDg8QgOABgQgBQg3gEgngiQgkgggMgxQgEgUAAgTQgbAAgcgJQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgMIgNgEQg3gSgdgtQgbgoACgyQgQgCgPgFQg3gSgcgsQgegsAFg5IABgJQgxgSgbgqQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgWghgDgpIgLgDQg3gSgdgtQgVgfgEglQgZgBgagIQg3gSgdgtIgLgSQgbAAgcgJQg0gRgdgpIgPAHQgyATg2gSQgWgHgRgMQgVASgaAKQgyATg2gSIgBAAIgNAQQgaAdgkAOQgaAKgcAAQgKAfgYAaQgWAYgcAOQAEAcgIAcQgJAkgbAeQgJALgLAIQALAQAIATQAUAygNAyQgHAdgTAZQAgAZARApQAUAygNAyIgEANQALAEALAGQAsAbAVAyQAQAngFAnQASAGAQAJQAsAbAVAxQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IABgFIgCgBQg3gSgdgtQgegrAFg5QACgVAGgTQgvgTgagoQgegsAFg5QAEgvAagiQgVgQgOgWQgegsAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgOABgQQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAFQAhgcAvgGQA5gIAuAbQAdASATAbQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQArAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARApgGApQAMAEAMAHQAsAbAVAyQANAfgBAgQAiADAdARQAsAbAVAyQARAqgHArQAYAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQANAggBAgIAKAAQAyACApAgQAqAhANAvQAFASABASQA3gIAuAbQAyAeATA4QAFAQACAQQAwgEAtAbQAwAdATAxIABAAQAhADAeASQAsAaAUAxQALgDAMgCQAcgEAZAFQAIgYAQgUIgCgCQgmgpgDg+QgCg9AkgsQAjgsA9gLQA8gLAxAdQAyAeATA4QAQAwgRA0QgJAcgRAVQAVAWAMAdQAUAzgNAxQgJAlgbAdQgaAegkANQgpAQgtgKQgLAcgVAXQgaAegkANQgZAKgbAAQgaAAgagJg");
	var mask_11_graphics_26 = new cjs.Graphics().p("AUGS0Qg3gSgdgsQgIgMgFgNQgtANgwgQQg3gSgdgsQgKgPgGgPQgigEgdgRQgogXgVgsQgMgagDgaQgOAAgOgBQg9gGgngqQgngpgDg8QgOABgQgBQg3gEgngiQgkgggMgxQgEgUAAgTQgbAAgcgJQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgMIgNgEQg3gSgdgtQgbgoACgyQgQgCgPgFQg3gSgcgsQgegsAFg5IABgJQgxgSgbgqQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgWghgDgpIgLgDQg3gSgdgtQgVgfgEglQgZgBgagIQg3gSgdgtIgLgSQgbAAgcgJQg0gRgdgpIgPAHQgyATg2gSQgWgHgRgMQgVASgaAKQgyATg2gSIgBAAIgNAQQgaAdgkAOQgaAKgcAAQgKAfgYAaQgWAYgcAOQAEAcgIAcQgJAkgbAeQgJALgLAIQALAQAIATQAUAygNAyQgHAdgTAZQAgAZARApQAUAygNAyIgEANQALAEALAGQAsAbAVAyQAQAngFAnQASAGAQAJQAsAbAVAxQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IABgFIgCgBQg3gSgdgtQgegrAFg5QACgVAGgTQgvgTgagoQgegsAFg5QAEgvAagiQgVgQgOgWQgegsAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgOABgQQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAFQAhgcAvgGQA5gIAuAbQAdASATAbQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQArAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARApgGApQAMAEAMAHQAsAbAVAyQANAfgBAgQAiADAdARQAsAbAVAyQARAqgHArQAYAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQANAggBAgIAKAAQAyACApAgQAqAhANAvQAFASABASQA3gIAuAbQAyAeATA4QAFAQACAQQAwgEAtAbQAwAdATAxIABAAQAhADAeASQAsAaAUAxQALgDAMgCQAcgEAZAFQAIgYAQgUIgCgCQgmgpgDg+QgBgiALgdQgpgSgYglQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAUAygNAyIgFAQIANAHQAyAeATA4QAQAwgRA0QgJAcgRAVQAVAWAMAdQAUAzgNAxQgJAlgbAdQgaAegkANQgpAQgtgKQgLAcgVAXQgaAegkANQgZAKgbAAQgaAAgagJg");
	var mask_11_graphics_27 = new cjs.Graphics().p("AUGS0Qg3gSgdgsQgIgMgFgNQgtANgwgQQg3gSgdgsQgKgPgGgPQgigEgdgRQgogXgVgsQgMgagDgaQgOAAgOgBQg9gGgngqQgngpgDg8QgOABgQgBQg3gEgngiQgkgggMgxQgEgUAAgTQgbAAgcgJQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgMIgNgEQg3gSgdgtQgbgoACgyQgQgCgPgFQg3gSgcgsQgegsAFg5IABgJQgxgSgbgqQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgWghgDgpIgLgDQg3gSgdgtQgVgfgEglQgZgBgagIQg3gSgdgtIgLgSQgbAAgcgJQg0gRgdgpIgPAHQgyATg2gSQgWgHgRgMQgVASgaAKQgyATg2gSIgBAAIgNAQQgaAdgkAOQgaAKgcAAQgKAfgYAaQgWAYgcAOQAEAcgIAcQgJAkgbAeQgJALgLAIQALAQAIATQAUAygNAyQgHAdgTAZQAgAZARApQAUAygNAyIgEANQALAEALAGQAsAbAVAyQAQAngFAnQASAGAQAJQAsAbAVAxQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IABgFIgCgBQg3gSgdgtQgegrAFg5QACgVAGgTQgvgTgagoQgegsAFg5QAEgvAagiQgVgQgOgWQgegsAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgOABgQQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAFQAhgcAvgGQA5gIAuAbQAdASATAbQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQArAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARApgGApQAMAEAMAHQAsAbAVAyQANAfgBAgQAiADAdARQAsAbAVAyQARAqgHArQAYAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQANAggBAgIAKAAQAyACApAgQAqAhANAvQAFASABASQA3gIAuAbQAyAeATA4QAFAQACAQQAwgEAtAbQAwAdATAxIABAAQAhADAeASQAsAaAUAxQALgDAMgCQAcgEAZAFQAIgYAQgUIgCgCQgmgpgDg+QgBgiALgdQgpgSgYglQgYgkgBgsQgwgTgbgpQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQALAaABAaQAMAFALAGQAsAbAVAyQAUAygNAyIgFAQIANAHQAyAeATA4QAQAwgRA0QgJAcgRAVQAVAWAMAdQAUAzgNAxQgJAlgbAdQgaAegkANQgpAQgtgKQgLAcgVAXQgaAegkANQgZAKgbAAQgaAAgagJg");
	var mask_11_graphics_28 = new cjs.Graphics().p("AUGS0Qg3gSgdgsQgIgMgFgNQgtANgwgQQg3gSgdgsQgKgPgGgPQgigEgdgRQgogXgVgsQgMgagDgaQgOAAgOgBQg9gGgngqQgngpgDg8QgOABgQgBQg3gEgngiQgkgggMgxQgEgUAAgTQgbAAgcgJQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgMIgNgEQg3gSgdgtQgbgoACgyQgQgCgPgFQg3gSgcgsQgegsAFg5IABgJQgxgSgbgqQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgWghgDgpIgLgDQg3gSgdgtQgVgfgEglQgZgBgagIQg3gSgdgtIgLgSQgbAAgcgJQg0gRgdgpIgPAHQgyATg2gSQgWgHgRgMQgVASgaAKQgyATg2gSIgBAAIgNAQQgaAdgkAOQgaAKgcAAQgKAfgYAaQgWAYgcAOQAEAcgIAcQgJAkgbAeQgJALgLAIQALAQAIATQAUAygNAyQgHAdgTAZQAgAZARApQAUAygNAyIgEANQALAEALAGQAsAbAVAyQAQAngFAnQASAGAQAJQAsAbAVAxQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IABgFIgCgBQg3gSgdgtQgegrAFg5QACgVAGgTQgvgTgagoQgegsAFg5QAEgvAagiQgVgQgOgWQgegsAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgOABgQQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAFQAhgcAvgGQA5gIAuAbQAdASATAbQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQArAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARApgGApQAMAEAMAHQAsAbAVAyQANAfgBAgQAiADAdARQAsAbAVAyQARAqgHArQAYAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQANAggBAgIAKAAQAyACApAgQAqAhANAvQAFASABASQA3gIAuAbQAyAeATA4QAFAQACAQQAwgEAtAbQAwAdATAxIABAAQAhADAeASQAsAaAUAxQALgDAMgCQAcgEAZAFQAIgYAQgUIgCgCQgmgpgDg+QgBgiALgdQgpgSgYglQgYgkgBgsQgwgTgbgpQgYgkgBgsQgigSgVggQgegsAFg5QAFg6AlgmQAlgnA5gHQA5gIAuAbQAsAbAVAyQAKAaACAaIADABQAsAbAVAyQALAaABAaQAMAFALAGQAsAbAVAyQAUAygNAyIgFAQIANAHQAyAeATA4QAQAwgRA0QgJAcgRAVQAVAWAMAdQAUAzgNAxQgJAlgbAdQgaAegkANQgpAQgtgKQgLAcgVAXQgaAegkANQgZAKgbAAQgaAAgagJg");
	var mask_11_graphics_29 = new cjs.Graphics().p("AUGS0Qg3gSgdgsQgIgMgFgNQgtANgwgQQg3gSgdgsQgKgPgGgPQgigEgdgRQgogXgVgsQgMgagDgaQgOAAgOgBQg9gGgngqQgngpgDg8QgOABgQgBQg3gEgngiQgkgggMgxQgEgUAAgTQgbAAgcgJQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgMIgNgEQg3gSgdgtQgbgoACgyQgQgCgPgFQg3gSgcgsQgegsAFg5IABgJQgxgSgbgqQgegsAFg5IACgKIgXgGQg3gSgdgtQgegsAFg5IACgKIgXgGQg3gSgdgtQgWghgDgpIgLgDQg3gSgdgtQgVgfgEglQgZgBgagIQg3gSgdgtIgLgSQgbAAgcgJQg0gRgdgpIgPAHQgyATg2gSQgWgHgRgMQgVASgaAKQgyATg2gSIgBAAIgNAQQgaAdgkAOQgaAKgcAAQgKAfgYAaQgWAYgcAOQAEAcgIAcQgJAkgbAeQgJALgLAIQALAQAIATQAUAygNAyQgHAdgTAZQAgAZARApQAUAygNAyIgEANQALAEALAGQAsAbAVAyQAQAngFAnQASAGAQAJQAsAbAVAxQAUAygNAyQgJAkgbAeQgaAdgkAOQgyATg2gSQg3gSgdgtQgegsAFg5IABgFIgCgBQg3gSgdgtQgegrAFg5QACgVAGgTQgvgTgagoQgegsAFg5QAEgvAagiQgVgQgOgWQgegsAFg5QAFg6AlgmQAJgJAJgHIgFgHQgegsAFg5QAFg6AlgmQAVgWAbgMQgBgOABgQQAFg6AlgmQAlgnA5gHIAVgCQAKgkAZgaQAlgnA5gHQAmgGAhALQAHgKAIgJQAlgnA5gHQA5gIAuAbIAHAFQAhgcAvgGQA5gIAuAbQAdASATAbQAWgLAbgDQA5gIAuAbQApAZAVAsQAwgDAoAYQAsAbAVAyQAIAVADAVQAugCAmAXQAsAbAVAyQAJAXADAXQAWAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQArAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQARApgGApQAMAEAMAHQAsAbAVAyQANAfgBAgQAiADAdARQAsAbAVAyQARAqgHArQAYAFAVAMQAsAbAVAyQARAqgGAqQAcAEAaAPQAsAbAVAyQANAggBAgIAKAAQAyACApAgQAqAhANAvQAFASABASQA3gIAuAbQAyAeATA4QAFAQACAQQAwgEAtAbQAwAdATAxIABAAQAhADAeASQAsAaAUAxQALgDAMgCQAcgEAZAFQAIgYAQgUIgCgCQgmgpgDg+QgBgiALgdQgpgSgYglQgYgkgBgsQgwgTgbgpQgYgkgBgsQgigSgVggQgcgqADg1QgpgSgYglQgegsAFg5QAFg6AlgmQAlgmA5gHQA5gIAuAbQAsAaAVAyQANAhgBAiIANAGQAsAbAVAyQAKAaACAaIADABQAsAbAVAyQALAaABAaQAMAFALAGQAsAbAVAyQAUAygNAyIgFAQIANAHQAyAeATA4QAQAwgRA0QgJAcgRAVQAVAWAMAdQAUAzgNAxQgJAlgbAdQgaAegkANQgpAQgtgKQgLAcgVAXQgaAegkANQgZAKgbAAQgaAAgagJg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:96.016,y:210.0977}).wait(1).to({graphics:mask_11_graphics_1,x:90.516,y:201.5977}).wait(1).to({graphics:mask_11_graphics_2,x:86.016,y:191.5977}).wait(1).to({graphics:mask_11_graphics_3,x:84.516,y:180.5977}).wait(1).to({graphics:mask_11_graphics_4,x:84.516,y:169.5977}).wait(1).to({graphics:mask_11_graphics_5,x:84.516,y:161.5977}).wait(1).to({graphics:mask_11_graphics_6,x:86.516,y:156.0977}).wait(1).to({graphics:mask_11_graphics_7,x:95.516,y:153.0977}).wait(1).to({graphics:mask_11_graphics_8,x:105.016,y:152.5977}).wait(1).to({graphics:mask_11_graphics_9,x:115.016,y:152.5977}).wait(1).to({graphics:mask_11_graphics_10,x:122.516,y:152.5977}).wait(1).to({graphics:mask_11_graphics_11,x:130.516,y:152.5977}).wait(1).to({graphics:mask_11_graphics_12,x:136.516,y:152.5977}).wait(1).to({graphics:mask_11_graphics_13,x:143.016,y:152.5977}).wait(1).to({graphics:mask_11_graphics_14,x:149.516,y:152.5977}).wait(1).to({graphics:mask_11_graphics_15,x:154.516,y:152.5977}).wait(1).to({graphics:mask_11_graphics_16,x:161.516,y:152.5977}).wait(1).to({graphics:mask_11_graphics_17,x:167.516,y:159.5977}).wait(1).to({graphics:mask_11_graphics_18,x:174.016,y:168.5977}).wait(1).to({graphics:mask_11_graphics_19,x:182.1031,y:176.5591}).wait(1).to({graphics:mask_11_graphics_20,x:190.9826,y:184.0066}).wait(1).to({graphics:mask_11_graphics_21,x:199.4795,y:191.0427}).wait(1).to({graphics:mask_11_graphics_22,x:206.016,y:196.0727}).wait(1).to({graphics:mask_11_graphics_23,x:215.516,y:200.5727}).wait(1).to({graphics:mask_11_graphics_24,x:224.516,y:200.5727}).wait(1).to({graphics:mask_11_graphics_25,x:224.516,y:200.5727}).wait(1).to({graphics:mask_11_graphics_26,x:224.516,y:200.5727}).wait(1).to({graphics:mask_11_graphics_27,x:224.516,y:200.5727}).wait(1).to({graphics:mask_11_graphics_28,x:224.516,y:200.5727}).wait(1).to({graphics:mask_11_graphics_29,x:224.516,y:200.5727}).wait(111));

	// lady01
	this.instance_20 = new lib.CachedBmp_9();
	this.instance_20.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(140));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(176.6,263.2,551.1999999999999,357.40000000000003);
// library properties:
lib.properties = {
	id: 'EE7A6955389040449F56EA0BAF92850E',
	width: 474,
	height: 506,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/手繪lady_atlas_1.png", id:"手繪lady_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EE7A6955389040449F56EA0BAF92850E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;