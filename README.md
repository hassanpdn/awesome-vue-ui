# Awesome UI components using Tailwind for Vue3

<p align="center" style="text-align:center;">
      <a href="https://www.npmjs.com/package/awesome-vue-ui">
            <img alt="awesome-vue-ui" src="/NPM_Final.svg" width="500" />
      </a>
</p>

## Requirements

- [Vue.js](https://github.com/vuejs/vue) `^3.0.0`

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Contributions

All contributions are welcomed. Help me to enrich this repository.

If you find any **bugs** in the examples, please file an issue.

### TODO

- [ ] Add modal component

## Installation

```shell
$ npm install awesome-vue-ui
// OR
$ yarn add awesome-vue-ui
```

```js
// After installation be sure to add these two files to main.js file so you can use components globally:
import { createApp } from 'vue';
import VueUI from "awesome-vue-ui"
import "awesome-vue-ui/dist/style.css";

createApp(App)
.use(VueUI)
.mount('#app');
```

## Usage

```html
      <VAlert 
            variant="Success"
            message="Your try was successful!"
            close_able
            size="md"
            rounded
            center
            :value="showAlert"
            @input="showAlert = false">
      </VAlert>
```

```js
// In data property add:
 data(){
      return {
            showAlert: false
      }
},
```

## Default values of props
| Property             | Type          | Default value   |
| -------------------- |:-------------:| ---------------:|
| Alert Component----- |:-------------:| ---------------:|
| title                | boolean       | true            |
| message              | string        | 'No message'    |
| variant              | string        | 'Success'       |
| close_able           | boolean       | true            |
| size                 | string        | 'md'            |
| rounded              | boolean       | true            |
| value                | boolean       | false           |
| -------------------- |:-------------:| ---------------:|
| Button Component---- |:-------------:| ---------------:|
| bgColor              | string        | 'bg-green-500'  |
| textColor            | string        | 'bg-black-500'  |