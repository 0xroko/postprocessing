#ifdef TEXTURE_PRECISION_HIGH

	uniform mediump sampler2D map;

#else

	uniform lowp sampler2D map;

#endif

varying vec2 vUv2;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {

	vec4 texel = texelToLinear(texture2D(map, vUv2));
	outputColor = TEXEL;

}
