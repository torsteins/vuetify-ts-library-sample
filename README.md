# vuetify-ts-library-sample

A sample library (`abcd`) that contains a simple Vue component `TestComp.vue` which relies on an external Vuetify instance owned by a consuming app (e.g. `vuetify-consumer`). The Vuetify instance and its theme should be instantiated by the consuming app before the component is imported.

#### Instructions:
First, prepare the library:
 ```
 cd abcd
 npm install
 npm run build
 npm pack
 ```
 Second, prepare and view the consumer:
 ```
 cd ../vuetify-consumer
 npm install
 npm run serve
 ```
