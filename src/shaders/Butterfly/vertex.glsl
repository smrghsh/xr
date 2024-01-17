
#define PI     3.14159265
#define TWO_PI 6.28318530

uniform float uTime;
varying vec3 vP;
varying vec2 vUv;
attribute float displacement;
varying float d;
// attribute called ordinate that is a float
float rand(vec2 co){
	return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

// uniform float displ_amnt = 0.8;
// uniform float displ_speed = 20.0;

void main() {         
    vUv = uv;   
    d = displacement;                                                                                                                                                                              
    vec3 p = vec3(position);
    // p.x = displacement;
    // modelPosition.y += 2.0 * abs(modelPosition.x) * sin(uTime*100.);
    // instead do p
    p.z += 1.4 * abs(p.x) * sin((uTime)*100.*(1.0 + 0.5*rand(vec2(d,0.))) - displacement);
    // p.z = p.x * sin(uTime*0.5);
     vec4 modelPosition = modelMatrix * vec4(p, 1.0);
    //  modelPosition.y += 2.0 * abs(modelPosition.x) * sin(uTime*100.);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    vP = position;
    gl_Position = projectedPosition;
}