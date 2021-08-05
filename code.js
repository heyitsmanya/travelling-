var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["536e80cc-1e25-4acd-b6e9-d6ff1c771ba5","62e9dc0e-8b1e-4a4c-8fb3-dca1035a9fcc","9b495706-6504-4711-ae08-ab76e4d97660","22d12e72-86a3-45e9-a363-535f05d55cfd","1a41765a-5c17-4025-81e0-8ffd1bd5b995","571e90f2-9585-4b55-8c2a-37d754f23529"],"propsByKey":{"536e80cc-1e25-4acd-b6e9-d6ff1c771ba5":{"name":"UFO2","sourceUrl":null,"frameSize":{"x":75,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"e4Alrib0zqdYEwsBCuhcr02C6kq9ImnK","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":47},"rootRelativePath":"assets/536e80cc-1e25-4acd-b6e9-d6ff1c771ba5.png"},"62e9dc0e-8b1e-4a4c-8fb3-dca1035a9fcc":{"name":"UFO3","sourceUrl":null,"frameSize":{"x":75,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"RvrCmIH3FvfkLDq_UHqwZ83OeCrh6rYn","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":47},"rootRelativePath":"assets/62e9dc0e-8b1e-4a4c-8fb3-dca1035a9fcc.png"},"9b495706-6504-4711-ae08-ab76e4d97660":{"name":"UFO1","sourceUrl":null,"frameSize":{"x":75,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"ckk98o3CMHL9mHSXLc6pTLDqUd3ukIqE","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":47},"rootRelativePath":"assets/9b495706-6504-4711-ae08-ab76e4d97660.png"},"22d12e72-86a3-45e9-a363-535f05d55cfd":{"name":"space","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"jmZi88UmvVkx8J0J3NW07CKJ.Sm9iRMt","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/22d12e72-86a3-45e9-a363-535f05d55cfd.png"},"1a41765a-5c17-4025-81e0-8ffd1bd5b995":{"name":"astronaut","sourceUrl":null,"frameSize":{"x":55,"y":115},"frameCount":1,"looping":true,"frameDelay":12,"version":"obYWj1GfSnMhQcM1hRVKVB4KTBAEtfXl","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":55,"y":115},"rootRelativePath":"assets/1a41765a-5c17-4025-81e0-8ffd1bd5b995.png"},"571e90f2-9585-4b55-8c2a-37d754f23529":{"name":"moon","sourceUrl":null,"frameSize":{"x":165,"y":135},"frameCount":1,"looping":true,"frameDelay":12,"version":"lyJ6bG5aaRFpdthNfY.TTN_qUj4qODF6","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":165,"y":135},"rootRelativePath":"assets/571e90f2-9585-4b55-8c2a-37d754f23529.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var space=createSprite(200,200);
space.setAnimation("space");

var astronaut=createSprite(200,350);
astronaut.setAnimation("astronaut");
astronaut.scale=.9;

var UFO1=createSprite(200,105);
UFO1.setAnimation("UFO1");
UFO1.scale=.6;

var UFO2=createSprite(200,180);
UFO2.setAnimation("UFO2");
UFO2.scale=.6;

var UFO3=createSprite(200,240);
UFO3.setAnimation("UFO3");
UFO3.scale=.6;
var moon=createSprite(200,0);
moon.setAnimation("moon");

    UFO1.velocityX=-4;
    UFO2.velocityX=4;
    UFO3.velocityX=-4;
  
  function draw() {
  background("black");
  drawSprites();
  createEdgeSprites();
  
  astronaut.velocityX=0;
  astronaut.velocityY=0;
 
  UFO1.bounceOff(edges);
  UFO2.bounceOff(edges);
  UFO3.bounceOff(edges);
  astronaut.bounceOff(edges);
  
  if (keyDown(UP_ARROW)) {
    astronaut.velocityY=-5;
  }
  if (keyDown(DOWN_ARROW)) {
    astronaut.velocityY=5;
  }
  if (keyDown(LEFT_ARROW)) {
    astronaut.velocityX=-5;
  }
  if (keyDown(RIGHT_ARROW)) {
    astronaut.velocityX=5;
  }
  
  if (astronaut.isTouching(UFO1)||astronaut.isTouching(UFO2)||astronaut.isTouching(UFO3)
  ){
    astronaut.x=200;
    astronaut.y=340;
  }
  if (astronaut.isTouching(moon)) {
    textSize(20);
    fill("white");
    text("you succeeded!",140,200);
  }
  
}
  









// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
