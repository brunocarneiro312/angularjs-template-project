// Import das dependências externas
import 'jquery';
import 'angular';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import 'font-awesome/css/font-awesome.css';

// Import das dependências internas
import App       from './module/app.module';
import IndexHome from './home/index';

// Declarando módulo principal da aplicação
const moduleName = App().name;

// Inicializando módulos
IndexHome(moduleName);