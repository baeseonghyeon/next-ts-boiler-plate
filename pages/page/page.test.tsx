import { render } from '@testing-library/react';
import Page from '.';

describe('Page', () => {
    it('스냅샷 테스트', () => {
        const utils = render(<Page />);
        expect(utils.container).toMatchSnapshot();
    });

    it('엘리먼트 테스트', () => {
        const utils = render(<Page />);
        const list = utils.getByTestId('list');

        utils.getByText('Page');

        expect(list.firstChild?.nodeName).toEqual('LI');
    });
});
