
import { shallow } from 'enzyme';
import  Notify from './Notifications';

describe('<Notify />', () => {

    const wrapper = shallow(<Notify />);

    it('must render 1 <Notify /> component without crashing', () => {
        expect(wrapper.exists());
    });
    it('must render 3 list elements', () => {
        expect(wrapper.find('li')).toHaveLength(3);
    });
    it('Must have 1 <p> element', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    });
    it('must render <p> element with text: Here is the list of notifications', () => {
        expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
    });
});
