
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color :0x00ff00 , wireframe:true})
const cube = new THREE.Mesh(geometry,material);
scene.add(cube);
camera.position.z = 5; //This moves the camera away from objects so you can see them

const canvas = document.querySelector('#draw')
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(window.innerWidth,window.innerHeight);

// Making our Scene resposive , whenever window size will resize this event will listen and update the matrix
window.addEventListener('resize',()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

//----------> orbit controls 
// const controls = new OrbitControls(camera,renderer.domElement);
// controls.enableDamping = true; // make s the orbit control smooth
// controls.enableZoom = true;
// controls.autoRotate = 0.2 ; //true 

function animate(){
    window.requestAnimationFrame(animate);// a fast recursive call  (acc to fps of your system) changes the rotation very fast , that creates a visual of motion
    // controls.update()
    renderer.render(scene,camera);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01
}
animate()