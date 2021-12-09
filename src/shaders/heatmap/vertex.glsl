varying vec3 vPosition;
uniform sampler2D texture1;
varying vec2 vUv;
void main() {
    vUv = uv;
    vPosition = position;
    vPosition.z += (1.0 - texture2D(texture1, uv).g)*0.1;
    vec4 modelPosition = modelMatrix * vec4(vPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    
}