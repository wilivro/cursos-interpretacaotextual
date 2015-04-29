(function (lib, img, cjs) {

var p; // shortcut to reference prototypes]
var homem, escada, subindo, degrau = 0;


var resposta = ['C','D','C','D','C','D','D','C'];
var pergunta = [
	'A Praça da Sé fica no coração de São Paulo.',
	'Fez um transplante de coração.',
	'Esta mulher é uma cobra.',
	'Na primavera os campos florescem.',
	'É órfão de afeto.',
	'Feriu-se na boca.',
	'O alpinista conseguiu escalar a montanha.',
	'Nosso goleiro engoliu um frango naquele jogo.'];

// library properties:
lib.properties = {
	width: 788,
	height: 315,
	fps: 24,
	color: "#CCCCCC",
	manifest: []
};

// stage content:
(lib.subindoescada_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	escada = this;

	// Camada 1
	this.instance = new lib.Interpolação6("synched",0);
	this.instance.setTransform(-463.5,170.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(264).to({_off:false},0).to({x:391.5},9).to({x:1254.4},8).wait(14));

	// personagem
	this.instance_1 = new lib.subindo();
	this.instance_1.setTransform(423.9,283.7,1,1,0,0,0,40.1,124.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAEQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAABABAAQAEACgBACIgCADIgCABIAAgBg");
	this.shape.setTransform(273.9,86.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006666").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(274.7,88.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AAAAGQgDgCgDgEIgBgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAIACADQACACgBADIAAABIgFABIgDgBg");
	this.shape_2.setTransform(273.8,88);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAEANQABgDgBgEIgCgDQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAQgBgCABgCQABgGAFgDIABAAQADgCADACQAFACACAFQADAEgCAFQgBAFgFADgAgDgKIgCADIAAADQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABIAAgCQACgFACACIABABQAAgEgCgBIgCgBIgBAAg");
	this.shape_3.setTransform(274.2,87.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAWAHQgWgWgVAO");
	this.shape_4.setTransform(275.5,86.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAKIAAgDQAAgIgCgHQAVgOAWAXQgQANgMAAQgHAAgGgEg");
	this.shape_5.setTransform(275.5,87.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AgsAKIAAgTIBZAEIAAAPg");
	this.shape_6.setTransform(275,82.9,1,1,0,0,0,0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#999999").ss(1,1,1).p("AAAAAQAAAAAAAAIAAAA");
	this.shape_7.setTransform(268.6,100.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#996600").ss(1,1,1).p("AgeAJQAGADAKgBQAKgCAEgBQADgBAKgCQAKgDAIgM");
	this.shape_8.setTransform(271.8,99.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#9999FF").ss(1,1,1).p("AAAAAQAAAAAAAA");
	this.shape_9.setTransform(271.3,67.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC9900").s().p("AgHCnIABgFIAAgKIAFABIAEABQAeAAAWgkQATghAAggIAAgIIgBgFQgFAagIAUQgeAQgMADIgyARIgoAJQgJgDgHgFIgCgBIgDgDIgEgHIgBgBIgCgHQABgRgBgIIAKAEQAFAAAEgCQAGgEAAgFIgbgBIAAABIgCgCIgDgKQgBgEAAgIQAEABAGAAIAAAAIABAAIABAAIABAAIACAAIABAAIAOgCIAOgEQAKgCAIgPQgIAPgKACIgOAEIgOACIgBAAIgCAAIgBAAIgBAAIgBAAIAAAAQgGAAgEgBIgBAAIgBgBIgDgDIgDgFIACgFIACgIQAAgEgFgHIARgBQAQgDAAgGIgBgDQgCgCgDAAIgIAAIgHACQgLAAgMgDQgLgEgLgGIgBgBIgBgCQgFgHAAgJQAAgFAHgHIAQgNQAYgUAAgZQAAgOgEgFQgGgLgDgJIgBgDQgBgDAAgDQABgGAHgaIAEgPIABAAIAAABQACAKARAHQAPAHAHAAQAIAAAFgFIAGgJQAIACARAAQAAAKAMAHQAIAGAHAAQAGAAAIAMQAHALAAAEIgBAHQgRAGgLgEQgigKgUAAQgTAAgHAVQgGAUgGALIgQAXQAQgOAHgDIALgCIAKgBIABACIAbAEIAOAGIAVAJQAIAEAIAHQAJAFAGAGIAMANQAIAHAHAAQASAAAHgeQADgJACgPIACgSQADgBAGADIAHACQAHAAACgHQACgGAHAAQAHAAAFAIIAFAJQgCAMgHAQIgFAKIgEAHQABAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgCABIgBADQgNAVgPAAIgDAAIgDAUQAIADAFAAIAEgBIAAAtQAAAQAXAQQAUAOAKAAQAEAAAHgFIAAA8QhZAkgqAAQgjAAABgdgABig1IgBAIIgBAHQAJgIAHgKQAIgLAAgEQAAgFgDgDIgEgCIgBgCIAAgBIgHADQgHAAgDADQgEACgBAEIgEARIAAAGIACgCIACgBIAEgCIAEABg");
	this.shape_10.setTransform(279.6,96);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1A0000").s().p("AAKCFQgHAAgDgCQgXgGAAgRIAAAAQAAgMAGgDIAGgBQADgBACgEQgNgGgCgGQgCgCAAgNIAAgBIAAgCIAAAAQABgJACgEQACgFAAgGIADgEQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIAEgHIAFgKQAGgOABgMIAAgGIgBgNIgBgQIgVAAQgCAIgCACQgBABgJAAQgEAAgFgDQgLANgFAOIgDAFQADALgDAMQgFARgOAAQgFAAgFgGQgFgHgBgOIACgEIAGgJIgBgBIgBgBIgJgJQgFgFgCgEIAAgBQAAgRAHgIIASgQQgFAAgHgEQgKgGAAgJQAAgEABgDIACgEQgMABgMgHQgMgHAAgIQAAgEAGgGIAAABIAAACQAAAIASAJQAQAIAKAAQALAAANgIIAKgHIAAABIAAADQgBAIALAFQAHAEAHAAIANgBQADgDADgNIABgBIACAAQAAANAJAJQAJALAWAAQAOAAAEgJQADgMADgIQAAARAHAOQAIARAQAAQADAAAEgCIAFgEQAGAIAGADQAFADAJAAQAIAAAIgJQgBARgIAOIgJAPQAAAEADAIQAEAIABADQAAAXgHAKQgIALgVAHQAGANgVANQgTANgTAAIAGADIAAAJQAAANgGAIQgFAGgJABIgEABIgNgBgAg2gyIAFAFIAEADIgJgIIAAAAg");
	this.shape_11.setTransform(292.7,89.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A07001").s().p("AgEC3IgFgBIAAgXIgagHIAygRQALgDAfgQQAHgUAFgbIABAFIABAJQAAAggTAgQgWAlgeAAIgEgBgAByB5QgYgRAAgQIAAgtIgEACQgFAAgHgEIADgVIACAAQAPAAAOgUQgBAEgCAFQgCAFgBAIIAAABIAAACIgBAAIABAAQAAANACACQACAGANAHQgCADgDACIgGABQgGACAAAMIAAABQAAAQAXAGQAFACAIABIAMAAIAEAAIAAAeQgGAFgFAAQgJAAgUgNgAhnBtIgDgHIAAgBIAbABQAAAFgFADQgFADgEAAIgKgEgAh5AsIgBgCQgEgEgMgIQgLgIgEgFIAAgBQALAGAKAEQANAFAKAAIAIgBIAIgCQACAAACADIACADQAAAHgRACIgQACIgBgBgAAfAGIgMgLQgHgHgIgFQgIgHgJgEIgUgJIgOgFIgcgEIAAgCIgKAAIgLADQgIACgQAPIARgYQAFgKAHgVQAGgUATAAQAUAAAiAKQAMAEAQgHIABgHQAAgDgGgLQgIgNgGAAQgHAAgJgFQgLgHAAgLQgSAAgIgBIgFAIQgFAGgIAAQgIAAgPgHQgQgIgCgJIAAgBIgBgBQADgIAEgDIADgDIgBAAIAAgCIADgBIgBADIAAAAQgCAHAGAGQAHAGAJAAQAKAAADgBQAIgEgFgOQAEAKAIACIAMABQAIAAAJgDQACgBAZABQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgBABIgCABQgGAGAAAEQAAAHAMAHQAKAHAMgBIgBAEQgCADAAAEQAAAKAKAGQAIAEAEAAIgSAPQgGAIAAASIAAABQABAEAFAFIAJAIIABABIABACIgFAJIgCAFQAAAPAFAHQAFAFAFAAQAOAAAFgQQADgMgCgNIACgGQAGgOAKgNQAFADAFAAQAIAAABgBQACgBACgJIAVAAIACAQIADANIgBAGIgFgIQgEgJgIAAQgGAAgDAHQgBAHgHAAIgIgDQgFgCgDABIgDARQgCAPgCAJQgHAdgTAAQgHAAgHgHgAAMhDIABAAIgBgBgABegPIAAgIQgEgCgEACIgCACIgCACIAAgHIAEgRQACgEADgCQAEgCAGgBIAHgCIAAABIACABIAEADQADACAAAFQAAAFgIAKQgIALgIAIIABgHg");
	this.shape_12.setTransform(280,93);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_13.setTransform(279.3,76.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#331A00").s().p("AAAAAIAAAAIAAAAg");
	this.shape_14.setTransform(279.3,76.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("AiIAiQgDgDgCgDIABgBQAEgDADgHQAHgOADgDQAFgDARgBQARgCAFgFQAKgMALgEQAGgDAJAAIAAABQgCAIgOARQgPAPgJAAIgHgBIgIgCQgFAAgDAFQgCABgCAJQgEAOgPAAQgCAAgFgDgABiAaQgGgFAAgKIABgFIACAIQAGgDAJgBIAOgCQALAAAEAGIADAGIgHACQgSAIgHAAQgIAAgEgEgAA3AAQgFgDAAgIIABAAIANgDIAPgDQAFAAAFANQgKAFgMAAQgHAAgFgBgAAHgXQAFgCAFgEIAIgHQAEAAAJALQgCAEgFAEIgMAKg");
	this.shape_15.setTransform(285.4,64.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#330000").s().p("ACkBsQgGgDgFgIIgGAEQgDACgEgBQgQAAgIgQQgHgOABgRQgEAIgDAMQgEAJgOAAQgVAAgLgLQgJgJAAgNIgDAAIgBABQgCANgEADIgNAAQgHAAgHgDQgIgFAAgIIAAgEIABAAIAAgBIAAAAIAAABIgBAAIgKAHQgMAIgLAAQgKAAgQgIQgTgJAAgIIABgCIAAgBIABAAIABgCQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQgZgBgCABQgJAEgIAAIgMgBQgIgDgEgKQAFAOgIAEQgDABgKAAQgJABgHgHQgGgFACgIIAAAAIABgCIgDAAIgGACQgKgBACgEIgFAAIABgDIAAAAQAHgOAAgKQAAgOALgMQAIgJAJgDQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABADADADQAFACACABQAPgBAEgOQADgIABgCQADgEAGAAIAHABIAHACQAJAAAQgSQAOgQABgJIAAgBIAHAAQALAAAOAFIANADIAHgBIALARIALgKQAFgFACgDIAAABQAIALAEABQAAAJAGAEQAEACAHAAQANAAAKgHIAAADIADAJIAAAFQAAAKAFAFQAFAEAHgBQAHAAASgHIAHgDIAFAMQAFAMAIAAQAJAAgDAEQgFAFADACIAHARIAGALQAIAGAKASIASAIQAGAEAAAOQAAAJgBACQgBAFgMAQQAIAGAAADIAAAGQgIAJgHAAQgJAAgGgDg");
	this.shape_16.setTransform(287.3,72.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A07001").s().p("AgaANQgVgBgPgCIgFgYIAAgBIADABIAEABQAIACAHgBIAKgBIANACQALABAEgCQALgFAdAGIALADQANADALAAIgDACQgRAJgMAFIgNAEIgKABQgNAAgagDg");
	this.shape_17.setTransform(297.3,153.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC9900").s().p("AgWBNIAAAAQgUgCgRgpQgPgogCg2QAOACAWABQApAFAIgDIAMgEQAMgFARgLIAEgCIARgDIABAAQALBIgMAxQgKAogzAAQgNAAgTgEg");
	this.shape_18.setTransform(298.8,160.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D0D0D0").s().p("AgGBpIABgCIABABIgBABIgBAAgAABhoIAGAVIgEACIgCgXg");
	this.shape_19.setTransform(306.1,141.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7F7F7").s().p("AgZBdQAYhYgNhgIAEgCQAMAjAEAQIAJAcIAFAFIAFBCQAEgCgOALIgBAAIgCABIAAABIgEADIgKAJQgHAGgJAFQgCACgEABg");
	this.shape_20.setTransform(308,142.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E1E1E1").s().p("AgLAvQgFACgLgBIABgGIAFgZQACgZgIglQABAAABgBQABAAAAAAQABgBAAAAQAAAAAAgBQAXAXANAeQAHAUAGATIACAFQgcgHgLAFg");
	this.shape_21.setTransform(297.8,147.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA5CVIgLgDIgCgFQgGgTgIgUQgPgggUgXQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAgBABQAIAlgDAbIgEAZIgBAGIgNgBIgGgDIgKgBIAAABQgTgFgcgJIgMhAQABgLgBgWIgEgeIgCgPIgCgVQgDgXAAgKIACAHQgEgPAKggQAKgiBDgGQBBgIAWAgIAbApIAKAVIADAWQAOBggZBYIgBACIABAAIACgBQADAAADgCIgCAEIAAACIgRAEQgMAAgNgDg");
	this.shape_22.setTransform(296,137.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiJhRIiOCkIgKALAB5hdICeCfIALAK");
	this.shape_23.setTransform(293.7,184.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A07001").s().p("AhZCVIABgCQAGgbgDgMQAFAIAQALIAEACQAZAQAdgHQAbgHAHgCQAEgCAFgHIgEASIgCAFIgFAVIh3AEQABgJADgKgAhgBkQgHgBgDgCQAMgUAQg4IADAAIAFAIIAFAOIgDAJIgPAmIgEAMIgJgCgAARgwQgNABgEACIgDAAIgCACIAAAAIgEgGQAAgTAFgdQACgVgCgYQAWAMAXgCQAVgDAUgPIAYgRIABABIgcBYIgOAxIgGAdQgJgzghADg");
	this.shape_24.setTransform(291.9,195.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC9900").s().p("AhUEIIgEgDQgQgLgEgHIgBgEIgBgBIgBgCIAEgMIAPglIAEgJIgGgPIgFgIIgDAAIABgEIAGgBIgBgIIBDg1IABAAIACgBIACAAQAGgCANgBQAfgDAKA0IAAADIgEAXQgEAmgPA5QgFAGgEACQgEADgdAGQgKADgJAAQgTAAgRgLgAgbgHQgBgNgCgOIgGgiIgBgNQgFhRAQg6IABgMIACgDQAHgNAMgKQAPgNAYgCQAggDAVAOQAPAMAFAUQgBAEACAIIAAACIABACIABALQAEA3gTBJQgFAUgHAUIgBAEIgBgCIgXARQgVAQgVAAIgHABQgRAAgUgIg");
	this.shape_25.setTransform(294.2,182.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CC99").s().p("AkXgBICOimIiOCmIgIifICWgHIBrgFIAFAiQACAOABANQABAYgBAVQgGAeAAASIAFAGIhEAyIABAJIgGABIgBAEQgPA5gNATQADACAIABIAIACIACABIAAACIABADQADAMgHAcIgBABIiiAIgAAOCpIAEgSQAPg4AFgmIADgXIAAgEIAFgdIAOgwIAchXIABgEQAHgVAGgUIATAAICWgIIAICpIAICzIkSANIABgFgAEXgSIieihg");
	this.shape_26.setTransform(293.7,192.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgBGlQhHgFgXgQQgKgGgMgEIACgbQAHhBAAgeQAAgDgEgLQgFgOgFgFQgPAfgWBDIgRAwIAAAAQgTgDgIgLQgKgNAAggIATiDIAVgCQAmAABwAKQBuAKAfAAQApAAAVgNQAHgEAMgDIgBAvIAEBBIAEBCQAAAZg7ARQguAOgeAAQgvAAgZgCgAiygcIgFheQAAiaA3hXQANAFAPAEQAsALAtAAQA4AAA8gnQAdgTAOgVIACABQApA/APBIQAPBIgOAlQgFAXg5hWQg5hWhCB0QhAB0g5AkQgxAegYAAIgGAAg");
	this.shape_27.setTransform(285.1,157.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EAEAEA").s().p("AgcFQQhxgKgmAAIgUACQATiJAAggIgBgJQA8AlAvAlQAYAPAeAFQAcAFA+AAQBGAAALgCQAOgEAjgQIgBASQgFArgBAmQgLADgIAFQgUAMgpAAQgfAAhugKgAhqjZQgOgDgNgFIALgQIABgCQAIACAPAAQBJAABEgxQAmgbAWgcQAUASAUApIAAABQgPAWgdATQg7Ang4AAQguAAgsgMg");
	this.shape_28.setTransform(285.7,143.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AiaG3IglgDIAQgwQAWhDAPgfQAGAFAFAOQAEALAAADQAAAegHBBIgDAbQgKgEgLgCgAgeChQgegFgYgPQgvgkg8glIgDgrQAXAFA5ghQA5gkBAh0QBCh0A5BWQA4BWAFgXIACAOQACAZAABYQAABNgFA+QgjARgOADQgLADhGAAQg8AAgegGgAiDlFQA1hFBmgeQAegUAEAAQASAAARAQQgWAdgmAaQhEAyhJAAQgPAAgIgCg");
	this.shape_29.setTransform(286.7,152.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1A1A33").s().p("AhJCUQgtgQgEgUIgFg9QBGgHAdgKQAzgRAPgmQAGgOALgQQAJgSAHgjQADgPANgdIAGgKIADAbIACAAQAGAYAAAjQABAtAMAwQALAxAAAOQAAAOgYALQgYALgUATQgOAOgdAEQgOACgMAAQgfAAghgLg");
	this.shape_30.setTransform(295.3,279.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333366").s().p("AhYDmIgFhKIADAAIgRhCIAFADIgikBQgHgzAegqQAcgoAxgHQAvgHAnAfQAnAfAHAzQAuDGgHBLIADAUIgGAKQgMAdgEAPQgHAjgJASQgKAQgGAOQgQAog0ARQgcAKhGAHIgGhMg");
	this.shape_31.setTransform(290.7,254.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC6600").s().p("AhZAUIgBgCQARgFAcgEQBCgJAJgCQAJgDAPgWIABAAQADAEAEAEQAJAHALABIAJABIgEAEQgTAQgcAGQgTAEgvAEIguAEQgIgCgJgGg");
	this.shape_32.setTransform(279.4,299.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AinAgIgfgNIAAgIIgBgLIAAgCQA1AUCFgJQCDgJBLglQADgEACAKIACAZQgqAZhoAOQgzAGgzAAQg6AAg9gHg");
	this.shape_33.setTransform(288.3,305.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#993300").s().p("AjEAsIgBgUQAAgHAOgGIgBADQABAAAAAAQAAgBAAAAQABAAAAgBQAAgBAAgBIAGgCIACABQAJAGAIACIAugEQAxgEATgEQAcgFARgRIAEgEQAkADBLgSQAxgLAZgLIABADQAIAagEAmQhKAniEAJQgnACggAAQhOAAglgPg");
	this.shape_34.setTransform(287.9,301);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5C2E01").s().p("AhJAoIgJgBQgLgBgJgHQgEgDgDgFQANgTAIgQQAPADAWgFIADAAIAQgEQAWADAlgFQAygHAHgMQAQANAKAdQgZALgxALQg+APgkAAIgLAAg");
	this.shape_35.setTransform(296,294.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333366").s().p("AhLE/QgqgmAEgyIgJiWQgGgHgBgFQgBgFgBgaQgBgWADgUIACAAIgFhMIgCAAQgGgOAAgQQgBgJAGgNIgFhOQgDg5AmgrQAngqA5gCQA4gDAqAmQAqAnADA5IADCUQgBAAgBABQAAABAAAAQgBABAAAAQAAABABAAQAFAGABAOQACApgHAhIgEATIAAA2IACAAIADAdQABALgHAJIAACXQAagcgmAqQgnArg5ADIgHAAQgzAAgoglg");
	this.shape_36.setTransform(288.6,209.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1A1A33").s().p("AhRCDQgrgVgBgUQgBgOADguQBGABAegGQA0gLAUgkQAIgNAMgPQALgQALgiQAFgPARgaIAGgKIAAAbIACAAQADAZgEAjQgFAsAGAxQAGAygCAOQgBANgaAJQgZAIgVAQQgRAMgcABIgHAAQgnAAgqgVg");
	this.shape_37.setTransform(278.7,280.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333366").s().p("Ah8EsQAAggADgtIAEhKIACAAIgIhCIAEADIgCkDQgBgzAiglQAhgkAxgCQAvgBAjAjQAjAkABAzQAWDHgPBMIgBAAIAAATIgGAKQgQAbgFAPQgMAigLAQQgMAOgHAOQgVAmg0ALQgaAFg3AAIgTAAg");
	this.shape_38.setTransform(278.7,253.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AipASIgdgPIAAgFIgBgOIABgBQAzAWCFgCQCEgBBNghQADgEABAKIABAZQgrAXhpAIQgdACgcAAQhPAAhVgPg");
	this.shape_39.setTransform(269.8,303.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#993300").s().p("AjFAeIAAgUQAAgIAPgDIgBABQAAABAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBIAHgCIABAAQAJAFAIACIAvgBQAwgBATgCQAcgEATgRIADgDQAlAEBMgNQAwgJAagKIABAEQAGAagFAmQhNAjiEABIgPABQh5AAgwgXg");
	this.shape_40.setTransform(269.7,298.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC6600").s().p("AhJAYQgIgCgJgHIAAAAQAQgFAdgDQBCgHAKAAQAJgDAQgUIAAAAQACAEAFAEQAJAHALACIAIACIgEADQgUAPgcAFQgTADgvABIgoABIgGAAg");
	this.shape_41.setTransform(261.3,296.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#5C2E01").s().p("AhLAjIgIgBQgKgDgJgHQgFgDgDgFQAOgQAKgSQAPAEAWgDIACgBIARgDQAWAFAlgDQAygEAHgNQAQAOAJAeQgaAJgxAJQg3ALgjAAIgVgCg");
	this.shape_42.setTransform(278.1,292.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333366").s().p("AgFFiQg5gBgogpQgogpAJgyIAAiVQgFgHgBgGQgBgEAAgaQABgWAFgTIACAAIgBhMIgBAAQgFgPAAgQQAAgJAHgMIAAhOQABg5ApgoQApgnA3ABQA5ABAnApQAoApgBA5IgHCTQgBABgBABQAAABAAAAQgBABAAAAQAAAAABAAQAFAGAAAPQgBAogJAhIgFASIgEA1IACABIABAdQAAALgHAJIgKCVQAcgagpAnQgnAng1AAIgEAAg");
	this.shape_43.setTransform(279,210.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC9900").s().p("AAAAAIABgBIgBADg");
	this.shape_44.setTransform(299.1,173.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BA8201").s().p("Ag6E2QgRgIgDgPQgEgPAFghQAEgbgEgLIgBgEIgBgBIgBgBIgJgBQgIgBgCgCQAKgSAJg6QAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAHAAIgBgJIA9g3IAAAAIgFgFQgCgSABgcQABgUgEgXIgGgbIgMgsQgNhOAJg7IABgKQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAGgNAKgJQAQgPAWgDQAggGAVANQARAKAHATQgBAEADAIIABAAIAAADIADAKQAMBFgVBgIgDADIACACIgUBUIgJAyIgBAdIAAADIgBAWQgBAlgIA4IgCASQgEAWgGAQQgNAigZAJQgaAKgPAAQgIAAgFgCg");
	this.shape_45.setTransform(290.5,181.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC9900").s().p("AAAAAIAAAAIAAAAg");
	this.shape_46.setTransform(291.6,163.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A07001").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_47.setTransform(295.7,141.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E1E1E1").s().p("AgMAQQgEgZgPgkQAEgBgBgDQAWASAQAcQANAQAJAUQgXADgIAJQgCADgIACIgDgig");
	this.shape_48.setTransform(285.8,143.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BA8201").s().p("AADBsQgRAEgYglQgYglgMgyIgLgYIAIgBQAHAAAHgCQAIgCADgDQAIgJAXgDIAKAAQARgBAMgLQAJgIAHgOIAHgNIADgEIABgBIANAiQAcBJAAA0QgCA2hRAEg");
	this.shape_49.setTransform(291.2,152.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D0D0D0").s().p("AgshrIAMAUIAcAuIALAYQAHAJgCgFIAgA7QgGAFgJAPIgBABIAAABIgBAAIAAABIgDAEIgHANQgHAOgIAIQgChsgshrg");
	this.shape_50.setTransform(292.9,134.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgmCcIgYg9QgBgLgGgXIgLgeIgFgQIgGgSQgHgWgCgKIABAEQgFgPABggQgBgkAwgbQAxgcAWAbIAdAgIANATQAsBqADBsQgNALgSACIgKAAQgJgUgNgTQgSgcgWgRQABACgCACQANAjAEAcIADAhQgGACgIAAIgGACIgYAAIgOAAg");
	this.shape_51.setTransform(282.7,133.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC9900").s().p("AgCAFIACgFIADgDIAAAIg");
	this.shape_52.setTransform(231.3,177.2);

	this.instance_2 = new lib.Interpolação1("synched",0);
	this.instance_2.setTransform(226,160.4);
	this.instance_2._off = true;

	this.instance_3 = new lib.Interpolação5("synched",0);
	this.instance_3.setTransform(261.2,389.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},22).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},22).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},21).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},21).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},21).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},22).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},22).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},22).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},21).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},36).to({state:[{t:this.instance_3}]},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},22).wait(1).to({_off:false,x:383.9,y:260.7},0).to({_off:true},22).wait(4).to({_off:false},1).to({_off:true},21).wait(4).to({_off:false,x:386.9},1).to({_off:true},21).wait(4).to({_off:false,x:383.9},1).to({_off:true},21).wait(4).to({_off:false,x:392.9},1).to({_off:true},22).wait(4).to({_off:false,x:397.9},1).to({_off:true},22).wait(4).to({_off:false},1).to({_off:true},22).wait(4).to({_off:false,x:394.9},1).to({_off:true},21).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).to({x:270,y:185.4},4).to({_off:true,regX:40.1,regY:124.4,x:383.9,y:260.7,mode:"independent"},1).wait(21).to({_off:false,regX:0,regY:0,x:226,y:160.4,mode:"synched",startPosition:0},0).to({x:273,y:185.4},4).to({_off:true,regX:40.1,regY:124.4,x:386.9,y:260.7,mode:"independent"},1).wait(21).to({_off:false,regX:0,regY:0,x:226,y:160.4,mode:"synched",startPosition:0},0).to({x:248,y:172.9},2).to({x:270,y:185.4},2).to({_off:true,regX:40.1,regY:124.4,x:383.9,y:260.7,mode:"independent"},1).wait(21).to({_off:false,regX:0,regY:0,x:226,y:160.4,mode:"synched",startPosition:0},0).to({x:279,y:185.4},4).to({_off:true,regX:40.1,regY:124.4,x:392.9,y:260.7,mode:"independent"},1).wait(22).to({_off:false,regX:0,regY:0,x:226,y:160.4,mode:"synched",startPosition:0},0).to({x:284,y:185.4},4).to({_off:true,regX:40.1,regY:124.4,x:397.9,y:260.7,mode:"independent"},1).wait(22).to({_off:false,regX:0,regY:0,x:233,y:160.4,mode:"synched",startPosition:0},0).to({x:279,y:185.4},4).to({_off:true,regX:40.1,regY:124.4,x:397.9,y:260.7,mode:"independent"},1).wait(22).to({_off:false,regX:0,regY:0,x:233,y:160.4,mode:"synched",startPosition:0},0).to({x:281,y:185.4},4).to({_off:true,regX:40.1,regY:124.4,x:394.9,y:260.7,mode:"independent"},1).wait(21).to({_off:false,regX:0,regY:0,x:233,y:160.4,mode:"synched",startPosition:0},0).to({x:393},6).wait(36).to({x:264.8,y:383.4},0).to({_off:true},1).wait(22));

	// escada
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("EgqMAPfIAS+9MAq0AAAIgDD7IF8AAIgDD7IF8AAIgDD8IF+AAIgCD5IF7AAIgDD7IF+AAIgDD7IF+AAIgCD6IF4AAIgCDig");
	this.shape_53.setTransform(-16.8,214.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("EAnEARnIAAgVIACjiIl5AAIACj6Il9AAIACj7Il9AAIACj7Il7AAIACj5Il9AAIACj7Il8AAIADj8Il6AAIADj6Mgq1AAAIgDAAIACj8MAq5AAAIgDD7IF7AAIgCD7IF7AAIgCD8IF7AAIgBD7IF9AAIgCD5IF7AAIgDD7IF9AAIgCD6IF+AAIgCD3IF5AAIgDD7g");
	this.shape_54.setTransform(3.1,203.3);

	this.instance_4 = new lib.Interpolação2("synched",0);
	this.instance_4.setTransform(2.3,203.3);
	this.instance_4._off = true;

	this.text = new cjs.Text("e", "39px 'Trebuchet MS'");
	this.text.lineHeight = 39;
	this.text.setTransform(-188.5,-59.9,0.744,0.756);

	this.text_1 = new cjs.Text("d", "39px 'Trebuchet MS'");
	this.text_1.lineHeight = 39;
	this.text_1.setTransform(-204.8,-59.9,0.744,0.756);

	this.text_2 = new cjs.Text("a", "39px 'Trebuchet MS'");
	this.text_2.lineHeight = 39;
	this.text_2.setTransform(-220,-59.9,0.744,0.756);

	this.text_3 = new cjs.Text("d", "39px 'Trebuchet MS'");
	this.text_3.lineHeight = 39;
	this.text_3.setTransform(-236.2,-59.9,0.744,0.756);

	this.text_4 = new cjs.Text("i", "39px 'Trebuchet MS'");
	this.text_4.lineHeight = 39;
	this.text_4.setTransform(-244.3,-59.9,0.744,0.756);

	this.text_5 = new cjs.Text("s", "39px 'Trebuchet MS'");
	this.text_5.lineHeight = 39;
	this.text_5.setTransform(-256.3,-59.9,0.744,0.756);

	this.text_6 = new cjs.Text("r", "39px 'Trebuchet MS'");
	this.text_6.lineHeight = 39;
	this.text_6.setTransform(-267.5,-59.9,0.744,0.756);

	this.text_7 = new cjs.Text("e", "39px 'Trebuchet MS'");
	this.text_7.lineHeight = 39;
	this.text_7.setTransform(-283.4,-59.9,0.744,0.756);

	this.text_8 = new cjs.Text("v", "39px 'Trebuchet MS'");
	this.text_8.lineHeight = 39;
	this.text_8.setTransform(-297.6,-59.9,0.744,0.756);

	this.text_9 = new cjs.Text("i", "39px 'Trebuchet MS'");
	this.text_9.lineHeight = 39;
	this.text_9.setTransform(-305.8,-59.9,0.744,0.756);

	this.text_10 = new cjs.Text("n", "39px 'Trebuchet MS'");
	this.text_10.lineHeight = 39;
	this.text_10.setTransform(-321.5,-59.9,0.744,0.756);

	this.text_11 = new cjs.Text("U", "39px 'Trebuchet MS'");
	this.text_11.lineHeight = 39;
	this.text_11.setTransform(-340.5,-59.9,0.744,0.756);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzdiSMAm7AAAIAAElMgm7AAAg");
	this.shape_55.setTransform(-217.2,-41.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CCCCCC").s().p("AzdCTIAAklMAm7AAAIAAElg");
	this.shape_56.setTransform(-217.2,-41.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AJmJpIIfpTIAABwIofIngAyEJNIIgpVIAABpIogJEgAASDWIJFnQIAAFQIpFGRgAJmFpIIfsBIAACmIofKegAyEgYIIgo5IAADcIogJGgApHCOIJFpFIAABSIpFIqgApHiXIJFoVIAABpIpFHqg");
	this.shape_57.setTransform(-216.5,60.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#99CCCC").s().p("AJmNKIAAi5IIfooIAALhgAASNKIAAmAIJFmQIAAMQgApHNKIAAqiIJFoqIAATMgAyENKIAAjCIIgpEIAAMGgAJmGQIIfqfIAAELIofJRgAyEC1IIgpGIAAFsIogJWgAJmtJIIfAAIAAGVIofMAgAAStJIJFAAIAAIyIpFHQgApHh2IJFnpIAACLIpFJFgAyEtJIIgAAIAADbIogI5gApHtJIJFAAIAACAIpFIVg");
	this.shape_58.setTransform(-216.5,63);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#698E8E").s().p("AJXNKIAAsQIAAlRIAAoyIAOAAIAASVIAABEIAAC9IAABEIAAC5gAgCNKIAAzMIAAhSIAAiLIAAhqIAAiAIAUAAIAAQCIAAERIAAGAgApkNKIAAsGIAAhpIAAlsIAAjdIAAjbIAdAAIAAKVIAAA+IAADnIAAA3IAAKig");
	this.shape_59.setTransform(-216.4,63);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(1,1,1).p("AxqqUMAm0AAAIAAcGMgm0AAAgA1JRMMAAAgi9");
	this.shape_60.setTransform(-228.6,37.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AyENKIAA6UMAkJAAAIAAaUg");
	this.shape_61.setTransform(-220,63.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AzZODIAA8GMAmzAAAIAAcGgAyeNaMAkJAAAIAA6UMgkJAAAg");
	this.shape_62.setTransform(-217.4,61.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AOLXgIAAkvIAA8GIAAkJMgm0AAAIAAEJIAAcGIAAEvIjeAAIAAlUMAAAgi9IAAmuMA4QAAAMAAAAu/g");
	this.shape_63.setTransform(-183.9,31.4);

	this.instance_5 = new lib.Interpolação3("synched",0);
	this.instance_5.setTransform(-1.2,123);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53}]}).to({state:[{t:this.shape_54},{t:this.shape_53}]},22).to({state:[{t:this.instance_4}]},23).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},21).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},21).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},21).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},22).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},22).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},22).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},21).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_5}]},27).to({state:[{t:this.instance_5}]},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},0).to({x:43.3,y:227.3},4).to({startPosition:0},1).wait(21).to({startPosition:0},0).to({x:81.3,y:252.3},4).to({startPosition:0},1).to({_off:true},21).wait(198));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(97).to({_off:false},0).to({x:41.8,y:148},4).to({startPosition:0},1).wait(21).to({startPosition:0},0).to({x:81.8,y:173},4).to({startPosition:0},1).wait(22).to({startPosition:0},0).to({x:124.8,y:200},4).to({startPosition:0},1).wait(22).to({startPosition:0},0).to({x:159.8,y:223},4).to({startPosition:0},1).wait(22).to({startPosition:0},0).to({x:199.8,y:248},4).to({startPosition:0},1).wait(21).to({startPosition:0},0).to({x:360.8},6).to({startPosition:0},27).to({startPosition:0},1).wait(31));

	this.para = function(){
		subindo.stop();
		escada.stop();
	}

	var reniciar = function(){
		setTimeout(function(){
			$('#texto, #btns').fadeOut(500, function() {
				if(degrau < 8){

					$('.btn').css({
			      'pointer-events': 'auto'
			    });
			    $('#btn1, #btn2').css('background', 'transparent');
			    $('#central').html(pergunta[degrau]);
					$('#texto, #btns').fadeIn();
				} else {
					setTimeout(function(){
						require(["../wilib/js/lib/edi"],function(edi){
					   edi.finalizar();
					   barraMsg('Excelente! Pedro está formado! O próximo será você,<br>continue dedicando-se aos estudos!', {height: 80})
					  });
					},1500);
				}
			});
			}, 1000);
	}

	$('.botao').click(function(evt) {
		$('.btn').css({
        'pointer-events': 'none'
    });
		if($(this).attr('data-correta') == resposta[degrau]){
			$(this).css('background-color','rgb(0,96,182)');
			degrau++;
			reniciar();
			subindo.play();
			escada.play();
		}
		else{
			$(this).css('background-color','#F00');
			console.log("errou");
			reniciar();
		}

	});

	//para tudo
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.para).wait(1));
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.para).wait(1));
	this.timeline.addTween(cjs.Tween.get(this).wait(77).call(this.para).wait(1));
	this.timeline.addTween(cjs.Tween.get(this).wait(103).call(this.para).wait(1));
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.para).wait(1));
	this.timeline.addTween(cjs.Tween.get(this).wait(157).call(this.para).wait(1));
	this.timeline.addTween(cjs.Tween.get(this).wait(183).call(this.para).wait(1));
	this.timeline.addTween(cjs.Tween.get(this).wait(210).call(this.para).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(107.1,241.5,647.2,248.9);


// symbols:
(lib.subindo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	subindo = this;



	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAEQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBgBAAAAIAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAABQAAAAABAAQAEACgBACIgCADIgCABIAAgBg");
	this.shape.setTransform(-70.8,-49.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006666").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(-70,-47.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AAAAGQgDgCgDgEIgBgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAgBIACADQACACgBADIAAABIgFABIgDgBg");
	this.shape_2.setTransform(-70.9,-48.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAEANQABgDgBgEIgCgDQgBAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAQgBgCABgCQABgGAFgDIABAAQADgCADACQAFACACAFQADAEgCAFQgBAFgFADgAgDgKIgCADIAAADQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABIAAgCQACgFACACIABABQAAgEgCgBIgCgBIgBAAg");
	this.shape_3.setTransform(-70.6,-49);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAWAHQgWgWgVAO");
	this.shape_4.setTransform(-69.2,-49.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAKIAAgDQAAgIgCgHQAVgOAWAXQgQANgMAAQgHAAgGgEg");
	this.shape_5.setTransform(-69.2,-49.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AgsAJIAAgRIBZACIAAAPg");
	this.shape_6.setTransform(-69.7,-53.5,1,1,0,0,0,0.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#999999").ss(1,1,1).p("AAAAAQAAAAAAAAIAAAA");
	this.shape_7.setTransform(-76.2,-35.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#996600").ss(1,1,1).p("AgeAJQAGADAKgBQAKgCAEgBQADgBAKgCQAKgDAIgM");
	this.shape_8.setTransform(-73,-36.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#9999FF").ss(1,1,1).p("AAAAAQAAAAAAAA");
	this.shape_9.setTransform(-73.5,-68.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_10.setTransform(-65.4,-60.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#331A00").s().p("AAAAAIAAAAIAAAAg");
	this.shape_11.setTransform(-65.4,-60.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC9900").s().p("AgHCnIABgFIAAgKIAFABIAEABQAeAAAWgkQATghAAggIAAgIIgBgFQgFAagIAUQgeAQgMADIgyARIgoAJQgJgDgHgFIgCgBIgDgDIgEgHIgBgBIgCgHQABgRgBgIIAKAEQAFAAAEgCQAGgEAAgFIgbgBIAAABIgCgCIgDgKQgBgEAAgIIABAAQAEABAFAAIAAAAIABAAIABAAIAEAAIAOgCIAOgEQAKgCAIgPQgIAPgKACIgOAEIgOACIgEAAIgBAAIgBAAIAAAAQgFAAgEgBIgBAAIgBAAIgBgBIgDgDIgDgFIACgFIACgIQAAgEgFgHIARgBQAQgDAAgGIgBgDQgCgCgDAAIgIAAIgHACQgLAAgMgDQgLgEgLgGIgBgBIgBgCQgFgHAAgJQAAgFAHgHIAQgNQAYgUAAgZQAAgOgEgFQgGgLgDgJIgBgDQgBgDAAgDQABgGAHgaIAEgPIABAAIAAABQACAKARAHQAPAHAHAAQAIAAAFgFIAGgJQAIACARAAQAAAKAMAHQAIAGAHAAQAGAAAIAMQAHALAAAEIgBAHQgRAGgLgEQgigKgUAAQgTAAgHAVQgGAUgGALIgQAXQAQgOAHgDIALgCIAKgBIABACIAbAEIAOAGIAVAJQAIAEAIAHQAJAFAGAGIAMANQAIAHAHAAQASAAAHgeQADgJACgPIACgSQADgBAGADIAHACQAHAAACgHQACgGAHAAQAHAAAFAIIAFAJQgCAMgHAQIgFAKIgEAHQABAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgCABIgBADQgNAVgPAAIgDAAIgDAUQAIADAFAAIAEgBIAAAtQAAAQAXAQQAUAOAKAAQAEAAAHgFIAAA8QhZAkgqAAQgjAAABgdgABig1IgBAIIgBAHQAJgIAHgKQAIgLAAgEQAAgFgDgDIgEgCIgBgCIAAgBIgHADQgHAAgDADQgEACgBAEIgEARIAAAGIACgCIACgBIAEgCIAEABg");
	this.shape_12.setTransform(-65.1,-40.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A07001").s().p("AgEC3IgFgBIAAgXIgagHIAygRQALgDAfgQQAHgUAFgbIABAFIABAJQAAAggTAgQgWAlgeAAIgEgBgAByB5QgYgRAAgQIAAgtIgEACQgFAAgHgEIADgVIACAAQAPAAAOgUQgBAEgCAFQgCAFgBAIIAAABIAAACIgBAAIABAAQAAANACACQACAGANAHQgCADgDACIgGABQgGACAAAMIAAABQAAAQAXAGQAFACAIABIAMAAIAEAAIAAAeQgGAFgFAAQgJAAgUgNgAhnBtIgDgHIAAgBIAbABQAAAFgFADQgFADgEAAIgKgEgAh5AsIgBgCQgEgEgMgIQgLgIgEgFIAAgBQALAGAKAEQANAFAKAAIAIgBIAIgCQACAAACADIACADQAAAHgRACIgQACIgBgBgAAfAGIgMgLQgHgHgIgFQgIgHgJgEIgUgJIgOgFIgcgEIAAgCIgKAAIgLADQgIACgQAPIARgYQAFgKAHgVQAGgUATAAQAUAAAiAKQAMAEAQgHIABgHQAAgDgGgLQgIgNgGAAQgHAAgJgFQgLgHAAgLQgSAAgIgBIgFAIQgFAGgIAAQgIAAgPgHQgQgIgCgJIAAgBIgBgBQADgIAEgDIADgDIgBAAIAAgCIADgBIgBADIAAAAQgCAHAGAGQAHAGAJAAQAKAAADgBQAIgEgFgOQAEAKAIACIAMABQAIAAAJgDQACgBAZABQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgBABIgCABQgGAGAAAEQAAAHAMAHQAKAHAMgBIgBAEQgCADAAAEQAAAKAKAGQAIAEAEAAIgSAPQgGAIAAASIAAABQABAEAFAFIAJAIIABABIABACIgFAJIgCAFQAAAPAFAHQAFAFAFAAQAOAAAFgQQADgMgCgNIACgGQAGgOAKgNQAFADAFAAQAIAAABgBQACgBACgJIAVAAQAAAGACAKIADANIgBAGIgFgIQgEgJgIAAQgGAAgDAHQgBAHgHAAIgIgDQgFgCgDABIgDARQgCAPgCAJQgHAdgTAAQgHAAgHgHgAAMhDIABAAIgBgBgABegPIAAgIQgEgCgEACIgCACIgCACIAAgHIAEgRQACgEADgCQAEgCAGgBIAHgCIAAABIACABIAEADQADACAAAFQAAAFgIAKQgIALgIAIIABgHg");
	this.shape_13.setTransform(-64.8,-43.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("AiIAiQgDgDgBgDIABgBQADgDADgHQAHgOADgDQAFgDARgBQARgCAGgFQAJgMALgEQAGgDAJAAIAAABQgBAIgOARQgQAPgJAAIgHgBIgHgCQgGAAgDAFQgBABgDAJQgFAOgOAAQgDAAgEgDgABiAaQgFgFAAgKIAAgFIACAIQAGgDAJgBIANgCQAMAAADAGIADAGIgGACQgSAIgHAAQgIAAgEgEgAA4AAQgGgDAAgIIAAAAIAPgDIANgDQAGAAAGANQgLAFgMAAQgIAAgDgBgAAGgXQAGgCAEgEIAIgHQAGAAAIALQgDAEgFAEIgKAKg");
	this.shape_14.setTransform(-59.3,-71.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1A0000").s().p("AALCFQgIAAgEgCQgWgGAAgRIAAAAQAAgMAGgDIAFgBQADgBADgEQgNgGgDgGQgBgCAAgNIAAgBIAAgCIAAAAQAAgJACgEQADgFABgGIACgEQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIADgHIAGgKQAFgOABgMIABgGIgCgNQgCgKAAgGIgUAAQgCAIgCACQgBABgIAAQgFAAgFgDIgJgIIAEAFIAFADQgKANgGAOIgDAFQADALgEAMQgEARgPAAQgEAAgFgGQgGgHABgOIACgEIAEgJIgBgBIAAgBIgJgJQgFgFgCgEIAAgBQABgRAFgIIATgQQgFAAgHgEQgKgGAAgJQAAgEACgDIABgEQgMABgNgHQgLgHAAgIQAAgEAGgGIABABIgBACQAAAIATAJQAPAIALAAQAKAAANgIIAKgHIAAABIgBADQABAIAJAFQAIAEAHAAIANgBQADgDACgNIABgBIAEAAQAAANAIAJQAJALAVAAQAOAAAFgJQADgMAEgIQgBARAHAOQAIARAPAAQAFAAACgCIAHgEQAFAIAGADQAGADAJAAQAHAAAIgJQgBARgIAOIgKAPQAAAEAFAIQADAIAAADQAAAXgGAKQgIALgWAHQAHANgWANQgTANgSAAIAGADIAAAJQAAANgGAIQgFAGgJABIgFABIgLgBg");
	this.shape_15.setTransform(-52,-46.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#330000").s().p("ACkBsQgGgDgFgIIgGAEQgDACgEAAQgQAAgIgRQgHgOABgRQgEAHgDANQgEAJgOAAQgVAAgLgLQgJgJAAgNIgDAAIgBABQgCANgEADIgNABQgHAAgHgFQgIgFAAgHIAAgDIABgBIgBAAIgKAHQgMAIgLAAQgKAAgQgIQgTgJAAgIIABgDIAAAAIABgBIABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQgZgBgCABQgJAEgIgBIgMgBQgIgCgEgKQAFAOgIAEQgDABgKABQgJgBgHgGQgGgGACgGIAAgBIABgDIgDACIgGABQgKgCACgEIgFAAIABgBIAAgBQAHgOAAgKQAAgPALgLQAIgJAJgCQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABADADADQAFADACAAQAPAAAEgPQADgIABgBQADgFAGAAIAHACIAHABQAJAAAQgRQAOgRABgJIAAAAIAHgBQALAAAOAEIANAEIAHAAIALAPIALgJQAFgEACgFIAAACQAIALAEABQAAAJAGAEQAEACAHAAQANAAAKgHIAAACIADAJIAAAGQAAAKAFAFQAFADAHABQAHAAASgIIAHgCIAFALQAFALAIAAQAJAAgDAGQgFAEADADIAHAPIAGANQAIAFAKASIASAHQAGAFAAAOQAAAJgBADQgBAFgMAPQAIAGAAADIAAAGQgIAJgHAAQgJAAgGgDgAAAAwIAAgCIAAAAIAAACg");
	this.shape_16.setTransform(-57.5,-63.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC9900").s().p("AgcBKIAAgBQgTgCgPgrQgOgoABg2QAPADAVACQAoAGAJgCQAFAAAHgDQAMgFASgKIADgBIASgDIABAAQAHBJgOAvQgLAnguAAQgQAAgWgGg");
	this.shape_17.setTransform(-46.2,26.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A07001").s().p("AgaANQgVgCgPgDIgFgYIAAgBIADABIAEABQAJACAHAAIAKAAIAMACQALABAEgBQALgFAdAIIALAEQANADALABIgDAAQgSAJgMAFQgHADgFAAIgHABQgMAAgegFg");
	this.shape_18.setTransform(-47.5,19);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7F7F7").s().p("AgaBcQAbhXgHhhIAEAAQAKAjAEARIAIAbQADAFABAAIACBDQAEgCgPALIgBAAIgBAAIAAABIgEACIgLAJQgIAHgJAEIgGADg");
	this.shape_19.setTransform(-36.6,8.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D0D0D0").s().p("AgLBoIABgCIABACIgBAAIgBAAgAAGhoQACAKAEAMIgEABIgCgXg");
	this.shape_20.setTransform(-38.2,7.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E1E1E1").s().p("AgMAvQgEABgLgBIACgHIAFgZQAEgYgGgmQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQATAYANAeQAIAUAEAUIACAFQgcgIgMAFg");
	this.shape_21.setTransform(-47,13.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAxCWIgMgEIgBgFQgFgUgIgTQgNghgTgYQAAAAAAABQAAAAAAAAQgBABgBAAQgBAAgBAAQAGAmgEAbIgFAYIgBAHIgNgCIgGgDIgJgCIAAABIgvgQIgJhBQABgKAAgXIgCgdIgBgRIgBgUQgDgXABgKIACAHQgDgPALggQAMghBDgDQBBgEAVAhIAYAqIAKAVIACAWQAJBhgdBXIgBACIABAAIABgBIAGgCIgBAEIgBACIgRADQgMgBgMgDg");
	this.shape_22.setTransform(-47.9,3.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiBhZIiWCeIgKALACChZICWCnIAKAM");
	this.shape_23.setTransform(-52.9,49.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00CC99").s().p("AAFCvIACgGIAEgRQARg3AHgmIAEgXIAAgDQAEgWADgHQAHgXAJgaIAghVIACgEIAOgnIATAAICWAAIAACoIiWioICWCoIAAC0gAkWCvIAAi9ICVifIBrAAIAEAiQACAOAAAOQAAAYgDAUQgHAeAAASIADAGIhFAvIABAIIgHABIgBAEQgSA4gNATQACACAIABIAHADIACABIABACIABADQACAMgIAbIgBACgAEXgFgAkWitICVAAIiVCfgAiBitg");
	this.shape_24.setTransform(-52.9,57.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A07001").s().p("AhnCkIAFgUIABgCQAIgbgCgMQADAIAQAMIAEADQAYAQAegFQAbgFAHgDQAEgBAGgHIgFASIgCAFIgIAUgAhmBfQgIgCgCgCQANgSASg5IAEABIAEAIQAEAJAAAGIgEAIIgQAlIgFAMIgIgCgAASgvIgSACIgCAAIgCABIgBAAIgDgGQAAgSAHgeQABgUAAgYQAXAMAWgBQAWgBAVgPIAYgQIABACIghBWQgJAZgHAZQgCAHgEAUQgHgzghACg");
	this.shape_25.setTransform(-54.8,60.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC9900").s().p("AhfEEIgEgDQgQgMgDgIIgBgDIgBgCIgBgBIAFgMIAQglIAEgIQAAgGgEgJIgEgIIgEgBIABgEIAHAAIgBgJIBFgxIABAAIACgBIACAAIAUgCQAfgCAHA1IgBADIgEAXQgHAmgQA3QgEAHgEABQgHADgdAFIgPABQgVAAgSgMgAgZgIQAAgNgCgPIgEgiIgBgMQgBhRATg6IACgMIACgDQAHgNALgJQASgMAXgBQAhgCATAQQAQAMADAVQgBAEABAIIABABIAAACIABAMQABA4gWBHIgOAoIgBADIgBgCIgYAQQgVANgWABIgDAAQgSAAgWgJg");
	this.shape_26.setTransform(-52.1,47.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgBGlQhHgFgXgQQgKgGgMgEIACgbQAHhBAAgeQAAgDgEgLQgFgOgFgFQgPAfgWBDIgRAwIAAAAQgTgDgIgLQgKgNAAggIATiDIAVgCQAmAABwAKQBuAKAfAAQApAAAVgNQAHgEAMgDIgBAvIAEBBIAEBCQAAAZg7ARQguAOgeAAQgvAAgZgCgAiygcIgFheQAAiaA3hXQANAFAPAEQAsALAtAAQA4AAA8gnQAdgTAOgVIACABQApA/APBIQAPBIgOAlQgFAXg5hWQg5hWhCB0QhAB0g5AkQgxAegYAAIgGAAg");
	this.shape_27.setTransform(-59.6,21.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EAEAEA").s().p("AgcFQQhxgKgmAAIgUACQATiJAAggIgBgJQA8AlAvAlQAYAPAeAFQAcAFA+AAQBGAAALgCQAOgEAjgQIgBASQgFArgBAmQgLADgIAFQgUAMgpAAQgfAAhugKgAhqjZQgOgDgNgFIALgQIABgCQAIACAPAAQBJAABEgxQAmgbAWgcQAUASAUApIAAABQgPAWgdATQg7Ang4AAQguAAgsgMg");
	this.shape_28.setTransform(-59.1,7.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AiaG3IglgDIAQgwQAWhDAPgfQAGAFAFAOQAEALAAADQAAAegHBBIgDAbQgKgEgLgCgAgeChQgegFgYgPQgvgkg8glIgDgrQAXAFA5ghQA5gkBAh0QBCh0A5BWQA4BWAFgXIACAOQACAZAABYQAABNgFA+QgjARgOADQgLADhGAAQg8AAgegGgAiDlFQA1hFBmgeQAegUAEAAQASAAARAQQgWAdgmAaQhEAyhJAAQgPAAgIgCg");
	this.shape_29.setTransform(-58.1,15.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1A1A33").s().p("AhJCUQgtgQgEgUIgFg9QBGgHAdgKQAzgRAPgmQAGgOALgQQAJgSAHgjQADgPANgdIAGgKIADAbIACAAQAGAYAAAjQABAtAMAwQALAxAAAOQAAAOgYALQgYALgUATQgOAOgdAEQgOACgMAAQgfAAghgLg");
	this.shape_30.setTransform(-49.5,143.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333366").s().p("AhYDmIgFhKIADAAIgRhCIAFADIgikBQgHgzAegqQAcgoAxgHQAvgHAnAfQAnAfAHAzQAuDGgHBLIADAUIgGAKQgMAdgEAPQgHAjgJASQgKAQgGAOQgQAog0ARQgcAKhGAHIgGhMg");
	this.shape_31.setTransform(-54,118.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AioAgIgegNIgBgIIAAgLIAAgCQA0AUCGgJQCEgJBKglQADgEABAKIADAZQgpAZhqAOQgyAGgzAAQg6AAg+gHg");
	this.shape_32.setTransform(-56.5,169.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#993300").s().p("AjEAsIgBgUQAAgHAOgGIgBADQABAAAAAAQAAgBAAAAQABAAAAgBQAAgBAAgBIAGgCIACABQAJAGAIACIAugEQAxgEATgEQAcgFARgRIAEgEQAkADBLgSQAxgLAZgLIABADQAIAagEAmQhKAniEAJQgnACggAAQhOAAglgPg");
	this.shape_33.setTransform(-56.8,164.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC6600").s().p("AhZAUIgBgBQARgFAcgFQBCgJAJgDQAJgDAPgUIABgBQADAEAEAEQAJAGALACIAJABIgEAEQgTAQgcAHQgTADgvAFIguADQgIgCgJgGg");
	this.shape_34.setTransform(-65.3,163.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5C2E01").s().p("AhJAoIgJgBQgKgBgJgHQgFgDgDgFQANgTAIgQQAPADAXgFIADAAIAQgEQAVADAkgFQA0gHAGgMQAQANAKAdQgZALgxALQg+APgkAAIgLAAg");
	this.shape_35.setTransform(-48.7,158.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333366").s().p("AhLE/QgqgmAEgyIgJiWQgGgHgBgFQgBgFgBgaQgBgWADgUIACAAIgFhMIgCAAQgGgOAAgQQgBgJAGgNIgFhOQgDg5AmgrQAngqA5gCQA4gDAqAmQAqAnADA5IADCUQgBAAgBABQAAABAAAAQgBABAAAAQAAABABAAQAFAGABAOQACApgHAhIgEATIAAA2IACAAIADAdQABALgHAJIAACXQAagcgmAqQgnArg5ADIgHAAQgzAAgoglg");
	this.shape_36.setTransform(-56.2,73.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1A1A33").s().p("AhRCDQgrgVgBgUQgBgOADguQBGABAegGQA0gLAUgkQAIgNAMgPQALgQALgiQAFgPARgaIAGgKIAAAbIACAAQADAZgEAjQgFAsAGAxQAGAygCAOQgBANgaAJQgZAIgVAQQgRAMgcABIgHAAQgnAAgqgVg");
	this.shape_37.setTransform(-66.1,143.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333366").s().p("Ah8EsQAAggADgtIAEhKIACAAIgIhCIAEADIgCkDQgBgzAiglQAhgkAxgCQAvgBAjAjQAjAkABAzQAWDHgPBMIgBAAIAAATIgGAKQgQAbgFAPQgMAigLAQQgMAOgHAOQgVAmg0ALQgaAFg3AAIgTAAg");
	this.shape_38.setTransform(-66,117);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5C2E01").s().p("AhLAjIgIgBQgKgDgJgHQgFgDgCgFQANgQAJgSQAQAEAWgDIADgBIAQgDQAVAFAlgDQAzgEAHgNQAQAOAIAeQgaAJgwAJQg3ALgjAAIgVgCg");
	this.shape_39.setTransform(-66.7,156.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC6600").s().p("AhJAYQgIgCgJgHIAAAAQAQgFAegDQBBgHAJAAQAKgDAQgUIAAAAQADAEAFAEQAIAHAKACIAJACIgDADQgVAPgdAFQgSADguABIgpABIgGAAg");
	this.shape_40.setTransform(-83.4,160.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AipASIgdgPIAAgFIgBgOIABgBQAzAWCFgCQCEgBBNghQADgEABAKIABAZQgrAXhpAIQgdACgcAAQhPAAhVgPg");
	this.shape_41.setTransform(-75,167.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#993300").s().p("AjFAeIAAgUQAAgIAPgDIgBABQAAABAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBIAHgCIABAAQAJAFAIACIAvgBQAwgBATgCQAcgEATgRIADgDQAlAEBMgNQAwgJAagKIABAEQAGAagFAmQhNAjiEABIgPABQh5AAgwgXg");
	this.shape_42.setTransform(-75.1,162.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333366").s().p("AgFFiQg5gBgogpQgogpAJgyIAAiVQgFgHgBgGQgBgEAAgaQABgWAFgTIACAAIgBhMIgBAAQgFgPAAgQQAAgJAHgMIAAhOQABg5ApgoQApgnA3ABQA5ABAnApQAoApgBA5IgHCTQgBABgBABQAAABAAAAQgBABAAAAQAAAAABAAQAFAGAAAPQgBAogJAhIgFASIgEA1IACABIABAdQAAALgHAJIgKCVQAcgagpAnQgnAng1AAIgEAAg");
	this.shape_43.setTransform(-65.8,74.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC9900").s().p("AAAAAIABgBIgBADg");
	this.shape_44.setTransform(-45.6,37.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BA8201").s().p("Ag6E2QgRgIgDgPQgEgPAFghQAEgbgEgLIgBgEIgBgBIgBgBIgJgBQgIgBgCgCQAKgSAJg6QAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAHAAIgBgJIA9g3IAAAAIgFgFQgCgSABgcQABgUgEgXIgGgbIgMgsQgNhOAJg7IABgKQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAGgNAKgJQAQgPAWgDQAggGAVANQARAKAHATQgBAEADAIIABAAIAAADIADAKQAMBFgVBgIgDADIACACIgUBUIgJAyIgBAdIAAADIgBAWQgBAlgIA4IgCASQgEAWgGAQQgNAigZAJQgaAKgPAAQgIAAgFgCg");
	this.shape_45.setTransform(-54.2,45.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC9900").s().p("AAAAAIAAAAIAAAAg");
	this.shape_46.setTransform(-53.2,27.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E1E1E1").s().p("AgMAQQgEgZgPgkQAEgBgBgDQAWASAQAcQANAQAJAUQgXADgIAJQgCADgIACIgDgig");
	this.shape_47.setTransform(-59,7.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BA8201").s().p("AADBsQgRAEgYglQgYglgMgyIgLgYIAIgBQAHAAAHgCQAIgCADgDQAIgJAXgDIAKAAQAQgBANgLQAJgIAHgOIAHgNIADgEIABgBIANAiQAcBJAAA0QgCA2hRAEg");
	this.shape_48.setTransform(-53.5,16.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A07001").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_49.setTransform(-49,5.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D0D0D0").s().p("AgrhrIALAUIAcAuIAMAYQAGAJgCgFIAhA7QgIAFgIAPIgCABIAAABIAAAAIAAABIgCAEIgIANQgGAOgKAIQgBhsgrhrg");
	this.shape_50.setTransform(-51.8,-1.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgmCcIgYg9QgBgLgGgXIgLgeIgFgQIgGgSQgHgWgCgKIABAEQgFgPABggQgBgkAwgbQAxgcAWAbIAdAgIANATQAsBqADBsQgNALgSACIgKAAQgJgUgNgTQgSgcgWgRQABACgCACQANAjAEAcIADAhQgGACgIAAIgGACIgYAAIgOAAg");
	this.shape_51.setTransform(-62.1,-3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC9900").s().p("AgCAEIACgEIADgEIAAAIg");
	this.shape_52.setTransform(-113.5,40.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1A0000").s().p("AAKCFQgHAAgEgCQgWgGAAgRIAAAAQAAgMAGgDIAGgBQADgBACgEQgNgGgCgGQgCgCAAgNIAAgBIAAgCIAAAAQABgJACgEQACgFAAgGIADgEQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAIAEgHIAFgKQAGgOABgMIAAgGIgBgNIgBgQIgVAAQgCAIgCACQgBABgJAAQgEAAgFgDIgJgIIAFAFIAEADQgLANgFAOIgDAFQADALgDAMQgFARgOAAQgFAAgFgGQgFgHgBgOIACgEIAGgJIgBgBIgBgBIgJgJQgFgFgCgEIAAgBQAAgRAHgIIASgQQgFAAgHgEQgKgGAAgJQAAgEABgDIACgEQgMABgMgHQgMgHAAgIQAAgEAGgGIAAABIAAACQAAAIASAJQARAIAJAAQALAAANgIIAKgHIAAABIAAADQgBAIAKAFQAIAEAHAAIANgBQAEgDACgNIABgBIACAAQAAANAJAJQAJALAWAAQAOAAAEgJQADgMADgIQAAARAHAOQAIARAQAAQADAAAEgCIAFgEQAGAIAGADQAFADAJAAQAIAAAIgJQgBARgIAOIgJAPQAAAEADAIQAFAIAAADQAAAXgHAKQgIALgVAHQAGANgWANQgSANgTAAIAGADIAAAJQAAANgGAIQgFAGgJABIgEABIgNgBg");
	this.shape_53.setTransform(-56,-46.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#663300").s().p("AiIAiQgDgDgCgDIABgBQAEgDADgHQAHgOADgDQAFgDARgBQARgCAFgFQAKgMALgEQAGgDAJAAIAAABQgCAIgOARQgPAPgJAAIgHgBIgIgCQgFAAgDAFQgCABgCAJQgEAOgPAAQgCAAgFgDgABiAaQgGgFAAgKIABgFIACAIQAGgDAJgBIAOgCQALAAAEAGIADAGIgHACQgSAIgHAAQgIAAgEgEgAA3AAQgFgDAAgIIABAAIANgDIAPgDQAFAAAFANQgKAFgMAAQgHAAgFgBgAAHgXQAFgCAEgEIAJgHQAEAAAJALQgCAEgFAEIgMAKg");
	this.shape_54.setTransform(-63.3,-71.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A07001").s().p("AgEC3IgFgBIAAgXIgagHIAygRQALgDAfgQQAHgUAFgbIABAFIABAJQAAAggTAgQgWAlgeAAIgEgBgAByB5QgYgRAAgQIAAgtIgEACQgFAAgHgEIADgVIACAAQAPAAAOgUQgBAEgCAFQgCAFgBAIIAAABIAAACIgBAAIABAAQAAANACACQACAGANAHQgCADgDACIgGABQgGACAAAMIAAABQAAAQAXAGQAFACAIABIAMAAIAEAAIAAAeQgGAFgFAAQgJAAgUgNgAhnBtIgDgHIAAgBIAbABQAAAFgFADQgFADgEAAIgKgEgAh5AsIgBgCQgEgEgMgIQgLgIgEgFIAAgBQALAGAKAEQANAFAKAAIAIgBIAIgCQACAAACADIACADQAAAHgRACIgQACIgBgBgAAfAGIgMgLQgHgHgIgFQgIgHgJgEIgUgJIgOgFIgcgEIAAgCIgKAAIgLADQgIACgQAPIARgYQAFgKAHgVQAGgUATAAQAUAAAiAKQAMAEAQgHIABgHQAAgDgGgLQgIgNgGAAQgHAAgJgFQgLgHAAgLQgSAAgIgBIgFAIQgFAGgIAAQgIAAgPgHQgQgIgCgJIAAgBIgBgBQADgIAEgDIADgDIgBAAIAAgCIADgBIgBADIAAAAQgCAHAGAGQAHAGAJAAQAKAAADgBQAIgEgFgOQAEAKAIACIAMABQAIAAAJgDQACgBAZABQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgBABIgCABQgGAGAAAEQAAAHAMAHQAKAHAMgBIgBAEQgCADAAAEQAAAKAKAGQAIAEAEAAIgSAPQgGAIAAASIAAABQABAEAFAFIAJAIIABABIABACIgFAJIgCAFQAAAPAFAHQAFAFAFAAQAOAAAFgQQADgMgCgNIACgGQAGgOAKgNQAFADAFAAQAIAAABgBQACgBACgJIAVAAIACAQIADANIgBAGIgFgIQgEgJgIAAQgGAAgDAHQgBAHgHAAIgIgDQgFgCgDABIgDARQgCAPgCAJQgHAdgTAAQgHAAgHgHgAAMhDIABAAIgBgBgABegPIAAgIQgEgCgEACIgCACIgCACIAAgHIAEgRQACgEADgCQAEgCAGgBIAHgCIAAABIACABIAEADQADACAAAFQAAAFgIAKQgIALgIAIIABgHg");
	this.shape_55.setTransform(-68.8,-43.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1A1A33").s().p("AgFCTQgtgCgqgbQgpgZAAgUIAIg8QBGAHAegEQA2gFAXgiQAJgNANgOQANgPAOggQAHgPASgZIAIgJIgCAcIACAAQABAYgIAjQgJAsACAxQAAAzgDANQgCAOgaAFQgbAHgWAOQgPAJgZAAIgFAAg");
	this.shape_56.setTransform(-74,143.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333366").s().p("AiMEkQADgfAIgtIAKhKIADABIgDhEIAEAEIAVkCQADg0AngiQAkgiAvAEQAxADAgAmQAgAngEAzQAEDJgXBLIgBATIgIAJQgTAagHAOQgNAhgNAPQgNANgJANQgYAkg1AGQgKABgQAAQgdAAgugFg");
	this.shape_57.setTransform(-72.5,115.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AAsArQhmgKhxgkIgbgTIABgIIACgNIABgBQAuAgCEARQCDATBRgWQAEgCgBAIIgDAaQgfALg6AAQgcAAgjgCg");
	this.shape_58.setTransform(-85.2,166.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#993300").s().p("AgVAkQiEgTgvgeIADgUQABgHAPgDIgBADQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAgBIAHgBIABABQAIAIAIAEIAtAGQAxAGATAAQAeAAATgOIAFgDQAjAKBNgCQAyAAAagGIABAEQADAbgNAkQgrAMg6AAQgzAAg7gJg");
	this.shape_59.setTransform(-84.6,163.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5C2E01").s().p("AhMAXIgJgCQgKgEgIgJQgEgEgCgEQASgPAKgQQAPAGAXAAIADAAIARAAQAUAIAkADQA0AEAJgLQAMAQAEAfQgaAFgzABIgXAAQg6AAgcgJg");
	this.shape_60.setTransform(-75.6,157.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC6600").s().p("AgeAOIgugGQgHgDgIgHIAAgBQARgCAdACQBCADAKAAQAJgBAUgSIAAAAQACAFADAEQAJAJAJACIAJACIgFADQgVAOgeAAQgTAAgvgGg");
	this.shape_61.setTransform(-92.7,159.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333366").s().p("Ag6FfQg5gJghgvQghguAPgxIAWiUQgFgIABgFQgBgFAEgaQAFgUAHgUIACAAIALhLIgBgBQgEgOADgRQACgJAIgLIALhNQAJg5AvgiQAtghA4AKQA5AJAhAvQAhAugJA5IgcCRQgEADABABQAEAGgCAPQgHAlgOAiIgHASIgMA0IACAAQgCAXgBAGQgBAMgJAHIggCTQAggVgvAhQgkAagpAAQgMAAgMgCg");
	this.shape_62.setTransform(-64.1,72.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5C2E01").s().p("AhLAjIgIgBQgKgDgJgHQgFgDgDgFQAOgQAKgSQAPAEAWgDIACgBIARgDQAWAFAlgDQAygEAHgNQAQAOAJAeQgaAJgxAJQg3ALgjAAIgVgCg");
	this.shape_63.setTransform(-70.7,156.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CC6600").s().p("AhJAYQgIgCgJgHIAAAAQAQgFAdgDQBCgHAKAAQAJgDAQgUIAAAAQACAEAFAEQAJAHALACIAIACIgEADQgUAPgcAFQgTADgvABIgoABIgGAAg");
	this.shape_64.setTransform(-87.4,160.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#BA8201").s().p("AADBsQgRAEgYglQgYglgMgyIgLgYIAIgBQAHAAAHgCQAIgCADgDQAIgJAXgDIAKAAQARgBAMgLQAJgIAHgOIAHgNIADgEIABgBIANAiQAcBJAAA0QgCA2hRAEg");
	this.shape_65.setTransform(-57.5,16.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D0D0D0").s().p("AgshrIAMAUIAcAuIALAYQAHAJgCgFIAgA7QgGAFgJAPIgBABIAAABIgBAAIAAABIgDAEIgHANQgHAOgIAIQgChsgshrg");
	this.shape_66.setTransform(-55.8,-1.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1A0000").s().p("AAKCFQgHAAgDgCQgXgGAAgRIAAAAQAAgMAGgDIAGgBQADgBACgEQgNgGgCgGQgCgCAAgNIAAgBIAAgCIAAAAQABgJACgEQACgFAAgGIADgEQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAIAEgHIAFgKQAGgOABgMIAAgGIgBgNIgBgQIgVAAQgCAIgCACQgBABgJAAQgEAAgFgDIgJgIIAEAFIAFADQgKANgGAOIgCAFQACALgDAMQgFARgOAAQgGAAgEgGQgFgHgBgOIACgEIAGgJIgBgBIgBgBIgJgJQgFgFgBgEIAAgBQgBgRAHgIIASgQQgFAAgHgEQgKgGAAgJQAAgEABgDIACgEQgMABgMgHQgMgHAAgIQAAgEAGgGIAAABIAAACQAAAIASAJQAQAIAKAAQALAAANgIIAKgHIAAABIAAADQgBAIALAFQAHAEAHAAIANgBQADgDADgNIABgBIACAAQAAANAJAJQAKALAVAAQAOAAAEgJQADgMADgIQAAARAHAOQAIARAQAAQADAAADgCIAGgEQAGAIAGADQAFADAJAAQAIAAAIgJQgBARgIAOIgJAPQAAAEADAIQAEAIABADQAAAXgHAKQgIALgVAHQAGANgVANQgUANgSAAIAGADIAAAJQAAANgGAIQgFAGgJABIgEABIgNgBg");
	this.shape_67.setTransform(-57,-46.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#663300").s().p("AiIAiQgDgDgCgDIABgBQAEgDADgHQAHgOADgDQAFgDARgBQARgCAFgFQALgMAKgEQAGgDAJAAIAAABQgCAIgOARQgPAPgJAAIgHgBIgIgCQgFAAgDAFQgCABgCAJQgEAOgPAAQgCAAgFgDgABiAaQgGgFAAgKIABgFIACAIQAGgDAJgBIAOgCQALAAADAGIAEAGIgHACQgSAIgHAAQgHAAgFgEgAA3AAQgFgDAAgIIABAAIANgDIAPgDQAFAAAFANQgKAFgMAAQgHAAgFgBgAAHgXQAFgCAFgEIAIgHQAEAAAJALQgCAEgGAEIgLAKg");
	this.shape_68.setTransform(-64.3,-71.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#330000").s().p("ACkBsQgGgDgFgIIgGAEQgDACgEAAQgQAAgIgRQgHgOABgRQgEAHgDANQgEAJgOAAQgVAAgLgLQgJgJAAgNIgDAAIgBABQgCANgEADIgNABQgHAAgHgFQgIgFAAgHIAAgDIABgBIAAgCIAAAAIAAACIgBAAIgKAHQgMAIgLAAQgKAAgQgIQgTgJAAgIIABgDIAAAAIABgBIABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQgZgBgCABQgJAEgIgBIgMgBQgIgCgEgKQAFAOgIAEQgDABgKABQgJgBgHgGQgGgGACgGIAAgBIABgDIgDACIgGABQgKgCACgEIgFAAIABgBIAAgBQAHgOAAgKQAAgPALgLQAIgJAJgCQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABADADADQAFADACAAQAPAAAEgPQADgIABgBQADgFAGAAIAHACIAHABQAJAAAQgRQAOgRABgJIAAAAIAHgBQALAAAOAEIANAEIAHAAIALAPIALgJQAFgEACgFIAAACQAIALAEABQAAAJAGAEQAEACAHAAQANAAAKgHIAAACIADAJIAAAGQAAAKAFAFQAFADAHABQAHAAASgIIAHgCIAFALQAFALAIAAQAJAAgDAGQgFAEADADIAHAPIAGANQAIAFAKASIASAHQAGAFAAAOQAAAJgBADQgBAFgMAPQAIAGAAADIAAAGQgIAJgHAAQgJAAgGgDg");
	this.shape_69.setTransform(-62.5,-63.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1A1A33").s().p("AgECTQgtgCgrgaQgpgZABgUIAHg9QBGAIAfgEQA0gGAYgjQAJgMANgNQANgQANggQAHgPASgZIAIgJIgCAbIACAAQABAZgHAjQgJAsACAxQAAAygCAOQgDAOgaAFQgaAGgXAPQgQAJgYAAIgEAAg");
	this.shape_70.setTransform(-84.4,140.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333366").s().p("AiLEkQADgeAHguIAJhKIADABIgChDIAEADIAUkDQADgzAmgjQAkghAvADQAxAEAgAlQAgAngDAzQAEDJgWBKIgCAUIgHAJQgTAagGAOQgOAhgMAPQgOAOgJAMQgXAlg1AGQgKABgPAAQgdAAgvgFg");
	this.shape_71.setTransform(-83.1,112.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AAtAqQhngJhxgkIgcgTIACgIIACgMIABgCQAvAgCDAQQCDASBRgWQAEgBAAAIIgEAZQgfANg6AAQgcAAgigDg");
	this.shape_72.setTransform(-95.5,163.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#993300").s().p("AgVAkQiEgSgvgeIADgUQABgHAPgDIgBADQAAAAABAAQAAAAAAgBQAAAAABgBQAAgBAAgBIAHgBIABACQAIAIAIADIAtAGQAxAGATAAQAdAAAUgPIAFgDQAjALBNgCQAygBAagGIABAEQADAbgMAkQgtANg8AAQgxAAg6gJg");
	this.shape_73.setTransform(-95,159.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CC6600").s().p("AgeAPIgtgGQgIgDgIgHIAAgBQARgCAdACQBCACAKAAQAJgBAUgSIAAAAQACAFAEAEQAHAJAKABIAJADIgFADQgWAOgdAAIgDAAQgUAAgrgFg");
	this.shape_74.setTransform(-103.1,155.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5C2E01").s().p("AhNAXIgJgDQgKgDgHgJQgDgEgCgEQAQgPAMgQQANAGAYAAIACAAIARAAQAVAHAkADQA0ADAIgKQANAQADAfQgaAFgxABIgYABQg5AAgegJg");
	this.shape_75.setTransform(-86,153.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333366").s().p("AiHFJQg1gWgVg1QgXg1AagrIA2iMQgCgIACgGQAAgEAKgXQAJgVAMgSIABABIAchHIgBAAQAAgQAHgPQADgIALgJIAchJQAVg1AzgWQA1gWA1AWQA1AWAWA0QAXA1gXA1Ig7CIQgBAAgBAAQgBABAAAAQgBAAAAABQAAAAAAAAQADAHgFAMQgRAmgVAdIgLAPIgXAxIACAAIgJAcQgFALgJAGIg+CHQAhgNgyAWQgbALgbAAQgaAAgbgLg");
	this.shape_76.setTransform(-68.6,70.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1A1A33").s().p("AhNCLQgtgSgBgUQgCgOAAguQBGgDAdgIQA0gOASgmQAGgOAMgPQAKgQAJgjQAEgPAOgbIAGgLIACAcIACgBQAEAZgBAjQgDAsAJAxQAJAygBAOQAAANgZAKQgZAJgUASQgQANgcACIgQABQgkABglgRg");
	this.shape_77.setTransform(-62.3,143.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333366").s().p("AhoDiIgBhKIADAAIgMhCIAEAEIgSkDQgFgzAggnQAfgmAxgFQAvgEAlAhQAlAiAEAzQAiDFgKBNIgBAAIABATIgFAKQgOAcgEAPQgKAjgKAQQgLAPgHAOQgSAogzAOQgeAIhGADQgCgfAAgug");
	this.shape_78.setTransform(-64.7,117.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#5C2E01").s().p("AhJApIgJgBQgKgCgJgGQgFgEgDgEQANgTAIgQQAPACAWgEIADgBIAQgEQAWADAlgFQAygHAGgNQARANAKAdQgZALgwAMQhAAQgkAAIgKAAg");
	this.shape_79.setTransform(-62.5,156.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AinAhIgegMIgBgIIgBgNIAAAAQA1ATCFgKQCDgJBLgmQADgEABAKIADAZQgpAahpAOQg1AHg3AAQg3AAg6gHg");
	this.shape_80.setTransform(-70.2,167.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC6600").s().p("AhZAUIAAAAQAQgGAdgFQBAgJAKgDQAJgDAPgUIAAgBQADAEAFAEQAJAGAKABIAJACIgDADQgUAQgcAIQgSADguAFIgvADQgIgBgJgHg");
	this.shape_81.setTransform(-79,161.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#993300").s().p("AjEAuIAAgUQgBgHAOgHIAAAEQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBQADgCAEAAIABAAQAJAHAIABIAvgEQAwgEASgEQAcgGASgRIADgEQAlADBLgSQAwgMAZgLIABADQAIAagDAmQhLAniDAKQgqADgiAAQhJAAglgOg");
	this.shape_82.setTransform(-70.5,162.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333366").s().p("AhME/QgrgnAGgzIgJiUQgFgHgCgGIgCgeQgBgWADgTIACgBIgFhLIgBAAQgGgPgBgQQAAgJAGgNIgFhNQgDg5AngqQAngqA5gDQA3gCAqAmQAqAnACA6IACCTQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAFAFABAPQACAogHAhIgEATIAAA1IABAAIADAdQABAMgGAJIgBCWQAagcgmAqQgmAqg6ACIgIAAQgyAAgngjg");
	this.shape_83.setTransform(-67.3,74.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D0D0D0").s().p("AgshrIAMAUIAcAuIALAYQAHAJgCgFIAgA7QgGAFgJAPIgCABIAAABIAAAAIAAABIgDAEIgHANQgHAOgIAIQgChsgshrg");
	this.shape_84.setTransform(-56.8,-1.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1A1A33").s().p("AhNCMQgtgSgDgUIgBg9QBGgDAegIQA0gOASgmQAGgNAMgQQAKgQAIgjQAFgPAPgcIAGgKIACAcIACAAQAFAYgDAjQgCAtAKAwQAHAyAAAOQgBAOgYAJQgaAKgUARQgQANgcADIgPABQglAAglgQg");
	this.shape_85.setTransform(-91.4,129.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333366").s().p("AhpDjIAAhKIACAAIgMhCIAFADIgSkDQgFgzAhgoQAegmAxgEQAvgEAmAhQAlAiAEAyQAiDGgMBOIACATIgHAKQgOAcgFAPQgIAjgKAQQgMAQgGANQgSAog0AOQgeAIhGADQgCgfAAgug");
	this.shape_86.setTransform(-93.7,103.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AipAQIgegPIAAgGIABgNIAAgBQAzAWCFgBQCEAABNggQADgEABAJIABAZQgrAXhpAIQgZABgaAAQhQAAhagQg");
	this.shape_87.setTransform(-99.6,155.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#993300").s().p("AjGAcIAAgUQAAgHAPgDIgBACQABAAAAAAQAAAAABAAQAAAAAAgBQAAgBAAgBIAGgCIACABQAJAFAIACIAugBQAxgBATgBQAcgEASgRIAEgEQAlAFBMgNQAwgIAagKIABAEQAHAagHAmQhMAiiEABIgKAAQh+AAgxgYg");
	this.shape_88.setTransform(-99.6,150.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CC6600").s().p("AhaAPIgBgBQARgEAdgDQBCgGAKgBQAJgDAQgUIABAAQACAFAFADQAIAHALADIAJABIgFAEQgUAPgcAEQgTADgvABIguABQgIgCgJgHg");
	this.shape_89.setTransform(-108,148.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#5C2E01").s().p("AhKAjIgJgCQgLgCgIgHQgFgEgCgFQANgQAKgRQAOAEAYgEIADAAIAQgCQAVAEAlgDQAzgEAHgMQAPAPAIAdQgZAJgxAIQg1AKgjAAQgNAAgJgBg");
	this.shape_90.setTransform(-91.2,144.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333366").s().p("Aj0ECQgqgogBg5QgBg5AngfIBmhsQABgKADgFQACgEASgSQAQgRARgMIACABIAzg4IgBgBQAGgOAMgMQAGgGANgFIAyg6QAogpA5gCQA5gBAqAnQApAoACA5QABA5gnApIhpBnQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAHgKALQgdAdgeAUIgQAKIgmAlIABABIgTAXQgGAIgLACIhtBoQAmAAg5ABIgDAAQg3AAgpgmg");
	this.shape_91.setTransform(-73.5,66.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1A1A33").s().p("AgUCLQgtgFgogeQgngdACgUQACgOALgsQBFAMAfgBQA1gBAbggQAJgMAPgLQAOgPARgfQAIgOAUgYIAJgIIgFAcIACAAQgBAYgLAiQgMArgDAxQgEAzgEANQgEANgaADQgbAEgXANQgNAGgPAAIgRgCg");
	this.shape_92.setTransform(-108.4,123.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333366").s().p("AifEYIAQhLIAQhIIADABIAEhEIAEAEIArj/QAHgzApgfQAlgeAxAHQAwAIAdAoQAcAqgHAyQgODJgeBIIgCAUIgJAIQgUAYgIANQgRAggOAOQgPAMgJAMQgZAig3ABIgFAAQgfAAhAgNg");
	this.shape_93.setTransform(-105.4,95);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AAoAxQhmgShtguIgZgVIABgIIAEgMIAAgCQAsAkCCAcQCBAfBSgQQAEgCgBAJIgFAZQgVAGggAAQgoAAg7gKg");
	this.shape_94.setTransform(-121.8,144.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#993300").s().p("AgZAlQiDgfgsghIAGgUQABgHAPgCIgBADQAAABAAAAQABAAAAgBQAAAAABgBQAAgBABgBIAGAAIABABQAHAJAIAEIAsAKQAwAKAUACQAcACAWgMIAEgDQAjAOBMAFQAyADAbgDIAAAEQAAAZgPAlQgcAFghAAQhBAAhUgUg");
	this.shape_95.setTransform(-120.9,141.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CC6600").s().p("AAiATQgTgCgugKIgsgIQgIgEgHgJIAAgBQARAAAdADQBBAKAKAAQAKAAAUgQIABAAQABAFAEAFQAGAIAKADIAIADIgFADQgUAKgZAAIgHAAg");
	this.shape_96.setTransform(-128.8,137.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#5C2E01").s().p("AAfAkQhLgFgigOIgIgDQgKgEgGgJQgEgDgBgFQASgOAMgQQAOAHAXACIADABIAQABQAUAJAkAHQAzAIAKgKQAMAPAAAhQgMACgSAAQgUAAgbgCg");
	this.shape_97.setTransform(-111.7,136.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333366").s().p("AjRD8Qg5gMgfgwQgfgwAMg4QALg5AugVIB9hRQADgJAEgDQADgEAWgOQATgMAUgIIABACIA+grIAAgBQAIgNANgIQAIgFAOgCIBAgrQAwggA4AMQA4AMAfAwQAgAwgMA4QgMA4gwAfIh+BLQgEgBgBABQgCAIgMAIQgiAWgiAMIgTAGIgsAbIABACIgXARQgKAGgLAAIiCBLIAPAEIghgHg");
	this.shape_98.setTransform(-75.4,63.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAAAEQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBIAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAFABgBADIgBADIgCABIgBgBg");
	this.shape_99.setTransform(-83.8,-48.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#996600").s().p("AAAAGQgDgCgDgEIgBgDQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQABABABAAQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAAAIACADQACACgBADIAAABIgEABIgEgBg");
	this.shape_100.setTransform(-83.8,-47.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAFAMQABgDgCgEIgCgDQAAABgBAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAIAAgFQABgGAEgDIABAAQADgCACACQAGABACAFQAEAFgBAEQgCAFgEAEgAgEgKIgCAEIAAADQAAABABAAQAAABAAAAQABAAAAABQAAAAABAAIAAgCQABgFACACIABABQAAgEgCgBIgCgBIgBAAg");
	this.shape_101.setTransform(-83.5,-48.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1,1,1).p("AAWAGQgXgUgUAO");
	this.shape_102.setTransform(-82.2,-49);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgSALIgBgDQAAgIgCgHQAUgPAXAWQgQAOgNAAQgFAAgGgDg");
	this.shape_103.setTransform(-82.2,-48.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#663300").s().p("AgtgHIBZgDIABAPIhYAHg");
	this.shape_104.setTransform(-83.1,-52.6,1,1,0,0,0,0,-0.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#996600").ss(1,1,1).p("AgdAMQAGACAKgCQAKgCADgBQADgCAKgDQAKgDAHgN");
	this.shape_105.setTransform(-85,-35.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1A0000").s().p("AAPB+QgVgEgBgRIAAAAQgBgMAGgDIADgCQADgBACgEQgLgFgDgGQgCgCgBgNIAAAAIAAgCIAAgBQAAgJABgEQACgGABgFIACgEQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIADgHIADgMQAGgOAAgMIAAgGIgEgNQgDgJAAgGIgTACQgBAIgCACQgBAAgIABQgFAAgFgCQgLgJABADIAFADIAFADQgJANgFAPIgCAFQAEALgDAMQgDARgPABQgFABgFgFQgFgGgBgPIABgGIAEgHIgBgCIgBgBIgJgIQgGgEgBgEIAAgBQgBgRAFgIIARgRQgFAAgIgEQgKgEAAgKQgBgEACgDIABgFQgMADgNgHQgMgFgBgIQAAgEAGgHIAAABIAAADQAAAHAUAIQAQAHAKgBQALgBAMgJIAJgIIAAABIAAAEQAAAHALAFQAIADAHgBQALAAACgCQADgCABgOIABgBIADAAQABANAJAIQAKAKAVgCQAOAAAEgKQACgNADgHQABARAIANQAJAQAPgBIAHgCIAGgFQAGAIAGACQAGADAJAAQAHgBAIgKQAAARgHAOIgIAQQAAAEAFAIQAEAIABAEQABAVgFAKQgHANgVAIQAHAMgUAPQgSAPgSABIAGADIABAIQABAOgGAIQgEAGgJACIgFABIgMABQgHgBgGgBgAgpgrIAAAAg");
	this.shape_106.setTransform(-65.7,-46.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CC9900").s().p("AAACjIAAgEIAAgKIAEAAIAGABQAegDATgmQARgigDgfIgBgJIgBgFQgDAbgGAUQgdATgLAEIgxAVIgnALQgKgCgIgFIgBAAIgDgDIgFgGIgBgCIgDgHQAAgQgBgIIAKADQAEAAAFgDQAFgEAAgFIgcABIABABIgCgCIgEgKQgCgDAAgIQAGACAKgCIAOgEIAOgEQAKgEAGgPQgGAPgKAEIgOAEIgOAEQgKACgGgCIgBAAIgBgBIgDgDIgEgEIACgGIABgIQAAgEgFgGIAQgDQAQgEAAgGIgCgDQgCgDgDAAIgIACIgHACQgKABgNgEIgWgGIgBgBIgCgCQgFgGgBgJQAAgFAHgIIAPgOQAVgWgCgZQgBgOgEgFQgHgKgDgIIgCgDIgBgHQAAgGAFgaIADgQIABABIAAABQADAJARAGQAQAGAHAAQAIgBAFgGIAFgJQAIABARgBQABAKAMAGQAJAFAHAAQAIgBAJAMQAFAKABAEIgBAHQgOAIgOgDQgigIgUACQgTABgFAVQgFAVgFALQgFAJgKAQQAPgQAHgDIALgEIAKgBIABACIAcACIAOAEQAOAEAHAEQAJADAKAGQAIAFAHAGIAMAMQAIAGAHAAQATgCAEgfQACgJABgPIABgSQADgBAGACQAGACABAAQAHgBABgHQACgGAHgBQAHgBAFAJIAGAIQAAAMgGAQIgFALIgDAIQABAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgCAAIAAADQgMAXgPABIgDAAIgBAUQAIADAFAAIAEgCIADAtQABAPAZAPQAVAMAKgBQAEAAAGgGIAFA9QhdAvgpAAQgfAAAAgcgABYhAIAAAIIAAAHQAIgJAGgLQAIgLgBgEQAAgFgDgDIgFgCIgBgBIAAgBIgHADQgGABgEADQgDACgBAEQgCAIgBAJIABAHIABgCIACgCQADgBADAAIACAAg");
	this.shape_107.setTransform(-77,-39.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#A07001").s().p("AACCzIgDgBIgCgXIgagFIAxgVQALgEAdgSQAGgVADgaIABAFIABAIQADAggRAiQgTAmgeACIgGAAgAB1BrQgZgOgBgQIgDgtIgEACQgFAAgIgDIABgVIADAAQAPgCAMgUQgBAGgCAFQgBADAAAIIAAABIAAACIgBAAIABAAQABANACACQADAGANAFQgCAEgDACIgFABQgGADABAMIAAABQABAQAXAEQAGACAHAAIAMgBIAFgBIACAfQgGAFgEABIgBAAQgKAAgUgMgAhkBwIgDgGIgBgBIAcgCQAAAFgFAEQgFADgEABIgKgEgAh7AxIgCgBQgEgEgMgHQgMgIgEgEIAAgBIAWAJQANAEAKgBIAHgCIAIgCQADgBACADIACADQAAAHgQADIgQADIgBgBgAAZAAIgMgLQgHgGgHgEQgLgGgJgEQgHgDgOgEIgOgEIgcgCIgBgCIgKABIgLADQgHADgPAQQAKgPAFgKQAFgLAFgUQAFgVATgCQAUgBAiAHQAOADAOgIIABgHQgBgDgFgLQgJgMgIABQgHABgJgFQgMgGgBgLQgRACgIgBIgFAJQgFAFgIABQgHABgQgGQgRgGgDgKIAAgBIgBAAQADgIAEgEIADgDIgCAAIAAgCIADgBIgBADIAAAAQgBAHAHAFQAHAGAJgBQAKAAACgCQAIgFgFgNQAEAJAIACQAEABAIgBQAIAAAJgFQACgBAZgBQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAIgBABIgBABQgGAGAAAEQABAIAMAGQANAGAKgCIgBAEQgCADABAEQAAAKAKAFQAIADAFAAIgRARQgFAIABARIAAABQABAEAGAFIAJAIIABABIABABIgEAJIgBAGQABAPAFAGQAFAFAFAAQAPgBADgRQADgMgEgNIACgGQAFgOAJgOQAFADAFgBQAIAAABgBQACgCABgIIAVgCQAAAGADAJIAEANIAAAGIgGgIQgFgIgHABQgHAAgCAHQgBAHgHAAQgBABgGgCQgGgDgDACIgBARQgBAQgCAJQgEAdgTABIgBAAQgGAAgIgFgAABhIIABAAIgBgBgABWgbIAAgIQgEgBgEADIgCABIgBACIgBgGQABgJACgIQABgFADgCQAEgDAGgBIAHgDIAAABIABACIAFACQADACAAAFQABAFgIALQgGALgIAJIAAgIg");
	this.shape_108.setTransform(-76.8,-42.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#330000").s().p("ACpBkQgGgDgGgHIgGAEIgHACQgPABgJgPQgIgOgBgRQgDAIgCANQgEAJgOABQgVACgMgLQgJgIgBgNIgDAAIgBABQgBAOgDADQgCABgLAAQgHABgIgDQgJgFAAgHIAAgEIAAAAIAAgCIAAAAIAAACIAAAAIgJAIQgMAIgLABQgKABgQgHQgUgHAAgIIAAgDIABAAIAAgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAQgZABgCABQgJAFgIAAQgIABgEgBQgIgCgEgJQAFANgIAFQgCACgKAAQgJABgHgGQgHgFABgHIAAAAIABgDIgDABIgGACQgKgBACgEIgFABIAAgCIABgBQAGgRgBgKQgBgMAJgMQAIgJAIgEQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIAFAGIAIACQAOgBADgOQACgJACgCQACgEAGgBIAHABIAIABQAJgBAOgSQAMgSABgJIAAgBIAHgBQALAAAOADIANADIAHgCIAOAPIAIgKIAHgJIAAACQAJAKAEABQABAJAGADQAEACAHgBQANgBAJgHIABACIAEAJIAAAFQAAAKAGAFQAFADAHgBQAHAAASgJIAGgDIAGALQAGALAIgBQAJgBgDAGQgEAFACACIAJAPIAHAOQAIADAMARIATAGQAGAEABAOQABAJgBADQgBAFgKARQAIAEAAADIABAGQgIAKgHABIgDAAQgHAAgFgCg");
	this.shape_109.setTransform(-71.4,-64.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#663300").s().p("AiHApIgFgGIABgCQAEgDACgHQAGgPADgCQAEgGARgBQARgDAFgFQAJgNAKgEQAHgEAIgBIAAABQgBAIgMASQgOARgJABIgIgBIgHgBQgGAAgCAFQgCABgCAJQgDAPgOABIgIgCgABiAOQgGgEAAgKIAAgEQACAEAAADQAGgDAJgBIANgDQAMAAAEAEQAAACADADIgGADQgSAIgHABIgDAAQgFAAgEgDgAA2gHQgGgEgBgIIABAAIANgFIAOgDQAFAAAHAMQgJAIgNABIgDAAIgIgBgAADgcQAFgCAEgFIAIgHQAFAAAJAKIgHAJIgKAKg");
	this.shape_110.setTransform(-74,-71);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AhTGdQgLgGgMgDIAAgbQAChBgCgeIgFgOQgGgNgGgFQgNAggQBFQgIAcgFAVIAAAAQgTgCgJgKQgLgMgDggIAKiEIAUgEQAlgDByABQBuACAfgDQApgDATgOQAHgFALgEIADAvIAKBBIAJBCQACAZg5AVQgtASgeACQgvAEgcAAIgFAAQhAAAgYgOgAjHgIIgMhdQgMiaAwhaQANAEAPACQAtAIAugDQA4gFA4gsQAbgUANgXIACABQAtA8AVBHQAVBFgMAnQgDAXg/hRQhAhRg3B4Qg4B5g2AoQgzAkgXAAIgDAAg");
	this.shape_111.setTransform(-65.3,20.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#CCCCCC").s().p("Ah8G/IglAAQAEgVAJgcQAQhFANggQAFAFAGANIAGAOQACAegCBBIAAAbIgWgEgAgWCgQgdgCgagNQgyghg+ggIgGgrQAWADA2gnQA3gmA4h5QA3h4BABRQA/BRACgXIAEAOQADAZAHBZQAGBLAAA/QghASgOAFQgLADhGAGQglACgZAAIgcgBgAigk9QAwhIBlgnQAagVAEgBQASgBASAPQgTAegkAdQhAA3hKAFIgMABIgKgBg");
	this.shape_112.setTransform(-65.6,15.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EAEAEA").s().p("Ai9CyIgBgJQA+AhAyAgQAZANAeADQAcADA+gFQBGgFALgEQANgFAigSIAAASQgBArACAmQgLAFgHAEQgUAOgpADQgfADhugCQhxgBgmAEIgUADQAIiKgCgggAiQjLQgPgCgNgEIAKgRIABgBQAIABAOgBQBKgGBBg3QAigdAUgeQAVARAYAoIgBABQgMAWgcAVQg4Arg4AFIgaABQggAAgggGg");
	this.shape_113.setTransform(-65.5,7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1A1A33").s().p("AAACUQgtgBgrgZQgqgXAAgVQABgOAFguQBGAGAfgFQA1gHAWgjQAIgNAOgOQAMgPANghQAGgPASgaIAIgJIgCAcIACAAQABAYgGAjQgIAsAEAxQABAzgCAOQgDAOgZAFQgaAHgWAPQgQALgaAAIgDgBg");
	this.shape_114.setTransform(-105.7,119.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333366").s().p("AiGEnQACgfAGguIAIhJIADAAIgFhDIAFADIANkCQACg0AlgjQAjgjAwACQAxADAhAlQAhAmgCAzQAJDIgVBLIAAAUIgIAJQgSAagGAPQgNAhgMAPQgOAOgIANQgWAlg1AHQgOACgUAAQgbAAgogDg");
	this.shape_115.setTransform(-104.7,92.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AAuAoQhngGhygiIgcgRIABgJIACgNIABgBQAvAfCFANQCDAPBQgWQAEgDgBAHQAAAKgCAPQgiAPhHAAIgugBg");
	this.shape_116.setTransform(-116.2,143.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#993300").s().p("AgTAjQiFgPgwgdIADgUQAAgHAQgDIgBADQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIAHgCIAAACQAJAHAHADIAuAFQAxAGATgBQAdgBATgPIAFgDQAkAKBMgFQAygBAbgHIAAAEQAEAbgLAlQgxAPhEAAQgsAAgygHg");
	this.shape_117.setTransform(-115.7,140.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#CC6600").s().p("AgdAQIgugFQgIgDgIgIIAAAAQASgBAcAAQBDABAJAAQAKgBASgSIAAgBQACAFAFAEQAHAJALACIAIACIgFADQgVAOgdABIgHABQgUAAgngFg");
	this.shape_118.setTransform(-123.9,136);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#5C2E01").s().p("AhNAYIgIgCQgKgEgIgIQgEgEgCgFQAQgPAMgQQAOAFAXAAIACAAIASAAQAUAHAkACQA0ACAIgMQAOARAEAeQgbAHgxABIgrACQgrAAgZgHg");
	this.shape_119.setTransform(-106.8,133.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333366").s().p("AjnDpQg3gRgbgzQgbgyARg3QAQg3AvgPICEhIQAEgJAEgDQADgEAYgLQAUgLAUgHIABACIBBglIgBgBQAKgMAPgHQAIgEAOgBIBEgmQAygbA3AQQA3ASAaAyQAcAzgRA3QgRA3gyAYIiEBCQgFgBAAABQgDAIgNAHQgjASgkAJIgSAFIgvAXIABABIgZAPQgKAGgLgBIiIBAIAPAFIghgKg");
	this.shape_120.setTransform(-75.9,61.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#BA8201").s().p("AgjE5QgRgGgEgPQgFgPADghQABgbgEgMIgCgDIgBgBIgBgBIgJgBQgIABgCgCQAIgTAEg6QABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAGgBIgCgJIA5g8IAAAAIgGgFQgDgQgBgdQgBgUgFgXIgIgaIgQgrQgThMAFg8IAAgLQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAFgOAJgKQAQgPAXgGQAdgIAXALQASAIAIATQgBAEAEAIIABAAIAAADIAEAKQAQBEgNBhIgCADIACACIgOBVIgEAzIABAdIAAADIABAWQACAlgEA4IgBASQgCAWgFARQgKAjgaALQgaAOgRAAQgFAAgEgCg");
	this.shape_121.setTransform(-59.8,44.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E1E1E1").s().p("AgKAQQgFgagTghQAFgDgCgCQAWAQATAbQAOAPAKAUQgWAEgHAJQgEADgFADIgGghg");
	this.shape_122.setTransform(-67.6,7.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#BA8201").s().p("AghBQQgbgkgPgxIgNgWIAHgCQAIgBAGgCQAIgDADgDQAHgJAXgFIAKgBQAQgDAMgMQAIgIAGgPIAGgNIACgFIABAAIARAhQAhBGAEA0QACA2hQAKIgBAAIgFAAQgOAAgYgeg");
	this.shape_123.setTransform(-61.4,15.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D0D0D0").s().p("AgyhoIAOASIAfAsIAOAXQAGAIgCgFIAlA5QgGAFgHAPIgCACIAAAAIAAAAIAAACIgDAEIgGAOQgFAOgJAIQgLhpgzhog");
	this.shape_124.setTransform(-61.4,-1.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("Ag4BhQgCgLgIgWIgNgdIgGgQIgIgTQgJgTgCgKIABADQgGgPgBgfQgEgkAugfQAugfAZAZIAeAeIAPARQA1BnALBrQgNAMgSADIgKABQgKgTgOgSQgVgagWgQQABACgEACQASAiAGAcIAFAhQgGACgHABIgIACIgkAEg");
	this.shape_125.setTransform(-71.3,-2.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#1A1A33").s().p("AhSCCQgrgWAAgUQgBgPADguQBHADAegGQA0gKAVgkQAIgNANgPQALgQAMgiQAFgOAQgbIAHgKIAAAcIACAAQADAZgFAjQgFAsAGAxQADAygBAOQgCAOgZAHQgaAIgVAQQgRAMgdAAIgFABQgpAAgqgWg");
	this.shape_126.setTransform(-104.4,118.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333366").s().p("Ah/ErQABgfAEgtIAEhLIADABIgHhCIAEADIABkEQAAgzAjgmQAhgkAxAAQAwAAAiAjQAjAlAAAzQATDIgRBMIAAAUIgHAJQgQAbgFAOQgMAjgLAPQgNAPgIANQgVAmg0AKQgUAEgmAAIgrgBg");
	this.shape_127.setTransform(-104,91.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AAxAjQhogChzgdIgdgPIABgIIABgNIAAgCQAyAdCFAHQCEAJBPgaQADgEAAAKIgBAXQgsAVhlAAIgFAAg");
	this.shape_128.setTransform(-113.8,143.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#993300").s().p("AgQArQiGgJgxgdIACgSQAAgHAPgEIgBADQABABAAgBQAAAAAAAAQABgBAAAAQAAgBAAgBIAHgCIABABQAJAIAHADIAvACQAxADASgCQAegCASgPIAEgEQAlAIBMgIQAxgFAbgHIAAADQAFAcgJAlQg7AVhbAAQgeAAgegCg");
	this.shape_129.setTransform(-113.6,139);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#CC6600").s().p("AgcAUIgugDQgIgCgIgIIgBgCQARgDAdAAQBDgBAJgBQAJgBASgTIABAAQACAFAEAEQAIAIAKACIAJABIgFADQgUAPgdADIgSAAIgwgBg");
	this.shape_130.setTransform(-121.8,135.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#5C2E01").s().p("AhMAcIgJgDQgKgCgIgIQgEgEgCgFQAPgPALgRQAOAFAXgCIADAAIAQgBQAVAGAlAAQAzgBAIgLQAPAPAFAeQgaAIgyAEQglAEgdAAQgbAAgRgDg");
	this.shape_131.setTransform(-104.8,132.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333366").s().p("AjqDmQg3gRgbgzQgag0ASg2QARg2AwgPICEhHQAEgIAFgDQADgDAXgMQAVgLAUgGIABACIBBgkIgBgBQAKgMAPgHQAJgEANgBIBFgkQAzgbA3ARQA2ASAaAzQAaAzgRA2QgRA3gzAYIiFBAQgFgBgBABQgCAHgNAHQgkATgjAIIgTAFIgvAWIABACIgZAOQgKAGgLgCIiJA+IAOAFIgggKg");
	this.shape_132.setTransform(-76.5,60.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAAAEQAAAAAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIgBgBIACgDQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAEABAAACIgBADIgCABIgBAAg");
	this.shape_133.setTransform(-104.5,-62.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#996600").s().p("AAAAGQgDgBgDgFIgCgCQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIADADQACABAAAEIAAABQgDABgEAAIgCAAg");
	this.shape_134.setTransform(-104.4,-60.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAHAMQAAgDgCgEIgDgCQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAABQgBgEAAgBQAAgGAFgDIAAAAQAEgDACABQAFACAEAEQADAEAAAEQgBAGgDADgAgFgIIgBADIAAADQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAIAAgBQAAgFADABIABABQgBgEgBAAIgCgBIgCABg");
	this.shape_135.setTransform(-104.2,-61.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1,1,1).p("AAWAFQgZgSgSAQ");
	this.shape_136.setTransform(-103,-62.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgQANIgBgEQgBgJgDgEQASgSAZATQgQARgNAAIgJgBg");
	this.shape_137.setTransform(-103,-61.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#663300").s().p("AgtgBIBXgOIAEAPIhXAQg");
	this.shape_138.setTransform(-104.4,-66.2,1,1,0,0,0,-0.1,-0.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#996600").ss(1,1,1).p("AgbAQQAGABAJgDQAKgDACgCQAEgBAJgFQAKgDAFgP");
	this.shape_139.setTransform(-104.3,-48.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#CC9900").s().p("AALCeIAAgFIgCgKIAFABIAGgBQAegFAPgoQAMgjgGggIgCgIIgCgFQAAAbgDAVQgbAVgLAGQgZAOgVAMIgmAQQgJgBgIgEIgCAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgFgGIgCgBIgCgHQgCgQgDgIIALADQAEgBAEgEQAFgEgBgFIgbAEIAAABIgCgCIgEgJQgCgEgCgIIABAAIADAAIAAAAIABAAIAHgBIABAAIABAAIACgBIAOgFIANgGQAJgEAFgQQgFAQgJAEIgNAGIgOAFIgCABIgBAAIgBAAIgHABIgBAAIAAAAIgDAAIgBAAIAAAAIgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgEgEQgBgCACgEIAAgHQAAgFgGgFIAPgFQAQgGgBgGIgCgDQgCgCgDABIgIACIgHADQgKACgNgCIgXgGIgBgBIgCgBQgGgGgCgHQAAgFAFgJIANgPQAUgZgFgYQgCgOgFgEQgIgJgEgJIgCgCIgCgGQgBgHADgaQAAgJABgHIABAAIABABQADAJASAFQAQADAHgBQAIgBAEgGIAEgKQAIAAARgDQACAKAMAFQAKAEAHgCQAIgBAKALQAIAJABAEQABADgBAEQgPAJgOgBQgjgEgUAEQgSADgDAWQgDAVgDALQgEAKgIARQANgSAHgDIALgFIAJgCIABACIAcgCIAPADQANADAIADQAKACAKAFQAKADAGAFIAOALQAIAFAHgBQASgDACggIAAgYIgBgSQADgBAGABIAHABQAHgBAAgHQACgHAGgBQAIgCAFAIIAHAHQABAMgFARIgDAMIgCAHQABAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCABIAAADQgJAYgPADIgCAAIABAWQAIACAFgBIADgCIAIAqQADAQAbALQAWAKAJgCQAEgBAGgGIALA8QhfA9gnAAQgZAAgDgYgABKhOIABAIIAAAIQAHgKAGgLQAGgMgBgFQgBgFgDgCIgFgCIgBgBIgBAAIgGADQgHACgDADQgCADgBAEIgBASIABAGIACgDIACgCQACgCAEAAIABAAg");
	this.shape_140.setTransform(-96.2,-53.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#1A0000").s().p("AAlB9QgXgCgDgQIAAAAQgCgMAFgDIAGgCQACgCACgEQgOgEgEgGQgCgCgCgMIAAgBIAAgCIAAAAQgCgJACgFQABgFAAgGIABgEQABAAAAAAQAAAAABAAQAAgBgBAAQAAAAAAAAIACgHIADgMQAEgPgBgMIAAgGIgGgMIgFgPIgSAEQAAAIgCACQgBABgIACQgEABgGgDQgMgHACACIAFADIAFACQgIAPgDAPIgBAGQAFAKgBANQgCARgOADQgFABgFgFQgHgGgDgOIABgGIADgKIgBgBIAAgBIgLgEQgGgEgCgEIAAgBQgDgSAEgIIAPgTQgEABgIgDQgLgEgCgJQgBgEABgDIABgFQgMADgNgEQgNgFgBgHQgBgEAFgHIABAAIAAADQABAIAUAFQARAFAKgCQALgCALgKIAIgJIAAABIAAADQACAIAKADQAJACAGgBIANgDQADgEAAgNQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIADAAQADAMAKAIQALAIAVgDQAOgDACgKQABgNACgIQACARAKANQALAOAPgDQAEAAADgCIAFgGQAHAHAGACQAGACAJgBQAIgCAFgKQADARgFAOIgHARQABAEAFAHQAGAIAAAEQAFAXgFAJQgFAMgUALQAIALgTASQgQAQgSAEIAHABIABAJQADANgFAIQgDAHgJADIgFACIgLABIgHABIgHgBgAglglIAAAAg");
	this.shape_141.setTransform(-87.2,-62.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#A07001").s().p("AAJCuIgEgXIgYgCQAUgLAZgPQALgFAbgVQAEgWAAgaIACAEIABAJQAHAfgNAjQgPAogeAGIgFAAIgGAAgAhfB4IgEgHIAAgBIAbgEQABAFgEAFQgFADgEABIgLgCgAB5BbQgagMgEgQIgIgsIgDACQgFABgIgCIgBgUIADAAQAOgDAJgXQABAFgCAGQgBAFABAIIAAABIAAABIgBAAIACAAQACAMACACQAEAFAOAEQgCAEgDACIgFACQgFADABAMIABABQADAQAXACQAGABAIgBIALgCIAFgBIAFAeQgGAGgEABIgDAAQgKAAgSgIgAh8A7IgCgBQgEgEgOgFQgMgGgFgEIAAgBIAXAGQANACAKgCIAHgCIAJgDQACAAACACIADACQAAAHgQAFIgPAFIgBgBgAASgFIgOgKQgGgFgJgEQgLgFgKgCQgHgDgOgCIgPgDIgcABIgBgCIgJADIgLAEQgHAEgMARQAHgQAEgKQAEgLADgWQACgVASgEQAUgDAjADQAOACAPgKQABgEgBgDQAAgDgJgKQgKgLgIACQgHABgJgEQgMgEgDgLQgRAEgIAAIgEAJQgEAGgIABQgHACgQgEQgSgEgDgJIgBgBIgBgBQACgIAEgEIACgEIgCABIAAgCIADgBQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIAAABQAAAHAHAEQAIAFAKgCQAJgBACgCQAHgGgHgNQAGAKAIAAQAEABAIgCQAIgBAJgFIAagFQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAABAAIgCACIgCAAQgEAHABAEQABAIANAFQANAEAMgDIgBAEQgBADABAEQABAKAMADQAGADAEgBIgNATQgFAJADARIABABQABAEAGAEIAJAGIABABIABACIgDAKIgBAFQADAOAGAGQAFAFAFgBQAPgDACgRQABgMgGgNIACgGQADgOAIgPQAGACAEgBQAIgBABgCQACgBAAgJIAUgEIAFAQIAGAMIAAAGIgGgIQgGgHgIABQgGABgBAHQgBAHgGABIgIAAQgGgCgDACIABARIAAAZQgCAfgRADIgEABQgFAAgHgFgAgMhLIABAAIgBgBgABMgnIgCgIQgEgBgDADIgCACIgCACIgBgGIABgSQABgEADgDQADgDAGgBIAGgEIABABIACABIAEACQADACACAFQAAAEgGAMQgFAMgHAJIAAgHg");
	this.shape_142.setTransform(-96.2,-56.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#330000").s().p("ACtBbQgGgCgHgHIgFAFQgDACgEABQgOADgMgPQgKgMgCgRQgCAIAAANQgDAJgOADQgUAEgOgJQgKgHgCgNIgEABQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAANgDADIgMADQgHACgJgDQgKgDAAgHIAAgEIAAAAIAAgCIAAAAIAAACIAAAAIgIAJQgLAJgLADQgKABgRgEQgTgGgCgIIAAgCIAAgBIAAAAIACgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIgaAFQgJAFgHABQgIACgFgBQgHAAgGgKQAHANgHAGQgCACgKABQgKACgIgFQgHgEABgHIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIgEABIgEADQgLAAACgEIgGABIABgDIAAAAQAFgRgCgKQgDgOAHgNQAHgKAJgDQAAAAAAAAQABAAAAgBQABAAAAAAQABgBAAgBIAGAEQAFACACgBQAOgBADgOIABgLQACgFAGgBIAHAAIAHABQAJgCANgUQAJgUABgIIAAAAIAGgCQAMgCANABIAOABIAHgBIAPANIAJgLQAFgGABgEIABABQAHAKAEABQACAIAGACQAFACAHgCQANgCAIgIIABACIAFAIIAAAGQACAKAGADQAFADAIgCQAGgBAQgKIAGgEIAIAKQAGALAJgCQAJgCgDAGQgDAFACACIALAPQAIAMABAAQAIAEANAOIAUAEQAGADADAOIABALQAAAGgJASQAJADAAADIABAGQgFALgHABIgIABIgIgBg");
	this.shape_143.setTransform(-93.3,-80);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#663300").s().p("AiDAxIgGgFIABgBQADgEABgHQAEgPADgEQAEgFAQgFQARgDAEgGQAIgNAJgGQAGgEAIgCIAAABQAAAHgKAVQgMARgJACIgHAAIgIAAQgFAAgCAGIgCALQgCAOgOADIgBAAIgGgCgABhAAQgGgEgCgKIgBgFIADAIQAGgFAJgCIAMgFQAMgCAEAGIAEAEIgGAEQgQALgHAAIgFAAQgEAAgDAAgAAygTQgGgCgCgJIABAAQADgBAKgFQAKgEADgBQAFgBAJAMQgJAJgMACIgHAAIgFAAgAAAgiQACgDAEgFIAHgIQAFgBAKAJQgCAEgEAGIgJAMg");
	this.shape_144.setTransform(-97,-85);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CCCCCC").s().p("AhvGWQAJhGAJghQAGAEAHAMQAHALAAADQAFAdAFBBIAEAbQgLgCgMABIglADIAIgygAhECTQg2gbhAgaIgLgpQAXAAAxgtQAygsArh+QAph+BIBKQBHBKABgYIAEAPQAHAYARBYQAOBKAHA+QggAWgNAGQgLAFhEANQg8ALgeAAIgCAAQgdAAgZgJgAjJkvQAnhNBhgxQAZgZAEgBQASgDASANQgOAgghAhQg7A9hIAOQgMACgIAAIgDAAg");
	this.shape_145.setTransform(-78.8,0.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgvGoQgLgEgMgCIgDgbQgFhBgGgdQAAgDgGgLQgIgMgGgEQgJAhgJBGIgHAyIgBAAQgTABgKgJQgMgLgGgfIgFiFIATgGQAmgHBwgLQBugLAegGQApgHASgRQAGgGALgFIAIAvIAQA/IAQBAQAFAZg3AcQgqAWgeAFQguAJgbADQgeADgUAAQgeAAgPgGgAjQARIgWhZQgdiYAnhfIAcADQAtADAtgIQA5gLAxgyQAZgYAKgXIACAAQA1A3AcBEQAcBDgIAnQAAAYhIhKQhGhKgrB+QgrB+gyAuQgxArgWAAIgBAAg");
	this.shape_146.setTransform(-77.7,4.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EAEAEA").s().p("Ai6C9IgCgIQBBAZA1AcQAbAJAeAAQAdAAA9gLQBEgNALgFQANgGAfgWIADASQADAqAGAmQgLAFgGAGQgSAQgpAIQgeAGhtAKQhxAMglAGIgUAHQgGiLgHgggAi2jCIgdgCIAIgSIAAgCQAJAAAOgDQBIgNA8g+QAhggAPggQAWAOAbAlIAAABQgKAXgZAYQgyAyg4ALQggAGggAAIgagCg");
	this.shape_147.setTransform(-78.6,-8.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333366").s().p("AjgETQgtgkgFg5QgGg4AlgjIBdhzQAAgKADgEIATgZQAOgRARgOIABABIAvg8IgBgBQAFgOAKgNQAGgHANgFIAug+QAkgtA5gFQA5gGAsAlQAtAkAGA4QAGA5glAtIhgBuQgBAAgBAAQgBAAgBAAQAAABAAAAQgBAAAAAAQAAAJgIALQgaAfgdAWIgPALIgkApIABABIgRAXQgHAJgJADIhlBvQAmgDg4AGIgQABQgwAAgmggg");
	this.shape_148.setTransform(-104.8,75,1,1,0,0,0,-20.3,24.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#1A1A33").s().p("AhNCMQgtgTgBgUQgCgOAAgtQBGgEAdgIQA0gOASgmQAGgOAMgPQAKgQAJgiQAEgQAOgbIAGgKIACAbIACAAQAEAZgBAiQgDAsAJAxQAJAygBAOQAAANgZAKQgZAKgUARQgQANgcACIgQACQgkgBglgPg");
	this.shape_149.setTransform(-64.3,127.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#5C2E01").s().p("AhNBUQgCgYgEgTQAOgHAPgRIACgCIAKgNQATgIAagcQAjgkgCgOQAVAAAbATQgNAYggAmQguA6gfAUIgIAFQgJAFgLAAIgDAAIgIgBg");
	this.shape_150.setTransform(-67.5,139.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AiTCJIgJgKIAAgCQA2gPBlhXQBihWAkhMQAAgGAHAHIARATQgQAvhLBIQhJBKhnA8IggAIIgFgFg");
	this.shape_151.setTransform(-67.8,151.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#CC6600").s().p("Ag9BDQAJgOAVgWQAtgvAFgIQAFgIAAgZIgBgBQAFACAGgBQALAAAKgFIAHgEIAAAFQgFAZgSAXQgMANgjAgIgiAfQgIADgLABg");
	this.shape_152.setTransform(-77.8,153.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#993300").s().p("AiVCQQgGgGAIgNIABACQABAAAAAAQAAAAAAgBQAAAAgBgBQAAAAgBgBIAEgGIACAAQAKgBAIgDIAjggQAkggAMgOQASgXAGgXIAAgGQAcgTAxg9QAfgmANgYIAEADQAVAQAXAhQglBNhkBVQhjBYg2APIgMgPg");
	this.shape_153.setTransform(-69.7,148.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CC9900").s().p("AAAAAIAAgBIAAADg");
	this.shape_154.setTransform(-63.7,18.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#BA8201").s().p("AACE6QgQgEgFgOQgHgOgBghQgBgcgGgKIgCgEIgBgBIgBAAIgJAAQgIABgDgBQAGgUgBg7IAAgEIAGgBIgDgIIAyhCIAAAAIgGgEQgFgRgEgdQgDgTgIgWIgLgZIgUgpQgbhKgCg8IgBgKQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAgBgBQAEgOAIgLQANgRAXgIQAegMAWAJQASAHAKARQAAAEAFAHIABAAIABADIAEAKQAYBBgCBjIgCACIACACIgEBYIABAyIAEAcQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIAEAWQAGAlACA4IABASQAAAWgDARQgGAkgZAOQgcASgRAAIgHgBg");
	this.shape_155.setTransform(-71,28.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#BA8201").s().p("AgZBVQgegggWgxIgPgTIAIgDQAHgBAGgEQAHgDADgEQAGgKAXgHIAJgCQASgFAIgNQAIgJAEgPIAEgOIACgFIABAAIAUAfQApBCAJAzQAIA2hOASIAAAAIgHABQgPAAgZgag");
	this.shape_156.setTransform(-75.2,-1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#E1E1E1").s().p("AgIAPQgJgYgVggQAEgDgBgCQAYANAVAZQAQANANASQgXAHgGAKQgDAEgHADIgIggg");
	this.shape_157.setTransform(-82.5,-8.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#D0D0D0").s().p("Ag5hlQAHAIAHAKQAaAbAKANIAQAVQAJAHgDgFIArA0QgGAIgFAPIgCACIAAABIgBAAIABAAIgCAGIgEANQgFAPgHAKQgXhog9hjg");
	this.shape_158.setTransform(-77.5,-18);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AguBlQgDgLgLgWIgQgbIgIgPIgKgTIgPgbIACADQgHgNgFggQgIgkAqgjQArgkAdAWIAgAaIAQAQQBABiAWBoQgKANgSAFIgJACQgNgSgQgQQgXgYgYgOQABADgEACQAVAgAJAbIAKAgQgGADgHACIgIADIgkAHg");
	this.shape_159.setTransform(-87,-17.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAHAMQAAgDgCgEIgDgCQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBgEAAgBQAAgGAFgDIAAAAQAEgDACABQAFACAEAEQADAEAAAEQgBAGgDADgAgFgIIgBADIAAADQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAIAAgBQAAgFADABIABABQgBgEgBAAIgCAAIgCAAg");
	this.shape_160.setTransform(-107.2,-75.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CC9900").s().p("AALCeIAAgFIgCgKIAFABIAGgBQAegFAPgoQAMgjgGggIgCgIIgCgFQAAAbgDAVQgbAVgLAGQgZAOgVAMIgmAQQgJgBgIgEIgCAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgFgGIgCgBIgCgHQgCgQgDgIIALADQAEgBAEgEQAFgEgBgFIgbAEIAAABIgCgCIgEgJQgCgEgCgIIAEAAIAAAAIACAAIAHgBIABAAIAAAAIACgBIAOgFIANgGQAJgEAFgQQgFAQgJAEIgNAGIgOAFIgCABIAAAAIgBAAIgHABIgCAAIAAAAIgEAAIAAAAIgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgEgEQgBgCACgEIAAgHQAAgFgGgFIAPgFQAQgGgBgGIgCgDQgCgCgDABIgIACIgHADQgKACgNgCIgXgGIgBgBIgCgBQgGgGgCgHQAAgFAFgJIANgPQAUgZgFgYQgCgOgFgEQgIgJgEgJIgCgCIgCgGQgBgHADgaQAAgJABgHIABAAIABABQADAJASAFQAQADAHgBQAIgBAEgGIAEgKQAIAAARgDQACAKAMAFQAKAEAHgCQAIgBAKALQAIAJABAEQABADgBAEQgPAJgOgBQgjgEgUAEQgSADgDAWQgDAVgDALQgEAKgIARQANgSAHgDIALgFIAJgCIABACIAcgCIAPADQANADAIADQAKACAKAFQAKADAGAFIAOALQAIAFAHgBQASgDACggIAAgYIgBgSQADgBAGABIAHABQAHgBAAgHQACgHAGgBQAIgCAFAIIAHAHQABAMgFARIgDAMIgCAHQABAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCABIAAADQgJAYgPADIgCAAIABAWQAIACAFgBIADgCIAIAqQADAQAbALQAWAKAJgCQAEgBAGgGIALA8QhfA9gnAAQgZAAgDgYgABKhOIABAIIAAAIQAHgKAGgLQAGgMgBgFQgBgFgDgCIgFgCIgBgBIgBAAIgGADQgHACgDADQgCADgBAEIgBASIABAGIACgDIACgCQACgCAEAAIABAAg");
	this.shape_161.setTransform(-99.2,-67.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#A07001").s().p("AAKCuIgFgXIgZgCQAVgLAZgPQALgFAbgVQAEgWgBgaIADAEIACAJQAFAfgMAjQgPAogeAGIgGAAIgEAAgAhfB4IgDgHIAAgBIAagEQABAFgFAFQgEADgEABIgLgCgAB5BbQgbgMgDgQIgIgsIgDACQgFABgIgCIgBgUIACAAQAPgDAJgXQABAFgCAGQgBAFABAIIAAABIAAABIAAAAIABAAQACAMACACQADAFAOAEQgBAEgDACIgFACQgGADACAMIABABQADAQAXACQAGABAHgBIAMgCIAEgBIAGAeQgFAGgEABIgEAAQgKAAgSgIgAh8A7IgBgBQgGgEgNgFQgMgGgFgEIAAgBIAXAGQANACALgCIAHgCIAIgDQACAAACACIACACQABAHgPAFIgQAFIgBgBgAASgFIgOgKQgGgFgKgEQgKgFgKgCQgHgDgOgCIgPgDIgcABIAAgCIgKADIgKAEQgIAEgNARQAJgQADgKQADgLADgWQADgVATgEQATgDAkADQAOACAOgKQABgEgBgDQgBgDgIgKQgKgLgIACQgHABgKgEQgMgEgBgLQgSAEgIAAIgEAJQgEAGgIABQgHACgQgEQgRgEgEgJIgBgBIgBgBQACgIAEgEIACgEIgBABIgBgCIADgBQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAABAAIAAABQgBAHAHAEQAIAFAKgCQAJgBACgCQAHgGgGgNQAFAKAIAAQAEABAIgCQAIgBAJgFIAZgFQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIgBACIgCAAQgEAHABAEQABAIANAFQANAEAMgDIgBAEQgBADABAEQABAKAMADQAFADAFgBIgNATQgEAJADARIAAABQABAEAGAEIAKAGIAAABIABACIgDAKIgBAFQADAOAHAGQAEAFAGgBQAOgDACgRQAAgMgFgNIACgGQADgOAIgPQAFACAFgBQAIgBABgCQABgBABgJIAUgEIAFAQIAFAMIABAGIgGgIQgGgHgIABQgGABgCAHQABAHgIABIgHAAQgGgCgDACIABARIAAAZQgCAfgRADIgEABQgFAAgHgFgAgNhLIACAAIgCgBgABLgnIgBgIQgEgBgDADIgCACIgBACIgBgGIABgSQAAgEACgDQADgDAHgBIAGgEIABABIABABIAFACQADACABAFQABAEgFAMQgHAMgHAJIAAgHg");
	this.shape_162.setTransform(-99.2,-70.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#1A0000").s().p("AAlB9QgXgCgDgQIAAAAQgCgMAFgDIAGgCQACgCACgEQgOgEgEgGQgCgCgCgMIAAgBIAAgCIAAAAQgCgJACgFQABgFAAgGIABgEQABAAAAAAQAAAAABgBQAAAAgBAAQAAAAAAAAIACgHIADgMQAEgPgBgMIAAgGIgGgMIgFgPIgSAEQAAAIgCACQgBABgIACQgEABgGgDQgMgHACACIAFADIAFACQgIAPgDAPIgBAGQAFAKgBANQgCARgOADQgFABgFgFQgHgGgDgOIABgGIADgKIgBgBIAAgBIgLgEQgGgEgCgEIAAgBQgDgSAEgIIAPgTQgEABgIgDQgLgEgCgJQgBgEABgDIABgFQgMADgNgEQgNgFgBgHQgBgEAFgHIABAAIAAADQABAIAUAFQARAFAKgCQALgCALgKIAIgJIAAABIAAADQACAIAKADQAJACAGgBIANgDQADgEAAgNQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIADAAQADAMAKAIQALAIAVgDQAOgDACgKQABgNACgIQACARAKANQALAOAPgDQAEAAADgCIAFgGQAHAHAGACQAGACAJgBQAIgCAFgKQADARgFAOIgHARQABAEAFAHQAGAIAAAEQAFAXgFAJQgFAMgUALQAIALgTASQgQAQgSAEIAHABIABAJQADANgFAIQgDAHgJADIgFACIgLABIgHABIgHgBgAglglIAAAAg");
	this.shape_163.setTransform(-90.2,-76.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#663300").s().p("AiDAxIgGgGIABgBQADgDABgHQAEgPADgEQAEgFAQgFQARgDAEgGQAIgNAJgGQAGgEAIgCIAAABQAAAIgKAUQgMARgJACIgHgBIgIAAQgFACgCAFIgCAKQgCAPgOADIgBAAIgGgCgABhgBQgGgDgCgKIgBgFIADAIQAGgEAJgEIAMgEQAMgCAEAGIAEAFIgGADQgQAKgHABIgFAAQgEAAgDgBgAAygTQgGgCgCgJIABAAQADgBAKgFQAKgEADgBQAFgBAJAMQgJAJgMACIgHAAIgFAAgAAAgiQACgCAEgGIAHgHQAFgBAKAIQgCAFgEAFIgJAMg");
	this.shape_164.setTransform(-100,-99);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#330000").s().p("ACuBbQgHgCgHgHIgFAFQgDACgEABQgPADgLgPQgKgMgCgRQgCAIgBANQgCAJgOADQgUAEgNgJQgLgHgDgNIgDABQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQABANgDADIgOADQgGACgIgDQgLgDAAgHIAAgEIAAAAIAAAAIgIAJQgLAJgLADQgJABgSgEQgUgGgBgIIAAgCIAAgBIABAAIABgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIgaAFQgIAFgJABQgHACgEgBQgJAAgFgKQAHANgIAGQgCACgJABQgJACgJgFQgHgEABgHIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDABIgEADQgKAAABgEIgGABIABgDIAAAAQAEgRgCgKQgCgOAIgNQAGgKAJgDQAAAAAAAAQABAAAAgBQABAAAAAAQABgBAAgBIAGAEQAEACADgBQAOgBACgOIACgLQACgFAFgBIAIAAIAIABQAIgCAMgUQAKgUAAgIIAAAAIAHgCQALgCAPABIANABIAHgBIAQANIAJgLQADgGACgEIABABQAHAKAEABQACAIAGACQAFACAHgCQAMgCAJgIIABACIAEAIIABAGQACAKAGADQAFADAIgCQAGgBAQgKIAHgEIAHAKQAHALAIgCQAJgCgDAGQgDAFADACIAKAPQAIAMABAAQAIAEANAOIAUAEQAGADADAOIABALQgBAGgHASQAIADABADIABAGQgGALgIABIgHABIgHgBgAAAA9IAAACIAAgCg");
	this.shape_165.setTransform(-96.3,-94);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D0D0D0").s().p("AAABpIABgCIABABIgBABIgBAAgAgDhoIAHAVIgEABIgDgWg");
	this.shape_166.setTransform(-63.6,-27.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F7F7F7").s().p("AgYBdQAThZgUhgIAEgBQAQAhAFARIAKAaIAFAFIAKBCQAEgCgOAMIgBAAIgBAAIgBABIgDADIgKALQgHAHgIAFIgGADg");
	this.shape_167.setTransform(-60.9,-26.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#CC9900").s().p("AgPBRIAAAAQgUAAgTgpQgSgogGg0QAPABAVAAQAqABAHgDIAMgFQALgGARgMIADgCIASgEIABAAQAPBHgJAxQgIAtg7AAQgKAAgNgCg");
	this.shape_168.setTransform(-69.6,-8.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A07001").s().p("AgXAPQgWABgOgCIgIgXIAAgBIADABIAEAAQAIABAHgBIAKgBIANAAQALABAEgCQAKgGAdAEIAMADQANACALgBIgCACQgSAKgKAGIgNAFQgFACgUAAIgXgBg");
	this.shape_169.setTransform(-71.4,-15.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#E1E1E1").s().p("AgYAwIABgGIADgZQABgZgLglQABAAABAAQABgBAAAAQABAAAAgBQAAAAAAAAQAXAVAQAdQAJATAGASIADAFQgdgEgLAGQgDABgIAAIgEAAg");
	this.shape_170.setTransform(-71.3,-21.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("ABECUIgMgDIgCgFQgHgSgJgTQgRgfgWgVQABAAgBAAQAAABAAAAQgBAAgBAAQgBABgBAAQAJAlgBAbIgDAZIAAAGIgLAAIgGgCIgKgBIAAABQgTgDgdgHIgRhAQABgKgDgXIgGgfIgDgOIgDgUQgFgXgBgKIADAHQgFgPAIggQAIgjBCgKQBAgMAZAeIAdAnQADAEAJAQIAEAWQAUBfgTBaIAAACIABAAIABgBIAGgDIgBAEIAAACIgSAFIgHAAIgRgBg");
	this.shape_171.setTransform(-73.8,-31.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABthrICoCVIAMAKAiThNIiECtIgIAM");
	this.shape_172.setTransform(-72.4,16);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#A07001").s().p("AhNCaIABgBQAFgcgEgLQAFAHARAJIAEADQAZAOAcgJQAcgIAGgEQAEgBAFgIIgDASIgBAGIgFAVIh1ANIACgVgAhWBrQgIgBgDgCQALgUAMg6IADAAIAFAIQAFAIACAFIgDAJQgFAMgHAbIgEANIgIgBgAAQgxQgNACgEADIgCAAIgCABIgBAAIgEgFQgBgSADgfQABgVgDgXQAWAKAWgDQAVgFAUgRIAVgSIACACIgXBYIgKA0IgDAdQgNgyghAEg");
	this.shape_173.setTransform(-74.3,27.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00CC99").s().p("AkWAPICCisIiCCsIgSibICUgRIBqgNIAIAiQAEAOABANQADAXgBAVQgDAfACASIADAFIg/A3IACAIIgHACIAAAEQgMA6gKAUQACACAIABIAIABIABAAIABACIABAEQAFALgGAcIgBABIihATgAAaCnIACgRQALg5ACgnIACgXIAAgEIADgbIAKg0IAXhYIABgEIAKgpIATgCICVgRIATCnIAUCyIkQAgIABgGgAEVglIioiWg");
	this.shape_174.setTransform(-72.4,24);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#CC9900").s().p("AhEENIgEgDQgRgKgFgHIgBgDIgBgCIgBgBIAEgMQAHgbAFgMIADgJQgCgFgFgJIgFgHIgDAAIAAgEIAHgCIgCgIIA/g5IABAAIACgBIACAAQAGgDANgCQAfgFANAzIAAAEIgCAXQgCAmgLA5QgFAHgEACQgGAEgaAIQgMADgLAAQgRAAgPgIgAgdgFQgCgNgDgOIgIgiIgCgMQgKhQAMg8IAAgMIACgDQAGgOALgKQARgOAVgEQAggFAVANQARALAGAUQgBADACAJIABABIABACIACALQAHA3gOBKIgJApIgBAEIgCgCIgVASQgUARgVADIgLAAQgPAAgSgFg");
	this.shape_175.setTransform(-72.4,13.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EAEAEA").s().p("Ai6C9IgBgIQBAAZA2AbQAaALAegBQAdAAA9gMQBEgNALgEQANgGAfgXIACASQAEAsAGAlQgLAFgGAGQgSARgpAHQgeAGhuALQhwAKglAIIgUAFQgHiKgGgggAi3jBIgcgEIAIgSIAAgCQAJABAPgCQBHgOA8g9QAgghAQghQAVAOAcAlIgBABQgKAYgZAYQgwAyg6AKQgfAHggAAIgbgBg");
	this.shape_176.setTransform(-81.6,-22.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#CCCCCC").s().p("AhvGWQAIhGAKghQAGAEAHAMQAHALAAADQAGAdAEBBIADAbQgKgCgMABIgkADIAHgygAhECTQg1gbhBgaIgLgpQAWAAAygtQAxgsAsh+QAph+BIBKQBIBKAAgYIAFAPQAGAYAQBYQAPBKAHA+QggAWgMAGQgLAFhEANQg+ALgcAAIgDAAQgdAAgZgJgAjJkvQAnhNBhgxQAagZADgBQASgDASANQgOAgggAhQg8A9hIAOQgMACgIAAIgDAAg");
	this.shape_177.setTransform(-81.8,-13.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333366").s().p("AiIFJQg1gWgVg2QgWg0AZgsIA3iLQgCgJACgFQAAgEAKgXQAJgVAMgSIABABIAchHIgBAAQABgPAGgQQAEgIAKgJIAdhJQAWg1AygWQA1gWA1AWQA2AWAVA1QAWA1gWA1Ig8CHQgBAAgBABQgBAAAAABQgBAAAAAAQAAABAAAAQADAHgFAMQgRAlgVAdIgLAQIgXAwIABABIgJAbQgEALgKAFIg+CJQAhgOgzAWQgaALgbAAQgaAAgbgLg");
	this.shape_178.setTransform(-104.8,74.9,1,1,0,0,0,-12.4,29.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#1A1A33").s().p("AhNCLQgtgSgBgUQgCgOAAguQBGgDAdgIQA0gOASgmQAGgNAMgPQAKgRAJgjQAEgPAOgcIAGgKIACAcIACgBQAEAagBAiQgDAtAJAvQAJAzgBANQAAAOgZAKQgZAJgUASQgQANgcADIgQABQgkAAglgRg");
	this.shape_179.setTransform(-66.3,123.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#993300").s().p("AiVCQQgGgGAIgOIABAEQAAgBABAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIADgGIABAAQALgBAIgEIAigeQAlghAMgOQASgXAFgYIAAgEQAegVAwg7QAfgnANgYIADACQAXAQAVAjQgjBLhlBXQhjBXg2APIgMgPg");
	this.shape_180.setTransform(-71.7,144.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D0D0D0").s().p("Ag5hkQAHAGAHALQAaAaAKAOIAQAVQAJAHgDgEIArA0QgGAGgGAQIgBACIAAAAIgBAAIABABIgCAFIgFAPQgEAOgHAJQgWhng+hig");
	this.shape_181.setTransform(-80.5,-32);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAAAEQAAAAAAAAQAAAAgBgBQAAAAgBgBQAAAAgBgBIAAgBIACgDQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAEABAAACIgBADIgCABIgBAAg");
	this.shape_182.setTransform(-129.5,-80.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#663300").s().p("AgtgBIBYgOIADAPIhXAQg");
	this.shape_183.setTransform(-129.4,-84.2,1,1,0,0,0,-0.1,-0.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#996600").ss(1,1,1).p("AgbAPQAGACAJgDQAKgDACgCQAEgCAJgEQAKgDAFgP");
	this.shape_184.setTransform(-129.3,-66.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#CC9900").s().p("AALCeIAAgFIgCgKIAFABIAGgBQAegFAPgoQAMgjgGggIgCgIIgCgFQAAAbgDAVQgbAVgLAGQgZAOgVAMIgmAQQgJgBgIgEIgCAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgFgGIgCgBIgCgHQgCgQgDgIIALADQAEgBAEgEQAFgEgBgFIgbAEIAAABIgCgCIgEgJQgCgEgCgIIABAAIADAAIAAAAIACAAIAGgBIABAAIACAAIABgBIAOgFIANgGQAJgEAFgQQgFAQgJAEIgNAGIgOAFIgBABIgCAAIgBAAIgGABIgCAAIAAAAIgDAAIgBAAIAAAAIgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgEgEQgBgCACgEIAAgHQAAgFgGgFIAPgFQAQgGgBgGIgCgDQgCgCgDABIgIACIgHADQgKACgNgCIgXgGIgBgBIgCgBQgGgGgCgHQAAgFAFgJIANgPQAUgZgFgYQgCgOgFgEQgIgJgEgJIgCgCIgCgGQgBgHADgaQAAgJABgHIABAAIABABQADAJASAFQAQADAHgBQAIgBAEgGIAEgKQAIAAARgDQACAKAMAFQAKAEAHgCQAIgBAKALQAIAJABAEQABADgBAEQgPAJgOgBQgjgEgUAEQgSADgDAWQgDAVgDALQgEAKgIARQANgSAHgDIALgFIAJgCIABACIAcgCIAPADQANADAIADQAKACAKAFQAKADAGAFIAOALQAIAFAHgBQASgDACggIAAgYIgBgSQADgBAGABIAHABQAHgBAAgHQACgHAGgBQAIgCAFAIIAHAHQABAMgFARIgDAMIgCAHQABAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCABIAAADQgJAYgPADIgCAAIABAWQAIACAFgBIADgCIAIAqQADAQAbALQAWAKAJgCQAEgBAGgGIALA8QhfA9gnAAQgZAAgDgYgABKhOIABAIIAAAIQAHgKAGgLQAGgMgBgFQgBgFgDgCIgFgCIgBgBIgBAAIgGADQgHACgDADQgCADgBAEIgBASIABAGIACgDIACgCQACgCAEAAIABAAg");
	this.shape_185.setTransform(-121.2,-71.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#A07001").s().p("AAJCuIgEgXIgZgCQAWgLAYgPQALgFAbgVQADgWABgaIABAEIACAJQAHAfgNAjQgPAogdAGIgHAAIgFAAgAheB4IgFgHIAAgBIAbgEQABAFgEAFQgFADgEABIgKgCgAB5BbQgbgMgCgQIgJgsIgDACQgFABgIgCIgBgUIACAAQAPgDAKgXQAAAFgBAGQgCAFACAIIAAABIgBABIgBAAIACAAQACAMACACQAEAFANAEQgBAEgCACIgGACQgGADADAMIAAABQADAQAXACQAGABAHgBIAMgCIAFgBIAFAeQgGAGgEABIgDAAQgKAAgSgIgAh8A7IgCgBQgEgEgOgFQgMgGgFgEIAAgBIAXAGQAOACAJgCIAHgCIAIgDQADAAADACIACACQAAAHgQAFIgPAFIgBgBgAASgFIgOgKQgGgFgJgEQgLgFgJgCQgJgDgNgCIgPgDIgcABIgBgCIgJADIgLAEQgGAEgOARQAJgQADgKQAEgLACgWQADgVASgEQAUgDAjADQAOACAQgKQAAgEgBgDQAAgDgJgKQgKgLgHACQgIABgJgEQgNgEgCgLQgRAEgIAAIgEAJQgEAGgIABQgHACgQgEQgSgEgDgJIAAgBIgBgBQACgIACgEIADgEIgCABIAAgCIADgBQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIAAABQgBAHAIAEQAIAFAJgCQAKgBACgCQAHgGgHgNQAGAKAIAAQAEABAIgCQAIgBAIgFIAagFQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAABAAIgCACIgBAAQgFAHAAAEQACAIANAFQANAEAMgDIgBAEQgBADABAEQABAKAMADQAFADAFgBIgNATQgEAJACARIABABQABAEAGAEIAJAGIABABIABACIgDAKIgBAFQADAOAGAGQAGAFAEgBQAPgDABgRQABgMgEgNIABgGQADgOAIgPQAFACAFgBQAIgBABgCQACgBAAgJIAUgEIAFAQIAGAMIAAAGIgHgIQgFgHgHABQgHABgBAHQAAAHgIABIgHAAQgGgCgDACIABARIAAAZQgCAfgSADIgDABQgFAAgHgFgAgMhLIABAAIgBgBgABMgnIgBgIQgFgBgDADIgBACIgDACIgBgGIABgSQABgEADgDQADgDAGgBIAHgEIAAABIACABIAEACQAEACABAFQABAEgHAMQgGAMgGAJIAAgHg");
	this.shape_186.setTransform(-121.2,-74.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#330000").s().p("ACtBbQgGgCgHgHIgFAFQgCACgEABQgQADgLgPQgKgMgCgRQgCAIgBANQgCAJgOADQgVAEgNgJQgKgHgDgNIgCABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQABANgEADIgMADQgHACgJgDQgKgDAAgHIAAgEIAAAAIAAgCIAAAAIAAACIAAAAIgIAJQgLAJgLADQgKABgRgEQgTgGgCgIIAAgCIAAgBIAAAAIACgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIgaAFQgJAFgHABQgIACgFgBQgHAAgGgKQAHANgHAGQgCACgKABQgKACgHgFQgIgEABgHIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgCABIgGADQgKAAACgEIgFABIAAgDIABAAQADgRgBgKQgDgOAHgNQAIgKAHgDQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAgBIAGAEQAEACADgBQAPgBACgOIABgLQACgFAGgBIAIAAIAGABQAJgCANgUQAKgUAAgIIAAAAIAGgCQALgCAOABIAOABIAHgBIAPANIAJgLQAEgGACgEIAAABQAIAKAFABQABAIAHACQAEACAHgCQAMgCAJgIIABACIAFAIIAAAGQACAKAGADQAFADAHgCQAHgBARgKIAFgEIAIAKQAHALAIgCQAJgCgCAGQgFAFADACIALAPQAIAMABAAQAIAEANAOIATAEQAHADADAOIABALQAAAGgJASQAJADAAADIABAGQgFALgIABIgHABIgIgBg");
	this.shape_187.setTransform(-118.3,-98);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EAEAEA").s().p("Ai5C9IgDgIQBBAZA1AcQAbAJAeAAQAdAAA9gLQBEgNALgFQAMgGAhgWIACASQADAqAGAmQgKAFgHAGQgSAQgoAIQgfAGhtAKQhxAMgmAGIgTAHQgGiLgGgggAi2jCIgdgCIAIgSIABgCQAIAAAOgDQBJgNA7g+QAhggAPggQAVAOAcAlIAAABQgKAXgZAYQgyAyg4ALQggAGggAAIgagCg");
	this.shape_188.setTransform(-103.6,-26.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#CCCCCC").s().p("AhwGWQAKhGAJghQAGAEAIAMQAFALABADQAFAdAGBBIADAbQgLgCgMABIglADIAHgygAhECTQg2gbhAgaIgLgpQAWAAAygtQAygsArh+QAph+BIBKQBIBKAAgYIAEAPQAHAYARBYQAOBKAHA+QggAWgNAGQgLAFhEANQg8ALgeAAIgCAAQgdAAgZgJgAjJkvQAohNBggxQAZgZAFgBQARgDASANQgOAgghAhQg7A9hIAOQgMACgIAAIgDAAg");
	this.shape_189.setTransform(-103.8,-17.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#333366").s().p("AgSFjQg6gDgmgrQgngqAKgxIAFiWQgFgIAAgFQgBgFABgaQABgWAFgUIACABIADhMIgCAAQgFgPABgRQABgJAHgMIAChOQADg5AqgnQAqglA3ADQA6ACAmAqQAnArgDA5IgLCTQgBABgBABQAAAAgBABQAAAAAAABQAAAAAAAAQAFAHAAAOQgDAmgKAjIgFATIgFA1IABAAIAAAdQAAAMgHAIIgPCWQAdgZgqAmQgoAkgzAAIgHAAg");
	this.shape_190.setTransform(-104.8,74.9,1,1,0,0,0,-1.9,31.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#333366").s().p("AAyDiIgog/IACgBIgrgyIAGABIiYjSQgfgpAHgyQAGgxAngdQAngdAyAIQAwAJAdApQCFCYAfBGIAAABIALAOIABALQACAgAEAOQALAjAAATQgBATABAQQAFAqglApQgWAVg5AoQgSgagYgmg");
	this.shape_191.setTransform(-88.2,82.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#1A1A33").s().p("AhXCkQgIgLgZgmQA6goAVgWQAmgogFgpQgCgPACgTQgBgTgKgjQgFgPgCgfIAAgMIAQAWIACgBQAOATARAeQAWAoAiAlQAhAlAHALQAGAMgPAWQgRAVgIAZQgGAUgXARQgjAbgwAIQgPACgMAAQgZAAgIgLg");
	this.shape_192.setTransform(-66.8,99.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#CC6600").s().p("AglBTQAEgQAMgaQAag8ADgKQADgJgJgYQAFAAAFgDQAKgDAIgIIAFgHIACAFQAEAagKAbQgHASgYAoIgVAoQgFAGgLAFg");
	this.shape_193.setTransform(-70.3,129.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#5C2E01").s().p("AgqBkQgIgWgLgQQALgMAIgUIACgDIAFgQQAPgOARgjQAUgugHgMQAVgGAfAIQgFAcgRAuQgbBGgVAdIgFAHQgIAIgKADQgFADgFAAg");
	this.shape_194.setTransform(-65.8,112.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AhfCwIgMgGIgBgBQAvghBAhzQBDhxAJhUQgCgFAJAFIAWALQABAxgwBfQguBdhMBaIgcASIgGgEg");
	this.shape_195.setTransform(-61.4,124.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#993300").s().p("AhjC0QgHgEADgPIADACQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBgBgBAAQAAgDACgEIABAAQALgFAFgGIAXgoQAYgrAHgRQAKgbgEgYIgCgFQAXgeAZhHQARgvAFgbIADACQAaAHAgAZQgJBUhDByQhABzgvAgIgRgKg");
	this.shape_196.setTransform(-64,122.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333366").s().p("AgFFiQg5gBgogpQgogpAJgyIAAiVQgFgHgBgGQgBgEAAgZQABgXAFgTIACAAIgBhLIgBAAQgFgPAAgRQAAgJAHgMIAAhNQABg5ApgoQApgnA3AAQA5ACAnAoQAoApgBA6IgICTQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAFAFAAAPQgBApgJAgIgFASIgDA1IABABIACAdQAAALgHAJIgLCVQAcgagoAnQgoAng0AAIgEAAg");
	this.shape_197.setTransform(-96.4,41.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#CC9900").s().p("AAAAAIABgBIAAADg");
	this.shape_198.setTransform(-88.7,0.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#D0D0D0").s().p("Ag5hlQAHAIAIAKQAZAbALANIAQAVQAIAHgDgFIArA0QgGAIgFAPIgCACIAAABIAAAAIAAAAIgCAGIgEANQgEAPgIAKQgXhog9hjg");
	this.shape_199.setTransform(-102.5,-36);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AAAAEQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAFABgBADIgCADIgCABIAAgBg");
	this.shape_200.setTransform(-122.8,-82);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#996600").s().p("AAAAGQgDgCgDgEIgBgDQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAIACADQACACgBADIAAABIgFABIgDgBg");
	this.shape_201.setTransform(-122.8,-80.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AAFAMQABgDgCgEIgCgDQgBABAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBgCABgCQABgGAFgDIAAAAQAEgCACACQAFACADAFQADAEgCAEQgBAGgEADgAgDgKIgCADIAAADQAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIAAgCQACgFACACIABABQAAgEgCgBIgCgBIgBAAg");
	this.shape_202.setTransform(-122.5,-81.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgTALIAAgEQAAgHgCgHQAVgPAWAWQgQAOgMAAQgGAAgHgDg");
	this.shape_203.setTransform(-121.2,-81.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#663300").s().p("AgsgIIBYAAIABAPIhZADg");
	this.shape_204.setTransform(-122,-86,1,1,0,0,0,-0.1,-0.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#996600").ss(1,1,1).p("AgdAKQAGADAKgCQAKgBADgCQADgBAKgCQAKgDAIgN");
	this.shape_205.setTransform(-124.5,-69);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#CC9900").s().p("AgECmIABgFIAAgKIADABIAGABQAegBAVglQASghgBggIgBgJIgBgFQgEAbgHAUQgeARgLADQgZALgZAIIgoAJQgJgCgHgFIgCgBIgDgDIgFgHIgBgBIgBgHQAAgQgBgIIAKADQAEAAAFgCQAFgEAAgFIgbAAIAAABIgBgDIgEgJQgBgFAAgIQADACAGAAIAHgBIAOgDIAOgDQAKgDAIgPQgIAPgKADIgOADIgOADIgHABQgGAAgDgCIgBAAIgBAAIgDgDIgEgFIACgGIACgHQAAgFgFgGIARgCQAQgDAAgGIgCgDQgCgDgCAAIgIABIgIACQgKAAgNgDQgKgDgMgGIgBAAIgBgCQgFgHAAgJQAAgFAHgIIAPgNQAXgVAAgYQgBgPgDgFQgHgKgDgJIgBgDIgBgGQAAgGAHgbIAEgPIABABIAAABQACAJARAHQAPAHAHAAQAIAAAFgGIAFgJQAJACARgBQAAALAMAGQAJAGAHgBQAGAAAIANQAHAKAAAEIgBAHQgPAHgNgEQgigJgUABQgTAAgGAVQgGAUgFALIgQAYQAPgPAIgDIALgCIAKgBIAAACIAcADIAOAFQANAFAIAEQAIADAJAHQAIAFAHAGIAMANQAIAHAHAAQASgBAHgfIADgYIADgRQACgBAGACIAIACQAHAAABgHQACgGAHgBQAHAAAFAJIAFAIQgBAMgHAQIgFALIgDAHQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIgCAAIAAADQgNAWgPABIgCAAIgDATQAIAEAFAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIABAtQAAAQAYAQQAVANAJAAQAFgBAGgFIABA9QhaAogqAAQghAAABgdgABfg5IAAAIIgBAHQAIgIAHgLQAIgKAAgFQAAgFgDgCIgEgDIgCgBIAAgBIgHADQgGAAgEADQgDACgCAEIgDARIAAAHIACgCIACgCIAFgBIADAAg");
	this.shape_206.setTransform(-116.7,-72.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#A07001").s().p("AgBC1IgFAAIgBgXIgagHQAZgIAZgKQALgDAegRQAHgUAEgbIABAFIABAIQABAggSAhQgVAmgeAAIgEgBgABzB0QgYgQAAgQIgBgtQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFAAgIgDIADgWIACAAQAPAAANgUQAAAEgDAFQgCAFAAAIIAAABIAAACIgBAAIABAAQABANABACQADAGANAGQgCAEgDABIgGABQgGADAAAMIAAABQABAQAXAGIANACIAMAAIAEgBIABAfQgGAFgFAAQgJAAgVgNgAhmBuIgDgHIAAgBIAbAAQAAAFgFAEQgFADgEAAIgKgEgAh5AtIgCgBQgEgEgMgIQgLgIgFgFIAAAAQAMAGAKADQANAFAKAAIAIgCIAIgCQACAAACADIACADQAAAHgQADIgRABIAAgBgAAdADIgMgKQgHgHgIgEQgJgHgIgEQgIgEgNgEIgOgFIgcgEIAAgCIgKABIgLADQgIADgPAOIAQgXQAFgLAGgVQAGgUATgBQAUAAAiAJQAOADAOgHIABgHQAAgDgHgLQgGgMgIAAQgHAAgJgFQgMgHAAgKQgRAAgJgBIgFAIQgFAGgIAAQgHAAgPgGQgRgHgCgKIAAgBIgBAAQADgIAEgEIADgDIgCAAIAAgBIADgBIgBACIAAABQgBAHAGAFQAHAGAJAAQAKAAADgCQAIgEgFgOQAEAKAIACIAMABQAIAAAJgEQACgBAZAAQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABIgBABIgCAAQgGAHAAAEQABAHALAHQALAHAMgCIgBAEQgCADAAAEQAAAKALAGQAHADAFAAIgSAQQgGAIAAASIAAABQABAEAGAFIAJAIIABABIABABQgDAFgCAFIgCAFQABAPAFAGQAFAGAFAAQAOgBAFgQQADgMgDgNIACgGQAFgOALgNQAFADAEgBQAJAAABgBQACgBABgJIAVAAQAAAGACAKIAEAMIgBAGIgFgIQgFgIgHAAQgHAAgCAHQgBAHgHAAIgIgCQgGgDgCABIgDASIgDAYQgHAdgSAAQgHAAgIgHgAAIhFIACAAIgBgBgABcgTIAAgIQgEgCgEADIgCABIgCACIAAgGIADgRQACgEADgDQAEgCAGgBIAHgDIAAABIACACIAEACQADADAAAFQAAAEgIALQgHALgIAIIABgHg");
	this.shape_207.setTransform(-116.4,-75.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#1A0000").s().p("AARCEIgNgCQgVgGgBgQIAAgBQAAgMAGgDIAGgBQADgBACgEQgNgGgDgGQgBgCgBgNIAAAAIAAgCIAAgBQAAgIACgFQADgFAAgGIACgEQABAAAAAAQABAAAAAAQAAgBgBAAQAAAAAAAAIADgHIAFgKQAFgPABgMIABgGIgEgMQAAgKAAgGIgVAAQgBAJgCABQgBABgJAAQgEABgFgDIgKgIIAFAFIAFADQgLANgFAOIgCAGQADALgDAMQgFAQgOABQgFAAgFgGQgFgGgBgPIACgEQACgEADgFIgBgBIgBgBIgJgIQgGgFgBgEIAAgBQAAgSAGgIIASgQQgFAAgHgDQgLgGAAgKQAAgEACgDIABgEQgMACgNgHQgLgHgBgHQAAgEAGgHIABABIgBACQAAAIATAJQAQAIAKgBQALAAANgIIAJgIIABABIgBADQAAAIAKAFQAIAEAHgBIANAAQADgEACgNIABgBIADAAQAAANAJAJQAKALAVgBQAOAAAEgJQADgNADgHQAAARAHANQAJARAPgBQAEAAADgBIAGgFQAGAIAGADQAGADAJAAQAHAAAIgKQgBARgHAOIgJAPQAAAFAEAIQAEAIAAAEQABAVgGAKQgIAMgVAIQAGAMgVAOQgSANgTABIAGADIAAAIQABAOgGAHQgEAHgKABIgEABIgGAAIgGAAgAgrgqIAAAAg");
	this.shape_208.setTransform(-104.2,-79.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#663300").s().p("AiHAkIgGgFIABgCQAEgDADgHQAHgOADgDQAEgCARgCQARgDAGgFQAKgMAJgFQAHgCAJgBIAAABQgBAIgOARQgQAQgJABIgGgCIgIgCQgFABgDAFQgCABgCAJQgEANgPAAIgGgCgABiAXQgFgGgBgKIAAgFIADAIQAFgDAJAAQAJgDAFAAQAMAAADAFIAEAGIgHACQgSAJgHAAQgHAAgFgDgAA3gBQgFgEgBgJIAAAAIAPgDIANgDQAGAAAGANQgKAHgNAAQgHAAgEgBgAAFgZQAFgBAFgFIAIgGQAFgBAJALQgDAEgFAFIgKAJg");
	this.shape_209.setTransform(-111.8,-104.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#330000").s().p("ACmBpQgGgDgGgIIgGAFQgDABgEAAQgPABgJgRQgHgNAAgRQgDAHgDANQgEAJgOAAQgVABgLgLQgKgJAAgNIgDAAIgBABQgCANgDAEIgNAAQgHABgIgEQgIgFAAgIIABgDIAAgBIgBAAIgJAIQgNAIgLAAQgKABgQgIQgTgJAAgIIABgCIAAgBIABAAIABgBQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQgZAAgCABQgJAEgIAAIgMgBQgIgCgEgKQAFAOgIAEQgDACgKAAQgJAAgHgGQgGgFABgHIAAgBIABgCIgDABIgGABQgJgBACgEIgGAAIABgCIABAAQAGgRAAgIQAAgOAKgMQAIgIAIgDQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIAFAGIAHACQAPgBAEgNQACgJACgBQACgFAGAAIAHABIAHACQAJgBAQgSQANgRABgIIAAgBIAHgBQALAAAOAEIANADIAHAAIANAPIAJgJQAFgFACgEIABABQAHALAFACQAAAIAGAEQAEACAHAAQANgBAKgHIAAADIADAIIAAAGQAAAKAGAFQAEADAIAAQAHAAASgIIAGgDIAGAMQAFAKAIAAQAJAAgDAFQgEAFACACIAIAQIAGAMQAIAFALASIASAHQAGAEABAOQAAAJgBADQgBAFgLAQQAIAFAAADIAAAGQgIAKgHAAQgJAAgGgDgAAAAxIAAgBIAAAAIAAABg");
	this.shape_210.setTransform(-109.7,-96.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AADGoQhFgDgYgQQgKgGgMgEIABgbQAGhBgBgeIgEgOQgGgNgFgGQgPAggUBEIgPAwIgBAAQgSgDgJgKQgKgNgBggIAQiEIAUgCQAngBBwAHQBuAHAfAAQAqgCAUgNQAHgEALgEIABAvIAGBCIAGBCQABAZg7ASQgtAPgfABIgqAAIggAAgAi4gVIgIheQgEiaA2hYQANAFAOADQAtALAtgCQA4gBA7gpQAcgTAOgXIACABQArA/ARBHQAQBHgNAmQgEAXg7hUQg7hUg/B1Qg9B1g4AmQgyAggYAAIgFAAg");
	this.shape_211.setTransform(-109.2,-11.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#EAEAEA").s().p("AgbFUQhxgHgmABIgUACQAPiJAAghIgBgIQA8AjAwAjQAZAPAeAEQAcAFA+gCQBGgCALgCQAOgEAjgSIgBATQgEAqAAAnQgLADgHAFQgVANgpABIgEAAQgiAAhngGgAh3jTQgOgDgNgFIALgQIABgCQAIACAOAAQBKgCBCg0QAmgbAUgdQAVASAWAoIgBABQgOAWgcAUQg7Aog4ACIgLAAQgoAAgngJg");
	this.shape_212.setTransform(-108.8,-25.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#CCCCCC").s().p("AiPG6IgmgCIAQgwQAUhEAOggQAGAGAFANIAFAOQAAAegFBBIgCAbQgKgDgLgCgAgbChQgdgEgZgPQgwgjg9gjIgEgrQAXAEA4giQA4gmA9h1QA/h2A7BVQA7BUAEgXIACAOQADAZACBZQACBMgDA+QgjASgNAEQgMAChFACIgdABQgnAAgXgEgAiMlDQAzhGBmghQAdgUAEAAQASgBARAQQgVAdglAbQhDA0hJACQgPAAgIgCg");
	this.shape_213.setTransform(-108.2,-17);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333366").s().p("Ah/ErQABgfAEgtIAEhLIADABIgHhCIAEACIABkDQAAgzAjgmQAhgkAxAAQAwAAAiAjQAjAlAAAzQATDIgRBMIAAAUIgHAJQgQAbgFAPQgMAhgLAQQgNAPgIANQgVAmg0AKQgUAEgmAAIgrgBg");
	this.shape_214.setTransform(-106,92.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#1A1A33").s().p("AhNCNQgsgSgCgVQgCgNAAguQBGgEAdgIQAygPATglQAGgOAMgPQAJgRAJgjQADgPAQgcIAEgKIAEAbIACABQADAYgBAjQgBAtAJAvQAJAzAAANQgBANgZALQgZAKgUARQgQANgcADIgRABQgjAAglgPg");
	this.shape_215.setTransform(-107.7,114.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333366").s().p("AhmDjIgBhLIACABIgMhDIAEAEIgUkCQgEgzAfgnQAegnAxgFQAugEAnAgQAkAhAFAzQAjDGgJBMIgBgBIABAUIgFAKQgPAcgDAPQgJAjgKARQgLAPgHAOQgSAngzAPQgdAIhGAEQgCgfgBgtg");
	this.shape_216.setTransform(-110.4,88.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AikAtIgfgLIgBgIIgCgNIAAgBQA2ASCEgRQCCgPBJgrQADgFABAKIAEAZQgnAchoAUQhJAOhTAAQggAAgggCg");
	this.shape_217.setTransform(-114.3,140);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#993300").s().p("AjBA7IgCgUQgBgIAOgHIAAAEQAAAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAgBIAHgDIABABQAJAGAJAAQACABAsgHQAvgGATgFQAbgJARgRIADgEQAlABBKgWQAvgPAZgMIAAADQAJAaAAAmQhJAriCARQhAAIguAAQgwAAgcgJg");
	this.shape_218.setTransform(-114.8,135.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#CC6600").s().p("AhGAfQgJAAgJgGIAAgBQAPgGAdgGQBAgNAJgEQAKgDAOgWIAAAAQACAEAGADQAJAGAKABIAJAAIgDAEQgSARgcAJQgSAFguAGIgtAGIgBAAg");
	this.shape_219.setTransform(-123.3,135);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#5C2E01").s().p("AhIAtIgIgBQgLgBgJgFQgFgDgDgFQALgUAHgQQAQABAVgFIADgBIAQgFQAWACAkgHQAygKAFgNQASAMAMAfQgZAKgvAPQhGAVglAAIgCAAg");
	this.shape_220.setTransform(-107,128.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#BA8201").s().p("AgzE3QgRgHgDgPQgEgQAEggQADgbgEgMIgBgDIgBgCIgCAAIgIgBQgIgBgCgCQAJgSAHg6QABgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIAGgBIgBgIIA8g5IAAAAIgGgFQgCgSABgcQAAgUgEgXIgHgaIgNgsQgPhOAHg7IABgKQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAGgNAKgKQAQgOAVgFQAggGAWAMQARAKAHASQgBAEADAIIABABIABACIADALQAOBDgTBiIgCACIABACIgSBVIgHAyIAAAdIAAADIAAAWQAAAlgHA5IgCARQgDAWgGAQQgMAjgaAKQgZALgQAAQgHAAgFgCg");
	this.shape_221.setTransform(-103.7,12.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#E1E1E1").s().p("AgMAQQgEgagQgiQAEgCgBgDQAWARARAcQANAQAKAUQgXAEgIAIQgCADgHACQgCgUgDgNg");
	this.shape_222.setTransform(-109.5,-25.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#D0D0D0").s().p("AguhqIANATIAdAuQAGAPAGAIQAGAJgBgFIAiA6QgHAGgJAOIgBACIAAAAIAAAAIAAABIgCAFIgIANQgGAOgJAIQgFhrguhqg");
	this.shape_223.setTransform(-102.6,-34.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#BA8201").s().p("AAGBtQgRAEgZgkQgZglgNgxIgMgYIAIgBQAHgBAHgCQAIgCADgDQAIgJAXgDIAKgBQAQgCAMgLQAJgIAGgOIAIgNIACgFIABAAIAOAiQAeBHABA0QgBA2hQAGg");
	this.shape_224.setTransform(-103.8,-16.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("Ag8BgQgBgLgHgXIgLgeIgGgPIgHgSIgKggIACADQgGgOABggQgCgkAvgdQAwgcAXAaIAdAfIAOASQAvBqAFBsQgMALgSACIgKAAQgKgUgNgSQgTgbgWgRQABACgDACQAPAjAEAbQADANACAVQgHACgHAAIgIACQgOABgXAAg");
	this.shape_225.setTransform(-112.8,-35.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#CC9900").s().p("AgCAFIACgFIADgEIAAAJg");
	this.shape_226.setTransform(-120.5,41.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#330000").s().p("ACmBpQgGgDgGgIIgGAFQgDABgEAAQgPABgJgRQgHgNAAgRQgDAHgDANQgEAJgOAAQgVABgLgLQgKgJAAgNIgDAAIgBABQgCANgDAEIgNAAQgHABgIgEQgIgFAAgIIABgDIAAgBIAAgBIAAAAIAAABIgBAAIgJAIQgNAIgLAAQgKABgQgIQgTgJAAgIIABgCIAAgBIABAAIABgBQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQgZAAgCABQgJAEgIAAIgMgBQgIgCgEgKQAFAOgIAEQgDACgKAAQgJAAgHgGQgGgFABgHIAAgBIABgCIgDABIgGABQgJgBACgEIgGAAIABgCIABAAQAGgRAAgIQAAgOAKgMQAIgIAIgDQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIAFAGIAHACQAPgBAEgNQACgJACgBQACgFAGAAIAHABIAHACQAJgBAQgSQANgRABgIIAAgBIAHgBQALAAAOAEIANADIAHAAIANAPIAJgJQAFgFACgEIABABQAHALAFACQAAAIAGAEQAEACAHAAQANgBAKgHIAAADIADAIIAAAGQAAAKAGAFQAEADAIAAQAHAAASgIIAGgDIAGAMQAFAKAIAAQAJAAgDAFQgEAFACACIAIAQIAGAMQAIAFALASIASAHQAGAEABAOQAAAJgBADQgBAFgLAQQAIAFAAADIAAAGQgIAKgHAAQgJAAgGgDg");
	this.shape_227.setTransform(-109.7,-96.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#E1E1E1").s().p("AgLAvQgFACgLgBIABgGIAFgZQACgZgIglQABgBABAAQABAAAAAAQABgBAAAAQAAAAAAgBQAWAXAOAeQAHAUAGATIACAFQgcgHgLAFg");
	this.shape_228.setTransform(-98.4,-22.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#CC9900").s().p("AgWBNIAAAAQgUgCgRgpQgPgogCg2QAOACAWABQApAFAIgDIAMgEQAMgFARgLIAEgCIARgDIABAAQALBIgMAxQgKAogzAAQgNAAgTgEg");
	this.shape_229.setTransform(-97.4,-9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#A07001").s().p("AgaANQgVgBgPgCIgFgYIgBgBIAEABIAEABQAIACAHgBIAKgBIANACQAKABAFgCQALgFAdAGIALADQAMADANAAIgEACQgRAJgMAFIgMAEIgLABQgNAAgagDg");
	this.shape_230.setTransform(-98.9,-16.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#D0D0D0").s().p("AgHBpIACgCIABABIgBABIgCAAgAAAhoIAHAVIgDACIgEgXg");
	this.shape_231.setTransform(-90.1,-28);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#F7F7F7").s().p("AgZBdQAYhYgNhgIAEgCQAMAjAEAQIAJAcIAFAFIAFBCQAEgCgOALIgBAAIgCABIAAABIgEADIgKAJQgHAGgJAFQgCACgEABg");
	this.shape_232.setTransform(-88.2,-27);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AA5CVIgLgDIgCgFQgGgTgIgUQgPgggUgXQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAgBABQAIAlgDAbIgEAZIgBAGIgNgBIgGgDIgKgBIAAABQgTgFgcgJIgMhAQABgLgBgWIgEgeIgCgPIgCgVQgDgXAAgKIACAHQgEgPAKggQAKgiBDgGQBBgIAWAgIAbApIAKAVIADAWQAOBggZBYIgBACIABAAIACgBQADAAADgCIgCAEIAAACIgRAEQgMAAgNgDg");
	this.shape_233.setTransform(-100.2,-32.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#FFFFFF").ss(1,1,1).p("AB5hdICeCfIALAKAiIhRIiPCkIgKAL");
	this.shape_234.setTransform(-102.5,14.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#A07001").s().p("AhZCVIABgBQAGgcgDgMQAFAIAQAKIAEADQAZAQAegHQAagHAHgCQAEgDAFgGIgEASIgCAFIgGAUIh2AGQABgKADgKgAhfBkQgJgBgCgCQAMgUAQg4IADAAIAFAHIAFAPIgDAJIgPAlIgEANIgIgCgAAQgwQgMABgEACIgDAAIgBABIgBAAIgEgFQAAgSAFgeQACgVgCgYQAXAMAWgDQAVgCAVgQIAWgRIACADIgdBWIgNAzIgGAcQgJgzgiADg");
	this.shape_235.setTransform(-104.3,25.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#00CC99").s().p("AkXgBICPimIiPCmIgIifICXgHIBqgFIAFAiQADAOAAANQACAYgDAVQgEAeAAASIADAGIhCAyIAAAJIgGABIgBAEQgPA5gNATQADACAIABIAIACIABABIABACIABADQADAMgHAcIgBABIiiAIgAAPCpIADgSQAPg4AEgmIAEgXIAAgEIAFgdIAOgwIAchXIABgEQAIgVAEgUIAUAAICWgIIAICpIAICzIkSANIACgFgAEXgSIieihg");
	this.shape_236.setTransform(-102.5,22.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#CC9900").s().p("AhUEIIgEgDQgQgLgEgHIgBgEIgBgBIgBgCIAEgMIAPglIAEgJIgGgPIgFgIIgDAAIABgEIAGgBIgBgIIBDg1IABAAIACgBIACAAQAGgCANgBQAfgDAKA0IAAADIgEAXQgEAmgPA5QgFAGgEACQgEADgdAGQgKADgJAAQgTAAgRgLgAgbgHQgBgNgCgOIgGgiIgBgNQgFhRAQg6IABgMIACgDQAHgNAMgKQAPgNAYgCQAggDAVAOQAPAMAFAUQgBAEACAIIAAACIABACIABALQAEA3gTBJQgFAUgHAUIgBAEIgBgCIgXARQgVAQgVAAIgHABQgRAAgUgIg");
	this.shape_237.setTransform(-102,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52,p:{x:-113.5}},{t:this.shape_51,p:{x:-62.1}},{t:this.shape_50},{t:this.shape_49,p:{x:-49,y:5.4}},{t:this.shape_48,p:{x:-53.5}},{t:this.shape_47,p:{x:-59}},{t:this.shape_46,p:{x:-53.2,y:27.3}},{t:this.shape_45,p:{x:-54.2}},{t:this.shape_44,p:{x:-45.6,y:37.2}},{t:this.shape_43,p:{x:-65.8}},{t:this.shape_42,p:{x:-75.1}},{t:this.shape_41,p:{x:-75}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:-66}},{t:this.shape_37,p:{x:-66.1}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:-58.1}},{t:this.shape_28,p:{x:-59.1}},{t:this.shape_27,p:{x:-59.6}},{t:this.shape_26,p:{x:-52.1,y:47.5,rotation:0}},{t:this.shape_25,p:{x:-54.8,y:60.9,rotation:0}},{t:this.shape_24,p:{x:-52.9,y:57.9,rotation:0}},{t:this.shape_23,p:{x:-52.9,y:49.4,rotation:0}},{t:this.shape_22,p:{x:-47.9,y:3.4,rotation:0}},{t:this.shape_21,p:{x:-47,y:13.1,rotation:0}},{t:this.shape_20,p:{x:-38.2,y:7.8,rotation:0}},{t:this.shape_19,p:{x:-36.6,y:8.8,rotation:0}},{t:this.shape_18,p:{x:-47.5,y:19,rotation:0}},{t:this.shape_17,p:{x:-46.2,y:26.6,rotation:0}},{t:this.shape_16,p:{x:-57.5}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-65.1}},{t:this.shape_11,p:{x:-65.4,y:-60.1}},{t:this.shape_10,p:{x:-65.4,y:-60.2}},{t:this.shape_9,p:{x:-73.5,y:-68.8}},{t:this.shape_8,p:{x:-73}},{t:this.shape_7,p:{x:-76.2,y:-35.5}},{t:this.shape_6,p:{x:-69.7}},{t:this.shape_5,p:{x:-69.2}},{t:this.shape_4,p:{x:-69.2,y:-49.7}},{t:this.shape_3,p:{x:-70.6}},{t:this.shape_2,p:{x:-70.9}},{t:this.shape_1,p:{x:-70,y:-47.6}},{t:this.shape,p:{x:-70.8}}]}).to({state:[{t:this.shape_52,p:{x:-117.5}},{t:this.shape_51,p:{x:-66.1}},{t:this.shape_66},{t:this.shape_49,p:{x:-53,y:5.4}},{t:this.shape_65},{t:this.shape_47,p:{x:-63}},{t:this.shape_46,p:{x:-57.2,y:27.3}},{t:this.shape_45,p:{x:-58.2}},{t:this.shape_44,p:{x:-49.6,y:37.2}},{t:this.shape_43,p:{x:-69.8}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_42,p:{x:-79.1}},{t:this.shape_41,p:{x:-79}},{t:this.shape_38,p:{x:-70}},{t:this.shape_37,p:{x:-70.1}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_29,p:{x:-62.1}},{t:this.shape_28,p:{x:-63.1}},{t:this.shape_27,p:{x:-63.6}},{t:this.shape_26,p:{x:-56.6,y:47.5,rotation:0}},{t:this.shape_25,p:{x:-59.3,y:60.9,rotation:0}},{t:this.shape_24,p:{x:-57.5,y:57.9,rotation:0}},{t:this.shape_23,p:{x:-57.5,y:49.4,rotation:0}},{t:this.shape_22,p:{x:-52.5,y:3.4,rotation:0}},{t:this.shape_21,p:{x:-51.5,y:13.1,rotation:0}},{t:this.shape_20,p:{x:-42.8,y:7.8,rotation:0}},{t:this.shape_19,p:{x:-41.2,y:8.8,rotation:0}},{t:this.shape_18,p:{x:-52,y:19,rotation:0}},{t:this.shape_17,p:{x:-50.7,y:26.6,rotation:0}},{t:this.shape_16,p:{x:-61.5}},{t:this.shape_12,p:{x:-69.1}},{t:this.shape_55,p:{x:-68.8}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_10,p:{x:-69.4,y:-60.2}},{t:this.shape_11,p:{x:-69.4,y:-60.1}},{t:this.shape_9,p:{x:-77.5,y:-68.8}},{t:this.shape_7,p:{x:-80.2,y:-35.5}},{t:this.shape_8,p:{x:-77}},{t:this.shape_6,p:{x:-73.7}},{t:this.shape_5,p:{x:-73.2}},{t:this.shape_4,p:{x:-73.2,y:-49.7}},{t:this.shape_3,p:{x:-74.6}},{t:this.shape_2,p:{x:-74.9}},{t:this.shape_1,p:{x:-74,y:-47.6}},{t:this.shape,p:{x:-74.8}}]},2).to({state:[{t:this.shape_52,p:{x:-118.5}},{t:this.shape_51,p:{x:-67.1}},{t:this.shape_84},{t:this.shape_49,p:{x:-54,y:5.4}},{t:this.shape_48,p:{x:-58.5}},{t:this.shape_47,p:{x:-64}},{t:this.shape_46,p:{x:-58.2,y:27.3}},{t:this.shape_45,p:{x:-59.2}},{t:this.shape_44,p:{x:-50.6,y:37.2}},{t:this.shape_83,p:{x:-67.3,y:74.4}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:-64.7,y:117.2}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_29,p:{x:-63.1}},{t:this.shape_28,p:{x:-64.1}},{t:this.shape_27,p:{x:-64.6}},{t:this.shape_26,p:{x:-57.2,y:47.5,rotation:0}},{t:this.shape_25,p:{x:-59.9,y:60.9,rotation:0}},{t:this.shape_24,p:{x:-58.1,y:57.8,rotation:0}},{t:this.shape_23,p:{x:-58.1,y:49.3,rotation:0}},{t:this.shape_22,p:{x:-53.1,y:3.4,rotation:0}},{t:this.shape_21,p:{x:-52.1,y:13,rotation:0}},{t:this.shape_20,p:{x:-43.4,y:7.7,rotation:0}},{t:this.shape_19,p:{x:-41.8,y:8.8,rotation:0}},{t:this.shape_18,p:{x:-52.6,y:19,rotation:0}},{t:this.shape_17,p:{x:-51.3,y:26.6,rotation:0}},{t:this.shape_69},{t:this.shape_55,p:{x:-69.8}},{t:this.shape_12,p:{x:-70.1}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_10,p:{x:-70.4,y:-60.2}},{t:this.shape_11,p:{x:-70.4,y:-60.1}},{t:this.shape_7,p:{x:-81.2,y:-35.5}},{t:this.shape_9,p:{x:-78.5,y:-68.8}},{t:this.shape_8,p:{x:-78}},{t:this.shape_6,p:{x:-74.7}},{t:this.shape_5,p:{x:-74.2}},{t:this.shape_4,p:{x:-74.2,y:-49.7}},{t:this.shape_3,p:{x:-75.6}},{t:this.shape_2,p:{x:-75.9}},{t:this.shape_1,p:{x:-75,y:-47.6}},{t:this.shape,p:{x:-75.8}}]},2).to({state:[{t:this.shape_52,p:{x:-118.5}},{t:this.shape_51,p:{x:-67.1}},{t:this.shape_84},{t:this.shape_49,p:{x:-54,y:5.4}},{t:this.shape_48,p:{x:-58.5}},{t:this.shape_47,p:{x:-64}},{t:this.shape_46,p:{x:-58.2,y:27.3}},{t:this.shape_45,p:{x:-59.2}},{t:this.shape_44,p:{x:-50.6,y:37.2}},{t:this.shape_83,p:{x:-67.3,y:74.4}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:-64.7,y:117.2}},{t:this.shape_77},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_29,p:{x:-63.1}},{t:this.shape_28,p:{x:-64.1}},{t:this.shape_27,p:{x:-64.6}},{t:this.shape_26,p:{x:-56.2,y:45.8,rotation:0}},{t:this.shape_25,p:{x:-58.9,y:59.2,rotation:0}},{t:this.shape_24,p:{x:-57.1,y:56.2,rotation:0}},{t:this.shape_23,p:{x:-57.1,y:47.7,rotation:0}},{t:this.shape_22,p:{x:-52.1,y:1.7,rotation:0}},{t:this.shape_21,p:{x:-51.1,y:11.4,rotation:0}},{t:this.shape_20,p:{x:-42.4,y:6.1,rotation:0}},{t:this.shape_19,p:{x:-40.8,y:7.1,rotation:0}},{t:this.shape_18,p:{x:-51.6,y:17.3,rotation:0}},{t:this.shape_17,p:{x:-50.3,y:24.9,rotation:0}},{t:this.shape_16,p:{x:-62.5}},{t:this.shape_55,p:{x:-69.8}},{t:this.shape_12,p:{x:-70.1}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_10,p:{x:-70.4,y:-60.2}},{t:this.shape_11,p:{x:-70.4,y:-60.1}},{t:this.shape_7,p:{x:-81.2,y:-35.5}},{t:this.shape_9,p:{x:-78.5,y:-68.8}},{t:this.shape_8,p:{x:-78}},{t:this.shape_6,p:{x:-74.7}},{t:this.shape_5,p:{x:-74.2}},{t:this.shape_4,p:{x:-74.2,y:-49.7}},{t:this.shape_3,p:{x:-75.6}},{t:this.shape_2,p:{x:-75.9}},{t:this.shape_1,p:{x:-75,y:-47.6}},{t:this.shape,p:{x:-75.8}}]},2).to({state:[{t:this.shape_52,p:{x:-118.5}},{t:this.shape_51,p:{x:-67.1}},{t:this.shape_84},{t:this.shape_49,p:{x:-54,y:5.4}},{t:this.shape_48,p:{x:-58.5}},{t:this.shape_47,p:{x:-64}},{t:this.shape_46,p:{x:-58.2,y:27.3}},{t:this.shape_45,p:{x:-59.2}},{t:this.shape_44,p:{x:-50.6,y:37.2}},{t:this.shape_83,p:{x:-67.3,y:74.4}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:-64.7,y:117.2}},{t:this.shape_77},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_29,p:{x:-63.1}},{t:this.shape_28,p:{x:-64.1}},{t:this.shape_27,p:{x:-64.6}},{t:this.shape_26,p:{x:-56.4,y:45.5,rotation:0}},{t:this.shape_25,p:{x:-59.1,y:58.9,rotation:0}},{t:this.shape_24,p:{x:-57.3,y:55.9,rotation:0}},{t:this.shape_23,p:{x:-57.3,y:47.4,rotation:0}},{t:this.shape_22,p:{x:-52.3,y:1.4,rotation:0}},{t:this.shape_21,p:{x:-51.3,y:11.1,rotation:0}},{t:this.shape_20,p:{x:-42.6,y:5.8,rotation:0}},{t:this.shape_19,p:{x:-41,y:6.8,rotation:0}},{t:this.shape_18,p:{x:-51.8,y:17,rotation:0}},{t:this.shape_17,p:{x:-50.5,y:24.6,rotation:0}},{t:this.shape_69},{t:this.shape_55,p:{x:-69.8}},{t:this.shape_12,p:{x:-70.1}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_10,p:{x:-70.4,y:-60.2}},{t:this.shape_11,p:{x:-70.4,y:-60.1}},{t:this.shape_7,p:{x:-81.2,y:-35.5}},{t:this.shape_9,p:{x:-78.5,y:-68.8}},{t:this.shape_8,p:{x:-78}},{t:this.shape_6,p:{x:-74.7}},{t:this.shape_5,p:{x:-74.2}},{t:this.shape_4,p:{x:-74.2,y:-49.7}},{t:this.shape_3,p:{x:-75.6}},{t:this.shape_2,p:{x:-75.9}},{t:this.shape_1,p:{x:-75,y:-47.6}},{t:this.shape,p:{x:-75.8}}]},2).to({state:[{t:this.shape_52,p:{x:-118.5}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_49,p:{x:-57.8,y:4.5}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_46,p:{x:-60.3,y:26.7}},{t:this.shape_121},{t:this.shape_44,p:{x:-51.9,y:36}},{t:this.shape_83,p:{x:-67.3,y:74.4}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:-64.7,y:117.2}},{t:this.shape_77},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_26,p:{x:-57.9,y:45.9,rotation:0}},{t:this.shape_25,p:{x:-60.6,y:59.3,rotation:0}},{t:this.shape_24,p:{x:-58.8,y:56.2,rotation:0}},{t:this.shape_23,p:{x:-58.8,y:47.7,rotation:0}},{t:this.shape_22,p:{x:-53.8,y:1.8,rotation:0}},{t:this.shape_21,p:{x:-52.8,y:11.4,rotation:0}},{t:this.shape_20,p:{x:-44.1,y:6.1,rotation:0}},{t:this.shape_19,p:{x:-42.5,y:7.2,rotation:0}},{t:this.shape_18,p:{x:-53.3,y:17.4,rotation:0}},{t:this.shape_17,p:{x:-52,y:25,rotation:0}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_11,p:{x:-79.3,y:-59.5}},{t:this.shape_10,p:{x:-79.3,y:-59.6}},{t:this.shape_9,p:{x:-88,y:-67.6}},{t:this.shape_105},{t:this.shape_7,p:{x:-88.1,y:-34.1}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_1,p:{x:-82.9,y:-46.7}},{t:this.shape_99}]},2).to({state:[{t:this.shape_52,p:{x:-118.5}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_49,p:{x:-57.8,y:4.5}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_46,p:{x:-60.3,y:26.7}},{t:this.shape_121},{t:this.shape_44,p:{x:-51.9,y:36}},{t:this.shape_83,p:{x:-67.3,y:74.4}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:-64.7,y:117.2}},{t:this.shape_77},{t:this.shape_132},{t:this.shape_131,p:{x:-104.8,y:132.8}},{t:this.shape_130,p:{x:-121.8,y:135.6}},{t:this.shape_129,p:{x:-113.6,y:139}},{t:this.shape_128,p:{x:-113.8,y:143.1}},{t:this.shape_127},{t:this.shape_126,p:{x:-104.4,y:118.5}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_26,p:{x:-57.9,y:45.9,rotation:0}},{t:this.shape_25,p:{x:-60.6,y:59.3,rotation:0}},{t:this.shape_24,p:{x:-58.8,y:56.2,rotation:0}},{t:this.shape_23,p:{x:-58.8,y:47.7,rotation:0}},{t:this.shape_22,p:{x:-53.8,y:1.8,rotation:0}},{t:this.shape_21,p:{x:-52.8,y:11.4,rotation:0}},{t:this.shape_20,p:{x:-44.1,y:6.1,rotation:0}},{t:this.shape_19,p:{x:-42.5,y:7.2,rotation:0}},{t:this.shape_18,p:{x:-53.3,y:17.4,rotation:0}},{t:this.shape_17,p:{x:-52,y:25,rotation:0}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_11,p:{x:-79.3,y:-59.5}},{t:this.shape_10,p:{x:-79.3,y:-59.6}},{t:this.shape_9,p:{x:-88,y:-67.6}},{t:this.shape_105},{t:this.shape_7,p:{x:-88.1,y:-34.1}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_1,p:{x:-82.9,y:-46.7}},{t:this.shape_99}]},2).to({state:[{t:this.shape_52,p:{x:-118.5}},{t:this.shape_159,p:{x:-87,y:-17.6}},{t:this.shape_158},{t:this.shape_157,p:{x:-82.5,y:-8.2}},{t:this.shape_156,p:{x:-75.2,y:-1}},{t:this.shape_49,p:{x:-73,y:-12.2}},{t:this.shape_46,p:{x:-72.9,y:10.1}},{t:this.shape_155,p:{x:-71,y:28.2}},{t:this.shape_154,p:{x:-63.7,y:18.4}},{t:this.shape_83,p:{x:-69.3,y:58.4}},{t:this.shape_153},{t:this.shape_152,p:{x:-77.8,y:153.6}},{t:this.shape_151,p:{x:-67.8,y:151.9}},{t:this.shape_150,p:{x:-67.5,y:139.2}},{t:this.shape_78,p:{x:-66.7,y:101.2}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_131,p:{x:-104.8,y:132.8}},{t:this.shape_130,p:{x:-121.8,y:135.6}},{t:this.shape_129,p:{x:-113.6,y:139}},{t:this.shape_128,p:{x:-113.8,y:143.1}},{t:this.shape_127},{t:this.shape_126,p:{x:-104.4,y:118.5}},{t:this.shape_147},{t:this.shape_146,p:{x:-77.7,y:4.1}},{t:this.shape_145},{t:this.shape_26,p:{x:-69.7,y:28.6,rotation:-6.5}},{t:this.shape_25,p:{x:-70.9,y:42.2,rotation:-6.5}},{t:this.shape_24,p:{x:-69.4,y:39,rotation:-6.5}},{t:this.shape_23,p:{x:-70.4,y:30.5,rotation:-6.5}},{t:this.shape_22,p:{x:-70.6,y:-15.6,rotation:-6.5}},{t:this.shape_21,p:{x:-68.5,y:-6.2,rotation:-6.5}},{t:this.shape_20,p:{x:-60.4,y:-12.5,rotation:-6.5}},{t:this.shape_19,p:{x:-58.7,y:-11.6,rotation:-6.5}},{t:this.shape_18,p:{x:-68.4,y:-0.2,rotation:-6.5}},{t:this.shape_17,p:{x:-66.2,y:7.2,rotation:-6.5}},{t:this.shape_144,p:{x:-97,y:-85}},{t:this.shape_143},{t:this.shape_11,p:{x:-101.3,y:-73.5}},{t:this.shape_10,p:{x:-101.3,y:-73.6}},{t:this.shape_142},{t:this.shape_141,p:{x:-87.2,y:-62.5}},{t:this.shape_140},{t:this.shape_9,p:{x:-110.8,y:-80.6}},{t:this.shape_139,p:{x:-104.3,y:-48.9}},{t:this.shape_7,p:{x:-107.3,y:-47.3}},{t:this.shape_138,p:{x:-104.4,y:-66.2}},{t:this.shape_137,p:{x:-103,y:-61.9}},{t:this.shape_136,p:{x:-103,y:-62.8}},{t:this.shape_135,p:{x:-104.2,y:-61.7}},{t:this.shape_1,p:{x:-103.4,y:-60.4}},{t:this.shape_134,p:{x:-104.4,y:-60.9}},{t:this.shape_133,p:{x:-104.5,y:-62.3}}]},2).to({state:[{t:this.shape_52,p:{x:-118.5}},{t:this.shape_159,p:{x:-90,y:-31.6}},{t:this.shape_181},{t:this.shape_157,p:{x:-85.5,y:-22.2}},{t:this.shape_156,p:{x:-78.2,y:-15}},{t:this.shape_49,p:{x:-76,y:-26.2}},{t:this.shape_46,p:{x:-75.9,y:-3.9}},{t:this.shape_155,p:{x:-74,y:14.2}},{t:this.shape_154,p:{x:-66.7,y:4.4}},{t:this.shape_83,p:{x:-71.3,y:54.4}},{t:this.shape_180},{t:this.shape_152,p:{x:-79.8,y:149.6}},{t:this.shape_151,p:{x:-69.8,y:147.9}},{t:this.shape_150,p:{x:-69.5,y:135.2}},{t:this.shape_78,p:{x:-68.7,y:97.2}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_131,p:{x:-104.8,y:132.8}},{t:this.shape_130,p:{x:-121.8,y:135.6}},{t:this.shape_129,p:{x:-113.6,y:139}},{t:this.shape_128,p:{x:-113.8,y:143.1}},{t:this.shape_127},{t:this.shape_126,p:{x:-104.4,y:118.5}},{t:this.shape_177},{t:this.shape_176},{t:this.shape_146,p:{x:-80.7,y:-9.9}},{t:this.shape_175,p:{x:-72.4,y:13.6,rotation:0}},{t:this.shape_174,p:{x:-72.4,y:24,rotation:0}},{t:this.shape_173,p:{x:-74.3,y:27.2,rotation:0}},{t:this.shape_172,p:{x:-72.4,y:16,rotation:0}},{t:this.shape_171,p:{x:-73.8,y:-31.1,rotation:0}},{t:this.shape_170,p:{x:-71.3,y:-21.1,rotation:0}},{t:this.shape_169,p:{x:-71.4,y:-15.1,rotation:0}},{t:this.shape_168,p:{x:-69.6,y:-8.3,rotation:0}},{t:this.shape_167,p:{x:-60.9,y:-26.4,rotation:0}},{t:this.shape_166,p:{x:-63.6,y:-27.4,rotation:0}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_11,p:{x:-104.3,y:-87.5}},{t:this.shape_10,p:{x:-104.3,y:-87.6}},{t:this.shape_9,p:{x:-113.8,y:-94.6}},{t:this.shape_139,p:{x:-107.3,y:-62.9}},{t:this.shape_7,p:{x:-110.3,y:-61.3}},{t:this.shape_138,p:{x:-107.4,y:-80.2}},{t:this.shape_137,p:{x:-106,y:-75.9}},{t:this.shape_136,p:{x:-106,y:-76.8}},{t:this.shape_160},{t:this.shape_134,p:{x:-107.4,y:-74.9}},{t:this.shape_1,p:{x:-106.4,y:-74.4}},{t:this.shape_133,p:{x:-107.5,y:-76.3}}]},2).to({state:[{t:this.shape_52,p:{x:-118.5}},{t:this.shape_159,p:{x:-112,y:-35.6}},{t:this.shape_49,p:{x:-98,y:-30.2}},{t:this.shape_199},{t:this.shape_156,p:{x:-100.2,y:-19}},{t:this.shape_157,p:{x:-107.5,y:-26.2}},{t:this.shape_46,p:{x:-97.9,y:-7.9}},{t:this.shape_155,p:{x:-96,y:10.2}},{t:this.shape_198},{t:this.shape_197,p:{x:-96.4,y:41.5}},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190,p:{x:-104.8,y:74.9}},{t:this.shape_131,p:{x:-104.8,y:132.8}},{t:this.shape_130,p:{x:-121.8,y:135.6}},{t:this.shape_129,p:{x:-113.6,y:139}},{t:this.shape_128,p:{x:-113.8,y:143.1}},{t:this.shape_127},{t:this.shape_126,p:{x:-104.4,y:118.5}},{t:this.shape_189},{t:this.shape_188},{t:this.shape_146,p:{x:-102.7,y:-13.9}},{t:this.shape_175,p:{x:-95.4,y:10.6,rotation:0}},{t:this.shape_174,p:{x:-95.4,y:21,rotation:0}},{t:this.shape_173,p:{x:-97.3,y:24.2,rotation:0}},{t:this.shape_172,p:{x:-95.4,y:13,rotation:0}},{t:this.shape_171,p:{x:-96.8,y:-34.1,rotation:0}},{t:this.shape_170,p:{x:-94.3,y:-24.1,rotation:0}},{t:this.shape_169,p:{x:-94.4,y:-18.1,rotation:0}},{t:this.shape_168,p:{x:-92.6,y:-11.3,rotation:0}},{t:this.shape_167,p:{x:-83.9,y:-29.4,rotation:0}},{t:this.shape_166,p:{x:-86.6,y:-30.4,rotation:0}},{t:this.shape_187},{t:this.shape_144,p:{x:-122,y:-103}},{t:this.shape_141,p:{x:-112.2,y:-80.5}},{t:this.shape_186},{t:this.shape_185},{t:this.shape_10,p:{x:-126.3,y:-91.6}},{t:this.shape_11,p:{x:-126.3,y:-91.5}},{t:this.shape_9,p:{x:-135.8,y:-98.6}},{t:this.shape_184},{t:this.shape_7,p:{x:-132.3,y:-65.3}},{t:this.shape_183},{t:this.shape_137,p:{x:-128,y:-79.9}},{t:this.shape_136,p:{x:-128,y:-80.8}},{t:this.shape_135,p:{x:-129.2,y:-79.7}},{t:this.shape_134,p:{x:-129.4,y:-78.9}},{t:this.shape_1,p:{x:-128.4,y:-78.4}},{t:this.shape_182}]},2).to({state:[{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_49,p:{x:-99.6,y:-27.6}},{t:this.shape_222},{t:this.shape_46,p:{x:-103.1,y:-5.6}},{t:this.shape_221},{t:this.shape_44,p:{x:-95.3,y:4.2}},{t:this.shape_197,p:{x:-110.4,y:44.5}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_190,p:{x:-106.8,y:75.9}},{t:this.shape_131,p:{x:-106.8,y:133.8}},{t:this.shape_130,p:{x:-123.8,y:136.6}},{t:this.shape_129,p:{x:-115.6,y:140}},{t:this.shape_128,p:{x:-115.8,y:144.1}},{t:this.shape_214},{t:this.shape_126,p:{x:-106.4,y:119.5}},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_175,p:{x:-101.8,y:12.4,rotation:3.7}},{t:this.shape_174,p:{x:-102.5,y:22.7,rotation:3.7}},{t:this.shape_173,p:{x:-104.6,y:25.8,rotation:3.7}},{t:this.shape_172,p:{x:-102,y:14.7,rotation:3.7}},{t:this.shape_171,p:{x:-100.3,y:-32.3,rotation:3.7}},{t:this.shape_170,p:{x:-98.5,y:-22.2,rotation:3.7}},{t:this.shape_169,p:{x:-99,y:-16.2,rotation:3.7}},{t:this.shape_168,p:{x:-97.6,y:-9.3,rotation:3.7}},{t:this.shape_167,p:{x:-87.8,y:-26.9,rotation:3.7}},{t:this.shape_166,p:{x:-90.3,y:-28,rotation:3.7}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_10,p:{x:-117.6,y:-92.9}},{t:this.shape_11,p:{x:-117.6,y:-92.8}},{t:this.shape_206},{t:this.shape_9,p:{x:-125.9,y:-101.2}},{t:this.shape_205},{t:this.shape_7,p:{x:-127.7,y:-67.9}},{t:this.shape_204},{t:this.shape_203},{t:this.shape_4,p:{x:-121.2,y:-82.1}},{t:this.shape_202},{t:this.shape_201},{t:this.shape_1,p:{x:-121.9,y:-80}},{t:this.shape_200}]},2).to({state:[{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_49,p:{x:-99.6,y:-27.6}},{t:this.shape_222},{t:this.shape_46,p:{x:-103.1,y:-5.6}},{t:this.shape_221},{t:this.shape_44,p:{x:-95.3,y:4.2}},{t:this.shape_197,p:{x:-110.4,y:44.5}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_190,p:{x:-106.8,y:75.9}},{t:this.shape_131,p:{x:-106.8,y:133.8}},{t:this.shape_130,p:{x:-123.8,y:136.6}},{t:this.shape_129,p:{x:-115.6,y:140}},{t:this.shape_128,p:{x:-115.8,y:144.1}},{t:this.shape_214},{t:this.shape_126,p:{x:-106.4,y:119.5}},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_10,p:{x:-117.6,y:-92.9}},{t:this.shape_11,p:{x:-117.6,y:-92.8}},{t:this.shape_206},{t:this.shape_9,p:{x:-125.9,y:-101.2}},{t:this.shape_205},{t:this.shape_7,p:{x:-127.7,y:-67.9}},{t:this.shape_204},{t:this.shape_203},{t:this.shape_4,p:{x:-121.2,y:-82.1}},{t:this.shape_202},{t:this.shape_201},{t:this.shape_1,p:{x:-121.9,y:-80}},{t:this.shape_200}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.8,-75.3,90.9,248.9);


(lib.olhospiscapisca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAIIgDgCQgCgCAAgEQAAgHAJgBQAJgCABAKQAAACgDADQgDAEgEAAIgEgBg");
	this.shape.setTransform(-9.7,-0.8,0.638,0.638);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAMQgEgDgCgFIAAgBIAAgDQAAgGAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAGIAAAEQgCAFgEADQgGAGgIAAQgHAAgGgGg");
	this.shape_1.setTransform(-10.3,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AArAEQgVgfhAAWIAAAU");
	this.shape_2.setTransform(-10.3,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqAJIAAgVQBAgWAVAiIAAAUQgOABgMAAQggAAgbgMg");
	this.shape_3.setTransform(-10.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAIIgDgCQgCgCAAgEQAAgHAJgBQAJgCABAKQAAACgDADQgDAEgEAAIgEgBg");
	this.shape_4.setTransform(11.2,-0.8,0.638,0.638);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAMQgEgDgCgFIAAgBIAAgDQAAgGAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAGIAAAEQgCAFgEADQgGAGgIAAQgHAAgGgGg");
	this.shape_5.setTransform(10.6,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AgpAEQATgfBBAWIAAAU");
	this.shape_6.setTransform(10.7,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpAUIAAgUQATgiBAAWIAAAVQgaAMggAAQgMAAgNgBg");
	this.shape_7.setTransform(10.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAqgCQgrALgpgL");
	this.shape_8.setTransform(-10.6,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgpgCQArALApgL");
	this.shape_9.setTransform(10.7,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDCB82").s().p("AA/ATIAAggQAtgMApAMIAAAbQgXAHgcAAQgRAAgSgCgAiUANIAAgbQApgMAtAMIAAAgQgSACgRAAQgcAAgXgHg");
	this.shape_10.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},100).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-3.2,31.6,5.4);


(lib.Interpolação12 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00476B").s().p("AglDtQAAgSgEgcQgLhHgfhfQgdhdgfhAQgdg+gOABIDchEQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAOgEAfBAQAeBAAeBfQAeBeALBHQALBFgNAFIjdBFQAFgGgBgVg");
	this.shape.setTransform(-3.4,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005A87").s().p("ABDDlIAGgBIgDABIgCABIgBgBgAhIjkIACgBIgCABg");
	this.shape_1.setTransform(-15,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005A87").s().p("AiUAuIAKnsIEfGRIgKHoIAAADg");
	this.shape_2.setTransform(6.5,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("ACIgpIkfmRIAQgEIEfGQIgKHsIgCgCIgOADg");
	this.shape_3.setTransform(7.8,-0.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.3,-44.9,45.4,89.9);


(lib.Interpolação6 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhFHggFMCKPAAAMAAABALMiKPAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("EhFHAgGMAAAhALMCKPAAAMAAABALg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-443.4,-206.4,887,413);


(lib.Interpolação2 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Eg3FAPfIBl+9MBDSAAAIAAB9IgCB+IACAAIF5AAIgCD7IF7AAIgBD8IF9AAIgCD5IF7AAIgCD7IF8AAIgBD7IF9AAIgCD6IF5AAIgCDig");
	this.shape.setTransform(-101.6,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("EAhuAD6IACh9IABB9gEghiAAAIgOAAIAMj6MBDVAAAIAAD6g");
	this.shape_1.setTransform(-229.4,-87.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ARoRnIAAgVIACjhIl5AAIADj7Il+AAIACj7Il7AAIADj7Il7AAIACj5Il+AAIACj8Il7AAIACj7Il5AAIAAh9IAAh9IAAj8IADAAIgCD7IF8AAIgCD7IF8AAIgDD7IF8AAIgCD7IF8AAIgDD5IF7AAIgCD8IF9AAIgCD6IF9AAIgCD2IF5AAIgCD8g");
	this.shape_2.setTransform(137.9,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-454.2,-112.7,743.4,225.5);


(lib.Interpolação1 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAEQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAABABAAQAEACgBACIgCADIgCABIAAgBg");
	this.shape.setTransform(3,-98.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006666").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(3.8,-96.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AAAAGQgDgCgDgEIgBgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAgBIACADQACACgBADIAAABIgFABIgDgBg");
	this.shape_2.setTransform(2.9,-97.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAEANQABgDgBgEIgCgDQgBAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAQgBgCABgCQABgGAFgDIABAAQADgCADACQAFACACAFQADAEgCAFQgBAFgFADgAgDgKIgCADIAAADQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABIAAgCQACgFACACIABABQAAgEgCgBIgCgBIgBAAg");
	this.shape_3.setTransform(3.2,-98.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAWAHQgWgWgVAO");
	this.shape_4.setTransform(4.6,-98.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAKIAAgDQAAgIgCgHQAVgOAWAXQgQANgMAAQgHAAgGgEg");
	this.shape_5.setTransform(4.6,-98.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AgsAKIAAgSIBZADIAAAPg");
	this.shape_6.setTransform(4,-102.5,1,1,0,0,0,0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#996600").ss(1,1,1).p("AgeAJQAGADAKgBQAKgCAEgBQADgBAKgCQAKgDAIgM");
	this.shape_7.setTransform(0.8,-85.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(1,1,1).p("AAAAAQAAAAAAAAIAAAA");
	this.shape_8.setTransform(-2.4,-84.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#9999FF").ss(1,1,1).p("AAAAAQAAAAAAAA");
	this.shape_9.setTransform(0.3,-117.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#331A00").s().p("AAAAAIAAAAIAAAAg");
	this.shape_10.setTransform(8.4,-109.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_11.setTransform(8.4,-109.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC9900").s().p("AgHCnIABgFIAAgKIAFABIAEABQAeAAAWgkQATghAAggIAAgIIgBgFQgFAagIAUQgeAQgMADIgyARIgoAJQgJgDgHgFIgCgBIgDgDIgEgHIgBgBIgCgHQABgRgBgIIAKAEQAFAAAEgCQAGgEAAgFIgbgBIAAABIgCgCIgDgKQgBgEAAgIIAAAAQAEABAGAAIAAAAIABAAIABAAIABAAIACAAIABAAIAOgCIAOgEQAKgCAIgPQgIAPgKACIgOAEIgOACIgBAAIgCAAIgBAAIgBAAIgBAAIAAAAQgGAAgEgBIAAAAIgBAAIgBgBIgDgDIgDgFIACgFIACgIQAAgEgFgHIARgBQAQgDAAgGIgBgDQgCgCgDAAIgIAAIgHACQgLAAgMgDQgLgEgLgGIgBgBIgBgCQgFgHAAgJQAAgFAHgHIAQgNQAYgUAAgZQAAgOgEgFQgGgLgDgJIgBgDQgBgDAAgDQABgGAHgaIAEgPIABAAIAAABQACAKARAHQAPAHAHAAQAIAAAFgFIAGgJQAIACARAAQAAAKAMAHQAIAGAHAAQAGAAAIAMQAHALAAAEIgBAHQgRAGgLgEQgigKgUAAQgTAAgHAVQgGAUgGALIgQAXQAQgOAHgDIALgCIAKgBIABACIAbAEIAOAGIAVAJQAIAEAIAHQAJAFAGAGIAMANQAIAHAHAAQASAAAHgeQADgJACgPIACgSQADgBAGADIAHACQAHAAACgHQACgGAHAAQAHAAAFAIIAFAJQgCAMgHAQIgFAKIgEAHQABAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgCABIgBADQgNAVgPAAIgDAAIgDAUQAIADAFAAIAEgBIAAAtQAAAQAXAQQAUAOAKAAQAEAAAHgFIAAA8QhZAkgqAAQgjAAABgdgABig1IgBAIIgBAHQAJgIAHgKQAIgLAAgEQAAgFgDgDIgEgCIgBgCIAAgBIgHADQgHAAgDADQgEACgBAEIgEARIAAAGIACgCIACgBIAEgCIAEABgAhsAwIAAAAg");
	this.shape_12.setTransform(8.7,-89.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A07001").s().p("AgEC3IgFgBIAAgXIgagHIAygRQALgDAfgQQAHgUAFgbIABAFIABAJQAAAggTAgQgWAlgeAAIgEgBgAByB5QgYgRAAgQIAAgtIgEACQgFAAgHgEIADgVIACAAQAPAAAOgUQgBAEgCAFQgCAFgBAIIAAABIAAACIgBAAIABAAQAAANACACQACAGANAHQgCADgDACIgGABQgGACAAAMIAAABQAAAQAXAGQAFACAIABIAMAAIAEAAIAAAeQgGAFgFAAQgJAAgUgNgAhnBtIgDgHIAAgBIAbABQAAAFgFADQgFADgEAAIgKgEgAh5AsIgBgCQgEgEgMgIQgLgIgEgFIAAgBQALAGAKAEQANAFAKAAIAIgBIAIgCQACAAACADIACADQAAAHgRACIgQACIgBgBgAAfAGIgMgLQgHgHgIgFQgIgHgJgEIgUgJIgOgFIgcgEIAAgCIgKAAIgLADQgIACgQAPIARgYQAFgKAHgVQAGgUATAAQAUAAAiAKQAMAEAQgHIABgHQAAgDgGgLQgIgNgGAAQgHAAgJgFQgLgHAAgLQgSAAgIgBIgFAIQgFAGgIAAQgIAAgPgHQgQgIgCgJIAAgBIgBgBQADgIAEgDIADgDIgBAAIAAgCIADgBIgBADIAAAAQgCAHAGAGQAHAGAJAAQAKAAADgBQAIgEgFgOQAEAKAIACIAMABQAIAAAJgDQACgBAZABQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgBABIgCABQgGAGAAAEQAAAHAMAHQAKAHAMgBIgBAEQgCADAAAEQAAAKAKAGQAIAEAEAAIgSAPQgGAIAAASIAAABQABAEAFAFIAJAIIABABIABACIgFAJIgCAFQAAAPAFAHQAFAFAFAAQAOAAAFgQQADgMgCgNIACgGQAGgOAKgNQAFADAFAAQAIAAABgBQACgBACgJIAVAAIACAQIADANIgBAGIgFgIQgEgJgIAAQgGAAgDAHQgBAHgHAAIgIgDQgFgCgDABIgDARQgCAPgCAJQgHAdgTAAQgHAAgHgHgAAMhDIABAAIgBgBgABegPIAAgIQgEgCgEACIgCACIgCACIAAgHIAEgRQACgEADgCQAEgCAGgBIAHgCIAAABIACABIAEADQADACAAAFQAAAFgIAKQgIALgIAIIABgHg");
	this.shape_13.setTransform(9,-92.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1A0000").s().p("AAKCFQgHAAgDgCQgXgGAAgRIAAAAQAAgMAGgDIAGgBQADgBACgEQgNgGgCgGQgCgCAAgNIAAgBIAAgCIAAAAQABgJACgEQACgFAAgGIADgEQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIAEgHIAFgKQAGgOABgMIAAgGIgBgNIgBgQIgVAAQgCAIgCACQgBABgJAAQgEAAgFgDIgJgIIAFAFIAEADQgLANgFAOIgDAFQADALgDAMQgFARgOAAQgFAAgFgGQgFgHgBgOIACgEIAGgJIgBgBIgBgBIgJgJQgFgFgCgEIAAgBQAAgRAHgIIASgQQgFAAgHgEQgKgGAAgJQAAgEABgDIACgEQgMABgMgHQgMgHAAgIQAAgEAGgGIAAABIAAACQAAAIASAJQARAIAJAAQALAAANgIIAKgHIAAABIAAADQgBAIALAFQAHAEAHAAIANgBQAEgDACgNIABgBIACAAQAAANAJAJQAJALAWAAQAOAAAEgJQADgMADgIQAAARAHAOQAIARAQAAQADAAAEgCIAFgEQAGAIAGADQAFADAJAAQAIAAAIgJQgBARgIAOIgJAPQAAAEADAIQAEAIABADQAAAXgHAKQgIALgVAHQAGANgVANQgTANgTAAIAGADIAAAJQAAANgGAIQgFAGgJABIgEABIgNgBg");
	this.shape_14.setTransform(21.8,-95.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#330000").s().p("ACkBsQgGgDgFgIIgGAEQgDABgEAAQgQAAgIgQQgHgOABgRQgEAHgDANQgEAJgOAAQgVAAgLgLQgJgJAAgNIgDAAIgBABQgCANgEADIgNABQgHgBgHgEQgIgEAAgIIAAgEIABAAIgBAAIgKAHQgMAIgLAAQgKAAgQgIQgTgJAAgIIABgCIAAgBIABAAIABgBQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQgZgBgCABQgJADgIABIgMgBQgIgDgEgKQAFAOgIAEQgDACgKAAQgJAAgHgHQgGgFACgIIAAAAIABgDIgDABIgGACQgKgBACgEIgFAAIABgCIAAgBQAHgOAAgKQAAgPALgLQAIgIAJgEQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBQABAEADADQAFADACgBQAPABAEgOQADgJABgBQADgFAGAAIAHABIAHACQAJAAAQgSQAOgRABgHIAAgBIAHgBQALAAAOAEIANAEIAHgBIALAQIALgJQAFgFACgEIAAACQAIALAEACQAAAIAGAEQAEACAHAAQANAAAKgHIAAADIADAJIAAAFQAAAKAFAFQAFADAHAAQAHABASgIIAHgDIAFAMQAFAMAIAAQAJAAgDAEQgFAFADACIAHAQIAGANQAIAFAKASIASAHQAGAFAAAOQAAAJgBACQgBAFgMARQAIAFAAADIAAAGQgIAJgHAAQgJAAgGgDgAAAAwIAAgCIAAAAIAAACg");
	this.shape_15.setTransform(16.3,-112.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663300").s().p("AiIAiQgDgDgCgDIABgBQAEgDADgHQAHgOADgDQAFgDARgBQARgCAFgFQAKgMALgEQAGgDAJAAIAAABQgBAIgPARQgPAPgJAAIgHgBIgIgCQgFAAgDAFQgBABgDAJQgEAOgPAAQgCAAgFgDgABiAaQgGgFAAgKIABgFIACAIQAGgDAJgBIAOgCQALAAAEAGIADAGIgHACQgSAIgHAAQgIAAgEgEgAA3AAQgFgDAAgIIABAAIANgDIAPgDQAFAAAFANQgKAFgMAAQgHAAgFgBgAAHgXQAFgCAEgEIAJgHQAEAAAJALQgCAEgFAEIgMAKg");
	this.shape_16.setTransform(14.5,-120.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC9900").s().p("AgcBKIAAgBQgTgCgPgrQgOgoABg2QAPADAVACQAoAGAJgCQAFAAAHgDQAMgFASgKIADgBIASgDIABAAQAHBJgOAvQgLAnguAAQgQAAgWgGg");
	this.shape_17.setTransform(27.5,-23.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A07001").s().p("AgaANQgVgCgPgDIgFgYIAAgBIADABIAEABQAJACAHAAIAKAAIAMACQALABAEgBQALgFAdAIIALAEQANADALABIgDAAQgSAJgMAFQgHADgFAAIgHABQgMAAgegFg");
	this.shape_18.setTransform(26.2,-30.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7F7F7").s().p("AgaBcQAbhXgHhhIAEAAQAKAjAEARIAIAbQADAFABAAIACBDQAEgCgPALIgBAAIgBAAIAAABIgEACIgLAJQgIAHgJAEIgGADg");
	this.shape_19.setTransform(37,-40.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D0D0D0").s().p("AgLBoIABgCIABACIgBAAIgBAAgAAGhoQACAKAEAMIgEABIgCgXg");
	this.shape_20.setTransform(35.4,-41.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E1E1E1").s().p("AgMAvQgEABgLgBIACgHIAFgZQAEgYgGgmQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQATAYANAeQAIAUAEAUIACAFQgcgIgMAFg");
	this.shape_21.setTransform(26.7,-36.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAxCWIgMgEIgBgFQgFgUgIgTQgNghgTgYQAAAAAAABQAAAAAAAAQgBABgBAAQgBAAgBAAQAGAmgEAbIgFAYIgBAHIgNgCIgGgDIgJgCIAAABIgvgQIgJhBQABgKAAgXIgCgdIgBgRIgBgUQgDgXABgKIACAHQgDgPALggQAMghBDgDQBBgEAVAhIAYAqIAKAVIACAWQAJBhgdBXIgBACIABAAIABgBIAGgCIgBAEIgBACIgRADQgMgBgMgDg");
	this.shape_22.setTransform(25.7,-46.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiBhZIiWCeIgKALACChZICWCnIAKAM");
	this.shape_23.setTransform(20.7,-0.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00CC99").s().p("AAFCvIACgGIAEgRQARg3AHgmIAEgXIAAgDQAEgWADgHQAHgXAJgaIAghVIACgEIAOgnIATAAICWAAIAACoIiWioICWCoIAAC0gAkWCvIAAi9ICVifIBrAAIAEAiQACAOAAAOQAAAYgDAUQgHAeAAASIADAGIhFAvIABAIIgHABIgBAEQgSA4gNATQACACAIABIAHADIACABIABACIABADQACAMgIAbIgBACgAEXgFgAkWitICVAAIiVCfgAiBitg");
	this.shape_24.setTransform(20.7,8.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A07001").s().p("AhnCkIAFgUIABgCQAIgbgCgMQADAIAQAMIAEADQAYAQAegFQAbgFAHgDQAEgBAGgHIgFASIgCAFIgIAUgAhmBfQgIgCgCgCQANgSASg5IAEABIAEAIQAEAJAAAGIgEAIIgQAlIgFAMIgIgCgAASgvIgSACIgCAAIgCABIgBAAIgDgGQAAgSAHgeQABgUAAgYQAXAMAWgBQAWgBAVgPIAYgQIABACIghBWQgJAZgHAZQgCAHgEAUQgHgzghACg");
	this.shape_25.setTransform(18.9,11.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC9900").s().p("AhfEEIgEgDQgQgMgDgIIgBgDIgBgCIgBgBIAFgMIAQglIAEgIQAAgGgEgJIgEgIIgEgBIABgEIAHAAIgBgJIBFgxIABAAIACgBIACAAIAUgCQAfgCAHA1IgBADIgEAXQgHAmgQA3QgEAHgEABQgHADgdAFIgPABQgVAAgSgMgAgZgIQAAgNgCgPIgEgiIgBgMQgBhRATg6IACgMIACgDQAHgNALgJQASgMAXgBQAhgCATAQQAQAMADAVQgBAEABAIIABABIAAACIABAMQABA4gWBHIgOAoIgBADIgBgCIgYAQQgVANgWABIgDAAQgSAAgWgJg");
	this.shape_26.setTransform(21.6,-2.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgBGlQhHgFgXgQQgKgGgMgEIACgbQAHhBAAgeQAAgDgEgLQgFgOgFgFQgPAfgWBDIgRAwIAAAAQgTgDgIgLQgKgNAAggIATiDIAVgCQAmAABwAKQBuAKAfAAQApAAAVgNQAHgEAMgDIgBAvIAEBBIAEBCQAAAZg7ARQguAOgeAAQgvAAgZgCgAiygcIgFheQAAiaA3hXQANAFAPAEQAsALAtAAQA4AAA8gnQAdgTAOgVIACABQApA/APBIQAPBIgOAlQgFAXg5hWQg5hWhCB0QhAB0g5AkQgxAegYAAIgGAAg");
	this.shape_27.setTransform(14.2,-27.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EAEAEA").s().p("AgcFQQhxgKgmAAIgUACQATiJAAggIgBgJQA8AlAvAlQAYAPAeAFQAcAFA+AAQBGAAALgCQAOgEAjgQIgBASQgFArgBAmQgLADgIAFQgUAMgpAAQgfAAhugKgAhqjZQgOgDgNgFIALgQIABgCQAIACAPAAQBJAABEgxQAmgbAWgcQAUASAUApIAAABQgPAWgdATQg7Ang4AAQguAAgsgMg");
	this.shape_28.setTransform(14.7,-41.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AiaG3IglgDIAQgwQAWhDAPgfQAGAFAFAOQAEALAAADQAAAegHBBIgDAbQgKgEgLgCgAgeChQgegFgYgPQgvgkg8glIgDgrQAXAFA5ghQA5gkBAh0QBCh0A5BWQA4BWAFgXIACAOQACAZAABYQAABNgFA+QgjARgOADQgLADhGAAQg8AAgegGgAiDlFQA1hFBmgeQAegUAEAAQASAAARAQQgWAdgmAaQhEAyhJAAQgPAAgIgCg");
	this.shape_29.setTransform(15.7,-33.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1A1A33").s().p("AhJCUQgtgQgEgUIgFg9QBGgHAdgKQAzgRAPgmQAGgOALgQQAJgSAHgjQADgPANgdIAGgKIADAbIACAAQAGAYAAAjQABAtAMAwQALAxAAAOQAAAOgYALQgYALgUATQgOAOgdAEQgOACgMAAQgfAAghgLg");
	this.shape_30.setTransform(24.3,94.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333366").s().p("AhYDmIgFhKIADAAIgRhCIAFADIgikBQgHgzAegqQAcgoAxgHQAvgHAnAfQAnAfAHAzQAuDGgHBLIADAUIgGAKQgMAdgEAPQgHAjgJASQgKAQgGAOQgQAog0ARQgcAKhGAHIgGhMg");
	this.shape_31.setTransform(19.8,69.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AioAgIgegNIAAgIIgBgLIAAgCQA1AUCFgJQCDgJBLglQADgEACAKIACAZQgqAZhoAOQgzAGgzAAQg6AAg+gHg");
	this.shape_32.setTransform(17.3,120.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC6600").s().p("AhZAUIgBgBQARgGAcgEQBCgJAJgCQAJgDAPgWIABAAQADAEAEAEQAJAGALACIAJABIgEAEQgTAQgcAGQgTAFgvADIguAEQgIgBgJgHg");
	this.shape_33.setTransform(8.5,114.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5C2E01").s().p("AhJAoIgJgBQgLgBgJgHQgEgDgDgFQANgTAIgQQAPADAWgFIADAAIAQgEQAWADAlgFQAygHAHgMQAQANAKAdQgZALgxALQg+APgkAAIgLAAg");
	this.shape_34.setTransform(25.1,109.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#993300").s().p("AjEAsIgBgUQAAgHAOgGIgBADQABAAAAAAQAAgBAAAAQABAAAAgBQAAgBAAgBIAGgCIACABQAJAGAIACIAugEQAxgEATgEQAcgFARgRIAEgEQAkADBLgSQAxgLAZgLIABADQAIAagEAmQhKAniEAJQgnACggAAQhOAAglgPg");
	this.shape_35.setTransform(17,115.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333366").s().p("AhLE/QgqgmAEgyIgJiWQgGgHgBgFQgBgFgBgaQgBgWADgUIACAAIgFhMIgCAAQgGgOAAgQQgBgJAGgNIgFhOQgDg5AmgrQAngqA5gCQA4gDAqAmQAqAnADA5IADCUQgBAAgBABQAAABAAAAQgBABAAAAQAAABABAAQAFAGABAOQACApgHAhIgEATIAAA2IACAAIADAdQABALgHAJIAACXQAagcgmAqQgnArg5ADIgHAAQgzAAgoglg");
	this.shape_36.setTransform(17.6,24.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1A1A33").s().p("AhRCDQgrgVgBgUQgBgOADguQBGABAegGQA0gLAUgkQAIgNAMgPQALgQALgiQAFgPARgaIAGgKIAAAbIACAAQADAZgEAjQgFAsAGAxQAGAygCAOQgBANgaAJQgZAIgVAQQgRAMgcABIgHAAQgnAAgqgVg");
	this.shape_37.setTransform(7.7,94.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333366").s().p("Ah8EsQAAggADgtIAEhKIACAAIgIhCIAEADIgCkDQgBgzAiglQAhgkAxgCQAvgBAjAjQAjAkABAzQAWDHgPBMIgBAAIAAATIgGAKQgQAbgFAPQgMAigLAQQgMAOgHAOQgVAmg0ALQgaAFg3AAIgTAAg");
	this.shape_38.setTransform(7.8,67.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC6600").s().p("AhJAYQgIgCgJgHIAAAAQAQgFAdgDQBCgHAKAAQAJgDAQgUIAAAAQACAEAFAEQAJAHALACIAIACIgEADQgUAPgcAFQgTADgvABIgoABIgGAAg");
	this.shape_39.setTransform(-9.6,111.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5C2E01").s().p("AhLAjIgIgBQgKgDgJgHQgFgDgDgFQAOgQAKgSQAPAEAWgDIACgBIARgDQAWAFAlgDQAygEAHgNQAQAOAJAeQgaAJgxAJQg3ALgjAAIgVgCg");
	this.shape_40.setTransform(7.1,107.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AipASIgdgPIAAgFIgBgOIABgBQAzAWCFgCQCEgBBNghQADgEABAKIABAZQgrAXhpAIQgdACgcAAQhPAAhVgPg");
	this.shape_41.setTransform(-1.2,118.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#993300").s().p("AjFAeIAAgUQAAgIAPgDIgBABQAAABAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBIAHgCIABAAQAJAFAIACIAvgBQAwgBATgCQAcgEATgRIADgDQAlAEBMgNQAwgJAagKIABAEQAGAagFAmQhNAjiEABIgPABQh5AAgwgXg");
	this.shape_42.setTransform(-1.3,113.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333366").s().p("AgFFiQg5gBgogpQgogpAJgyIAAiVQgFgHgBgGQgBgEAAgaQABgWAFgTIACAAIgBhMIgBAAQgFgPAAgQQAAgJAHgMIAAhOQABg5ApgoQApgnA3ABQA5ABAnApQAoApgBA5IgHCTQgBABgBABQAAABAAAAQgBABAAAAQAAAAABAAQAFAGAAAPQgBAogJAhIgFASIgEA1IACABIABAdQAAALgHAJIgKCVQAcgagpAnQgnAng1AAIgEAAg");
	this.shape_43.setTransform(8,25.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC9900").s().p("AAAAAIABgBIgBADg");
	this.shape_44.setTransform(28.2,-11.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BA8201").s().p("Ag6E2QgRgIgDgPQgEgPAFghQAEgbgEgLIgBgEIgBgBIgBgBIgJgBQgIgBgCgCQAKgSAJg6QAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAHAAIgBgJIA9g3IAAAAIgFgFQgCgSABgcQABgUgEgXIgGgbIgMgsQgNhOAJg7IABgKQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAGgNAKgJQAQgPAWgDQAggGAVANQARAKAHATQgBAEADAIIABAAIAAADIADAKQAMBFgVBgIgDADIACACIgUBUIgJAyIgBAdIAAADIgBAWQgBAlgIA4IgCASQgEAWgGAQQgNAigZAJQgaAKgPAAQgIAAgFgCg");
	this.shape_45.setTransform(19.6,-3.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC9900").s().p("AAAAAIAAAAIAAAAg");
	this.shape_46.setTransform(20.6,-21.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A07001").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_47.setTransform(24.8,-43.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D0D0D0").s().p("AgshrIAMAUIAcAuIALAYQAHAJgCgFIAgA7QgGAFgJAPIgBABIAAABIgBAAIAAABIgDAEIgHANQgHAOgIAIQgChsgshrg");
	this.shape_48.setTransform(22,-50.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BA8201").s().p("AADBsQgRAEgYglQgYglgMgyIgLgYIAIgBQAHAAAHgCQAIgCADgDQAIgJAXgDIAKAAQARgBAMgLQAJgIAHgOIAHgNIADgEIABgBIANAiQAcBJAAA0QgCA2hRAEg");
	this.shape_49.setTransform(20.3,-32.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E1E1E1").s().p("AgMAQQgEgZgPgkQAEgBgBgDQAWASAQAcQANAQAJAUQgXADgIAJQgCADgIACIgDgig");
	this.shape_50.setTransform(14.8,-41.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgmCcIgYg9QgBgLgGgXIgLgeIgFgQIgGgSQgHgWgCgKIABAEQgFgPABggQgBgkAwgbQAxgcAWAbIAdAgIANATQAsBqADBsQgNALgSACIgKAAQgJgUgNgTQgSgcgWgRQABACgCACQANAjAEAcIADAhQgGACgIAAIgGACIgYAAIgOAAg");
	this.shape_51.setTransform(11.7,-52.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC9900").s().p("AgCAEIACgEIADgEIAAAIg");
	this.shape_52.setTransform(-39.7,-8.2);

	this.addChild(this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-124.4,90.8,248.9);


(lib.Interpolação5 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Interpolação12("synched",0);
	this.instance.setTransform(-5.3,-302.4,1.812,1.812,-68.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A07001").s().p("AgFDqIgzgLQgugNghhQQghg8gBhtIAGhyIAIA/QAKA2AhAAQAdAAA8g5IAKgFQAFgFAJgTIAMgdIAbgwIAIgKQAOgQAMAEQAEADAAgWIAagBQAbAAAPALIAIAIIAHAaQANA4gGAvQgFAigJAaQgKAdgRATIgFAGQgPADgDACIAAABQgFAFgMgDQgQgFAQiaIAAAAQgHgCgJABQgfAGgRA9QgNAvgDAnQgEBcARBFQAIAfgGAWQAAAEgCACIgZgIg");
	this.shape.setTransform(-86.8,68.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9900").s().p("AiWBKIgIg+IAFhuQByA6CfhTIABAAIAHgFQALANAGAMIAOAvIgIgIQgPgKgbAAIgaABQAAAVgEgCQgMgFgOARIgIAJIgbAuIgMAeQgJATgFAFIgKAEQg8A6gdAAQghAAgKg3g");
	this.shape_1.setTransform(-87.3,52.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003754").s().p("AiRPwQgPgIgNgJIgUgQQgKgKgJgHQgFgEgDgGIgGgIQgQgSgNgVIAHjeQAMl3AdjpQALhZAOhFIACgLIAOg/QA2kKA2jSQA5jtBsidQCWGDAAE0QgCE1guDZIAFLmQgSAJgRANIgVAOIgSAIIgDACIgHAFIgCAAQheAxhMAAQg4AAgvgYg");
	this.shape_2.setTransform(-88.1,-58.6);

	this.instance_1 = new lib.olhospiscapisca();
	this.instance_1.setTransform(-5.1,-255.3,1.705,1.853);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("Ah2AbIAAg1IDtAIIAAAtg");
	this.shape_3.setTransform(17.4,-268);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("Ah2AbIAAgtIDtgIIAAA1g");
	this.shape_4.setTransform(-25.5,-267.6,1,1,0,0,0,-0.1,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#996600").ss(1,1,1).p("ACpgeQgDAiggAQQiNAWiDgWQghgNAEgb");
	this.shape_5.setTransform(-3.5,-221.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(1,1,1).p("Ai+nmQADAAAAgDAj/nEIAAgEAizHqQAAgEgEgIQgDgHAAgEQgBABgBAAAD5nWIAHAAAgkgpQAAABgBACQgBADAAADABRiBIAAgB");
	this.shape_6.setTransform(-5.6,-238.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#986A01").s().p("AgxAgQgVgTgggOQgIgWAIgLIAKgJIABAYQABATAwAKQAuALAHgEQAGAAAMgEIAngNQAcgIAAghQAFACAFASQAGASgkAWQglAZgbAAQgtAAgQgMg");
	this.shape_7.setTransform(-4.5,-230.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B17C01").s().p("AAAABIAAgBIAAABg");
	this.shape_8.setTransform(2.7,-251.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#765301").s().p("AAAAAIAAgBIAAACIAAABg");
	this.shape_9.setTransform(2.6,-251.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C08703").s().p("AFHB0IABgCIAAACgAlHhzIACABIgCADg");
	this.shape_10.setTransform(1.6,-272.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC9900").s().p("AjSHeIAAhTIAAgtIACAAIBTBDIEJAAIBKhPIAAB8QADAHgGAGQhTBfhqAAQhnAAiBhcgAjMGWQADAIAAAEQAAgEgDgIQgEgIAAgEIgCABIACgBQAAAEAEAIgAh9F1IhThDIiAhkIgmjhIgGAHIAAgVIgBg9IgGAQQgKAfgXAAQgKAAAAgCIAAABIgBgCQgGgRgFgVQgVhLABgvQAAgIADgbQAEgbAAgQIAfAAIAEAWIACAUIAAAuIAVAWQAJAHABBPIAbg/QAAgHAEgVIABgHQAWgjAcgMQAMgFARgCQAOgDAUgBIAAAFIAAAEIBeAOIAFAEIAAgBIACgDQALAGARAGQAaAKAQAYQAOAUgCAtIAAAEIAAAFIABgFIABgDQAKgyAAgRQAAg8gmg+QgWgmgcgSQgagSggAAQgXgCgoAIQgpAIgeAXQgdAXgJAOIABgSIAAgFQAWgsAAgDQgEgFAAgVQgBgEALgVQAPgbAQgQQAHgHAMgUQANgWgDgKIACgDQAIAGAGAAIANABQARAAACgBIARgkQAAAAABAAQAAgBABAAQAAAAAAgBQAAgBAAAAQAJAUAYANQASALANAAQAZAAARgVQAOgUAGAAQANAAAcAYQAdAZAOAAQAUAAAXgRQAagTAAgYQAMASAJAHQAMAIAVAAQASAAABgCQADgCAHgZQgBARAPALQAMAIANAAIATAAQALgDAFgLIAHAAIAAAeQABARAIAJQAKAKAOACQATABALAIQAIAHAXAmQAMAVANAIIABAAQALAUgVAQQgJAGADAKQgRgQgKgGQgTgNgagEQgZgFgeAAQhMAAgeAWIgFAEQgpAhAABZIAAAhIgBAFIACgBIABAAQAWgHAggZIAAgEICFAAQBMAsAUAqQASAoAHB/IgaCUIh/CCIhMBNgAgzDsIgPAGQgFADgBAEQAAAJAVAFQAWAHAeAAQAeAAAVgHQAWgFAAgJQgBgEgFgDQgFgDgLgDQgVgGgeAAQgeAAgWAGgAiKB5QBBALBFAAQBCAABHgLQAggQADgkQgDAkggAQQhHALhCAAQhFAAhBgLQgegLAAgYIAAgGIAAAGQAAAYAeALgAhxgeQgIAKAIAUQAgARAVATQAQALAtAAQAbAAAlgYQAkgXgGgSQgFgRgFgCQAAAggcAIIgnAOQgMAEgGAAQgFAEgxgLQgvgMgBgSIgBgXgAGKhFQgFgBgEgCIAPhbQAKgMAHgTQAPgpgHgxIAAgEIAfAAQAAAQAFAbIACAjQABAvgUBLIgEAQIgBACIgBgBQgJAIgPAAQgDAAgRgGgAFykvQAEACAEAEIgBACIgHgIg");
	this.shape_11.setTransform(-3.4,-231.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A07001").s().p("AiBILIhThDIAAgrIBTBDIEJAAIBMhOIAAAsIgCgCIhKBPgAg3FyQgVgGAAgJQABgDAFgEIAPgGQAWgGAgAAQAcAAAVAGQALADAFADQAFAEABADQAAAJgWAGQgVAGgcAAQggAAgWgGgAFUgqQgUgrhMgsIiFAAIAAAEQggAagWAGIgCgDIAAgiQAAhZApghIAFgEQAegWBMAAQAeAAAZAFQAaAEATANQAKAGARARQACANAeAXIAHAIIABAAIgLApQAAAVADAiQADAkAAAYQAQgJALgPIgPBZQAEACAFACQARAFADAAQAPAAAJgIIABACQgUBFgWAAQgIAAgDgDQgGgKgFgHIgGAoQgHh/gSgngAmyA4IAAgBQAAACAKAAQAXAAAKgeIAGgRIABA9IAAAWQgEAEAAAEQgEADgHAAQgTAAgQgwgAg/gIQACgtgOgUQgQgYgagJQgRgHgLgGIgCAEIgFgEIhegOIAAgEIAAgFQgUABgOADQgRACgMAFQgcAMgWAjIACgXQAAgEgHgXQgFgYAAgfQgDgDADgEQAJgOAegWQAdgYApgIQAogIAXACQAgAAAaASQAcASAWAmQAmA+AAA8QAAARgKAygAlxj8IgGgaQgJgXgRgHQAkALAJgZQAHgoALgbQAHgFANgGQALgGAFgGQAMgOADgiIADABQANAEALAAQAVAAAIgOIAUgnIAiArQACACAeAAQARAAASgKQARgMAJAAQADAAAdASQAeAUANAAQAVgBAZgWQAbgXABABIATALQATALALAAQAPAAAFgCQAMgHgIgdIAIgOQAOA2AnAFQAUACAugIIAABCQAuAXAUA1IASAqQgNgJgMgUQgXgngIgGQgLgIgTgBQgOgDgKgKQgIgJgBgRIAAgeIgHAAQgFALgLAEIgTAAQgNgBgMgHQgPgMABgRQgHAZgDADQgBACgSAAQgVgBgMgHQgJgIgMgSQAAAYgaAUQgXAQgSAAQgQAAgdgZQgcgYgNAAQgGAAgOAVQgRAUgZAAQgNAAgSgKQgYgNgJgVQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgRAkQgCABgRAAIgNgBQgGAAgIgFIgCgBIAAADQADAKgNAWQgMAVgHAHQgQAPgPAbQgLAWABADQAAAVAEAFQAAADgWAsQABgRgCgQg");
	this.shape_12.setTransform(-3,-241.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#330000").s().p("AmAE6IgWgVIAAgvIAAguQgagSgJgJQgLgLgCgcIgBgWQAAgHAPgWQAQgYAAgKQAAgJgGgYQgEgMgBgHQAUgHAPgvQALgpgCggQAUgGASgmQATgoAKAAQAEAAAHAEQAFADAFAAQAPAAAGgNIAEgdQADgrAoAAQAUAAAIAKQAMgOAcgGQAdgIAWAHQAEgPgBgVIgBgeQgBgfAYAAQACAAARALQARAJAEgBQgEAkACALQAFAQAWAAQAQAAABgBQAAgLAIgRIAKAKQALAIAIAAQAPAAAOgSQAQgTgCgWIASAAQADAHACAfQAGAdARAAQAMAAAEgHQAMgTADgDQAAAJAHAIQAIAJAJAAQAMAAATgcQATgYAAgJQgGgDgNAAIAAgDQBDgQAGBPQgHAGgDAIQgEAJAAAaQAAAQANAGQAHAEAPAAQAaAAATgeQAFgHAEgKQAGAEAGAKQAQAZAGAaQAHAZgKAMQgIAMAFAEIgHAEIgKAEQgCAWAQAEQAFACAcAAIAagBQARARgJAWQgNAcAaA5QAAAXgLAOQgJAOAAADQAAADAJARQALAXAAAYQAAARgHATIgGATQgNAcAAAfQAAALAFABIACgPQAHAwgPAqQgHASgKAMQgLAQgQAIQAAgYgDgjQgDgjAAgVIALgpIAAgCQgEgEgEgCQgdgWgDgOQgDgKAJgGQAVgRgLgTIgBAAIgSgqQgTg1gugVIAAhCIAGgBIgGAAIAAABQgvAIgUgCQgngFgOg2IgHAPQAHAcgMAHQgEACgQAAQgLAAgTgLIgSgLQgCAAgbAWQgZAXgXAAQgLAAgegUQgdgSgCAAQgKAAgRAMQgSAKgRAAQgeAAgCgCIghgqIgVAmQgIAOgVAAQgKAAgNgEIgEgBQgDAjgMANQgFAGgLAGQgNAGgGAFQgLAagIAnQgJAZgjgKQAQAGAJAXIAGAaQACAQgBASIAAAEIgBASQgDAEADADQAAAgAFAXQAHAYAAADIgCAXIgEAGIADABQgEAVAAAIIgaA/QgChQgIgHg");
	this.shape_13.setTransform(-4.6,-280.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("Am0DQQAAgPASgsQAOgtgMgmQgLgnAPgbQAQgeAlACQAjACANgeQAQgmAIgHQALgNAngFQAngFAMgPQAZgdANgYQANgaAbgBQAcgBAiAYQAiAXAMAFQAUAAAUgSIASgUQAhgRAYAfQAWAcgGANQgFAMAYgHQAfgQAXgFIAAADQANAAAGADQAAAJgTAZQgSAbgMAAQgJAAgJgIQgHgIAAgJQgDADgMATQgEAGgLAAQgRAAgGgcQgDgggDgHIgSAAQACAWgPAUQgOASgPAAQgJAAgLgIIgKgKQgHARAAAKQgBABgQAAQgXAAgFgPQgCgLAEglQgEABgQgJQgRgKgCAAQgZAAABAeIABAfQABAUgEAPQgVgHgdAIQgdAGgLAPQgIgKgUAAQgoAAgDAqIgEAcQgGANgQAAQgFAAgFgDQgHgEgEAAQgKAAgSAnQgTAngUAGQACAfgLApQgOAwgVAHIgCgMgAF6BLQgQgEACgXIAKgEIAHgEIAAABIApAYIAPALIgbABQgbAAgFgCgAEUghQgNgFAAgQQAAgbAEgJQADgIAHgFQABAOgBARQABgIAJAAQAbAAASgCQAKgCAKAIQgEALgFAHQgSAdgaAAQgQAAgHgEg");
	this.shape_14.setTransform(-4.8,-303.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCFF").s().p("AhaIzIADAAIgBADgABZo1IACAAIAAAFg");
	this.shape_15.setTransform(-60.4,-120.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003754").s().p("AAWChQhygEhcgqQgTgIgSgKQhpg8gOgzQgNg2AQgaIADgFQAtgYC6gbQAjAWAjAQQAGgLAdAAIBmglQCoAoBLAgQgKB9hgBGIgMAIQhMAuh1AAIgOAAg");
	this.shape_16.setTransform(-2.9,-175.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00476B").s().p("Ap8PgIgHuiIgCAAIh5uGQASggAOgMQAYgXAagTIAQgLQBVg7B2hGIACAFIAAgFQBDgpBOgrIAAACQgPAaANA2QANA1BqA8QASAKASAIQBdAqBxAEQB/ADBQgxIANgIQBfhGAKh/QBBAdBTApIAXAJQCOA+A8BAIASAVQgEAEAMAQQAKB+ghBkQgFBAgiCzIgxFxIgZFUIAlLMQljCZlBAAQlJAAkpifg");
	this.shape_17.setTransform(-4.9,-70.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5C2E01").s().p("AHZBdQg3gEhngQQhUgPgsgMIAAgaIAAgaIAAgDQAAgbACgRQA6A6B0AAQCWAACQgmQBEgRAjgXQANAYAaAiQg7AggjARQhvA7hiAAIgXAAgAmkA9Ig1gQQh0gohTAAIh+AJQAuhDgBgCIgCgEQgZhDHTBJQAygGAaAHQAZAIgGAEIAEAKQAHASAAA+IAAABQg/AigfAAQgrAAhMgYg");
	this.shape_18.setTransform(5.9,315.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006699").s().p("AgCACQACgCADgBIAAADg");
	this.shape_19.setTransform(-9.1,234.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AvMDVQhngigJgJQgHgIAEhQIBZANQAcAHBCAYQAnANAfAAQA1AAD+h2QD0hvBWhaQgCBMgFAOQgKAUhMAxQhNAxjZBoQjZBogjAFIgJAAQgkAAhbgcgANDC1QghgFjZhoQjahnhOgyQhKgxgKgUQgGgPgChLQBWBaD0BxQD9B1A2AAQAgAAAmgPQBBgXAdgIIBZgNQAGBQgJAJQgIAJhoAhQhdAegkAAIgIgBg");
	this.shape_20.setTransform(4.9,347.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC6600").s().p("Au2CQIhcgYIACgHQAjgiA7ghQAzgdA9hSIAVgbIABgDIAagkIB+gJQBTAAB0AoIA0AQQhLBSisBUQi/BRgDAAQgkAAhAgTgAJcAdQhOg3gpgbIAWAAQBjABBvg7QAjgSA7ghQABADADADIACADQAKAOAJANQA+BVAzAeQA7AfAjAgIAAAGQi0AegdANQgIADgTAAQhUAAh3hLg");
	this.shape_21.setTransform(4.7,330.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#993300").s().p("AuHC/QhCgZgdgGIhZgOQACgGAAgGQAHhOAbglQADgCADgBIAEgHIgCAHIBcAYQBAATAkAAQADAAC/hPQCshWBLhSQBMAXAsAAQAfABA/giIAAACIAAAbIAAA2QhXBajzBuQj+B3g1AAQggAAgmgNgAIPAaQjzhvhWhbIAAgbQAsAMBTAOQBoAQA3AEQApAbBOA5QB3BJBUAAQATAAAIgBQAdgNC0geIAAgGQABACADACQAgAjAJBUIABAMIhZAOQgeAHhBAYQglAOghABQg2AAj9h3g");
	this.shape_22.setTransform(4.8,340.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333366").s().p("AiuX8IABgBIABADIgCABgACzWuQgGgCgGAAQgZhFAAhvIADhlIAGiqQA/AbAVAAQBBAABNgUQBzgcAAg3QhCgrhSg3QiRhihOh+QgNhagMjrQgoglggiTQgciNgLiXQgGhPgChXIgPDaQgFCLgcC0QgNBVgPA9IgLCZQgtA6g5BUQhcCHAAAlQAAAoAcAFQAPAFAPgFQAwAABFg2IAHAAQAAA/AEBLQANEMgBBQQgDBmgPBEQg+hUjLg4QifgrhHh8Qggg3g9icQgwh8gRhTQACgsAAgdIABghQACh6gFjiQgFjjAAjCQgBjFALjyQAKjyAAjSQAAg3ALiGQAIhSARiFQBKAcBlASQCRAXDsAAQCKATCAgfQBNgRCUgzQAkgICRgbQAkgLAggPQAoFtAsH9QAzJOACCbQAACeA2JFQAOCDAJBnQgOA9gUA0QgxB7hZBLQh5BkitAAQhCAAhJgPg");
	this.shape_23.setTransform(3.6,157.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1A1A33").s().p("ADJYXQgNgOgJgPQgNgUgKgbQAGAAAGACQELA1CmiKQBZhMAxh6QAUg0AOg9IAKBxQAXD6ACAkQACAaglAZQgkAXhEASQiQAniVAAQh1AAg6g8gAjgYYQgbgHgyAGQnThJAZBDIgJABQgvgPAAgaQAAgfgGABQgHAAANldQAJkHACiFQARBUAwB7QA9CdAgA3QBHB8CfAqQDLA5A+BUQgQBGggAfIgBgDQgLAGgKAEQAFgEgYgIgACMQIIAAgjQAEjHgdh/QgDgNgCgYQBOB+CRBhQBSA4BCArQAAA3hzAcQhNAUhBAAQgVgBg/gagAkfNeQgcgGAAgnQAAglBciHQA5hUAtg6IgIBcQgHBRADB+QgFACgCAEQhFA2gwAAQgHACgIAAQgIAAgHgCgAi11SQjsAAiRgYQhlgRhKgcQALhVAQhmITnAAIAOBzQggAPgkALQiRAagkAJQiUAyhNARQhRAUhSAAQgzAAg0gHg");
	this.shape_24.setTransform(4.7,154.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A07001").s().p("AgVDsQgFgWAHgfQARhFgEhbQgDgogNgvQgRg9gfgGQgJgBgHACIABAAQAPCagPAFQgNADgFgEIAAgCQgDgCgOgDIgGgGQgRgTgKgcQgJgbgEgiQgHgvANg4IAHgaQAEgFAEgDQAPgLAbAAQARAAAJACQAAAVAEgCQAMgFAOAQIAIAKIAbAwIAMAdQAJAUAGAEIAJAFQA9A5AcAAQAiAAAJg2IAIg/IAGByQgBBughA7QghBRguAMIgzAMIgZAHQgCgCAAgEg");
	this.shape_25.setTransform(74.1,65.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC9900").s().p("AgIJpIgJgFQgFgFgMgTIgMgeIgbgvIgIgKQgNgRgNAGQgDACAAgVQgJgCgSAAQgaAAgPALQgFADgDAEQAGgXAIgXQAGgNAKgNIAIAFIABAAQCeBUBzg7IAFBwIgIA+QgKA3giAAQgcAAg7g5gACjqJQANgMAIgMQAEBSgBBlQgLhbgNhEg");
	this.shape_26.setTransform(77.4,-6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003754").s().p("Ah/PXIgBAAIgIgFIgDgBIgTgJIgUgOQgSgNgSgJIAGrmQgujZgBk1QgCk0CXmDQBsCdA5DtQA2DSA3EKIAMBAIADAKQANBFALBZQAeDpAMF3IAIDfQgPAVgPARIgGAIIgIAKQgJAHgJAKIgVAQQgOAKgOAHQgwAYg3AAQhMAAhegxg");
	this.shape_27.setTransform(75.4,-62.3);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.instance_1,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113.8,-344.4,227.7,715.7);


(lib.Interpolação3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Interpolação2("synched",0);
	this.instance.setTransform(82.5,129.3);

	this.text = new cjs.Text("e", "39px 'Trebuchet MS'");
	this.text.lineHeight = 39;
	this.text.setTransform(-187.3,-182.8,0.744,0.756);

	this.text_1 = new cjs.Text("d", "39px 'Trebuchet MS'");
	this.text_1.lineHeight = 39;
	this.text_1.setTransform(-203.6,-182.8,0.744,0.756);

	this.text_2 = new cjs.Text("a", "39px 'Trebuchet MS'");
	this.text_2.lineHeight = 39;
	this.text_2.setTransform(-218.8,-182.8,0.744,0.756);

	this.text_3 = new cjs.Text("d", "39px 'Trebuchet MS'");
	this.text_3.lineHeight = 39;
	this.text_3.setTransform(-235,-182.8,0.744,0.756);

	this.text_4 = new cjs.Text("i", "39px 'Trebuchet MS'");
	this.text_4.lineHeight = 39;
	this.text_4.setTransform(-243.1,-182.8,0.744,0.756);

	this.text_5 = new cjs.Text("s", "39px 'Trebuchet MS'");
	this.text_5.lineHeight = 39;
	this.text_5.setTransform(-255.1,-182.8,0.744,0.756);

	this.text_6 = new cjs.Text("r", "39px 'Trebuchet MS'");
	this.text_6.lineHeight = 39;
	this.text_6.setTransform(-266.3,-182.8,0.744,0.756);

	this.text_7 = new cjs.Text("e", "39px 'Trebuchet MS'");
	this.text_7.lineHeight = 39;
	this.text_7.setTransform(-282.2,-182.8,0.744,0.756);

	this.text_8 = new cjs.Text("v", "39px 'Trebuchet MS'");
	this.text_8.lineHeight = 39;
	this.text_8.setTransform(-296.4,-182.8,0.744,0.756);

	this.text_9 = new cjs.Text("i", "39px 'Trebuchet MS'");
	this.text_9.lineHeight = 39;
	this.text_9.setTransform(-304.6,-182.8,0.744,0.756);

	this.text_10 = new cjs.Text("n", "39px 'Trebuchet MS'");
	this.text_10.lineHeight = 39;
	this.text_10.setTransform(-320.3,-182.8,0.744,0.756);

	this.text_11 = new cjs.Text("U", "39px 'Trebuchet MS'");
	this.text_11.lineHeight = 39;
	this.text_11.setTransform(-339.3,-182.8,0.744,0.756);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AzdiSMAm7AAAIAAElMgm7AAAg");
	this.shape.setTransform(-216,-164.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AzdCTIAAklMAm7AAAIAAElg");
	this.shape_1.setTransform(-216,-164.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AJmJpIIfpTIAABwIofIngAyEJNIIgpVIAABpIogJEgAASDWIJFnQIAAFQIpFGRgAJmFpIIfsBIAACmIofKegAyEgYIIgo5IAADcIogJGgApHCOIJFpFIAABSIpFIqgApHiXIJFoVIAABpIpFHqg");
	this.shape_2.setTransform(-215.3,-62.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99CCCC").s().p("AJmNKIAAi5IIfooIAALhgAASNKIAAmAIJFmQIAAMQgApHNKIAAqiIJFoqIAATMgAyENKIAAjCIIgpEIAAMGgAJmGQIIfqfIAAELIofJRgAyEC1IIgpGIAAFsIogJWgAJmtJIIfAAIAAGVIofMAgAAStJIJFAAIAAIyIpFHQgApHh2IJFnpIAACLIpFJFgAyEtJIIgAAIAADbIogI5gApHtJIJFAAIAACAIpFIVg");
	this.shape_3.setTransform(-215.3,-60);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#698E8E").s().p("AJXNKIAAsQIAAlRIAAoyIAOAAIAASVIAABEIAAC9IAABEIAAC5gAgCNKIAAzMIAAhSIAAiLIAAhqIAAiAIAUAAIAAQCIAAERIAAGAgApkNKIAAsGIAAhpIAAlsIAAjdIAAjbIAdAAIAAKVIAAA+IAADnIAAA3IAAKig");
	this.shape_4.setTransform(-215.2,-60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("AxqtUMAm0AAAIAAcGMgm0AAAgA1JOMIAA89");
	this.shape_5.setTransform(-227.4,-66);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AyENKIAA6TMAkJAAAIAAaTg");
	this.shape_6.setTransform(-218.8,-59.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AzZODIAA8GMAmzAAAIAAcGgAyeNaMAkJAAAIAA6UMgkJAAAg");
	this.shape_7.setTransform(-216.2,-61.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AOLcCIAAkvIAA8GIAAgaMgmzAAAIAAAaIAAcGIAAEvIjfAAIAAlUIAA89IAA1yMA4PAAAMAAAA4Dg");
	this.shape_8.setTransform(-182.7,-120.5);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text_11,this.text_10,this.text_9,this.text_8,this.text_7,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-371.7,-300,743.4,542.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;