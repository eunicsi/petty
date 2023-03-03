import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
	test('test render', () => {
		const SidebarWithTranslation = withTranslation()(Sidebar);
		renderWithTranslation(<SidebarWithTranslation />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('test toggle', () => {
		renderWithTranslation(<Sidebar />);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
