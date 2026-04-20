
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const geometry = new THREE.BoxGeometry(1,1,1);
const texture = new THREE.TextureLoader().load('image.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture, wireframe: true })
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5; //This moves the camera away from objects so you can see them

const canvas = document.querySelector('#draw')
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(window.innerWidth,window.innerHeight);





function animate(){
    window.requestAnimationFrame(animate);// a fast recursive call  (acc to fps of your system) changes the rotation very fast , that creates a visual of motion
  
    renderer.render(scene,camera);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01
}
animate()