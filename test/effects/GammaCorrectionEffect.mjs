import test from "ava";
import { GammaCorrectionEffect } from "postprocessing/module";

test("can be created and destroyed", t => {

	const object = new GammaCorrectionEffect();
	object.dispose();

	t.pass();

});
