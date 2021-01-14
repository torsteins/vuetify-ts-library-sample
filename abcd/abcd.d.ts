import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const Abcd: { install: InstallFunction };
export default Abcd;

export const TestComp: VueConstructor<Vue>;
