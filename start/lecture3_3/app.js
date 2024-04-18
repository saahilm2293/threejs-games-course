import * as THREE from '../../libs/three126/three.module.js';
import { OrbitControls } from '../../libs/three126/OrbitControls.js';

class App{
	constructor(){
		// Creating a container element to hold the WebGL scene
		const container = document.createElement( 'div' );
		document.body.appendChild( container );

        // To create a new camera
		this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight,0.1,100); //Parmeter 1 -Field of view, 2- Aspect Ratio width devided by hight,3 - near value, 4 - Far Value
		this.camera.position.set (0,0,4);

		// Creating a new scene
		this.scene = new THREE.Scene(); 
		this.scene.background = new THREE.Color (0xaaaaaa); // Background Colour

		//To add an ambient Light
		const ambient = new THREE.HemisphereLight ( 0xFFFFFF, 0xBBBBFF,0.3 );
		this.scene.add(ambient);

		//Directional Light
		const light = new THREE.DirectionalLight();
		light.position.set (0.2,1,1);
		this.scene.add (light);

        // Setting up WebGL renderer with antialiasing
		this.renderer = new THREE.WebGLRenderer({ antialias : true});
		// To aoid bluring on ratina screens
		this.renderer.setPixelRatio( window.devicePixelRatio);
		// To set the renderer to the full size of the window 
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		// to render the scene repeatedly, so the camera can see when the objects move
		container.appendChild(this.renderer.domElement);

		// Creating a box geometry
		const geometry = new THREE.BoxBufferGeometry();

		// Creating a standard material with color
		const material = new THREE.MeshStandardMaterial ( { color: 0xFF0000 });

		// Creating a mesh with the geometry and material
		this.mesh = new THREE.Mesh( geometry, material );
		this.scene.add(this.mesh); // Adding the mesh to the scene

		//To add a orbit camera to the object
		const controls = new OrbitControls( this.camera, this.renderer.domElement);

        // Setting up animation loop for rendering
		this.renderer.setAnimationLoop ( this.render.bind(this) );
		// Handling window resize event
        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){
		
		//For maintaning Aspect Ratio
		this.camera.aspect = window.innerWidth / window.innerHeight;
		//this.camera.updateProjectionMatrix();
		this.renderer.setSize( window.innerWidth ,window.innerHeight );
		

    }
    
	render( ) {   
		// To rotatr the box
		this.mesh.rotateX (0.01);
		// To render the scene, taking scene as parameter 1 and the camera as the parameter 2
		this.renderer.render ( this.scene, this.camera); 
    }
}

export { App };