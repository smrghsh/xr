varying vec3 vPosition;
varying vec2 vUv;
uniform sampler2D texture1;
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos( 6.28318*(c*t+d) );
}

void main() {
    vec3 OG = texture2D(texture1, vUv).rgb;
    float strength = (OG.r + OG.g + OG.b)/3.0;
    // strength = 0.8 + strength *0.2;
    vec3 color = palette(strength,vec3(0.5),vec3(0.5),vec3(1.0),vec3(0.,0.33,.67));
    // color += (OG.r - OG.g - OG.b);
    gl_FragColor = vec4(color,color.r);
}