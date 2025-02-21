import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-18';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

configure({ adapter: new Adapter() });
