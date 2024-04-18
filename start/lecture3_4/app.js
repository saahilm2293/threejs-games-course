import * as THREE from '../../libs/three126/three.module.js';
import { OrbitControls } from '../../libs/three126/OrbitControls.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );
        
		this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 100 );
		this.camera.position.set( 0, 0, 4 );
        
		this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xaaaaaa );
			
		this.renderer = new THREE.WebGLRenderer({ antialias: true } );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		container.appendChild( this.renderer.domElement );

		// Creating a box geometry
		const geometry = new THREE.BoxBufferGeometry();
		// Creating a standard material with color
		const material = new THREE.MeshStandardMaterial ( { color: 0xFF0000 });

		// Creating a mesh with the geometry and material
		this.mesh = new THREE.Mesh( geometry, material );
		this.scene.add(this.mesh); // Adding the mesh to the scene
		       
        this.renderer.setAnimationLoop(this.render.bind(this));
    
        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){

    }
    
	render( ) {   
		this.renderer.render( this.scene, this.camera );
    }
}

export { App };