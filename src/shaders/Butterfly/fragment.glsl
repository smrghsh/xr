varying vec3 vP;
varying vec2 vUv;
uniform sampler2D texture1;
uniform float uTime;
varying float d;
vec3 pal( float t, vec3 a, vec3 b, vec3 c, vec3 d )
{
    return a + b*cos( 6.28318*(c*t+d) );
}

void main() {
    vec3 color = pal(d *0.001,vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(1.0,1.0,1.0),vec3(0.0,0.33,0.67));
    // gl_FragColor = vec4(sin(vP.x)+0.2,sin(vP.y)+0.2,1.0,1.0);
    // gl_FragColor = vec4(color,1.0);
    // set the fragcolor to be the texture color
    vec4 texColor = texture2D(texture1, vUv);
    float o = texColor.r;
    if ( texColor.a < 0.5 ) discard;
    gl_FragColor = vec4(texColor.rgb, texColor.a );

    // gl_FragColor = vec4(1.0);
}