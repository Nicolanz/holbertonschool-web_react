
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {

    const wrapper = shallow(<App />);

    it('must render 1 <App /> component without crashing', () => {
        expect(wrapper.exists());
    });
    it('must have 1 div with class App-header', () => {
        expect(wrapper.find('div.App-header')).toHaveLength(1);
    });
    it('must have 1 div with class App-body', () => {
        expect(wrapper.find('div.App-body')).toHaveLength(1);
    });
    it('must have 1 div with class App-footer', () => {
        expect(wrapper.find('div.App-footer')).toHaveLength(1);
    });
});
