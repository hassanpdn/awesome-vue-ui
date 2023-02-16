import './tailwind.css'
import * as components from './components';
const componentsList = components?.default;

const VComponents = {
      install(Vue) {
            Object.keys(componentsList).forEach(name => {
                  Vue.component(name, componentsList[name])
            })
      }
}

export default VComponents;