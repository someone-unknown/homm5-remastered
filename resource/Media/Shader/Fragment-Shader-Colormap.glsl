uniform sampler2D colorRamp;
uniform sampler2D heightMap;

varying vec2 vUv;

void main( void ) {

    float v = texture2D( heightMap, vUv ).x;

    vec3 color = texture2D( colorRamp, vec2( v, 0.0 ) ).xyz;

    gl_FragColor = vec4( color, 1.0 );

}