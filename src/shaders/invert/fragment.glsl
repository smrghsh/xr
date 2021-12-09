varying vec3 vPosition;
varying vec2 vUv;
uniform sampler2D texture1;
void main() {
    vec3 color = 1.0 - texture2D(texture1, vUv).rgb;
    
    gl_FragColor = vec4(color,color.r);
}